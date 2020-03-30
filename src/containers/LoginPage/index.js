import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import { Form, Button } from 'react-bootstrap';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: false,
      formData: {
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

  loginHandler = () => {
    const { formData } = this.state;
    console.log(formData);
  };

  singupRedirection = () => {
    this.props.history.push('/signup');
  };

  render() {
    return (
      <div className='container'>
        <NavBar />
        <div className='row'>
          <div className='login-wrapper'>
            <h5>Please enter your details</h5>
            <Form>
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
            <Button type='button' variant='outline-dark'>
              Login
            </Button>
            <hr />
            <p className='signup-text'>
              Don't have an account?
              <span className='signup-text-span'>
                <Button
                  variant='outline-secondary'
                  onClick={this.singupRedirection}
                >
                  Signup
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

export default LoginPage;
