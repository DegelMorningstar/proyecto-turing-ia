import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a className="brandTitle me-4" href="/">Slalom</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#what-we-do">What we do</a>
            </li>
            <li className="nav-item">
              <Link href="#who-we-are">
                <a className="nav-link">Who we are</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Insights</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Careers</a>
              </Link>
            </li>
            <li className="nav-item mt-2 ms-2 me-4">
              <Link href="/">
                <button type="button" className="btn btn-outline-light">Let's Talk</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
