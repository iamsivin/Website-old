import "./About.css";

const About = () => {
  return (
    <div className="content" id="about">
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
                  A front-end developer from India. Curious about the web. Plays
                  well with HTML, CSS, JavaScript.
                </p>
                <br />
                <p className="caption">
                  And a beginner when it comes to frameworks like React and
                  VueJS.
                </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
