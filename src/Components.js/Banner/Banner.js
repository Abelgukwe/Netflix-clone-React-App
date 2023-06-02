import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

import './Bnner.css'


function Banner() {
  const [movie, setMovie] = useState()
  const [urlId, setUrlId] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      // console.log(res.data.results[0]);
      const randomIndex=Math.floor(Math.random()*res.data.results.length)
      setMovie(res.data.results[randomIndex])
    })
    

  },[])

const playVideo=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
          if(res.data.results.length!==0) {

            setUrlId(res.data.results[0])
          }else{
            console.log("not found");
          }
        })
}

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};
const closePlayer=()=>{
  setUrlId(null)
}
  return (
 <div>
     <div
    style={{backgroundImage:`url(${imageUrl+movie?.backdrop_path})`}}
    className='banner'>
      <div className="content">
        <h1 className="title">{movie?.title}</h1>
        <div className="banner_buttons">
            <button className="button" onClick={()=>{playVideo(movie.id)}}>Play</button>
            <button className="button">My List</button>
        </div>
        <h1 className="description">{movie?.overview}</h1>
      </div>
      <div className="fade_bottom">

      </div>
    </div>
    <div className="closeButton_div">
    {urlId && <button className='closeButton' onClick={closePlayer}>X</button>}

    </div>
      <div  >
      { urlId&& <Youtube opts={opts} videoId={urlId.key}/>}

      </div>
 </div>
  )
}

export default Banner
