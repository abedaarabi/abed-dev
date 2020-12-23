function Footer() {
  return (
    <footer class="footer bg-dark py-5">
      <div class="container grid grid-3">
        <div>
          <h1>Abed | Dev</h1>
          <p>Copyright &copy; 2020</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="features.html">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div class="social">
          <a href="https://github.com/">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://twitter.com/home?lang=en">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
