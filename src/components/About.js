import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

//Function Component

function About() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <h1>About</h1>
      <h2>Page dedicated to about us</h2>
      <h3 className="font-bold my-4">User : {loggedInUser}</h3>
      <UserClass name={"Ayush Class"} />
      <User name={"Ayush Functional"} />
    </>
  );
}

// Class Component
// class About extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>About Class</h1>
//         <h2>Page dedicated to about us</h2>
//         <UserClass name={"Ayush Class"} />
//         <User name={"Ayush Functional"} />
//       </>
//     );
//   }
// }
export default About;
