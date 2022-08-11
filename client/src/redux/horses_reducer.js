import { socket } from "../api/socketAPI";

const initialState = {
    horses: [],
    winner: [],
    finish: false
};

const horsesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HORSES_RECEIVED':
            return {
                ...state,
                horses: [...action.payload]
            };
        case 'HORSES_FINISHED':
            return {
                ...state,
                finish: action.payload
            };
        case 'HORSE_WINNER':
            return {
                ...state,
                winner: [...action.payload]
            };
        default:
            return state;
    }
};

export default horsesReducer;

export const actions = {
    horsesReceived: (horses) => ({
        type: 'HORSES_RECEIVED',
        payload: horses
    }),
    horsesFinished: (status) => ({
        type: 'HORSES_FINISHED',
        payload: status
    }),
    horsesWinner: (horse) => ({
        type: 'HORSE_WINNER',
        payload: horse
    })
}

export const setHorses = () => {  // Thunk Creator 
    return async (dispatch) => {

        socket.emit('start');
        socket.on("ticker", response => {
            dispatch(actions.horsesReceived(response));
            response.forEach(element => {
                if (element.distance === 1000) {
                    dispatch(actions.horsesFinished(true));
                    dispatch(actions.horsesWinner([element.name, element.distance]));
                    socket.disconnect();
                }
            });
        });
    }
}