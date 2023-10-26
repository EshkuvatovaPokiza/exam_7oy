
import  {useSelector} from "react-redux";
import { useRef, useState } from 'react';
import  classes from  "./audioplay.module.scss";
import {BsFillPlayCircleFill,BsShuffle,BsFillPauseCircleFill, BsFillHeartFill, BsHeart} from "react-icons/bs"
import { PauseAudio, PlayAudio } from "../../redux/AudioPlayReducer";
import { useDispatch } from "react-redux";
import {BiSolidVolumeFull} from "react-icons/bi"

const AudioPlay = () => {
  const dispatch =useDispatch()
    const music= useSelector(state=>state.audio.oneSong)
    const MusicState =useSelector(state=> state.audio.musicState);
    const likeunlikeState=useSelector(state=>state.like.value)
    console.log(likeunlikeState)

    console.log(MusicState)
    console.log(music)
    const ref=useRef()
  

    console.log(ref)

        const PlayMusic= (ref)=>{
        
            ref.current.play();
         
       
      }
  const PauseMusic =(ref)=>{
    ref.current.pause();
  }
  const ChangeVolume =(volume,ref)=>{
 ref.volume=volume/100
  }
//   const OnLoadMetaData =()=>{
// console.log(ref.duration)
//   }
 
  return (
    <div  className={classes.audio__wrapper}   >
         <audio  src={music[0]?.track?.preview_url}  controls    autoPlay  ref={ref}   className={classes.audio}     />
        

         <div className={classes.player__info}  >
       <div  className={classes.audioplay__image}  > {MusicState===true ?     <img src={music[0]?.track?.album?.images[0]?.url} alt="" />  :<></> } </div>
         <div className={classes.player__info__content}  >   <p> {MusicState===true ? music[0]?.track?.name :<></>} </p>
            <strong>   {MusicState===true ?music[0]?.track?.album?.artists[0]?.name :<></>}  </strong></div>
           { MusicState===true ?  <BsFillHeartFill/>  :<></>}
         </div>
        
        <div className={classes.player__component}  >
            <div   className={classes.player__btns}  >
<button> <BsShuffle/> </button>
<button className={classes.play__pause}   > { MusicState===true?  <BsFillPauseCircleFill  onClick={ ()=> { dispatch(PauseAudio())
  PauseMusic(ref)

 
}
 }   /> : <BsFillPlayCircleFill  onClick={()=>{
 
  dispatch(PlayAudio());
  PlayMusic(ref)
 
 
 }}        />} </button>
<button> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32" fill="none"  >
  <path   fillRule="evenodd" clipRule="evenodd" d="M22 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H12V22H10C7.79086 22 6 20.2091 6 18V10C6 7.79086 7.79086 6 10 6H22C24.2091 6 26 7.79086 26 10V18C26 20.2091 24.2091 22 22 22H18.843L20.0141 23.1711C20.4401 23.5971 20.4401 24.2879 20.0141 24.7139C19.588 25.1399 18.8973 25.1399 18.4713 24.7139L15.3536 21.5962C15.1583 21.4009 15.1583 21.0843 15.3536 20.8891L18.4713 17.7714C18.8973 17.3454 19.588 17.3454 20.0141 17.7714C20.4401 18.1974 20.4401 18.8881 20.0141 19.3142L19.3282 20H22C23.1046 20 24 19.1046 24 18V10C24 8.89543 23.1046 8 22 8Z" fill="#BABABA"/>
</svg>  </button>

            </div>
            <div   className={classes.music__length}  >
              <p> 00:00  </p>
            <input type="range"    className={classes.music__length}  />
            <p>  {Math.floor((music[0]?.track?.duration_ms)/60000)} : {Math.floor(((music[0]?.track?.duration_ms)%60000)/1000).toString().padStart(2,'0')}  </p> 
            </div>
           

        </div>

        <div className={classes.volume}  >
          <BiSolidVolumeFull/>
            <input type="range" onInput={ (e)=>  ChangeVolume (e.target.value, ref) }   />
        </div>

    </div>
  )
}

export default AudioPlay