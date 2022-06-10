import React, { useState } from "react";
import axios from "axios";

function SignUp(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [url, setURL] = useState("");

  const handleSubmit = () => {
    setError(null);
    setLoading(true);
    if (password === confirmpassword) {
      axios
        .post("http://localhost:3000/api/movie_admin/register", {
          name: name,
          email: email,
          password: password,
          companyName: companyname,
          url: url,
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
    } else {
      setError("Password and Confirm Password does not match..!");
      setLoading(false);
    }
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
                  <img
                    src="https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg"
                    className="img"
                    width={500}
                    height={700}
                  />
                </div>
                <div
                  className="login-wrap p-4 p-md-5"
                  style={{ width: "600px", marginTop: "-20px" }}
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
                      <label className="label d-flex" htmlFor="name">
                        Company Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={companyname}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="name">
                        URL
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={url}
                        onChange={(e) => setURL(e.target.value)}
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
                      <div className="w-50 text-left"></div>
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
