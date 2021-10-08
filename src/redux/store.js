import { createStore } from "redux";
import { reducerofMovie } from "./reducer";








const store =createStore(reducerofMovie,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store 