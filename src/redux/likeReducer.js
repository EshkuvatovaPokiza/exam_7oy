import { createSlice } from '@reduxjs/toolkit'



const initialState  = {
    value:false,
    LikedSongs:[],
    oneSong:null,
    id:""
  }

 const LikedProductSlice = createSlice({
  name: 'like',
 initialState,
  reducers: {
    LikedProduct: (state,action) => {
   
    state.value=true;
   
      if(state.LikedSongs?.some(item => item?.track?.id===action.payload?.track?.id)){
      
    }
    else {
      state.LikedSongs.push(action.payload)
    }
    
    },
   Unlike: (state,action) => {
    state.value=false
    let Index= state.LikedSongs?.findIndex(music => music?.track?.id===action.payload?.track?.id)
   state.LikedSongs.splice(Index,1)
     

    },
  
  },
})





export const {LikedProduct, Unlike } = LikedProductSlice.actions

export default LikedProductSlice.reducer