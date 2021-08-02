import React from 'react';
import  {Link} from 'react-router-dom';
function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/register" class="navbar-brand" href="/Home">eTransact</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">eTranzact</span>
    </button>
    <div class="s-flex" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
              <Link to="/login" class="nav-link active" aria-current="page"><button className="btn-primary">LOGIN</button></Link>
        </li>
        <li class="nav-item">
          <Link to="/register" class="nav-link"><button className="btn-primary">REGISTER</button></Link>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Navbar;