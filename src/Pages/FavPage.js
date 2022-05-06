import Results from "../search/Results";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const FavPage = () => {
    return (
        <div className="home-page">
            <CssBaseline />
            <Container className="general-container">
            <Results favPage={true}/>
            </Container>
        </div>
    )
}

export default FavPage;

