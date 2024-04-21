import ErrorScreenStyled from "./ErrorScreen.style";
import ErrorScreenProps from "./ErrorScreen.type";

function ErrorScreen({ children }: ErrorScreenProps): JSX.Element {
  return (
    <ErrorScreenStyled>
      {children}
    </ErrorScreenStyled>
  )
}

export default ErrorScreen;
