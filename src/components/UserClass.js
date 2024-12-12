import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "XXXXXXXXXXXXXXXXXXXXXX",
      },
    };
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    // console.log(this.props.name + ": Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + ": Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("UserClass - Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url, login } = this.state.userInfo;
    // console.log(this.props.name + ": Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}
export default UserClass;
