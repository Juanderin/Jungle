import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/sessionReducer';
import './DropButton.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom";





const DropProfile = ({user}) => {
   
    const dispatch = useDispatch();
    const [dropMenu, setDropMenu] = useState(false);
    const [overlay, setOverlay] = useState(false)
    const history = useHistory();

    const open = () => {
        setDropMenu(true)
    }

    const close = () => {
        setDropMenu(false)
    }


    const handleClickLogout = (e) => {
        e.preventDefault();

        dispatch(sessionActions.logout())

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
              <div className='signInText'>Hello, {user.username}</div>
                <div id='accountListingsContainer'>
                    <span className='accountLists'>Accounts & Lists <i id='carrot' className='fa-solid fa-caret-down' />
                </span>
                </div>
              </div>
              {dropMenu && (
                <>
                  <div id='loggedinDrop'>
                    <span>{user.email}</span>
                    <div id="logoutButton">
                      <button onClick={handleClickLogout}>
                        Log Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
            <div className='carrotContainer'>
            <button className='signInText'>Hello, Sign In
            <br/>
            <div id='accountListingsContainer'>
            <span id='accountListings'>
              Account & Lists <i id='carrot' className="fa-solid fa-caret-down" />
            </span>
            </div>
            </button>
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