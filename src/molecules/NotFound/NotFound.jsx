import Message from "../../atoms/Message/Message";
import ButtonPrimary from "../../atoms/ButtonPrimary/ButtonPrimary";

const NotFound = () => (
  <>
    <Message text="404: Not Found" />
    <ButtonPrimary type="back" to="/" />
  </>
);

export default NotFound;
