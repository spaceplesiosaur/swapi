import React from 'react'
import './C3POcatchPage.scss'
import threepio from '../../images/c3po.png'
//image was taken from uihere.com free clipart https://www.uihere.com/free-cliparts/c-3po-r2-d2-bb-8-droid-drawing-r2d2-1542065

const C3POcatchPage = () => {
  return (
    <div className="threepioContainer">
      <img src={threepio} className="threepioImage" alt="C-3PO"></img>
      <p className="fetchError">"Oh dear! Something has failed to fetch.  How awful!  We’re doomed."</p>
    </div>
  )
}

export default C3POcatchPage
