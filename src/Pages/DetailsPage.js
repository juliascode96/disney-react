import { getMovie } from "../services/Get.service"
import TabPanel from "../Components/TabPanel"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';
import SnackbarMessage from "../SnackbarMessage/SnackbarMessage";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Styles/Details.css'

const DetailsPage = () => {

    const [favMovies, setFavMovies] = useState(JSON.parse(localStorage.getItem('favs')) || [])

    const addRemoveFav = () => {
        const exist = favMovies.find(movieList => movieList.id === movieInfo.id)
        
        if(exist) {
            const filterList = favMovies.filter(movieList => movieList.id !== movieInfo.id)
            localStorage.setItem('favs', JSON.stringify(filterList))
        } else {
            setFavMovies([...favMovies, movieInfo])
            localStorage.setItem('favs', JSON.stringify([...favMovies, movieInfo]))
        } 
    }
   
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

    const [loader, setLoader] = useState(true)
    const [tabValue, setTabValue] = useState(0);

    const TabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    useEffect( () => {
        getMovie(id)
        .then( (res) => {
            setMovieInfo(res.data)
        })
        .catch( (erro) => {
            setShowMessage({
                status: true,
                message: 'Hubo un error en la llamada a la API',
                type: 'error'
            })
        })
        .finally( () => {
            setTimeout(() => {
                setLoader(false)
            }, 800)
        })
    }, [])

    return(
        <>
        {!localStorage.getItem('jwt') ? (<Navigate to='/login' />
        ) : (
            <>
           <CssBaseline />
                    <Container className="general-container">
                    {loader ? (
                        <div className="container-spinner">
                            <CircularProgress />
                        </div>
                    ) : (
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
                                <Button
                                    variant="contained" 
                                    className='btn-detail'
                                    startIcon={<StarIcon />}
                                    style={{marginLeft: '5px'}}
                                    onClick={addRemoveFav}
                                >
                                    Favoritas
                                </Button>
                                <p>{movieInfo.overview}</p>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={tabValue} onChange={TabChange} aria-label="basic tabs example">
                                    <Tab label="SUGERENCIAS" id={`simple-tab-${0}`} aria-controls={`simple-tabpanel-${0}`} />
                                    <Tab label="EXTRAS" id={`simple-tab-${1}`} aria-controls={`simple-tabpanel-${1}`} />
                                    <Tab label="DETALLES" id={`simple-tab-${2}`} aria-controls={`simple-tabpanel-${2}`} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={tabValue} index={0}>
                                    <p>Contenido Sugerencias</p>
                                </TabPanel>
                                <TabPanel value={tabValue} index={1}>
                                    <p>Contenido Extras</p>
                                </TabPanel>
                                <TabPanel value={tabValue} index={2}>
                                    <div className="content-detail-movie">
                                        <div>
                                        <p>Generos</p>
                                        <ul>
                                            {movieInfo.genres?.map( (genero) => {
                                                return <li key={genero.id}><span>{genero.name}</span></li>
                                            })}
                                        </ul>
                                        </div>
                                        <div>
                                        <p>Fecha de esteno:</p>
                                        <span>{movieInfo.release_date}</span>
                                        </div>
                                    </div>
                                </TabPanel>
                                
                            </div>
                        </div>
                    )}
                        
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