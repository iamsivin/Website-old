import "./About.css";

const About = () => {
    return (
      <div className="content">
        <section className="about">
          <div className="container name">
            <div className="block left about-name">
              <h2>About</h2>
            </div>
            <div className="block right">
              <div className="cap">
                <h1 className="name_wrap">
                  <span className="hai">Hello!</span>
                  <span>I'm Sivin Varghese.</span>
                  <br />
                  <p className="caption">
                    A front-end developer from India. Curious about the web.
                    Plays well with HTML, CSS, JavaScript.
                  </p>
                  <br />
                  <p className="caption">
                    And a beginner when it comes to frameworks like React and VueJS.
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="contacts">
            <div className="container">
              <div className="block left contact-name">
                <h2>Contact</h2>
              </div>
              <div className="block right">
                <ul id="social_share_list">
                  <div className="sharelinks">
                    <div className="links">
                      <li>
                        <a
                          id="social_share_github"
                          href="https://github.com/sivin-git">
                        </a>
                      </li>
                    </div>
                    <div className="links">
                      <li>
                        <a
                          id="social_share_email"
                          href="mailto:iamsivin@gmail.com">
                        </a>
                      </li>
                    </div>
                    <div className="links">
                      <li>
                        <a
                          id="social_share_twitter"
                          href="https://twitter.com/sivin_varghese">
                        </a>
                      </li>
                    </div>
                    <div className="links">
                      <li>
                        <a
                          id="social_share_link"
                          href="https://www.linkedin.com/in/sivin-varghese-021a471a4">
                        </a>
                      </li>
                    </div>
                    <div className="links">
                      <li>
                        <a
                          id="social_share_instagram"
                          href="https://www.instagram.com/_psy.kid___/">
                        </a>
                      </li>
                    </div>
                    <div className="links">
                      <li>
                        <a
                          id="social_share_fb"
                          href="https://www.facebook.com/sivin.thoppil/">
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  export default About;
