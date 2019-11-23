import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password is not matched");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have a account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={displayName}
            type="text"
            label="DisplayName"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            value={email}
            type="email"
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            value={password}
            type="password"
            label="Passowrd"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
