import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="./" className="logoAnchor">
          <img id="urso" src="../public/ursoBranco.png"></img>
          <h1>
            <span>BBlog</span>
          </h1>
        </Link>
      </div>
      <nav className="links">
        <Link to="/" id="home">
          {" "}
          <span>Home</span>{" "}
        </Link>
        <Link to="/create" id="nBlog">
          {" "}
          <span>New blog</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
