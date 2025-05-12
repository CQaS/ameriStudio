import Link from "next/link";

function Navbar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
      data-spy="affix"
      data-offset-top="510"
    >
      <div className="container">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse mt-sm-20 navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="#home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#resume" className="nav-link">
                Resume
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            <img src="/imgs/avatar.jpg" alt="" className="brand-img"></img>
            <li className="brand-txt">
              <h5 className="brand-title">John Doe</h5>
              <div className="brand-subtitle">Web Designer | Developer</div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="#portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item last-item">
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
