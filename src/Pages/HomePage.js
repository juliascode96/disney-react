import BodyComp from '../Components/BodyComp'
import Tittle from '../Components/Tittle'

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const HomePage = () => {
    
    return(
        <div className="home-page" style={{margin: '0 auto'}}>
           
        <CssBaseline />
        <Container className="general-container" style={{paddingTop: '60px'}}>
            <Tittle />
            <BodyComp />
        </Container>
    </div>
    )
}

export default HomePage