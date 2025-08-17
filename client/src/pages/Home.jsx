import  Testimonial  from "../components/Testimonial";
import { WorkSection } from "../components/Work-Section";
import { Contact } from "./Contact";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return(
    <>
     <main>
      <section className="section-hero section">
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">this is me</p>
            <div className="hero-heading">muktinath tech</div>
            <p className="hero-para">
              I'm muktinath rajbanshi. A Full stack Developer, youtuber and freelancer. 
              Empower your business with Muktinath Tech — delivering
              innovative, tailor-made IT solutions to help you stay ahead in the digital era.
            </p>
            <div>
              <NavLink to="/contact"><button className="btn hireme-btn">connect now</button></NavLink>
              {/* <a href="/services"><button className="btn hireme-btn">learn more</button></a> */}
            </div>
          </div>
          {/* hero section right side  */}
          <div className="section-hero-image">
            <img 
            src="/images/heroimg.avif" 
            alt="hero section img" 
            className="hero-img"
             />
          </div>
        </div>
      </section>
     </main>

    {/* Biodata Section Starts  */}

      <section className="section-biodata section">
      <div className="container grid grid-two-column">
        <div className="bio-image">
          <img src="images/bioimg.avif" alt="my biodata image" />
        </div>
         {/* bio right side data  */}
        <div className="bio-data">
          <h2 className="common-heading">my bio-data</h2>
          <p>
            Hello, this is me muktinath rajbanshi. I am keen interested in
            fullstack developer all over the world. I am youtuber, freelancer
            and IT professionals in Nepal. I am serving lots of individuals
            regarding websites design.
          </p>
          <br />
          <p>
            One of my favorite projects are listed in my X account. Please visit
            that site you feel happy upon seeing that.
          </p>
          <div className="bio-data-stats">
            <div className="bio-stats">
              <h3>Design</h3>
              <div className="bio-progress-bar">
                <span>80%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>HTML</h3>
              <div className="bio-progress-bar bio-progress-2">
                <span>99%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>CSS</h3>
              <div className="bio-progress-bar bio-progress-3">
                <span>80%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>JavaScript</h3>
              <div className="bio-progress-bar bio-progress-4">
                <span>60%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>MERN</h3>
              <div className="bio-progress-bar bio-progress-5">
                <span>80%</span>
              </div>
            </div>
          </div>
          <div className="bio-data-btn">
            <a href="https://docs.google.com/document/d/1xjLFCcBFBT116VXFl2Z-6Iiz1d6wfhclBGKdlpwGfQg/edit?tab=t.0"
             className="btn"
             download
             target="_blank"
             >Download CV</a>
          </div>
        </div>
      </div>
    </section>

     {/* work counter section start  */}
      <WorkSection /> 

     {/* Resume Section Start    */}

    <div className="section section-resume">
      <div className="container grid grid-two-column">
         {/* resume left side   */}
         <div className="resume-img">
          <img 
          src="images/lazy1.avif"
          data-src="images/biodata.jpg"
           alt="resume image" 
           className="lazy-img"
           loading="lazy" />
         </div>

          {/* resume right side   */}
          <div className="resume-data">
            <h2 className="common-heading">resume</h2>
            <p className="resume-para">My Work Experience</p>
            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>React Developer</h3>
                <div className="grid grid-two-column">
                  <p><ion-icon name="business-outline" /> Jooneli Inc,</p>
                  <p><ion-icon name="location-outline" /> Kathmandu, Nepal</p>
                </div>
              </div>
               <div className="resume-data-right">
                <p className="resume-data-button">Fulltime</p>
                 <span><ion-icon name="calendar-outline" /> November 2023 - Feb 2025</span>
              </div> 
            </div>

            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>KCC EXHIBIT 2024</h3>
                <div className="grid grid-two-column">
                  <p><ion-icon name="business-outline" /> KCC.</p>
                  <p><ion-icon name="location-outline" /> Putalisadak, KTM</p>
                </div>
              </div>
               <div className="resume-data-right">
                <p className="resume-data-button">Fulltime</p>
                 <span><ion-icon name="calendar-outline" /> August 2024 - Aug 2024</span>
              </div> 
            </div>

            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>UI/UX</h3>
                <div className="grid grid-two-column">
                  <p><ion-icon name="business-outline" /> Machnet</p>
                  <p><ion-icon name="location-outline" /> Phurtiman, KTM</p>
                </div>
              </div>
               <div className="resume-data-right">
                <p className="resume-data-button">Fulltime</p>
                 <span><ion-icon name="calendar-outline" /> December 2022 - Dec 2022</span>
              </div> 
            </div>

            <p className="resume-para">Education</p>
            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>Computer Science</h3>
                <div className="grid grid-two-column">
                  <p><ion-icon name="business-outline" /> GBM, College</p>
                  <p><ion-icon name="location-outline" /> Jhapa, BTM</p>
                </div>
              </div>
               <div className="resume-data-right">
                <p className="resume-data-button">+2</p>
                 <span><ion-icon name="calendar-outline" /> January 2016 - Jan 2018</span>
              </div> 
            </div>

            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>BCA</h3>
                <div className="grid grid-two-column">
                  <p><ion-icon name="business-outline" /> KCC</p>
                  <p><ion-icon name="location-outline" /> Putalisadak, KTM</p>
                </div>
              </div>
               <div className="resume-data-right">
                <p className="resume-data-button">Bachelor</p>
                 <span><ion-icon name="calendar-outline" /> December 2020 - Dec 2024</span>
              </div> 
            </div>

          </div>
      </div>
    </div>

    {/* our testimonial/swiper section starts  */}

    <Testimonial />


     {/* our freelancing section starts  */}

    <section className="section section-freelancing">
      <div className="overlay"></div>
      <div className="container">
        <h2>I am <span>available</span> for freelancing</h2>
        <p>Hello, Are you looking for Website application? Then this will be the right destination for you!.</p>
        <NavLink to="/contact" className="btn">HIRE ME</NavLink>
      </div>
    </section>

    {/* contact section  */}
          <Contact />
    </>
);
};