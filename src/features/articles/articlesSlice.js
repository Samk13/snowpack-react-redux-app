import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'

const articleInitialState = [
  {
    id: `article_${uuid()}`,
    createdAt: new Date().toISOString(),
    lastEdited: '',
    author: 'Sam',
    imgUrl: 'https://picsum.photos/300/300',
    body:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Learjet sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Lauds PageMaker including versions of Lorem Ipsum.',
    seen: true,
  },
]

export const articleSlice = createSlice({
  name: 'articles',
  initialState: articleInitialState,
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        state.push(payload)
      },
      prepare: ({ body, author }) => ({
        payload: {
          id: `article_${uuid()}`,
          createdAt: new Date().toISOString(),
          imgUrl: 'https://picsum.photos/200/300',
          lastEdited: '',
          body,
          author,
          seen: false,
        },
      }),
    },
    edit: (state, action) => {
      const articleEdit = state.find(
        (article) => article.id === action.payload.id
      )
      if (articleEdit) {
        articleEdit.body = action.payload.body
        articleEdit.author = action.payload.author
        articleEdit.lastEdited = new Date().toDateString()
      }
    },
    remove: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload)
    },
    toggleSeen: (state, action) => {
      const getSelectedArticle = state.find(
        (article) => article.id === action.payload
      )
      if (getSelectedArticle) {
        getSelectedArticle.seen = !getSelectedArticle.seen
      }
    },
  },
})

export const { create, edit, remove, toggleSeen } = articleSlice.actions
export const getArticles = ({ articles }) => articles
export default articleSlice.reducer
