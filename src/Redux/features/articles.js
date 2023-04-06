import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

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
    if(sources){
        res = await fetch(`https://news-proxy.netlify.app/api/top-headlines?sources=${sources}&apiKey=a3442c35ad9f410e8cc26771ebc4c729`);
    }else if(querySearch !== ''){
        res = await fetch(`https://newsapi.org/v2/everything?q=${querySearch}&pageSize=12&apiKey=a3442c35ad9f410e8cc26771ebc4c729`);
    }else{
        res = await fetch('https://news-proxy.netlify.app/api/top-headlines?country=us&pageSize=12&apiKey=a3442c35ad9f410e8cc26771ebc4c729')
    }
    const {articles} = await res.json()
    dispatch(getArticles(articles))
}

export const {getArticles} = articleSlice.actions;
export default articleSlice.reducer