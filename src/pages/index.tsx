import { useAppDispatch, useAppSelect } from '../app/hooks';
import { increment } from '../features/counter/counter-slice';

export default function Home() {
  const counter = useAppSelect((state) => state.counter);
  const dispatch = useAppDispatch();

  function handleCounter() {
    dispatch(increment());
  }

  return (
    <div>
      <h1>{counter.value}</h1>

      <button type="button" onClick={handleCounter}>
        Incrementar
      </button>
    </div>
  )
}
