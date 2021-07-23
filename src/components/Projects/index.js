import React from "react";
import Footer from "../Footer";
import Rate from "../../assets/images/project-images/rate.jpg";
import Seek from "../../assets/images/project-images/seek.jpg";
import Tabs from "../../assets/images/project-images/tabs.jpg"

const Projects = () => {
  const projects = [
    {
      name: "Tabs",
      image: Tabs,
      githubLink: "https://github.com/nancyrosas0/Tabs",
      deploymentLink: "https://tabs-trial-2.herokuapp.com/",
    },
    {
      name: "Rate Your Bootcamp",
      image: Rate,
      githubLink: "https://github.com/nancyrosas0/Rate-Your-Bootcamp",
      deploymentLink: "https://rate-your-bootcamp.herokuapp.com/",
    },
    {
      name: "SEEK",
      image: Seek,
      githubLink: "https://github.com/nancyrosas0/Seek",
      deploymentLink: "https://nancyrosas0.github.io/Seek/index.html",
    }
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div
                className="card-group col col-lg-auto col-md-auto col-lg-auto mt-3 mb-3 mx-auto align-self-center"
                key={project.name}
              >
                <div
                  className="card results-card col-sm-4 py-2 border-secondary"
                  style={{ width: "26rem", height: "25rem" }}
                >
                  <a
                    href={project.deploymentLink}
                    className="card-link"
                    target="blank"
                  >
                    <img
                      src={project.image}
                      alt="screenshot of application"
                      className="img-thumbnail card-img-top"
                    />
                  </a>
                  <div className="card-body">
                    <h2 className="card-title mb-4">{project.name}</h2>
                    <ul className="list-group list-group-flush mb-4"></ul>
                    <a
                      href={project.deploymentLink}
                      className="card-link"
                      target="blank"
                    >
                      Deployed
                    </a>{" "}
                    <a
                      href={project.githubLink}
                      className="card-link"
                      target="blank"
                    >
                      
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;