import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import johnDoeImg from "../assets/img/john-doe-profil.jpg";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />

      <main className="container">
        <section id="about" className="py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={johnDoeImg}
                alt="John Doe"
                className="img-fluid rounded mb-3"
              />
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">About</h2>
                  <p className="card-text">
                    My name is <strong>Joe Doe</strong> and I'm a technology enthusiast in the
                    making. Currently training to become a web developer, I'm
                    about to complete my academic course and enter the
                    professional world. My goal is to use my newly acquired
                    skills in web development to contribute to innovative and
                    challenging projects. I'm driven by curiosity and a constant
                    desire to learn, which is why I'm looking for exciting
                    challenges in my future job. My background has enabled me to
                    master essential web languages and technologies, including
                    HTML, CSS and JavaScript. What's more, I've developed solid
                    web design and development skills through practical projects
                    and academic experience. I'm keen to join a dynamic team
                    where I can contribute and learn in a collaborative
                    environment. My motivation, perseverance and desire to grow
                    professionally make me an ideal candidate for web
                    development opportunities. I'm looking forward to putting my
                    skills to work for a visionary company and contributing to
                    its success.
                  </p>
                  <h3>Skills</h3>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      HTML/CSS (90%)
                    </div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      JavaScript (80%)
                    </div>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      React (70%)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
