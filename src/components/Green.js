import React from 'react';
import { connect } from 'react-redux';

import './Green.css';
import { handleInputValue } from '../actionCreators';
// import { } from '../actionCreators';

function Green(props) {
    return (
        <div className='mainGreen' style={{ backgroundColor: 'green' }} >
            <p>Please Write Anything to Be Stored:</p>
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