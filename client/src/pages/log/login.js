import React, { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = (e) => {
    localStorage.setItem("userAuth", JSON.stringify({}));
    e.preventDefault();
    fetch(`http://localhost:4040/api/auth/signin`, {
      method: "POST",
      withCredentials: true,
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          console.log(res);
          localStorage.setItem("userAuth", JSON.stringify(res));
          alert(res.message);
          window.location.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col-12 col-md center-block">
      <form  className="row g-3" onSubmit={SignIn}>
        <h1>Login</h1>
        <div class="p-3 mb-2 bg-warning bg-opacity-25 text-dark">
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;