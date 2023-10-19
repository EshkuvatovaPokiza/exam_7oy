import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import classes from "./home.module.scss"
import { Container } from '../../utils/utils';
const ACCESS_TOKEN =localStorage.getItem("access_token");
import Category from '../../components/Category/Category';


const Home = ({data}) => {
  const[topMix,setTopMix]=useState([]);
  const [MadeForYou,setMadeForYOu]=useState([]);
  const [RecentlyPlayed,setRecentlyPlayed]=useState([]);
  const [JumpBack,setJumpBack]=useState([]);
  const [uniquely,setUniquely] =useState([])
useEffect(()=>{
  const getTopMixes =  ()=>{
    fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists",{
    
        headers:{
          "Content-Type" : 'application/json ',
          "Authorization": ACCESS_TOKEN
        }
        })
      .then(response =>response.json())
      .then(data=>setTopMix(data.playlists.items))
    
      
      .catch(err=>
        console.log(err))
      }
    
    getTopMixes()
},[]) ;


useEffect(()=>{
  const getMadeForYou =  ()=>{
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",{
    
        headers:{
          "Content-Type" : 'application/json ',
          "Authorization": ACCESS_TOKEN
        }
        })
      .then(response =>response.json())
      .then(data=>setMadeForYOu(data.playlists.items))
    
      
      .catch(err=>
        console.log(err))
      }
    
    getMadeForYou()
},[])


useEffect(()=>{
  const getRecentlyPlayed =  ()=>{
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists",{
    
        headers:{
          "Content-Type" : 'application/json ',
          "Authorization": ACCESS_TOKEN
        }
        })
      .then(response =>response.json())
      .then(data=>setRecentlyPlayed(data.playlists.items))
    
      
      .catch(err=>
        console.log(err))
      }
    
    getRecentlyPlayed()
},[]);

useEffect(()=>{
  const getJumpBack =  ()=>{
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists",{
    
        headers:{
          "Content-Type" : 'application/json ',
          "Authorization": ACCESS_TOKEN
        }
        })
      .then(response =>response.json())
      .then(data=>setJumpBack(data.playlists.items))
    
      
      .catch(err=>
        console.log(err))
      }
    
    getJumpBack()
},[])

useEffect(()=>{
  const getUniquely =  ()=>{
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",{
    
        headers:{
          "Content-Type" : 'application/json ',
          "Authorization": ACCESS_TOKEN
        }
        })
      .then(response =>response.json())
      .then(data=>setUniquely(data.playlists.items))
    
      
      .catch(err=>
        console.log(err))
      }
    
    getUniquely()
},[])



  return (
 <Container>
     <div className={classes.home}  >
        <div className={classes.arrows} >  <p><FiChevronLeft/></p>   <p><FiChevronRight/></p> </div>
        <h1  className={classes.home__title} >  Good afternoon </h1>
        <ul  className={classes.home__menu} >
          {
            data?.slice(0,6).map(({images, name,id}) =>
           <Link to={`/playlist/${id}`}  key={id}  >
              <li   >  
              <img src={images[0].url} alt="" />
              <p title={name.toLowerCase().split("").toSpliced(0  , 1 , name.charAt(0).toUpperCase()).join("")}  > {   name.length >25?  name.toLowerCase().split("").toSpliced(0  , 1 , name.charAt(0).toUpperCase()).slice(0 , 25).join("") + "..."  :name.toLowerCase().split("").toSpliced(0  , 1 , name.charAt(0).toUpperCase()).join("") } </p>
               </li>
            
           </Link>
            
              
              )
          }


        </ul>

        <div className={classes.categories}  >

<Category   title={"Your top  mixes"}  CategoryArray={topMix}  />   
<Category  title={"Made for you"}      CategoryArray={MadeForYou}/>
<Category  title={"Recently played"}  CategoryArray={RecentlyPlayed}   />
<Category   title={"Jump back in"}   CategoryArray={JumpBack}   />
<Category title={"Uniquely yours"}   CategoryArray={uniquely}  />



        </div>
      

      
    </div>
 </Container>
  )
}

export default Home