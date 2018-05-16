import React, { Component } from 'react';
import { connect } from 'react-redux';

import { storeInput } from '../reducer';
// import Green from './Green';

class Blue extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
    let dataShow = this.props.data.map( (element, index) => {
            console.log( element )
            return (<h1 key={index}>{`Your string ${element}`}</h1>)
        })
    return (
        <div style={{ backgroundColor: 'blue' }} >
            <button onClick={ this.props.storeInput }>Store Your String</button>
            Blue
            <div>
                Data Area
            {dataShow}
            </div>
        </div>
    )
}
}

function mapStateToProps( state ) {
    return {
    greenInput: state.greenInput,
    data: state.data
    }
}

const mapDispatchToProps = {
    storeInput
}


export default connect(mapStateToProps, mapDispatchToProps)(Blue);