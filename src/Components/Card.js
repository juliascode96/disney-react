import '../Styles/Card.css'
import { Link } from 'react-router-dom'

const Card = ({ movie }) => {
    return(
        <Link to={`/movie/${movie.id}`} className='card-movie-item'>
        {!movie.poster_path ? <img src="/movie.jpeg" alt="img movie"/>  :
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img movie"/> }
        </Link>
    )
}

export default Card