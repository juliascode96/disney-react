import Login from "../Components/Login";

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


const LoginPage = () => {
    return(
        <div className="home-page" style={{margin: '0 auto'}}>
           
            <CssBaseline />
            <Container className="general-container" style={{paddingTop: '60px', paddingBottom:'60px'}}>
                <Login />
            </Container>
        </div>
    )
}

export default LoginPage