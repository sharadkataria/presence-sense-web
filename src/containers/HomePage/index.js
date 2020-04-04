import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: false,
    };
  }

  componentDidMount() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className='container'>
        <div className='row'></div>
      </div>
    );
  }
}

export default HomePage;
