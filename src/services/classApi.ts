import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BasePathUrl } from '../utils/constants'


export const classApi = createApi({
    reducerPath: 'classApi',
    baseQuery: fetchBaseQuery({ baseUrl: BasePathUrl}),
    endpoints: (builder) => ({
        getAllClasses: builder.query({
            query: () => `classes`,
            transformResponse: (response: any) => response.data
        }),
        
    })

})

export const { useGetAllClassesQuery } = classApi