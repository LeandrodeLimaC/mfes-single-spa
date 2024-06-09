import { navigateToUrl } from "single-spa";

interface INavigateProps {
  path: string;
  children?: React.ReactNode;
}

export const Navigate: React.FC<INavigateProps> = (props) => {
  function redirect(e: React.MouseEvent<HTMLButtonElement>) {
    navigateToUrl(e.currentTarget.name);
  }

  return (
    <button name={props.path} onClick={redirect}>
      {props.children}
    </button>
  );
};
