import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {imageUrl} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
const[movies,setMovies]=useState([])
useEffect(()=>{
  axios.get(props.url).then((res)=>{  
    console.log(res.data.results[0]);
    setMovies(res.data.results)
  }).catch(err=>{
    alert('network error')
  })

},[props.url])
  
  return (
    
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
      {
       movies.map((data)=> <img className={props.isSmall?'smallPoster':"poster"} src={`${imageUrl+data?.backdrop_path}`} alt="" />)
          }
     </div>
     

    </div>
  )
}

export default RowPost
