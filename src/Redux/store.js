import { configureStore } from "@reduxjs/toolkit";
import  articleReducer from './features/articles';
import  publisherReducer  from './features/publisher';


const store = configureStore({reducer:{
    article: articleReducer,
    publish:publisherReducer
}})

export default store;