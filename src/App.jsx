import {Routes,Route,useLocation} from "react-router-dom";
import './App.css'
import Home from "./routes/Home/Home"
import Like from "./routes/Like/Like"
import PlayList from "./routes/PlayList/PlayList"
import LeftSidebar from "./components/leftSidebar/LeftSidebar"
import RightSidebar from "./components/rightSidebar/RightSidebar";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import AudioPlay from "./components/AudioPlay/AudioPlay";

const  CLIENT_ID ="9d21f0aafd1049d6944bd318789208ba";
const CLIENT_SECRET="fc28f43c400549d5bd0474eabd85e1d2";
const ACCESS_TOKEN =localStorage.getItem("access_token")


function App() {
  const location =useLocation()
 const  m =useSelector(state=>state.LikedSongs)

  const [data ,setData] =useState([])
useEffect(()=>{

  const getToken = async ()=>{
    try {
      const repsonse = await fetch ( "https://accounts.spotify.com/api/token", {
        method:"POST",
        headers: {
          "Content-Type" : "application/x-www-form-urlencoded",
          "Authorization":`Basic ${ btoa( CLIENT_ID + ":" + CLIENT_SECRET )}`
        },
        body: "grant_type=client_credentials"
      }
      );

      const auth =await  repsonse.json();
      localStorage.setItem("access_token", `${auth.token_type}   ${auth.access_token} `);
    }
    catch (err){
      console.log(err)
    }

  }

  getToken()
},[])




useEffect(()=>{
const getPlaylists =  ()=>{
fetch("https://api.spotify.com/v1/browse/featured-playlists",{

    headers:{
      "Content-Type" : 'application/json ',
      "Authorization": ACCESS_TOKEN
    }
    })
  .then(response =>response.json())
  .then(data=>setData(data.playlists.items))

  
  .catch(err=>
    console.log(err))
  }

getPlaylists()

},[])


 

  return (
    <>
      <div  className={location.pathname.includes("/playlist")  ?  "react__app" : location.pathname.includes("/like")  ?  "like-app" :  "app"    } >  
      <LeftSidebar data={data}  />
      <Routes>
      
        <Route path="/" element={<Home data={data}  />}   />
        <Route  path="/like"  element={<Like/>}  />
        <Route path="/playlist/:id"  element={<PlayList/>}  />
      </Routes>
      <RightSidebar/>
      
     <div     className="audio-play" >    <AudioPlay    />   </div>
       </div>
       
    </>
  )
}

export default App
