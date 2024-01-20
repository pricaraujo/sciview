import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import Routes from '../components/Routes'

const App = () => (
    <BrowserRouter>
        <Header />
        <Container>
            <Routes />
        </Container>
        <Footer />
    </BrowserRouter>
)

export default App