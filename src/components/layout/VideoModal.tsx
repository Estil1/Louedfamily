import React from "react";

const VideoModal = () => {
  return (
    <div className="vid-m">
      <div className="vid-c">
        <button
          aria-label="close video popup"
          className="close-v"
          onClick={() => {}}
        >
          <i className="fa-light fa-xmark-large"></i>
        </button>
        <video autoPlay loop muted controls>
          <source src="/images/popup-video.mp4" type="video/mp4" />
        </video>
        <h5>Hello</h5>
      </div>
    </div>
  );
};

export default VideoModal;
