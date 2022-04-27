import '../Styles/Card.css'
import { Link } from 'react-router-dom'

const Card = ({ movie }) => {
    return(
        <Link to={`/movie/${movie.id}`} className='card-movie-item'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img movie"/>
        </Link>
    )
}

export default Card