import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/sessionReducer';
import './DropButton.css'
import { useHistory } from "react-router-dom";
import { clearAllCart } from '../../store/cart';




const DropProfile = ({user}) => {
   
    const dispatch = useDispatch();
    const [dropMenu, setDropMenu] = useState(false);
    const history = useHistory();
    const username = user ? user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase() : null

    const open = () => {
        setDropMenu(true)
    }

    const close = () => {
        setDropMenu(false)
    }


    const handleClickLogout = (e) => {
        e.preventDefault();

        dispatch(sessionActions.logout())
        dispatch(clearAllCart())

    }

    const handleClickLogin = (e) => {
      e.preventDefault();

      history.push('/login')

  }



    return (
        <div id='dropButton' onMouseEnter={open} onMouseLeave={close}>
          {user ? (
            <>
            <div id='signedInContainer'>
              <div className='signInText'>Hello, {username}</div>
                <div id='accountListingsContainer'>
                    <span className='accountLists'>Account & Lists <i id='carrot' className='fa-solid fa-caret-down' />
                </span>
                </div>
              </div>
              {dropMenu && (
                <>
                  <div id='loggedinDrop'>
                    <div id='emailBox'>
                      <span>{user.email}</span>
                    </div>
                    <div id="logoutButton">
                      <button id='outButton' onClick={(e) => {handleClickLogout(e)}}>
                        Log Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
            <div id='signedInContainer'>
              <div className='signInText'>Hello, Sign In</div>
                <div id='accountListingsContainer'>
                    <span className='accountLists'>Account & Lists <i id='carrot' className='fa-solid fa-caret-down' />
                </span>
                </div>
              </div>
            {dropMenu &&  (
                <>
                <div id='dropContainer'>
                  <div id='signinDrop'>
                    <button id='homeSignInButton' onClick={handleClickLogin}>
                      Sign In
                    </button>
                  </div>
                  <div id='newCustomer'>New customer? <Link to='/signUp'>  Start Here </Link>
                  </div>
                </div>
  
                </>
            )}
            </>
          )}
        </div>
      );
}


export default DropProfile