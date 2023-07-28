import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/sessionReducer';
import './DropButton.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom";





const DropProfile = ({user}) => {
    // debugger
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
              <span>Hello, {user.username}</span>
              <span>Accounts & Lists</span>
              <i className='fa-solid fa-caret-down' />
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
            <div id='carrotContainer'>
            <button id='signInText'>Hello, Sign In
            <br/>
            <span id='accountLists'>
              Account & Lists <i id='carrot' className="fa-solid fa-caret-down" />
            </span>
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
                  <div id='newCustomer'>New customer?
                    <Link to='/signUp'>
                        Start Here
                    </Link>
                  </div>
                </div>
                {/* <div id='overlay'/> */}
                </>
            )}
            </>
          )}
        </div>
      );
}


export default DropProfile