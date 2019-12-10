import React from 'react'
import './ArtooLoading.scss'
import artoo from '../../images/artoo.png'
//image was taken from uihere.com free clipart https://www.uihere.com/free-cliparts/r2-d2-c-3po-anakin-skywalker-star-wars-cartoon-r2d2-1815780

const ArtooLoading = () => {

  return (
    <div className="artooContainer">
      <p>...Loading</p>
      <img src={artoo} alt="artoo loading" className="artoo"></img>
      <div className='shadow'></div>
    </div>
  )
}

export default ArtooLoading;
