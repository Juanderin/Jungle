import React from "react";
import { useEffect } from "react";
import { clearSearchResults, fetchSearchResults } from "../../store/search";
import { useLocation } from "react-router-dom";
import ProductsIndexItem from "../ProductsIndex/ProductIndexItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import MainPage from "../MainPageForm";
import './SearchShowPage.css'
import { fetchProduct } from "../../store/products";

    function SearchShowPage () {
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search)
        const query =  searchParams.get("query")
        const searchResults = useSelector(state => Object.values(state.search))
        const products = useSelector(state => state.products)

       
        const dispatch = useDispatch();
        const times = 3;

    
        const randomCollection = []

        if (products) {

            const productValues = Object.values(products)

            for (let i = 0; i <= times; i ++) {

                let random = productValues[Math.floor(Math.random() * productValues.length)]

                if (!randomCollection.includes(random)) {
                        randomCollection.push(random)
                }

                if (randomCollection.length === times) {
                    break
                } 

            }
        }
        console.log(randomCollection, 'this is the random collection')


        useEffect(() => {
      
            if (query) {
                dispatch(fetchSearchResults(query))
                dispatch(clearSearchResults)
            }
        }, [])

        useEffect(() => {

            dispatch(fetchProducts())

        }, [])
        
        
        return (
            <>

            <div id='mainContainerSearch'>
                <div id='search-page-container' >
                <MainPage />
                

                <div id='productResultsTitle'> Results </div>
                {searchResults.length > 0 ? searchResults.map(result => {
                        return (
                        
                            <>
                                <div id='searchItems'>
                                    <ProductsIndexItem product={result}/>
                                </div>
                            </>
                        )
                    }) : 
                    <>
                    
                        <div id='noResultsContent'>
                            
                            <div id='noResultMessage'>
                                <div>Sorry, no results found</div>
                            </div>


                                <div id='randomItems'>
                                    <div id='randomItemsSubContainer'>
                                        <h2>You might be interested in</h2>
                                        <div id='actualItems'>
                                            {randomCollection && randomCollection.map((item) => {

                                                return (
                                                    <div>
                                                        <ProductsIndexItem product={item} />
                                                    </div>
                                                )

                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                    </>
                    }

                </div>
            </div>
            
        </>
        
        )

    }


export default SearchShowPage;