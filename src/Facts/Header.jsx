import React from 'react'
import Photo from './download.jpeg'

const Header = () => {
  return (
    <div className="header">
        <img className="photeSize" src= {Photo} alt="none"/>
        <ul className='lists'>
          <li>Price</li>
          <li>Items</li>
          <li>About</li>
        </ul>
    </div>
  )
}

export default Header