import React from 'react';
import {
    Link
} from 'react-router-dom';

const Home = props => (

    <>
        <div className="home">

            <h3><span>👋 </span>Want to submit an issue to facebook/react?</h3>
            <p>If you have a bug or an idea, read the contributing guidlines before opening an issues.</p>
            <p>Issues labeled good first issue can be good first contributions.</p>
        </div>
        <Link to="/all"><button className="btn">Go to Issues</button></Link>{' '}
    </>
)
export default Home;
