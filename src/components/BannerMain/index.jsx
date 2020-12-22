import React from "react";
import VideoIframeResponsive from "./components/VideoIframeResponsive";
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

export default function BannerMain({ title, description, url }) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  console.log(bgUrl)
  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{title}</ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {description}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton>ASSISTIR</WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
