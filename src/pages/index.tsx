import { useAppDispatch, useAppSelect } from '../app/hooks';
import { increment, decrement, amountAdded } from '../features/counter/counter-slice';
import { useFetchUserQuery, useFetchUsersQuery } from '../features/users/users-slice';

export default function Home() {
  const counter = useAppSelect((state) => state.counter);
  const dispatch = useAppDispatch();

  //const { data, isLoading } = useFetchUserQuery();
  const { data, isLoading } = useFetchUsersQuery();

  function handleCounter() {
    dispatch(amountAdded(3));
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>{counter.value}</h1>

      <div>
        {JSON.stringify(data)}
        <p>is loading: {isLoading}</p>
      </div>

      <button type="button" onClick={handleCounter}>
        Incrementar
      </button>

      <button type="button" onClick={handleDecrement}>
        Decrementar
      </button>
    </div>
  )
}
