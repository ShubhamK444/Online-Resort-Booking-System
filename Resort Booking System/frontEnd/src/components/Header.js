import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signout } from "../slices/authSlice";
import "../css/header.css";
import { toast } from "react-toastify";
function Header() {
  const signInStatus = useSelector((state) => state.authSlice.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regNo = sessionStorage["regNo"];
  const userRoles = sessionStorage["userRoles"];
  if (userRoles == "ROLE_ADMIN") {
    var user = false;
    var admin = true;
  } else {
    var user = true;
    var admin = false;
  }
  console.log(userRoles);
  return (
    <div className="nn1">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-transparent xxm1"
        id="nav"
      >
        <div className="container-fluid user11">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <img id="logo" src="\images\logo1.jpg" />
                </Link>
              </li>
              <ul className="navbar-nav me-auto mb-2 mb-lg-1">
                <li className="nav-item" id="xx">
                  <Link
                    className="nav-a active"
                    aria-current="page"
                    to="About"
                    id="xx"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item" id="xx">
                  <Link
                    className="nav-a active"
                    aria-current="page"
                    to="ClubM"
                    id="ul"
                  >
                    Club/Activites
                  </Link>
                </li>
                {signInStatus && userRoles == "ROLE_USER" && (
                  <li className="nav-item dropdown" id="xx">
                    <li
                      className="nav-a dropdown-toggle"
                      to="#"
                      role="buuseron"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Rooms
                    </li>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="tentR">
                          Tent Room
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="ClassicR">
                          Superior Room
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="ExecutiveR">
                          Executive Room
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
                {signInStatus && userRoles == "ROLE_USER" && (
                  <li className="nav-item dropdown" id="xx">
                    <li
                      className="nav-a dropdown-toggle"
                      to="#"
                      role="buuseron"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Events
                    </li>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="Wedding">
                          Wedding
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="Conference">
                          Conference
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="birthday">
                          Birthday
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    className="nav-a active"
                    aria-current="page"
                    to=""
                  ></Link>
                </li>
                <li className="nav-item" id="xx">
                  <Link
                    className="nav-a active"
                    aria-current="page"
                    to="/Gallery"
                    id="xx"
                  >
                    Gallery
                  </Link>
                </li>
                {signInStatus && userRoles == "ROLE_USER" && (
                  <li className="nav-item" id="xx">
                    <Link
                      className="nav-a active"
                      aria-current="page"
                      id="xx"
                      to="/History"
                    >
                      Your Orders
                    </Link>
                  </li>
                )}

                {/* Conditional rendering i.e show order history only if user is Logged in */}
                {signInStatus && userRoles == "ROLE_ADMIN" && (
                  <li className="nav-item" id="xx">
                    <Link
                      className="nav-a active"
                      aria-current="page"
                      id="xx"
                      to="/Enquiry"
                    >
                      Enquiry
                    </Link>
                  </li>
                )}
                {signInStatus && userRoles == "ROLE_ADMIN" && (
                  <li className="nav-item" id="xx">
                    <Link
                      className="nav-a active"
                      aria-current="page"
                      id="xx"
                      to="/ViewReservation"
                    >
                      View Reservations
                    </Link>
                  </li>
                )}
                {signInStatus && userRoles == "ROLE_ADMIN" && (
                  <li className="nav-item" id="xx">
                    <Link
                      className="nav-a active"
                      aria-current="page"
                      id="xx"
                      to="/CoustomerDetailes"
                    >
                      Customer Details
                    </Link>
                  </li>
                )}

                {!signInStatus && (
                  <li className="nav-item dropdown" id="xx">
                    <li
                      className="nav-a dropdown-toggle"
                      to="#"
                      role="buuseron"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SignIn
                    </li>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="login">
                          Customer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="admin">
                          Admin
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}

                {/* if user is signed in then render signout buuseron */}
                {signInStatus && (
                  <li className="nav-item" id="xx">
                    <Link
                      className="nav-a active"
                      aria-current="page"
                      id="xx"
                      onClick={() => {
                        // go to signin page
                        toast.error("Signout done !", {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 1000,
                        });
                        setTimeout(() => {
                          navigate("/");
                        }, 1000);
                        // send the action to let the user signout
                        dispatch(signout());
                      }}
                    >
                      SignOut
                    </Link>
                  </li>
                )}
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
