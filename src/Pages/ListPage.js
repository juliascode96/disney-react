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
                <Listado />
            </Container>
        </div>
        )
        }
    </>
    )
}

export default ListPage