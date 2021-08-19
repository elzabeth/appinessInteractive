import { Types } from './actionTypes';

const initialState = {
    profile: {
        id: '',
        name: '',
        age: 0,
        gender: '',
        gender: '',
        phoneNo:''
    },
    formSubmitted: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            console.log('login', action.payload.user)
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false // after update user formsubmition reset
            }
        default:
            return state;
    }
}

export default reducer;