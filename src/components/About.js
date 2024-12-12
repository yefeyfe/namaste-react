import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  componentWillUnmount() {
    console.log("About - Component Will Unmount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series.</h2>
        <UserClass
          name={"First"}
          location={"Bangalore"}
          contact={"@akshaymarch7"}
        />
        <User name={"First"} location={"Bangalore"} contact={"@akshaymarch7"} />
      </div>
    );
  }
}

export default About;
