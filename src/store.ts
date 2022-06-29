import { combineReducers, configureStore, getDefaultMiddleware, PreloadedState } from "@reduxjs/toolkit";
import { classApi } from "./services/classApi";
import { studentApi } from "./services/studentApi";
// import counterReducer from "../features/counter/counterSlice"

const rootReducer = combineReducers({
    // counter: counterReducer,
    [classApi.reducerPath]: classApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            classApi.middleware, 
            studentApi.middleware), 
        preloadedState
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

