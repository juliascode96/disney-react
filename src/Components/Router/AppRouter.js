import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../../Pages/LoginPage'
import HomePage from '../../Pages/HomePage'
import ListPage from '../../Pages/ListPage'
import Header from '../Header'
import Footer from '../Footer'

const AppRouter = () => {

    return(
        <BrowserRouter>
        <Header />
            <Routes >
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/listado" element={<ListPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter

