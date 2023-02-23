import '../styles/NavBar.scss';

export function NavBar() {
  return (
    <div className="main-navbar">
      <div className="logo-container">
        dolce neve
      </div>

      <div className="nav-links">
        <ul>
          <li><a href="#" target="blank">menu</a></li>
          <li><a href="#" target="blank">recetas</a></li>
          <li><a href="#" target="blank">nosotros</a></li>
        </ul>
      </div>

    </div>
  )
}