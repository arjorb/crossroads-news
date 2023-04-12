import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = { articles:[],loading:true};
const {VITE_BASE_URL,VITE_API_KEY} = import.meta.env
export const articleSlice = createSlice({
    name:'articles',
    initialState,
    reducers:{
        getArticles:(state,action) =>{
            state.articles = action.payload
        },
        updateLoading:(state,action) =>{
            state.loading = action.payload
        }
    }
});

export const fetchArticles = (sources,searchQuery) => async dispatch =>{
    dispatch(updateLoading(true));
    let res;
    sources ? res = await fetch(`${VITE_BASE_URL}/top-headlines?sources=${sources}&apiKey=${VITE_API_KEY}`) : searchQuery ? res = await fetch(`${VITE_BASE_URL}/everything?q=${searchQuery}&pageSize=12&apiKey=${VITE_API_KEY}`) : res = await fetch(`${VITE_BASE_URL}/top-headlines?country=us&pageSize=12&apiKey=${VITE_API_KEY}`);
    const {articles} = await res.json()
    dispatch(getArticles(articles))
    dispatch(updateLoading(false));
}

export const {getArticles,updateLoading,searchArticles} = articleSlice.actions;
export default articleSlice.reducer