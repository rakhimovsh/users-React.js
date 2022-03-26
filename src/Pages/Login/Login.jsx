import React from "react";
import "./Login.scss";
import { Context } from "../../Contexts/Authorization/Authrization";
import { Button } from "@mui/material";

function Login() {
  const { setState } = React.useContext(Context);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { user_email, user_password } = evt.target.elements;

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user_email.value.trim(),
        password: user_password.value.trim(),
      }),
    })
      .then((response) => response.json())
      .then((data) => setState(data?.token || false));
  };

  return (
    <main
      className="d-flex justify-content-center"
      style={{
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit} className="w-25 mt-5">
        <div className="titleBox my-4">
          <h1 className="formTitle">Log in</h1>
        </div>
        <div className="my-4">
          <input
            type="email"
            className="form-control p-2"
            name="user_email"
            placeholder="Email adress"
            defaultValue="eve.holt@reqres.in"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control p-2"
            name="user_password"
            defaultValue="cityslicka"
            placeholder="Password"
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          className="btn btn-primary w-100"
        >
          Log In
        </Button>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn"
            style={{
              color: "#1DA1F2",
            }}
          >
            Forgot password?
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn"
            style={{
              color: "#1DA1F2",
            }}
          >
            Sign up
          </button>
        </div>
      </form>

      <div className="modal" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="logoBox"></div>
                <div className="titleBox my-3">
                  <h1 className="modalTitle">Log in to Twitter</h1>
                </div>
                <div className="my-4">
                  <input
                    type="email"
                    className="form-control p-2"
                    name="user_email"
                    placeholder="Email adress"
                    defaultValue="eve.holt@reqres.in"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control p-2"
                    name="user_password"
                    defaultValue="cityslicka"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{
                    borderRadius: "75px",
                    background: "#1DA1F2",
                    border: "#1DA1F2",
                    fontWeight: "800",
                  }}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
