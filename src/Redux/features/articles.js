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
        }
    }
});

export const fetchArticles = (sources) => async dispatch =>{
    dispatch(updateLoading(true));
    let res;
    !sources ? res = await fetch('https://news-proxy.netlify.app/api/top-headlines?country=us&pageSize=12&apiKey=bfb30e19d31b4c6ea96abb07bf3ae5a1') :res = await fetch(`https://news-proxy.netlify.app/api/top-headlines?sources=${sources}&apiKey=bfb30e19d31b4c6ea96abb07bf3ae5a1`);
    const {articles} = await res.json()
    dispatch(getArticles(articles))
    dispatch(updateLoading(false));
}

export const {getArticles,updateLoading} = articleSlice.actions;
export default articleSlice.reducer