import React from 'react';
import {AiOutlineUserAdd} from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import {SlUser} from "react-icons/sl";

import classes from "./rightSidebar.module.scss"

const RightSidebar = () => {
  return (
    <div className={classes.sidebar}  >
      <div className={classes.friend__activity} >  <p> Friend activity </p>  
      <div className={classes.sidebar__icons} >
       <p  className={classes.user}  > <AiOutlineUserAdd/>  </p>
     <p   className={classes.exit}  >   <IoIosAdd/> </p>
    
      </div>
      
      </div>
      <ul className={classes.sidebar__menu} >
        <li > <p>Let friends and followers on Spotify see what you’re listening to.</p>  </li>
        <li> <div  className={classes.user__info}  > 
        <div className={classes.user__icon} > <SlUser/>   <div   className={classes.online} > </div>   </div>
        <div  className={classes.user__block} >
          <div className={classes.longest} ></div>
          <div className={classes.short} ></div>
          <div className={classes.short} ></div>
        </div>
        
        </div>  </li>
        <li> <div  className={classes.user__info}  > 
        <div className={classes.user__icon} > <SlUser/>   <div   className={classes.online} > </div>   </div>
        <div  className={classes.user__block} >
          <div className={classes.longest} ></div>
          <div className={classes.short} ></div>
          <div className={classes.short} ></div>
        </div>
        
        </div>  </li>
        <li> <div  className={classes.user__info}  > 
        <div className={classes.user__icon} > <SlUser/>   <div   className={classes.online} >  </div>   </div>
        <div  className={classes.user__block} >
          <div className={classes.longest} > </div>
          <div className={classes.short} > </div>
          <div className={classes.short} > </div>
        </div>
        
        </div>  </li>
        <li> 
          <p>
          Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.
          </p>
           </li>
      </ul>
<div className={classes.sidebar__btn} > <button>Settings</button> </div>
       
    </div>
  )
}

export default RightSidebar