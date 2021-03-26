import React, {Fragment} from 'react';
import Navbar from './Navbar';
import Notice from './Notice';
import Main from './Main';

const Home = () => {
    return(
        <Fragment>
            <Navbar />
            <Notice />
            <Main />
        </Fragment>
    );
}

export default Home;