import { useContext, useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const Navigate = useNavigate();

  async function Login(ev) {
    ev.preventDefault();

    const response = await fetch("http://localhost:4000/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (response.ok) {
      const user = await response.json();
      setUser(user);
      alert("successfully Logged in");
      Navigate("/Layout");
    } else {
      const message = await response.json();
      setMessage(message);
    }
  }
  return (
    <>
      <main className="container" style={{ margin: 100 }}>
        <div className="form-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8">
                <div className="form-container">
                  <div className="form-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="200"
                      fill="currentColor"
                      className="bi bi-person-badge d-block mx-auto mb-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                    </svg>
                    <span className="signup">
                      <Link to={"/SignUp"}>
                        Don&apos;t have account? Signup
                      </Link>
                    </span>
                  </div>
                  <form
                    className="form-horizontal mt-2 "
                    style={{ height: 350 }}
                    onSubmit={Login}
                  >
                    <h3 className="title">Member Login</h3>
                    <div className="form-group">
                      <span className="input-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-envelope-fill pb-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                      </span>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <span className="input-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-lock-fill pb-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        </svg>
                      </span>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                      />
                    </div>
                    <button className="btn signin">Login</button>
                    <span className="forgot-pass">
                      <a href="#" className="d-block mb-2">
                        Forgot Username/Password?
                      </a>
                      <a className="text-danger text-decoration-none">
                        {message}
                      </a>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
