import { combineReducers, configureStore, getDefaultMiddleware, PreloadedState } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { classApi } from "./services/classApi";
import { studentApi } from "./services/studentApi";
import { userApi } from "./services/userApi";
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
    [classApi.reducerPath]: classApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            classApi.middleware, 
            studentApi.middleware,
            userApi.middleware,
            authApi.middleware), 
        preloadedState
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

