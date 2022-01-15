import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
    height: 60px;
    background-color: black;
    color: white;
`;

const Home = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default Home
