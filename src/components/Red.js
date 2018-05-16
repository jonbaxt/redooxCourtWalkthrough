import React from 'react';
import { connect } from 'react-redux';

import './Red.css';

function Red(props) {
    return (
        <div className='mainRed' >
            <div className='inputOuterBox'>
            <h2 className='input'>{props.greenInput}</h2>
            </div>
        </div>
    )
}
function mapStateToProps( state ){
    return {
        greenInput: state.greenInput
    }
}
export default connect( mapStateToProps )(Red);