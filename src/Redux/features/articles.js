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

export const fetchArticles = (sources) => async dispatch =>{
    let res;
    !sources ? res = await fetch('https://news-proxy.netlify.app/api/top-headlines?country=us&pageSize=12&apiKey=f8c27ead1f7e4879b630b3f81dfbb1de') : res = await fetch(`https://news-proxy.netlify.app/api/top-headlines?sources=${sources}&apiKey=f8c27ead1f7e4879b630b3f81dfbb1de`);
    const {articles} = await res.json()
    dispatch(getArticles(articles))
}

export const {getArticles} = articleSlice.actions;
export default articleSlice.reducer