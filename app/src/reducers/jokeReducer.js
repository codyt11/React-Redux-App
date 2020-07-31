import { FETCH_DATA, NEW_JOKE, SET_ERROR } from "../actions/index";
const initialState = {
    data: [],
    isFetchingData: false
}
export const JokeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return{
                ...state,
                isFetchingData: true,
                data: []
            };
        case NEW_JOKE:
            console.log(action.payload)
            return{
                ...state,
                isFetchingData: false,
                data: action.payload
            }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                data: action.payload
            }
        default:
            return state
    }
}