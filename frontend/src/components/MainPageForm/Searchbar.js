import React from "react";
import { useState } from "react";
import { clearSearchResults, fetchSearchResults } from "../../store/search";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './MainPageForm.css'

function SearchBar() {
    const [searchText, setSearchText] = useState()
    const [timer, setTimer] = useState(0);
    const searchResults = useSelector(state => Object.values(state.search))
    const history = useHistory();
    const dispatch = useDispatch();
    const [drop, setDrop] = useState(false);


    function open() {

        setDrop(true)
        console.log('entered')
    }

    function close() {

        setDrop(false)
        console.log('left')
    }

    function handleSearch(e) {
        const query = e.target.value

        setSearchText(query)
        clearTimeout(timer)

        if (query.trim() !== "") {
            setTimer(setTimeout(() => dispatch(fetchSearchResults(query)), 300));
        } else {
            dispatch(clearSearchResults);
            setSearchText("")
        }
    }


    function handClick(id) {

        return (e) => {
            e.preventDefault();
            history.push(`/products/${id}`)
            dispatch(clearSearchResults)
        }

    }

    function handleSubmit(e) {
        e.preventDefault();

        if (searchText.trim() !== '') {
            history.push(`/search?query=${searchText}`)
        }
    }

    function handleEnter(e) {


        if (e.key === 'Enter') {
            // console.log(e, 'you pressed enter')
            handleSubmit(e)
        }

    }


    return (
        <div id="searchbar-container">
            <input 
            type='text' 
            id='search-input' 
            value={searchText} 
            placeholder='Search the Jungle'
            onChange={handleSearch}
            onKeyDown={(e) => {handleEnter(e)}}
            onMouseEnter={open} 
            onMouseLeave={close}
            />
           
           <button id='search-button' onClick={handleSubmit} >
            <i id='mag' className="fa-solid fa-magnifying-glass" ></i> 

           </button>

           {drop ? searchText && searchResults && <ul id='search-dropdown' onMouseEnter={open} onMouseLeave={close}>
                {searchResults.map(result => { 
                    return <li className="search-dropdown-item" onClick={handClick(result.id)}>{result.productName}</li>
                })} 
                
            </ul> : null}

        </div>
    )

}


//
export default SearchBar