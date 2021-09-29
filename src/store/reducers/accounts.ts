interface IAction {
    payload: number,
    type: string,
}

function accounts(prevState = 0, action: IAction) {
    switch (action.type) {
        case "DEPOSIT":
            return prevState + action.payload;

        case "WITHDRAW":
            return prevState - action.payload;
    
        default:
            return prevState;
    }
}

export default accounts;