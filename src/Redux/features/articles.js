import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = { articles:[],loading:true};

export const articleSlice = createSlice({
    name:'articles',
    initialState,
    reducers:{
        getArticles:(state,action) =>{
            state.articles = action.payload
        },
        updateLoading:(state,action) =>{
            state.loading = action.payload
        },
        searchArticles:(state,action) =>{
            state.articles = action.payload
        }
    }
});

export const fetchArticles = (sources,searchQuery) => async dispatch =>{
    dispatch(updateLoading(true));
    let res;
    sources ? res = await fetch(`https://news-proxy.netlify.app/api/top-headlines?sources=${sources}&apiKey=021428151ced48ffb5282e25b3a98130`) : searchQuery ? res = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=12&apiKey=021428151ced48ffb5282e25b3a98130`) : res = await fetch('https://news-proxy.netlify.app/api/top-headlines?country=us&pageSize=12&apiKey=021428151ced48ffb5282e25b3a98130');
    const {articles} = await res.json()
    dispatch(getArticles(articles))
    dispatch(updateLoading(false));
}

export const {getArticles,updateLoading,searchArticles} = articleSlice.actions;
export default articleSlice.reducer