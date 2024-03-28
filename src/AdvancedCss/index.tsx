import { CheckCircleIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import "./index.scss"

const AdvancedCss = () => {
  return (


      <header className="header">Some text ...
        <div className="logo-box">
          <img src="../img/nat-1.jpg" alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoor</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>
        </div>
      </header>

  )
}

export default AdvancedCss
