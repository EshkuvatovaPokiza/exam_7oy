import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {GoHomeFill,GoHeartFill} from "react-icons/go";
import {AiOutlineSearch} from "react-icons/ai";
import {BiLibrary} from "react-icons/bi";
import {IoIosAdd} from "react-icons/io"
import classes from "./LeftSidebar.module.scss"

const    LeftSidebar = ({data}) => {




 


  return (
    <div  className={classes.sidebar}>
       <ul className={classes.sidebar__menu}  >
       <li className={classes.home__icon} >  <Link  to={"/"} >  <GoHomeFill/>  Home  </Link> </li>
        <li > <AiOutlineSearch/> Search </li>
        <li> <BiLibrary/> Library  </li>
        <li  className={classes.add__block}  > <div className={classes.add} > <IoIosAdd/>  </div>  Create  </li>
        <li  className={classes.like__block}   > <Link  to="/like"  ><div className={classes.like} > <GoHeartFill/>  </div>  Liked Songs   </Link></li>

       </ul>

       <ul className={classes.playlist__menu} >

        {
         data?.map(item => 
            
          
          <Link to={`/playlist/${item.id}`} key={item.id}  >  <li title={item.name.toLowerCase().split("").toSpliced(0  , 1 , item.name.charAt(0).toUpperCase()).join("")}  > {   item?.name.length >25?  item.name.toLowerCase().split("").toSpliced(0  , 1 , item.name.charAt(0).toUpperCase()).slice(0 , 25).join("") + "..."  :item.name.toLowerCase().split("").toSpliced(0  , 1 , item.name.charAt(0).toUpperCase()).join("") } </li> </Link>
            )
        }
       </ul>
    </div>
  )
}

export default LeftSidebar