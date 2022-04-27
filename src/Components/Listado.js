import Card from "./Card"
import '../Styles/Listado.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import getMovies from "../services/Get.service";
import { useState, useEffect } from 'react'

const Listado = () => {

    const [movies, setMovies] = useState([])
    
    useEffect( () => {
        getMovies().then( (res) => {
                setMovies(res.data.results)
            })
        }, [])
    
    return(
        <div className="container-section-list">
            <h1>Recomendaciones para ti</h1>
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
        </div>
    )
}

export default Listado