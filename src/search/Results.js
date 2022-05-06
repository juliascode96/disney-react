import { useEffect, useState } from "react";
import { getSearchResults, getTrending } from "../services/Get.service";
import Card from "../Components/Card";
import '../Styles/Results.css'

const Results = ({ searchValue, favPage }) => {

    const [trending, setTrending] = useState([])
    const [movieList, setMovieList] = useState([])

    useEffect( () => {
        if(favPage){
            setMovieList(JSON.parse(localStorage.getItem('favs')))
        } else if(searchValue === '' && !favPage){
            getTrending().then( (res) => {
                setTrending(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        
    }, [movieList])
    
    useEffect( () => {
        getSearchResults(searchValue).then( (res) => {
            setMovieList(res.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [searchValue])
    
    return(
        <div className="container-results">
               {movieList.length === 0 ? trending.map( (movie) => {
                    return(
                        <div key={movie.id} className='swiper-slide' >
                            <Card movie={movie}/>
                         </div>
                    )
                }) :
                movieList.map( (movie) => {
                    return(
                        <div key={movie.id} className='swiper-slide' >
                            <Card movie={movie}/>
                         </div>
                    )
                })

               }
        </div>
    )
}

export default Results