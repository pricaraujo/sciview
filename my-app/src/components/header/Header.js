import React from 'react'

import Menu from '../menu'

import './Header.css'

const Header = () => (
    <header className="app-header">
        <h1 class="app-name">
        <span><a href="/" font-color="white" title="SCIVIEW">SCIVIEW</a></span>
        </h1>
        <Menu />
    </header>
)

export default Header