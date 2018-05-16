import React from 'react';
import { connect } from 'react-redux';

import './Red.css';

function Red(props) {
    return (
        <div className='mainRed' style={{ backgroundColor: 'red' }} >
            <h2>{props.greenInput}</h2>
        </div>
    )
}
function mapStateToProps( state ){
    return {
        greenInput: state.greenInput
    }
}
export default connect( mapStateToProps )(Red);