import React from 'react';
import "../../styles/css/footer.scss"

const Footer = () => {
    return (
        <div className="home-footer">
            <footer className="footer-container">
                <div className="footer-container2">
                    <a href=""><span className="footer-text">Home</span></a>
                    <a href="https://www.linkedin.com/in/carlos-jose-cruz-luengas/" target="_blank"><span className="footer-text"><i class="bi bi-linkedin" style={{ fontSize: "1.2rem" }} ></i></span></a>
                    <a href="https://github.com/" target="_blank"><span className="footer-text"><i class="bi bi-github" style={{ fontSize: "1.2rem" }} ></i></span></a>
                </div>
                <div className="footer-container2">
                    <a href="mailto:carlosjose445566@gmail.com"><span className="footer-text">Mi email : CarlosJose445566@gmail.com</span></a>
                </div>

                <span className="home-copyrigth-text Body2">
                    <h5>© 2023 Make with <i class="bi bi-heart-fill" style={{ color: "red" }}></i> by Carlos Cruz</h5>
                </span>
            </footer>
        </div>
    );
}

export default Footer;
