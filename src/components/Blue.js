import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Blue.css'
import { storeInput, deleteString } from '../actionCreators';
// import Green from './Green';

class Blue extends Component {
    render() {
        let dataShow = this.props.data.map((element, index) => {
            // console.log(element)
            return (<p key={element.id}>{`${element.text}`}
                <button
                    className='deleteButton'
                    onClick={() => {
                        // console.log(`Number to Cancel: ${element.id}`)
                        this.props.deleteString(element.id);
                    }}
                >DeletePost</button></p>)
        })
        return (
            <div className='mainBlue' style={{ backgroundColor: 'blue' }} >
                <button onClick={this.props.storeInput}>Store Your String</button>
                <div>
                    Data Area
            {dataShow}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        greenInput: state.greenInput,
        data: state.data
    }
}

const mapDispatchToProps = {
    storeInput,
    deleteString
}


export default connect(mapStateToProps, mapDispatchToProps)(Blue);