import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../../Pages/LoginPage'
import ListPage from '../../Pages/ListPage'
import SearchPage from '../../Pages/SearchPage'
import Header from '../Header'
import Footer from '../Footer'
import DetailsPage from '../../Pages/DetailsPage'
import FavPage from '../../Pages/FavPage'

const AppRouter = () => {

    return(
        <BrowserRouter>
        <Header />
            <Routes >
                <Route path="/login" element={<LoginPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/" element={<ListPage />} />
                <Route path="/movie/:id" element={<DetailsPage />} />
                <Route path="/favoritos" element={<FavPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter

