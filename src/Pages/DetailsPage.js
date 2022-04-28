import { getMovie } from "../services/Get.service"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import SnackbarMessage from "../SnackbarMessage/SnackbarMessage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailsPage = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    })

    const {status, message, type} = showMessage

    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect( () => {
        getMovie('508947')
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
        <CssBaseline />
            <Container className="general-container" style={{paddingTop: '60px'}}>
            <h1>Detalles</h1>
            <h2>{movieInfo.original_title}</h2>
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

export default DetailsPage