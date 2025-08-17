export const Footer = () => {
    return (
        <>
            {/* footer section start  */}
         <footer className="section-footer section footer">
      <div className="container grid grid-four-column">
        <div className="f-about">
          <h3>About</h3>
          <p>
            Passionate creator driven by innovation, storytelling, and purpose. I blend creativity with technology to build meaningful experiences that inspire, connect, and make a lasting impact.
          </p>
        </div>
        {/* <!-- end --> */}
        <div className="f-links">
          <h3>Links</h3>
          <ul>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="./index.html">home</a>
            </li>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="./about.html">about</a>
            </li>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="./service.html">services</a>
            </li>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="./portfolio.html">portfolio</a>
            </li>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="./contact.html">contact</a>
            </li>
          </ul>
        </div>
        {/* <!-- end  --> */}
        <div className="f-services">
          <h3>Services</h3>
          <ul>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="#">web design</a>
            </li>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="#">web development</a>
            </li>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="#">Mern Project</a>
            </li>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="#">Online Classes</a>
            </li>
            <li>
              <span><ion-icon name="arrow-forward-outline" /></span>
              <a href="#">Youtube Course</a>
            </li>
          </ul>
        </div>
        {/* <!-- end  --> */}
        <div className="f-address">
          <h3>Have a Questions?</h3>
          <address>
              <div>
                <p>
                  <span><ion-icon name="location-outline" /></span>
                  Kathmandu, Nepal
                </p>
              </div>

              <div>
                <p>
                  <span><ion-icon name="call-outline" /></span>
                  <a href="tel:+9779804915608"> +977 9804915608</a>
                </p>
              </div>

              <div>
                <p>
                  <span><ion-icon name="mail-outline" /></span>
                  <a href="mailto:muktinathrajbanshi786@gmail.com"> im@muktinathrajbanshi.com</a>
                </p>
              </div>
          </address>
        </div>
      </div> 

      <div className="container">
        <div className="f-social-icons">

          <a href="https://www.instagram.com/muktinath_rajbanshi/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram" className="icons" />
          </a>

          <a href="https://www.youtube.com/@muktinathrajbanshi219" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-youtube" className="icons" />
          </a>

          <a href="https://github.com/muktinathrajbanshi" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github" className="icons" />
          </a>

        </div>

        <div className="f-credits">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This application is made with 🤍 by Muktinath Rajbanshi
          </p>
        </div>
      </div>
    </footer>
        </>
    );
};