import React from 'react';

const Show = props => (

    <>
        <div>

            <h3>THIS IS SHOW</h3>

            <p>showing the current issue:</p>
            <p>{ props.issue.url }</p>
            <p>{ props.issue.title }</p>
        </div>
    </>
)
export default Show;
