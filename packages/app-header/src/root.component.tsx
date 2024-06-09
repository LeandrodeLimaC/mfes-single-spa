// @ts-ignore
import { Navigate } from "@shoppe/util-ui";

export default function Root(props) {
  return (
    <section>
      <h1>Eu sou o HEADER!!!!!!</h1>
      <Navigate path="/account">Account</Navigate>
      <Navigate path="/cart">Cart</Navigate>
      <Navigate path="/product">Product</Navigate>
      <Navigate path="/shop">Shop</Navigate>
    </section>
  );
}
