import { navigateToUrl } from "single-spa";

import { Container } from "./styles";
import { INavigateProps } from "./types";

export const Navigate: React.FC<INavigateProps> = ({
  path,
  children,
  icon,
}) => {
  function redirect(e: React.MouseEvent<HTMLButtonElement>) {
    navigateToUrl(e.currentTarget.name);
  }

  return (
    <Container
      name={path}
      onClick={redirect}
      aria-label={`Go to Page ${children}`}
    >
      {icon}
      {children}
    </Container>
  );
};
