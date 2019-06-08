import React from 'react';
import './Signin.css';

//http://tachyons.io/components/forms/sign-in/index.html
//http://tachyons.io/components/cards/product-card/index.html
class Signin extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  };

  onLoginSubmit = () => {
    //console.log(this.state);

    fetch('http://localhost:3001/signin', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: this.state.signInEmail,
            pass: this.state.signInPassword 
        })
      }
    ).then(response => response.json())
    .then( backendDataStatus => {
      if (backendDataStatus === 'success login') {
        this.props.onRouteChange('home')
      } else {
        console.log('login failed')
      }
    })
    .catch(error => console.error('API Error:', error));

  }

  render(){

      const { onRouteChange } = this.props;

      return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Login</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
                {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Login"
                  onClick={this.onLoginSubmit}
                />
              </div>
              <div className="lh-copy mt3">
                <p onClick={() => onRouteChange('register')} style={{'cursor': 'pointer'}} className="f6 link dim black db">
                  Registrieren
                </p>
                {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
              </div>
            </div>
          </main>
        </article>
      );
  }
};

export default Signin;
