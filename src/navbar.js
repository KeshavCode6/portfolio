const navbar = `
<nav class="navbar fixed-top navbar-expand-lg">
<div class="container-fluid d-flex align-items-center"
  style="display: flex; justify-content: center; align-items: center; max-width: 25%;">
  <a class="navbar-brand" href="#">
    <img src="assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Keshav Shah
    <button class="navbar-toggler bi bi-list" style="margin-left: 10px;" type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
    </button>
  </a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav justify-content-center" style="gap: 10px;">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="achievements.html">Achievements</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="projects.html">Projects</a>
      </li>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" style="color: #c7c7c7;" type="button"
          id="dropdownMenuButton2" data-toggle="dropdown" aria-expanded="false">
          Contact
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
          <li><a class="dropdown-item gap-4" href="https://discordapp.com/users/743962655072452680"  target="_blank"> <span class="bi bi-discord" style="margin-right: 10px;"></span>Discord</a></li>
          <li><a class="dropdown-item gap-4" href="mailto:keshavrshah@gmail.com"  target="_blank"> <span class="bi bi-envelope-fill" style="margin-right: 10px;"></span>Gmail</a></li>
          <li><a class="dropdown-item gap-4" href="https://github.com/KeshavCode6"  target="_blank"> <span class="bi bi-github" style="margin-right: 10px;"></span>Github</a></li>
        </ul>
      </div>
    </ul>
  </div>
</div>
</nav>


`

document.body.innerHTML += navbar;
