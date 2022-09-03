import React from 'react'
import "../css/Header.css"
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <div className='header'>

      <IconButton>
        <PersonIcon fontSize='large' className='header_icon'/>
      </IconButton>

      <img 
        src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png'
        alt='tinder'
        className='header_logo'
      />

      <IconButton>
        <ForumIcon fontSize='large' className='header_icon'/>
      </IconButton>


    </div>
  )
}

export default Header