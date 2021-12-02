import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
function Login(props) {
  const [loginauth, setloginvalue] = useState({
    email: "",
    password: "",
    emailvalid: true,
    emailtext : "",
    passwordvalid: true,
    passwordtext: "",
    disable : false,
  });

  function handle(e){
      const regemail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const regpassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
       switch (e.target.name) {
           case "email":
                setloginvalue({
                  ...loginauth,
                  email: e.target.value,
                  emailvalid: (regemail.test(e.target.value))?true:false,
                  emailtext : (loginauth.emailvalid) ? '' : 'email input require' ,
                  disable : !(loginauth.emailvalid && loginauth.passwordvalid),
                })
               break;
            case "password":
                setloginvalue({
                    ...loginauth,
                    password: e.target.value,
                    passwordvalid: (regpassword.test(e.target.value))?true:false,
                    passwordtext : (loginauth.passwordvalid) ? '' : 'password must contain at least one lowercase character , uppercase characte , numeric value ,(?=.*[-+_!@#$%^&*., ?]) represents at least one special character. ',
                    disable : !(loginauth.emailvalid && loginauth.passwordvalid),
                })
                console.log(`email :  ${loginauth.email} password : ${loginauth.password}`);
               break;
           default:
               break;
       }
    console.log(`email :  ${loginauth.email} password : ${loginauth.password}`);
  }

  function submitlogin(e) {
      e.preventDefault();
      console.log(loginauth)
  }
  return (
    <Container className="py-5">
      <h2> Login </h2>
      <Col md={8}>
        <form onSubmit={(e) => submitlogin(e)}>
          <div className="mb-3 row ">
          <label htmlFor="email" className="form-label">Email address</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${loginauth.emailvalid ? "" : "border-danger"}`}
                id="Email"
                name="email"
                onChange={(e) => handle(e)}
              ></input>
              <small className="text-danger">{(loginauth.emailtext)}</small>
            </div>
          </div>
          <div className="mb-3 row">
          <label htmlFor="password" className="form-label" >Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                className={`form-control ${loginauth.passwordvalid ? "" : "border-danger"}`}
                id="inputPassword"
                name="password"
                onChange={(e) => handle(e)}
              ></input>
              <small className="text-danger">{(loginauth.passwordtext)}</small>
            </div>
          </div>
          <div className="col-sm-10" >
            <button type="submit" className="btn btn-info" disabled={loginauth.disable}>
              Login
            </button>
          </div>
        </form>
      </Col>
    </Container>
  );
}

export default Login;