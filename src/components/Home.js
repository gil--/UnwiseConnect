import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/auth'

class Home extends Component {
  render () {
    return (
      <div>
        {this.props.error && (
          <div className="alert alert-danger" role="alert">
            {this.props.error.message}
          </div>
        )}
        <div className="jumbotron jumbotron-uc">
          <h1>UnwiseConnect</h1>
          <p>Welcome to UnwiseConnect. To get started with time tracking, please authenticate.</p>
          <button
            type="button"
            onClick={() => this.props.dispatch(login())}
            className="btn btn-lg btn-primary"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps)(Home);
