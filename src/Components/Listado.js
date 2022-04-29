import Card from "./Card"
import '../Styles/Listado.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import getMovies from "../services/Get.service";
import { useState, useEffect } from 'react'
import SnackbarMessage from "../SnackbarMessage/SnackbarMessage";

const Listado = ({sortBy, titulo}) => {

    const [movies, setMovies] = useState([])
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });

    const { status, message, type } = showMessage
    
    useEffect( () => {
        getMovies(sortBy).then( (res) => {
                setMovies(res.data.results)
            })
            .catch((err) => {
                setShowMessage({
                    status: true,
                    message: 'Ocurrio un error en la lllamada',
                    type: 'error'
                })
            })
        }, [])

        const handleClose = () => {
            setShowMessage({
                ...showMessage,
                status: false
            })
        }
    
    return(
        <div className="container-section-list">
            <h1>{titulo}</h1>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                       {movies.map( (movie) => {
                    const { original_title, poster_path, id } = movie
                    return(
                        <SwiperSlide key={id}>
                            <Card 
                                movie={movie}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <SnackbarMessage 
                status={status}
                handleClose={handleClose}
                type={type}
                message={message}
            />
        </div>
    )
}

export default Listado