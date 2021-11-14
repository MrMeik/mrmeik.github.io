import { configureStore } from '@reduxjs/toolkit'
import topLevelReducer from './topLevelSlice'

export const store = configureStore({
  reducer: {
    topLevel: topLevelReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch