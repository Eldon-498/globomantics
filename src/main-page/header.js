import logo from "./GloboLogo.png";

const Header = ({ title }) => (
    <header className='row'>
        <div className='col-md-5'>
            <img src={logo} className='logo' alt='logo' />
        </div>
        <div className="col-mid-7 mt-5 subtitle">
            { title }
        </div>



    </header>
)

export default Header