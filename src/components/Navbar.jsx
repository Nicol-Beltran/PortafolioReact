function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">PORTAFOLIO</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Novedades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Sobre mi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Tecnologias</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )

}


export default Navbar
