import React, { useState } from 'react';
import classes from "./listofSongs.module.scss"
import { Container } from '../../utils/utils';
import {MdOutlineWatchLater} from "react-icons/md";
import {BsHeart,BsFillHeartFill} from "react-icons/bs";
import {useDispatch,useSelector } from 'react-redux';
import { LikedProduct,Unlike } from '../../redux/likeReducer';
import { SendAudio } from '../../redux/AudioPlayReducer';

const ListOfSongs = ({songs}) => {

const data =useSelector(state=>state.like.LikedSongs)
console.log(data)
    const dispatch =useDispatch()




 
  return (
  <Container>

<div   className={classes.songs__wrapper}  >
    <table className={classes.songs__title} >
        <thead>
            <th> # </th>
            <th>TITLE  </th>
            <th>ALBUM</th>
            <th></th>
            <th><MdOutlineWatchLater/></th>
        </thead>

        <tbody>
            <tr className={classes.space}  ></tr>
           {
            songs?.tracks?.items?.map( (song ,ind) =>
                <tr key={song.track.id}    >
<td> {ind+1}  </td>
<td>  <div  className={classes.song__info}      >   
<img src={song?.track?.album?.images[2]?.url} alt="" />
<p className={classes.song__author}  onClick={()=> dispatch(SendAudio(song))}  style={{cursor:"pointer"}}   >
    <span>{song?.track?.name.toLowerCase().split("").toSpliced(0  , 1 , song?.track?.name.charAt(0).toUpperCase()).join("")}</span>
    <span> {song?.track?.album?.artists[0]?.name.toLowerCase().split("").toSpliced(0  , 1 ,song?.track?.album?.artists[0]?.name.charAt(0).toUpperCase()).join("")} </span>
</p>


 </div> </td>
<td className={classes.album__name}   >  {song?.track?.name.toLowerCase().split("").toSpliced(0  , 1 , song?.track?.name.charAt(0).toUpperCase()).join("")}  </td>
<td style={{cursor:"pointer"}}  ><div    > {data.some(item=> item?.track?.id===song?.track?.id)   ? <BsFillHeartFill  style={{color:"#63CF6C"}}   onClick={()=>dispatch(Unlike(song))}  /> : <BsHeart    onClick={()=>{
dispatch( LikedProduct( song) )
}}     />  }  </div></td>
<td  className={classes.time}  >    <span>  {Math.floor((song?.track?.duration_ms)/60000)} : {Math.floor(((song?.track?.duration_ms)%60000)/1000).toString().padStart(2,'0')}  </span> </td>

                </tr>

                )
          
           } 



        </tbody>


    </table>



           
</div>
  </Container>
  )
}

export default ListOfSongs


// BsFillHeartFill style={ {color:"#65D36E" , fontSize:"24px"}}  /> 