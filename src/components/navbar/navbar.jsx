import React, {useContext, useEffect, useRef, useState} from 'react';

import './nav-bar.css'
import MoraMathsBlackLogo from "../../assets/MoraMathsBlackLogo.png";
import MTutorLogo from "../../assets/MTutorColorLogo.png";
import profileImg from "../../assets/dp.png";
import { HiMenuAlt3,HiOutlineX } from "react-icons/hi";
import {auth} from "../../config/firebase"
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../contextStore/AuthProvider';


const Navbar = () => {
    const {currentUser} = useContext(AuthContext)

    const menuRef = useRef(null);
    const [menu,setMenu ] = useState({
        mainMenuIsOpen:false,
        offCanvasMenuIsOpen:false
    })

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                handleMenu('mainMenuIsOpen');
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [menu.mainMenuIsOpen]);


    const handleMenu = (menuType) =>{
        setMenu(prev => ({
            ...prev,
            [menuType]: !menu[menuType],
        }))
    }

      const handleLogout = async () => {
        try {
          await auth.signOut();
          window.location.href = "/signup"; // Redirect to the login page after logout
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
        finally {
          // clear local storage
            localStorage.clear();
        }
      };

      const onLogoClicked = () =>{
        window.location.href = "/";
      }

    return (
        <section className='nav-container'>
            <section>
                <div className="img-container">
                    <div className="img-black-logo" onClick={onLogoClicked} style={{marginLeft:10}}>
                        <img
                            src={MoraMathsBlackLogo}
                            alt="MoraMathsBlackLogo"
                        />
                    </div>
                    <div className="img-tutor-logo" onClick={onLogoClicked} style={{marginLeft:10}}>
                        <img
                            src={MTutorLogo}
                            alt="MTutorLogo"
                        />
                    </div>
                </div>
                <div className='search'>
                    <input
                        type="text"
                        className="search_input"
                        placeholder="Search here..."
                    />
                </div>
                {currentUser && <div className='profile' onClick={()=>handleMenu('mainMenuIsOpen')}>

                    <div className="user-profile">
                        <span>{currentUser?.displayName}</span>
                    </div>
                    <img
                        className='profile_img'
                        src={profileImg}
                        alt="Profile"
                    />
                    {
                        menu.mainMenuIsOpen &&
                        <ul className='main-menu_container' ref={menuRef}>
                            <li>
                                <a href="/profile">Profile</a>
                            </li>
                            <li>
                            <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>}
                </div>}
                {/* <div className='menu'>
                    {
                        menu.offCanvasMenuIsOpen ? (<HiOutlineX onClick={()=>handleMenu('offCanvasMenuIsOpen')}/>):
                            (<HiMenuAlt3 onClick={()=>handleMenu('offCanvasMenuIsOpen')}/>)
                    }

                </div> */}
            </section>
            {
                menu.offCanvasMenuIsOpen &&
                <div className='menu-container'>
                    <div className=''>
                        <input
                            type="text"
                            style={{padding:"8px 20px"}}
                            className="search_input"
                            placeholder="Search here..."
                        />
                    </div>
                    <ul className='offCanvas-menu-item_container'>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                            
                        </li>
                    </ul>
                </div>

            }
        </section>
    );
};

export default Navbar;