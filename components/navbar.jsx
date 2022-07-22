const Navbar = (props) => {
    return (
      <div className="_bg-header">
        <div className="_bg-navbar">
          <div className="container">
            <div className="_navbar">
              <a href="/" className="_navbar-brand">
                <img src="logo-ham.svg" alt="" />
                Chuchilito's
              </a>
              <nav className="_navbar-nav">
                <a href="/" className="_nav-link">
                  Inicio
                </a>
                <a href="/menu" className="_nav-link">
                  Menú
                </a>
                <a href="/combo" className="_nav-link">
                  Combos
                </a>
                <a href="/about" className="_nav-link">
                  About Me
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar;