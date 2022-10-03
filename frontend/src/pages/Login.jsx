import { useState, UseEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = fromData;

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
          <p>Logging and start setting goals</p>
        </h1>
      </section>

      <section className="form">
        <from onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </from>
      </section>
    </>
  );
}

export default Login;
