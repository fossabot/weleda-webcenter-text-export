import logo from '../images/weleda-logo.svg';

function Header() {
    return(
        <div className="bg-primary">
            <div className="container mx-auto p-4 flex flex-row">
                <img src={logo} alt="Weleda" className="inline-block" />
                <p className="text-white">Web Center XML to text converter</p>
            </div>
        </div>
    );
}

export default Header;
