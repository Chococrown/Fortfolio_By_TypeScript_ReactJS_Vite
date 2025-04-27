import '../components_Header/styles_Header/Header.css'

import Theme from './Theme';

import home from './icons_Header/home.png'


function Header() {
    return <header>

        <div className="Header_Navbar">

            <div className="header__Navbar__01">

                <div>
                    <img 
                    src = {home}
                    alt = "Home" />
                </div>

                <div>ประเสริฐ ตุ่นก่อ</div>

                </div>
                    <ul className="Header__Navbar__Menu">
                        <li>ผลงาน</li>
                        <li>ติดต่อ</li>
                        <Theme />
                    </ul>

        </div>
        
        <hr />
        <br />

    </header>
}

export default Header;

