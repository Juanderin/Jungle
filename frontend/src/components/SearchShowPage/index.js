import React from "react";
import { useEffect } from "react";
import { fetchSearchResults } from "../../store/search";
import { useLocation } from "react-router-dom";
import ProductsIndexItem from "../ProductsIndex/ProductIndexItem";
import { useDispatch, useSelector } from "react-redux";

    function SearchShowPage () {
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search)
        const query =  searchParams.get("query")
        const searchResults = useSelector(state => Object.values(state.search))
        const dispatch = useDispatch();

        useEffect(() => {
            if (query) {
                dispatch(fetchSearchResults(query))
            }
        })

        return (
            <div id='search=page-container'>{searchResults.map(result => {

                return (
                    <ProductsIndexItem product={result}/>
                )
            })}
            </div>
        
        )

    }


export default SearchShowPage;