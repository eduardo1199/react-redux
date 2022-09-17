import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://api.github.com/users' || 'no-url-api';

interface User {
  id: string;
  login: string;
  avatar_url: string;
  node_id: string;
  name: string;
  createAt: string;
};

export const apiSlice = createApi({
  reducerPath: 'api-users',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query<User, number | void> ({
        query(login = 1) {
          return `/${login}`;
        }
      }),
      fetchUsers: builder.query<User[], string | void> ({
        query(login) {
          return '';
        }
      })
    }
  }
});

export const { useFetchUserQuery, useFetchUsersQuery } = apiSlice;
