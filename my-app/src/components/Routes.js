import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import BoxSpace from '../box/Space';
import SphereSpace from '../sphere/Space';
import TetrahedronSpace from '../tetrahedron/Space'
import CylinderSpace from '../cylinder/Space'

const Routes = () => (
    <>
        <Route exact path="/" component={Home} />
        <Route exact path="/box" component={BoxSpace} />
        <Route exact path="/sphere" component={SphereSpace} />
        <Route exact path="/tetrahedron" component={TetrahedronSpace} />
        <Route exact path="/prism" component={CylinderSpace} />
    </>
);

export default Routes