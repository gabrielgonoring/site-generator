

function Footer() {

    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <div className="row">
                    <div>
                        <b>Gono</b><small>Labs</small>
                    </div>
                </div>
                <div className="row pt-3">
                    <small>© {currentYear} Copyright: <a className="text-dark" href="#">Gonolabs</a></small>
                </div>
            </div>
        </footer>
    )
}


export default Footer;