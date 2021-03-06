import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(state, action);
    switch (action.type){
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE:
            return INITIAL_STATE;
        default:
            return state;
    }
};