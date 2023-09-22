    import React, { useState } from 'react';
    import "./sideMenu.css";
    import navListData from '../data/navListData';
    import NavListitem from './NavListitem';
    import socialListData from '../data/socialListData';
    import SocialListitem from './SocialListitem';

    function SideMenu() {
        const[navData,setNavData] = useState(navListData);
    return (
        <div className='sideMenu'>
            {/* Logo  */}
            <a href="#" className='logo'>
                <i className="bi bi-joystick"></i>
                <span className="brand">Jungle</span>
            </a>

                {/* List  */}
            <ul className="nav">
                {navData.map(item => (
                        <NavListitem key={item.id} item={item}  />
                    ))}
            </ul>
            <ul className="social">
                    {socialListData.map(data =>(
                        <SocialListitem key={data.id} data={data} />
                    ))}
            </ul>
            
        </div>
    )
    }

    export default SideMenu
