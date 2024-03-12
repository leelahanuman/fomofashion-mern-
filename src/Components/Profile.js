import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

function BasicExample({ user,setUser }) {
  let username, email;
  if (user && user.authtoken && user.authtoken.username) {
    username = user.authtoken.username;
    email = user.authtoken.email;
  }
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setUser({})
  };
  // console.log(user);
  return (
    username && (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <i className="fas fa-user-alt fa-1x text-white"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">{username}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">{email}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <button className="logout" onClick={() => handleLogout()}>
              logout
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  );
}

export default BasicExample;
