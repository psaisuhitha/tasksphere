import "../../styles/navbar.css";

function Navbar() {
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        🌌 Nebula Tasks
      </h1>

      <button
        className="logout-btn"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;