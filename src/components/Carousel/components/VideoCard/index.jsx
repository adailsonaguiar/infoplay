import React from "react";
import * as S from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoTitle, videoURL }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  return (
    <S.Container>
      <S.VideoCardContainer url={image} href={videoURL} target="_blank" />
      <p>{videoTitle}</p>
    </S.Container>
  );
}

export default VideoCard;
