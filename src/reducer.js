// import actionCreators, {} from './actionCreators';

const initialState = {
    data: [],
    greenInput: ''

};

//action types
const INPUT_VALUE = 'INPUT_VALUE';
const STORE_STRING = 'STORE_STRING';

//action creators
export function handleInputValue(value) {
    // console.log(`you hit handleInputValue ${value}`);
    return {
        type: INPUT_VALUE,
        payload: value
    }
}

export function storeInput() {
    return {
        type: STORE_STRING
    }
}


//reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_VALUE:
            // console.log(state.greenInput)
            return Object.assign({}, state, { greenInput: action.payload })
        case STORE_STRING:
            console.log(`Hit store string`)
            return Object.assign(
                {},
                state,
                {
                    data: [ ...state.data, state.greenInput],
                    greenInput: ''
                })
        default:
            return state;
    }
}



//could put action creators on bottom, but really should be in their own files.