// @ts-ignore
import { useStore } from "@shoppe/util-state";

export default function Root(props) {
  const store = useStore();

  return (
    <section>
      <h1>{props.name} is mounted!</h1>
      <button onClick={store.increment}>Increment</button>
    </section>
  );
}
