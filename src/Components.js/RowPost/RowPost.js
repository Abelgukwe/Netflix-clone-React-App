import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
const[movies,setMovies]=useState([])
const[urlId,setUrlId]=useState()

useEffect(()=>{
  axios.get(props.url).then((res)=>{  
    console.log(res.data.results[0]);
    setMovies(res.data.results)
  }).catch(err=>{
    alert('network error')
  })

},[props.url])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

const handleClick=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US` ).then((res)=>{
      if(res.data.results.length!==0){

        setUrlId(res.data.results[0])
        
      }   else{
          console.log('not found');
      } 
    })
}
const closePlayer=()=>{
  setUrlId(null)
}
  
  return (
    
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
      {
       movies.map((data,index)=> <img key={index} onClick={()=>{handleClick(data.id)}} className={props.isSmall?'smallPoster':"poster"} src={`${imageUrl+data?.backdrop_path}`} alt="" />)
          }
     </div>

<div className='closeButton_div'>
{urlId && <button className='closeButton' onClick={closePlayer}>X</button>}

</div>
    { urlId&& <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
