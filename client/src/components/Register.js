import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Register extends Component {

  signUp(e) {
    e.preventDefault();
    // console.log(e.target);
    Axios.post('/auth/signup', {
      firstname: document.getElementById('firstName').value,
      lastname: document.getElementById('lastName').value,
      email: document.getElementById('signup-email').value,
      password: document.getElementById('signup-password').value
    }).then(({data}) => {
      console.log(data)
      window.location = "/login"
      // if successfully login > react router to login page
      // else alert user taken on screen
    }).catch((err) => {
      console.log(err)
    })
  }

  googleSubmit(e) {
    e.preventDefault();
    Axios({
    method: 'get',
    url: '/auth/google',
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // }
    }).then((res) => {
      console.log("google logged in")
      window.location = "/";
      // alert('This login is taken!')
      // destructuring the data allows us not to type res.data
      // if successfully login > react router to user page
      // else alert login taken on screen
    }).catch((err) => {
      console.log(err)
      alert('Try again later!')
    })
  }

  render() {
    return (
      <div>
        <div className="register" id="register" >
          <form onSubmit={this.googleSubmit.bind(this)}> 
            <button className="btn-gp"> <i className="fa fa-fw fa-google-plus pull-left" aria-hidden="false"></i>
              Signup with Google  </button> <br />  
            <div className="signup-or-separator">
              <span className="h6 signup-or-separator--text">or</span>
              <hr />
            </div>
          </form>
          <form onSubmit={this.signUp.bind(this)}>
            <div className="form-group">
              <input type="firstName" className="form-control-form " id="firstName" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="lastName" className="form-control-form " id="lastName" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control-form " id="signup-email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control-form " id="signup-password" placeholder="Password" />
            </div>  
            <button type="submit" className="btn-lgin" data-toggle="modal"  data-dismiss="modal" data-target="#at-signup-filling">Signup with Email</button> <hr />   
            <p className="sue"> By signing up, I agree to myBlendology's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>. myBlendology is not offering any medical advice and recommends consulting a doctor before use. </p>
            <div className="modal-footer">
              <div className="row">   
                <div className="col-md-6">
                  <p className="text-left">Already a member? </p>
                </div>  
                <div className="col-md-4 col-md-offset-2">  
                <Link to='/login'><button className="btn-gst"  data-toggle="modal"  data-dismiss="modal" data-target="/login">Login</button></Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
