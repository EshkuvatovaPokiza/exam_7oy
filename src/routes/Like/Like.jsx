import React from 'react';
import classes from "./like.module.scss";
import { useSelector } from 'react-redux';
import { Container } from '../../utils/utils';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsFillHeartFill,BsPlayFill,BsHeart,BsArrowDown,BsThreeDots,BsFillCaretDownFill,BsSearch } from 'react-icons/bs';
import { Unlike } from '../../redux/likeReducer';

import { FiChevronRight,FiChevronLeft } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { GoHeartFill } from 'react-icons/go';
import  image from "../../images/likepage.png"
import { PlayAudio } from '../../redux/AudioPlayReducer';

const Like = () => {
  const LikedProducts=useSelector(state=>state.like.LikedSongs)
  console.log(LikedProducts)
  const dispatch=useDispatch()
  return (
   <Container>
        <div className={classes.like__wrapper}  >
     <div   className={classes.likepage__top}  >
     <div className={classes.arrows} >  <p><FiChevronLeft/></p>   <p><FiChevronRight/></p> </div>
<div   className={classes.likepage__top__element}  >   <img src={image} alt="" />    <p>davedirect3</p> <BsFillCaretDownFill/> </div>
     </div>
<div className={classes.likepage__info} >
<div className={classes.like} > <GoHeartFill/>  </div>
<div className={classes.likepage__content}  >
    <strong>PUBLIC PLAYLIST </strong>
    <h1> Liked Songs </h1>
    <div  className={classes.likepage__quantity} >
    <img src={image} alt="" />
    <p>davedirect3</p>
    
    <ul>
        <li> {LikedProducts.length}  songs </li>
    </ul>
    </div>
  


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
            LikedProducts?.map( (product, ind) =>
                <tr key={product?.track?.id}       >
<td> {ind+1}  </td>
<td>  <div  className={classes.song__info}   >   
<img src={product?.track?.album?.images[2]?.url} alt="" />
<p className={classes.song__author}  >
    <span>{product?.track?.name.toLowerCase().split("").toSpliced(0  , 1 , product?.track?.name.charAt(0).toUpperCase()).join("")}</span>
    <span> {product?.track?.album?.artists[0]?.name.toLowerCase().split("").toSpliced(0  , 1 ,product?.track?.album?.artists[0]?.name.charAt(0).toUpperCase()).join("")} </span>
</p>


 </div> </td>
<td className={classes.album__name}  >  {product?.track?.name.toLowerCase().split("").toSpliced(0  , 1 , product?.track?.name.charAt(0).toUpperCase()).join("")}  </td>
<td><div   onClick={()=> dispatch(Unlike(product))}  > <BsFillHeartFill style={ {color:"#65D36E" , fontSize:"30px"}} />  </div></td>
<td  className={classes.time}  >    <span> {Math.floor((product?.track?.duration_ms)/60000)} : {Math.floor(((product?.track?.duration_ms)%60000)/1000).toString().padStart(2,'0')}  </span> </td>

                </tr>

                )
          
           } 



        </tbody>


    </table>



           
</div>  
       
</div>
   </Container>
  )
}

export default Like