import React from 'react';;
import {Link} from "react-router-dom"
import classes from "./category.module.scss"

const Category = ( {title, CategoryArray }) => {
  
  return (
    <div  className={classes.category__item}  >
<div className={classes.category__item_title}  >
  <h2>{title} </h2>
  <p>See all</p>

</div>
<ul className={classes.category__menu} >
    {

   CategoryArray?.slice(0,4).map(({images, name,description,id}) =>
             <Link to={`/playlist/${id}`}  key={id}  >
              <li  >  
              <img src={images[0].url} alt="" />
              <h3 title={name.toLowerCase().split("").toSpliced(0  , 1 , name.charAt(0).toUpperCase()).join("")}  > {   name.length >25?  name.toLowerCase().split("").toSpliced(0  , 1 , name.charAt(0).toUpperCase()).slice(0 , 25).join("") + "..."  :name.toLowerCase().split("").toSpliced(0  , 1 , name.charAt(0).toUpperCase()).join("") } </h3>

              <p style={{height:"46px"}}  >  {description.split("").length > 30 ? description.split("").slice(1,30).join("")+ "..." : description }  </p>
               </li>
            
             
             </Link>
            
              
              )
    }
  </ul>


</div>
  )
}

export default Category