import { IconButton } from '@mui/material'
import React from 'react'
import "../css/SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import FavouriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'
import FlashOnIcon from '@material-ui/icons/FlashOn'


function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons_repeat'>
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_left'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_right'>
            <FavouriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_star'>
            <StarIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons_lightning'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
  )
}

export default SwipeButtons