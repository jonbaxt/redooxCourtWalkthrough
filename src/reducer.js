// import actionCreators, {} from './actionCreators';
// const { handleInputValue, storeInput } = require('./actionCreators');

const initialState = {
    data: [],
    greenInput: ''

};

//action types
const INPUT_VALUE = 'INPUT_VALUE';
const STORE_STRING = 'STORE_STRING';
const DELETE_STRING = 'DELETE_STRING';
let idnum = 1;


//reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_VALUE:
            // console.log(state.greenInput)
            return Object.assign({}, state, { greenInput: action.payload })
        case STORE_STRING:
            console.log(`Hit store string`)
            const newStore = {
                id: idnum++,
                text: state.greenInput
            }
            return (Object.assign({}, state, {
                data: [...state.data, newStore],
                greenInput: ''
            })
            )
        case DELETE_STRING:
        return  Object.assign({}, state, { data: state.data.filter( element => element.id !== action.payload )})
            // {console.log( indexNumber) 
        default:
            return state;
    }
}



//could put action creators on bottom, but really should be in their own files.