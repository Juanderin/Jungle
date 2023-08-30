import React from "react";
import { useEffect } from "react";
import { clearSearchResults, fetchSearchResults } from "../../store/search";
import { useLocation } from "react-router-dom";
import ProductsIndexItem from "../ProductsIndex/ProductIndexItem";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "../MainPageForm";

    function SearchShowPage () {
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search)
        const query =  searchParams.get("query")
        const searchResults = useSelector(state => Object.values(state.search))
        const dispatch = useDispatch();

        useEffect(() => {
            if (query) {
                dispatch(fetchSearchResults(query))
                dispatch(clearSearchResults)
            }
        }, [])

        return (
            <>
            <div id='search-page-container' >
             <MainPage />
                
                {searchResults.map(result => {
                return (
                
                    <>
                        <br/>
                        <br/>
                        <ProductsIndexItem product={result}/>
                    </>
                )
            })}
            </div>

        </>
        
        )

    }


export default SearchShowPage;