import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/sessionReducer';
import './DropButton.css'




const DropProfile = ({user}) => {
    // debugger
    const dispatch = useDispatch();
    const [dropMenu, setDropMenu] = useState(false);

    const open = () => {
        setDropMenu(true)
    }

    const close = () => {
        setDropMenu(false)
    }


    const handleClick = (e) => {
        e.preventDefault();

        dispatch(sessionActions.logout())

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
                      <button onClick={handleClick}>
                        Log Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
            <span>Hello, Sign In</span>
            <i className="fa-solid fa-caret-down" />
            {dropMenu && (
                <>
                <div id='signinDrop'>
                <Link to='/login'>
                    Sign In
                </Link>
                </div>
                <div id='newCustomer'>
                <Link to='/signUp'>
                    Start Here
                </Link>
                </div>
                </>
            )}
            </>
          )}
        </div>
      );
}


export default DropProfile