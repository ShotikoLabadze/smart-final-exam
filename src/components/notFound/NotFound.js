import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="wrapper">
      <h1>Oops! 404 Page Not Found.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">about</Link>
      <br />
      <Link to="/homepage">homepage</Link>
    </div>
  );
}
