import React from 'react'
import './C3POCard.scss'
import threepio from '../../images/c3po.svg'
//image was taken from uihere.com free clipart https://www.uihere.com/free-cliparts/c-3po-r2-d2-bb-8-droid-drawing-r2d2-1542065

const C3POCard = () => {
  return (
    <div className="c3po-card">
      <img src={threepio} className="threepioImage"></img>
      <p className="fetchError">"Oh dear! Something has failed to fetch.  How awful!  We’re doomed."</p>
    </div>
  )
}

export default C3POCard
