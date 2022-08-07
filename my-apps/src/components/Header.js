const Header = {
  render() {
    return /* html */`   
      
      <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Feature</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/sign-in">Signin</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>

    <div class="textim">
      <p>
        Hi, I am John, <br />
        Creative Technologist
      </p>
      <h6>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
        amet sint. Velit officia consequat duis enim velit mollit.
        <br />Exercitation veniam consequat sunt nostrud amet.
      </h6>
      <button class="btn btn-danger" style="cursor: pointer">Download Resume</button>
    </div>
    <div class="anh1">
      <img src="/images/Ellipse 1.png" alt="anh1" />
    </div>
    <div class="noidung">
      <p
        style="
          margin: 43px 0px 54px 150px;
          font-family: Tahoma;
          font-size: 13px;
        "
      >
        Featured works
      </p>
    </div>
      </div>
      
        `;
  },

};
export default Header;