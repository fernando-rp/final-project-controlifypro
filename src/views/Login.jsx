import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUserTie } from "@fortawesome/free-solid-svg-icons";


export function Login() {
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
                  />
                </div>
              </div>

              <div className="col-md-8 mx-auto">
                <div className="form-check">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadioActive"
                      value="Activo"
                    />
                    <label class="form-check-label" for="inlineRadioActive">
                      REMENBER ME
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end mb-4">
          <form className="row g-3 mt-3">
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
