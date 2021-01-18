import React from 'react'
import './VideoHeader.css'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// eslint-disable-next-line no-unused-vars
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import CameraIcon from '@material-ui/icons/Camera';

const VideoHeader = () => {
    return (
        <div className="video__header">
           <ArrowBackIosIcon/> 
           <h3>Reels</h3>
           {/* <CameraAltOutlinedIcon/> */}
           <CameraIcon/>

        </div>
    )
}

export default VideoHeader
