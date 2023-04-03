import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PublisherSlice = createSlice({
    name:'publisher',
    initialState: {value:initialState},
    reducers:{
        getPublishers:(state,action) =>{
            state.value = action.payload;
        }
    }
});

export const {getPublishers} = PublisherSlice.actions;

export const fetchPublichers = () => async dispatch => {
    const res = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=1e3fa6a72a3847758e4b09ebf595164f');
    const {sources} = await res.json();
    dispatch(getPublishers(sources));
}
export default PublisherSlice.reducer