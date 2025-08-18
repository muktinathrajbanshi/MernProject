import React, { useState } from "react";

export const Portfolio = () => {
  const [activeBtn, setActiveBtn] = useState(null);

  const projects = [
    {
      id: 1,
      type: "1",
      img: "images/web1.avif",
      link: "https://reactwebsite-41216.web.app/",
      title: "Project 1",
    },
    {
      id: 2,
      type: "1",
      img: "images/web2.avif",
      link: "https://muktinathrajbanshi.github.io/ReactTutorial/",
      title: "Project 2",
    },
    {
      id: 3,
      type: "1",
      img: "images/web3.avif",
      link: "https://weatherappexpressjs-44vq.onrender.com/",
      title: "Project 3",
    },
    {
      id: 4,
      type: "1",
      img: "images/web4.avif",
      link: "https://muktinathecom.netlify.app/",
      title: "Project 4",
    },
    {
      id: 5,
      type: "2",
      img: "images/youtube.avif",
      link: "https://www.youtube.com/@muktinathrajbanshi219",
      title: "Project 5",
    },
    {
      id: 6,
      type: "3",
      img: "images/dsign.avif",
      link: "https://github.com/muktinathrajbanshi",
      title: "Project 6",
    },
  ];

  const filteredProjects = 
    activeBtn === null
        ? projects
        : projects.filter((project) => project.type === activeBtn);

  return (
    <section className="section section-portfolio" id="portfolio-section">
      <div className="container">
        <h2 className="common-heading">Latest Works</h2>
        <p>
          Hello everyone, this is the time for doing something great for
          upcoming future credentials. We have to focus our dream and should
          have give consistency for the real achievement.
        </p>
      </div>

      {/* Buttons */}
      <div className="p-btns">
        <div
          className={`btn p-btn ${activeBtn === "1" ? "p-btn-active" : ""}`}
          onClick={() => setActiveBtn("1")}
        >
          Website
        </div>
        <div
          className={`btn p-btn ${activeBtn === "2" ? "p-btn-active" : ""}`}
          onClick={() => setActiveBtn("2")}
        >
          Youtube
        </div>
        <div
          className={`btn p-btn ${activeBtn === "3" ? "p-btn-active" : ""}`}
          onClick={() => setActiveBtn("3")}
        >
          Design
        </div>
      </div>

      {/* Projects */}
      <div className="container grid grid-three-column portfolio-images">
        {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="img-overlay"
            >
              <img src={project.img} alt="my works" />
              <div className="overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="common-heading"
                >
                  {project.title}
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

