import Listado from "../Components/Listado";

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import { Navigate } from "react-router-dom";

const ListPage = () => {
    
    return(
        <>
        {!localStorage.getItem('jwt') ? (<Navigate to='/login' />
        ) : (
        <div className="home-page" style={{margin: '0 auto'}}>
           
            <CssBaseline />
            <Container className="general-container" style={{paddingTop: '60px'}}>
                <Listado sortBy={'sort_by=popularity.desc'} titulo={'Más populares'} />
                <Listado sortBy={'sort_by=vote_average'} titulo={'Mejor valoradas'}/>
                <Listado sortBy={'sort_by=release_date.desc'} titulo={'Proximamente'}/>
            </Container>
        </div>
        )
        }
    </>
    )
}

export default ListPage