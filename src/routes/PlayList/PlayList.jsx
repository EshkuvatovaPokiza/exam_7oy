import React, { useState,useEffect } from 'react';
import classes from "./playlist.module.scss"
import { Container } from '../../utils/utils';
import { useParams } from "react-router-dom";
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';
import {BsPlayFill,BsArrowDown,BsThreeDots   ,BsSearch,BsFillCaretDownFill,BsHeart } from "react-icons/bs"
import ListOfSongs from '../../components/ListOfSongs/ListOfSongs';
;
const ACCESS_TOKEN =localStorage.getItem("access_token");


const PlayList = () => {
  const params =useParams()
  const [onePlayList,setOnePlaylIst]=useState(null)
console.log(params)
  useEffect(()=>{
    const getOnePlayList =  ()=>{
      fetch(`https://api.spotify.com/v1/playlists/${params.id}` , {
         
      headers:{
            "Content-Type" : 'application/json ',
            "Authorization": ACCESS_TOKEN
          }
          })
        .then(response =>response.json())
        .then(data =>  setOnePlaylIst(data))
      
        
        .catch(err=>
          console.log(err))
        }
      
      getOnePlayList()
  },[params.id])
console.log(onePlayList)
const image =onePlayList?.images[0]?.url
console.log(image)

  return (
    
<div className={classes.playlist} >


 
  <Container  >
  <div className={classes.arrows} >  <p><FiChevronLeft/></p>   <p><FiChevronRight/></p> </div>


<div  className={classes.playlist__wrapper}  >



<div className={classes.playlist__info}  >
   <img src={image} alt="" />
  <div className={classes.playlist__content}  >

    <strong>Public Playlist</strong>
    <h1> {onePlayList?.name?.split("").slice(0,20).join("")+ "..."} </h1>
  <div className={classes.artists__names}  >

  <h2> {onePlayList?.tracks?.items?.slice(0,2)?.map( item=>
    <span className={classes.artists__names}   key={item.id}  >

          {item?.track?.artists[0]?.name?.toLowerCase().split("").toSpliced(0  , 1 , item?.track?.artists[0]?.name?.charAt(0).toUpperCase()).join("") + "  ,  "  } 
         
    </span>

     )} 
     </h2>

  
   
   <span className={classes.more}  > and more </span>
  </div>

   <p   className={classes.madefor__you}  > Made for <span   className={classes.for}  > { onePlayList?.owner?.display_name} </span>  <span> {onePlayList?.tracks?.total} songs </span>  
   
    <span>
   {
  
   }
    
   </span>  
   
    </p> 
  </div>




</div>


<div className={classes.icons}   >

<div  className={classes.play_icons}  >   
<div className={classes.play}><BsPlayFill/></div>
<div className={classes.like}  > <BsHeart/>  </div>
<div className={classes.download}>   <BsArrowDown/>  </div>
<div className={classes.dots}  >  <BsThreeDots/>  </div>

   </div>

   <div className={classes.search__icons} >

    <BsSearch/>
    <p> <span> Custom order </span> <BsFillCaretDownFill/>    </p>
   </div>
</div>






   <ListOfSongs songs={onePlayList}   />
    

</div>
  </Container>
  </div>
  )
}

export default  PlayList