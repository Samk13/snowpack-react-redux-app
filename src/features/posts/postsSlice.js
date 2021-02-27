import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async ({ limit }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    return await response.json()
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading'
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getPosts.rejected]: (state) => {
      state.status = 'failed'
    },
  },
})

export const showPosts = ({ posts }) => posts.list
export default postsSlice.reducer
