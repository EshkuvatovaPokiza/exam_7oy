import { createSlice } from '@reduxjs/toolkit'



const initialState  = {
     musicState:false, 
    oneSong:{}
   
  }

 const AudioSlice = createSlice({
  name: 'audio',
 initialState,
  reducers: {
    SendAudio: (state,action) => {
     
      state.oneSong=action.payload
      state.musicState=true
      console.log(state)
      console.log(action)
       
    },

   PlayAudio:(state)=>{
    
    state.musicState=true;
    
    
   },
   PauseAudio :(state) =>{
    state.musicState=false;
   
   
   }

  
  },
})





export const {PlayAudio,SendAudio,PauseAudio } = AudioSlice.actions

export default AudioSlice.reducer