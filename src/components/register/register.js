import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
function Register(props) {
  const [registerauth, setregisterauth] = useState({
    name: "",
    namevalid: "",
    username: "",
    usernamevalid: "",
    email: "",
    password: "",
    emailvalid: true,
    emailtext: "",
    passwordvalid: true,
    passwordtext: "",
    confirmpassword: "",
    confirmpasswordvalid: "",
    disable: false,
  });

  function handle(e) {
      const regusername = /^\s*\S+\s*$/
      const regemail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const regpassword =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    switch (e.target.name) {
      case "name":
        setregisterauth({
          ...registerauth,
          name : e.target.value,
          namevalid : e.target.value.length === 0 ? "name is require" : null,
        });
        break;
      case "username":
        setregisterauth({
            ...registerauth,
          username : e.target.value,
          usernamevalid : e.target.value.length === 0 || !regusername.test(e.target.value) ? "username is require and nospaces" : null,
        })
        break;
      case "email":
        setregisterauth({
          ...registerauth,
          email: e.target.value,
          emailvalid: regemail.test(e.target.value) ? true : false,
          emailtext: registerauth.emailvalid ? "" : "email input require",
          disable: !(registerauth.emailvalid && registerauth.passwordvalid),
        });
        break;
      case "password":
        setregisterauth({
          ...registerauth,
          password: e.target.value,
          passwordvalid: regpassword.test(e.target.value) ? true : false,
          passwordtext: registerauth.passwordvalid
            ? ""
            : "password must contain at least one lowercase character , uppercase characte , numeric value ,(?=.*[-+_!@#$%^&*., ?]) represents at least one special character. ",
          disable: !(registerauth.emailvalid && registerauth.passwordvalid),
        });
        console.log(
          `email :  ${registerauth.email} password : ${registerauth.password}`
        );
        break;
      case "confirmpassword":
        setregisterauth({
          ...registerauth,
          confirmpassword : e.target.value,
          confirmpasswordvalid : (registerauth.password !== e.target.value)? "confirm password must be a same password" : null
        });
        break;
      default:
        break;
    }
    console.log(
      `email :  ${registerauth.email} password : ${registerauth.password}`
    );
  }

  function submitlogin(e) {
      e.preventDefault();
    console.log(registerauth);
  }
  return (
    <Container className="py-5">
      <h2> Register </h2>
      <Col md={8}>
        <form onSubmit={(e) => submitlogin(e)}>
          <div className="mb-3 row ">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className={`form-control ${
                    registerauth.namevalid ? "border-danger" : ""
                }`}
                id="name"
                name="name"
                onChange={(e) => handle(e)}
              ></input>
              <small className="text-danger">{registerauth.namevalid}</small>
            </div>
          </div>
          <div className="mb-3 row ">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className={`form-control ${
                    registerauth.usernamevalid ?  "border-danger" : ""
                }`}
                id="username"
                name="username"
                onChange={(e) => handle(e)}
              ></input>
              <small className="text-danger">{registerauth.usernamevalid}</small>
            </div>
          </div>
          <div className="mb-3 row ">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className={`form-control ${
                  registerauth.emailvalid ? "" : "border-danger"
                }`}
                id="Email"
                name="email"
                onChange={(e) => handle(e)}
              ></input>
              <small className="text-danger">{registerauth.emailtext}</small>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className={`form-control ${
                  registerauth.passwordvalid ? "" : "border-danger"
                }`}
                id="inputPassword"
                name="password"
                onChange={(e) => handle(e)}
              ></input>
              <small className="text-danger">{registerauth.passwordtext}</small>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className={`form-control ${
                  registerauth.confirmpasswordvalid ? "border-danger" : ""
                }`}
                id="confirmPassword"
                name="confirmpassword"
                onChange={(e) => handle(e)}
              ></input>
              <small className="text-danger">
                {registerauth.confirmpasswordvalid}
              </small>
            </div>
          </div>
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-danger"
              disabled={registerauth.disable}
            >
              Register
            </button>
          </div>
        </form>
      </Col>
    </Container>
  );
}

export default Register;