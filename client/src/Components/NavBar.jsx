import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router";

export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const Navigate = useNavigate();

  const Logout = async () => {
    const response = await fetch("http://localhost:4000/Logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      setUser(null);
      Navigate("/");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row p-3">
          <div className="col">
            <button
              className="btn btn-outline-secondary rounded-pill p-2"
              onClick={Logout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <a className="px-1 text-secondary">
                {user?.email || "unavailable"}
              </a>
            </button>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="">
              <img
                src="https://www.pngarts.com/files/11/IMessage-Sms-PNG-Transparent-Image.png"
                style={{ height: 40 }}
              ></img>
            </a>
          </div>
          <div className="col d-flex justify-content-end">
            <button className="btn btn-outline-primary rounded-pill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
