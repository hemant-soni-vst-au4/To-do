const header = () => {
  const headerNav = document.querySelector('#header__nav');
  headerNav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark text-light">
  <a class="navbar-brand" href="#"><i class="fas fa-check-double"></i></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link pt-3" href="#"><i class="fa fa-fw fa-home "></i> </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><input class="form-control mr-sm-2" type="search" placeholder="Search"></a>
      </li>
    </ul>
    <div class=" my-2 my-lg-0">
      <i role='button' class="fas fa-plus mr-1 mx-2 "></i>
      <span class="mx-2"><i class="fa fa-fw fa-list-ul mr-2"></i>All List</span>
      <span class="mx-2">
        <i class="fa fa-fw fa-user mr-2"></i>Login
      </span>

    </div>
  </div>
</nav>`;
};

export default header;
