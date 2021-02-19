import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  verified,
}) {
  return (
    <div className="videoCard">
      <img src={image} alt="" className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p className="videoCard__channel">
            {channel}{" "}
            {verified && (
              <CheckCircleOutlineRoundedIcon className="videoCard__icon" />
            )}
          </p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
