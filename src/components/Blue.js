import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Blue.css'
import { storeInput, deleteString } from '../actionCreators';
// import Green from './Green';

class Blue extends Component {
    render() {
        let dataShow = this.props.data.map((element, index) => {
            // console.log(element)
            return (<p key={element.id} className='sentence'>
                <button className='deleteButton'
                    className='deleteButton'
                    onClick={() => {
                        // console.log(`Number to Cancel: ${element.id}`)
                        this.props.deleteString(element.id);
                    }}
                >Delete</button>{`${element.text}`}</p>)
        })
        return (
            <div className='mainBlue'>

                <div className='buttonContainer'>
                    <button onClick={this.props.storeInput}>Store Your String</button>
                </div>

                <div className='dataArea'>
                    <h1>OUTPUT:</h1>
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