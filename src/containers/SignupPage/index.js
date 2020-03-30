import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import NavBar from '../../components/NavBar';

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
        <NavBar />
        <div className='row'>
          <div className='login-wrapper'>
            <h5>Please enter your details</h5>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  className='input-field'
                  placeholder='Enter your name'
                  onChange={event =>
                    this.setStateValues('name', event.currentTarget.value)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='text'
                  className='input-field'
                  placeholder='Enter your email'
                  onChange={event =>
                    this.setStateValues('email', event.currentTarget.value)
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  className='input-field'
                  placeholder='Enter your password'
                  onChange={event =>
                    this.setStateValues('password', event.currentTarget.value)
                  }
                />
              </Form.Group>
            </Form>
            <Button
              type='button'
              variant='outline-dark'
              onClick={this.signupHandler}
            >
              Signup
            </Button>
            <hr />
            <p className='signup-text'>
              Already have an account?
              <span className='signup-text-span'>
                <Button
                  onClick={this.loginRedirection}
                  variant='outline-secondary'
                >
                  Login
                </Button>
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
