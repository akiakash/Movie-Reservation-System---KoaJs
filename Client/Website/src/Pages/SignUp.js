import React, { useState } from "react";
import axios from "axios";

function SignUp(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log(name);
    console.log(email);
    console.log(password);
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:3000/api/user/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        props.history.push("/SignIn");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data.error_Message);
        setError(err.response.data.error_Message);
      });
  };

  return (
    <section style={{ padding: "5em 0" }}>
      <div
        style={{
          width: "100%",
          paddingright: "15px",
          paddingleft: "15px",
          marginright: "auto",
          marginleft: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexwrap: "wrap",
            marginright: "-15px",
            marginleft: "15px",
            justifyContent: "center",
          }}
        >
          <center>
            <div className="col-md-12 col-lg-11">
              <div className="wrap d-md-flex">
                <div>
                  <img src="./Images/beast1.jpg" className="img" />
                </div>
                <div
                  className="login-wrap p-4 p-md-5"
                  style={{ width: "600px", marginTop: "80px" }}
                >
                  <div className="d-flex">
                    <div>
                      <h3 className="mb-4">Sign Up</h3>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="name">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="name">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="confirmpassword">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div style={{ marginBottom: "1rem", marginTop: "2rem" }}>
                      <button
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                        style={{ backgroundColor: "#8b0000" }}
                        onClick={handleSubmit}
                      >
                        {loading ? "Loading..." : "Sign Up"}
                      </button>
                    </div>
                    {error && <p style={{ color: "#8b0000" }}>{error}</p>}
                    <div
                      className="form-group d-md-flex"
                      style={{ marginBottom: 15 }}
                    >
                      <div className="w-50 text-left">
                        <a
                          href="/"
                          style={{
                            textDecoration: "none",
                            color: "#808080",
                            marginRight: "10em",
                          }}
                        >
                          Home
                        </a>
                      </div>
                      <div className="w-50 text-md-right">
                        <a
                          href="#"
                          style={{
                            textDecoration: "none",
                            color: "#808080",
                            marginLeft: "5em",
                          }}
                        >
                          Forgot Password
                        </a>
                      </div>
                    </div>
                  </form>
                  <p className="text-center">
                    Not a member?{" "}
                    <a
                      data-toggle="tab"
                      href="/SignIn"
                      style={{ textDecoration: "none", color: "#8b0000" }}
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
