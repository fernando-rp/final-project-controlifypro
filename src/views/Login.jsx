import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const history = useHistory();

  return (
    <>
      <div className="container mt-4">
        <caption className="row  caption-top m-0 ">Sign In</caption>
        <div className="row border boder-primary">
          <div className="col-3 fa-5x">
            <FontAwesomeIcon icon={faUserTie} class="text-center m-0 p-3" />
          </div>
          <div className="col-9 justify-content-end">
            <form className="row g-3 mt-3">
              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  EMAIL
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="inputname"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="inputPassword2" class="col-sm-2 visually-hidden">
                  Password
                </label>
                <div className="col-sm-12">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end mb-4">
          <form
            className="row g-3 mt-3"
            onSubmit={(e) => {
              e.preventDefault();
              actions.Login(email, password, history);
            }}
          >
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
