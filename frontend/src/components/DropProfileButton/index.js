import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';




const DropProfile = (user) => {

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

        dispatch(sessionActions.)

    }




}