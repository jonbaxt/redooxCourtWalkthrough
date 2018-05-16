

// export function 

//action types
const INPUT_VALUE = 'INPUT_VALUE';
const STORE_STRING = 'STORE_STRING';
const DELETE_STRING = 'DELETE_STRING';

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

export function deleteString(deleteNumber){
    return {
        type: DELETE_STRING,
        payload: deleteNumber
    }
}