import { Link } from "react-router-dom";
import reactLogo from '../../assets/react.svg';

export default function Page3() {
  return (
    <div>
        <h2>Welcome to Page 3</h2>
        <p>
            creating a controlled component
        </p>
        <hr />
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" 
          alt="React logo" />
        </a>
        <br />
        <Link to={"/"}>Home</Link>
    </div>
  )
}
