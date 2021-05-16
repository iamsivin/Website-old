import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contacts">
        <div className="container contact-container">
          <div className="block block-small left contact-name">
            <h2>Contact</h2>
          </div>
          <div className="block block-small right">
            <ul id="social_share_list">
              <div className="sharelinks">
                <div className="links">
                  <li>
                    <a
                      id="social_share_github"
                      href="https://github.com/iamsivin">
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
                      href="https://www.instagram.com/siv.__in/">
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
  );
};
export default Contact;
