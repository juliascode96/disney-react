import { getMovie } from "../services/Get.service"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
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
            <Container className="general-container" style={{paddingTop: '60px'}}>
            <h1>{movieInfo.original_title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`} alt="img movie"/>
            <p>{movieInfo.overview}</p>
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