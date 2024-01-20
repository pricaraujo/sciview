import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = () => (
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/box">
                    Cubo
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/sphere">
                    Esfera
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/tetrahedron">
                    Tetraédro
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/prism">
                    Prisma Pentagonal
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu