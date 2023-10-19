import { configureStore } from '@reduxjs/toolkit'
import likeReducer from '../redux/likeReducer'
import AudioPlayReducer from './AudioPlayReducer'

const store = configureStore({
  reducer:{
    like:likeReducer ,
    audio: AudioPlayReducer
  },
})

export default store