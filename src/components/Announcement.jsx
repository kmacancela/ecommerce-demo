import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: teal;
    color: white;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Weekend Sale! Free Shipping On All Orders!   
        </Container>
    )
}

export default Announcement
