import React from 'react';
import { connect } from 'react-redux';
// import { handleInputValue }

function Red(props) {
    return (
        <div style={{ backgroundColor: 'red' }} >
            Red
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