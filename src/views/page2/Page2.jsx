import { Link } from "react-router-dom";


export default function Page2() {
  return (
    <div>
      <h2>Welcome to page #2!</h2>
      <hr />
      <p>this is the way for create 
        a new route with new version
        of react-router dom!
      </p>
      <Link to={"/"}>Go Back!</Link>
      <br />  
      <Link to={"/page3"}>Page #3</Link>
    </div>

  )
}
