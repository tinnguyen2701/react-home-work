import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BasePathUrl } from '../utils/constants'


export const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({ baseUrl: BasePathUrl}),
    endpoints: (builder) => ({
        getAllStudentByClassId: builder.query({
            query: (classId) => `students?classId=${classId}`,
            transformResponse: (response: any) => response.data
        }),
        
    })

})

export const { useGetAllStudentByClassIdQuery, usePrefetch } = studentApi