import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import get from 'lodash/get';
import { Button, Form } from 'react-bootstrap';
import { loginAction } from '../../actions/AuthActions';
import NavBar from '../../components/NavBar';
import AuthService from '../../services/AuthService';
import LoggedIn from '../../hoc/LoggedIn';
class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: false,
      formData: {
        name: '',
        email: '',
        password: ''
      },
      errors: []
    };

    this.authService = new AuthService();
  }

  setStateValues = (fieldName, fieldValue) => {
    const formData = this.state.formData;
    formData[fieldName] = fieldValue;
    this.setState({ formData });
  };

  loginRedirection = () => {
    this.props.history.push('/login');
  };

  formValidation = () => {
    this.setState({ errors: [] });
    let errors = [];
    const { name, email, password } = this.state.formData;

    if (!name) {
      errors.push('Name is required..');
    }
    if (!validator.isEmail(email)) {
      errors.push('Invalid email provided.');
    }
    if (password.length < 6) {
      errors.push('Invalid password provided.');
    }

    if (errors.length) {
      this.setState({ errors });
      return false;
    } else {
      return true;
    }
  };

  signupHandler = () => {
    const formValid = this.formValidation();

    if (!formValid) {
      return;
    }

    this.authService
      .signup(this.state.formData)
      .then(data => {
        this.props.loginAction(data);
      })
      .catch(error => {
        const errors = get(error, 'response.data', ['Somethign went wrong.']);
        this.setState({ errors });
      });
  };

  render() {
    const { errors } = this.state;
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
            {errors.length ? (
              <div className='alert alert-danger' role='alert'>
                {errors.map((err, index) => {
                  return <p key={index}>{err}</p>;
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loginAction
};

export default LoggedIn(
  connect(mapStateToProps, mapDispatchToProps)(SignupPage)
);
