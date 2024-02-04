export function SideBar() {
  return (
    <nav className="sb-sidebar-navigation">
      <header className="sb-sidebar-header">
        <a href="/" className="sb-sidebar-header-home-link">
          <span className="sb-sidebar-header-home-link-prefix">Dev</span>
          <span>challenges.io</span>
        </a>
      </header>
      <ul className="sb-sidebar-menu">
        <li>
          <a className="sb-sidebar-menu-item" href="#colors">
            Colors
          </a>
        </li>
        <li>
          <a className="sb-sidebar-menu-item" href="#typography">
            Typography
          </a>
        </li>
        <li>
          <a className="sb-sidebar-menu-item" href="#spaces">
            Spaces
          </a>
        </li>
        <li>
          <a className="sb-sidebar-menu-item active" href="#buttons">
            Buttons
          </a>
        </li>
        <li>
          <a className="sb-sidebar-menu-item" href="#inputs">
            Inputs
          </a>
        </li>
        <li>
          <a className="sb-sidebar-menu-item" href="#grid">
            Grid
          </a>
        </li>
      </ul>
    </nav>
  );
}
