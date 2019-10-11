const React = require('react');

class Footer extends React.Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <footer className="nav-footer" id="footer">
                <section className="copyright">
                    Copyright &copy; {currentYear} 方运江.
                </section>
            </footer>
        );
    }
}

module.exports = Footer;
