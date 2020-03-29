import React, { Component } from 'react';

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: false,
      formData: {
        name: '',
        email: '',
        password: ''
      }
    };
  }

  setStateValues = (fieldName, fieldValue) => {
    const formData = this.state.formData;
    formData[fieldName] = fieldValue;
    this.setState({ formData });
  };

  signupHandler = () => {
    const { formData } = this.state;
    console.log(formData);
  };

  loginRedirection = () => {
    this.props.history.push('/login');
  };

  render() {
    const { formData } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <div className='login-wrapper'>
            <h5>Please enter your details</h5>
            <label>Name</label>
            <input
              type='text'
              value={formData.name}
              className='input-field'
              placeholder='Enter your name'
              onChange={event =>
                this.setStateValues('name', event.currentTarget.value)
              }
            />
            <label>Email</label>
            <input
              type='text'
              value={formData.email}
              className='input-field'
              placeholder='Enter your email'
              onChange={event =>
                this.setStateValues('email', event.currentTarget.value)
              }
            />
            <label>Password</label>
            <input
              type='password'
              value={formData.password}
              className='input-field'
              placeholder='Enter your password'
              onChange={event =>
                this.setStateValues('password', event.currentTarget.value)
              }
            />
            <button
              type='button'
              className='btn btn-outline-dark'
              onClick={this.signupHandler}
            >
              Signup
            </button>
            <hr />
            <p className='signup-text'>
              Already have an account?
              <span className='signup-text-span'>
                <button
                  onClick={this.loginRedirection}
                  className='btn btn-outline-secondary'
                >
                  Login
                </button>
              </span>
            </p>
            <hr />
            <div className='alert alert-danger' role='alert'>
              A simple danger alert—check it out!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
