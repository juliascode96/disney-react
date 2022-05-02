import { getMovie } from "../services/Get.service"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SnackbarMessage from "../SnackbarMessage/SnackbarMessage";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Styles/Details.css'

const DetailsPage = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    })

    const {status, message, type} = showMessage
    let { id } = useParams();

    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect( () => {
        getMovie(id)
        .then( (res) => {
            setMovieInfo(res.data)
        })
        .catch( (err) => {
            setShowMessage({
                status: true,
                message: 'Hubo un error en la llamada a la API',
                type: 'error'
            })
        })
    }, [])

    return(
        <>
        {!localStorage.getItem('jwt') ? (<Navigate to='/login' />
        ) : (
            <>
           <CssBaseline />
                    <Container className="general-container">
                        <div className="header-detail-movie" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path})`}}>
                            <div className="header-detail-movie__info">
                                <h1>{movieInfo.original_title}</h1>
                                <Button 
                                    variant="contained" 
                                    className='btn-detail'
                                    startIcon={<PlayArrowIcon />}
                                >
                                    Ver ahora
                                </Button>
                                <p>{movieInfo.overview}</p>
                            </div>
                        </div>
                        
                    </Container>
            <SnackbarMessage 
                estado={status} 
                type={type} 
                handleClose={handleClose} 
                message={message}
            />
            </>
        )
        }
    </> 
    )
}

export default DetailsPage