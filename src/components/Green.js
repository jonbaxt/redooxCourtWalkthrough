import React from 'react';
import { connect } from 'react-redux';
import { handleInputValue } from '../reducer';
// import { } from '../actionCreators';

function Green(props) {
    return (
        <div style={{ backgroundColor: 'green' }} >
            Green
            <input
                type='text'
                placeholder='type in me'
                onChange={(event) => { props.handleInputValue(event.target.value) }}
                value={props.greenInput}
            />
        </div>
    )
}

function mapStateToProps( state ){
    return {
        greenInput: state.greenInput
    }
}

const mapDispatchToProps = {
    handleInputValue
}

export default connect(mapStateToProps, mapDispatchToProps )(Green);