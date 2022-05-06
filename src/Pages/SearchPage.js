import Results from "../search/Results"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import SearchInput from '../search/SearchInput'
import { useState } from 'react'

const SearchPage = () => {

    const [searchValue, setSearchValue] = useState('')

    return(
        <div className="home-page">
            <CssBaseline />
            <Container className="general-container">
                <SearchInput value={searchValue} updateValue={setSearchValue}/>
                <h2>Explorar</h2>
                <Results searchValue={searchValue} favPage={false}/>
            </Container>
        </div>
    )
}

export default SearchPage