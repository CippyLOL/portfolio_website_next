import ContactCircle from "./ContactCircle";


const Footer = () => {
    return (
        <footer>
            <ContactCircle />
            <div><h3>Created by Gillianne Papasin</h3>
                <h4><a className="links" href="https://github.com/cippylol">GitHub</a> | <a className="links" href="https://sg.linkedin.com/in/gillianne-papasin/">LinkedIn</a> | <a className="links" href="https://www.behance.net/gillianpapasin">Behance</a>
                </h4>
            </div>

            <div>
                <h4>Come and say hi, I'd love to hear more about your project!</h4>
                <p>Email me at: <a href="mailto:gillmrpapasin@gmail.com">gillmrpapasin@gmail.com</a></p>
            </div>



        </footer>
    );
}

export default Footer;