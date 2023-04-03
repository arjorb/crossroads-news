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
    !sources ? res = await fetch('https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=1e3fa6a72a3847758e4b09ebf595164f') : res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=1e3fa6a72a3847758e4b09ebf595164f`);
    const {articles} = await res.json()
    dispatch(getArticles(articles))
}

export const {getArticles} = articleSlice.actions;
export default articleSlice.reducer