import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const articleSlice = createSlice({
    name:'articles',
    initialState: {value:initialState},
    reducers:{
        getArticles:(state,action) =>{
            state.value = action.payload
        }
    }
});

export const fetchArticles = (sources,querySearch) => async dispatch =>{
    let res;
    if(!sources !== undefined){
        res = await fetch(`https://news-proxy.netlify.app/api/top-headlines?sources=${sources}&apiKey=bfb30e19d31b4c6ea96abb07bf3ae5a1`);
    }else if(querySearch !== ''){
        res = await fetch(`https://newsapi.org/v2/everything?q=${querySearch}&pageSize=12&apiKey=bfb30e19d31b4c6ea96abb07bf3ae5a1`);
    }else{
        res = await fetch('https://news-proxy.netlify.app/api/top-headlines?country=us&pageSize=12&apiKey=bfb30e19d31b4c6ea96abb07bf3ae5a1')
    }
    const {articles} = await res.json()
    dispatch(getArticles(articles))
}

export const {getArticles} = articleSlice.actions;
export default articleSlice.reducer