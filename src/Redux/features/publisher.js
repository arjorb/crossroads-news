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
    const res = await fetch('https://news-proxy.netlify.app/api/top-headlines/sources?apiKey=a3442c35ad9f410e8cc26771ebc4c729');
    const {sources} = await res.json();
    dispatch(getPublishers(sources));
}
export default PublisherSlice.reducer