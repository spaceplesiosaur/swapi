import React from 'react'
import './Page404.scss'
import obiWan from '../../images/obiWan.svg'
import hand from '../../images/hand (1).svg'

const Page404 = ( ) => {
  return (
    <section className="no-page">
      <img src={obiWan} alt="Obi Wan Kenobi"/>
      <div>
        <img src={hand} alt="hand"/>
      </div>
      <h1>404</h1>
      <h2>There aren't the droids you're looking for...</h2>
    </section>
  )
}

export default Page404
