import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './store/action-creators';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actions, dispatch);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-around', padding: 20 }}
    >
      <button aria-label="Increment value" onClick={() => depositMoney()}>
        DEPOSIT
      </button>

      <span>{JSON.stringify(state)}</span>

      <button aria-label="Decrement value" onClick={() => withdrawMoney()}>
        WITHDRAW
      </button>
    </div>
  );
}

export default App;
