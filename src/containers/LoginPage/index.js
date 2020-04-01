import React, { Component } from 'react';
import validator from 'validator';
import get from 'lodash/get';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import { Form, Button } from 'react-bootstrap';
import AuthService from '../../services/AuthService';
import LoggedIn from '../../hoc/LoggedIn';
import { loginAction } from '../../actions/AuthActions';
class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: false,
      formData: {
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

  loginHandler = () => {
    const { formData } = this.state;
    console.log(formData);
  };

  singupRedirection = () => {
    this.props.history.push('/signup');
  };

  formValidation = () => {
    this.setState({ errors: [] });
    let errors = [];
    const { email, password } = this.state.formData;

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

  loginHandler = () => {
    const formValid = this.formValidation();

    if (!formValid) {
      return;
    }

    this.authService
      .login(this.state.formData)
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
              onClick={this.loginHandler}
            >
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
  connect(mapStateToProps, mapDispatchToProps)(LoginPage)
);
