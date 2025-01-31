import React from 'react'


export default function Navigationbar(props) {
  return (
    <>
    <div><nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" >{props.title}</a>
      
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          
            <a className="nav-link active" aria-current="page" target ={"_blank"} href="https://en.wikipedia.org/wiki/Superman">Home
            
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target='_blank' href="https://en.wikipedia.org/wiki/Superman_and_Lois_Lane">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Other Heros
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://batman.fandom.com/wiki/Bruce_Wayne">Batman</a></li>
              <li><a className="dropdown-item" href="https://www.marvel.com/characters/iron-man-tony-stark">IronMan</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="https://www.marvel.com/characters/hulk-bruce-banner">Hulk iff you want</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true" href="#">i dont like pepa pig</a>
          </li>
        </ul>
        <form className="d-flex" role="search" method="GET">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
    </>
  )
}
