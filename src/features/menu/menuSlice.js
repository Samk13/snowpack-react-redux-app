import { createSlice } from '@reduxjs/toolkit'

export const menuSLice = createSlice({
  name: 'menu',
  initialState: {
    open: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open
    },
  },
})

export const menuStatus = (state) => state.menu.open

export const { toggleMenu } = menuSLice.actions
export default menuSLice.reducer
