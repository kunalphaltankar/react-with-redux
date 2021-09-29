function depositMoney(amount = 1) {
  return (dispatch: any) =>
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
}

function withdrawMoney(amount = 1) {
  return (dispatch: any) =>
    dispatch({
      type: 'WITHDRAW',
      payload: amount,
    });
}

const actions = {
  depositMoney,
  withdrawMoney,
};

export default actions;
