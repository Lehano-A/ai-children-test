import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers/rootReducer'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
