import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class All extends Component {

    constructor( props ) {

        super( props );
    }

    selectIssue = issue => {

        console.log( 'issue picked: ', issue );
        this.props.selectIssue( issue );
    }

    render(){

        return (

            <>
                <div>

                    <h3>100 Open Issues</h3>
                    <div>

                        { this.props.issues.map( ( issue, i ) => {

                            return <Link
                                className="issue-wrap"
                                key={ i }
                                to="/single"
                                onClick={ () => this.selectIssue( issue ) }
                            >

                                { issue.url }
                            </Link>
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default All;