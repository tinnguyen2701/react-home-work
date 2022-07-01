import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '../slices/userSlice';
import { IGenericResponse } from '../types';
import { BasePathAPIUrl } from '../utils/constants';
import { userApi } from './userApi';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BasePathAPIUrl}/auth/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, any>({
      query(data) {
        return {
          url: 'register',
          method: 'POST',
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<{ access_token: string; status: string }, any>({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {  
        try {
          await queryFulfilled;
          // await dispatch(userApi.endpoints.getMe.initiate(null));
          // window.localStorage.setItem('user', JSON.stringify({name: "tin"}));
          // navigate("/dashboard/profile", { replace: true });
          // window.location.href = "/dashboard/settings"
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
        };
      },
      onQueryStarted(args, { dispatch, queryFulfilled }) {
        dispatch(logout());
      }
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation
} = authApi;
