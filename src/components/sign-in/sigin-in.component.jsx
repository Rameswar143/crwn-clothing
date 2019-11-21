import React from 'react';
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }
    hadleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });

    }
    render() {
        return (
            <div class="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onsubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        handleChange={this.hadleChange}
                        value={this.state.email}
                        name="email"
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        value={this.state.password}
                        handleChange={this.hadleChange}
                        name="password"
                        label="Password"
                        required
                    />
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}
