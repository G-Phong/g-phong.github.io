import React from "react";
import ReactPlayer from "react-player";

import chessVideo from "../assets/chess_board.mp4"

const VideoPlayer = () => {
  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        url={chessVideo}
        playing
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
