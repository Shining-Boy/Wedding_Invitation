import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/wedding_photo01.jpg";
import GalleryPhoto2 from "../assets/wedding_photo02.jpg";
import GalleryPhoto3 from "../assets/wedding_photo03.jpg";
import GalleryPhoto4 from "../assets/wedding_photo04.jpg";
import GalleryPhoto5 from "../assets/wedding_photo05.jpg";
import GalleryPhoto6 from "../assets/wedding_photo06.jpg";
import GalleryPhoto7 from "../assets/wedding_photo07.jpg";
import GalleryPhoto8 from "../assets/wedding_photo08.jpg";
import GalleryPhoto9 from "../assets/wedding_photo09.jpg";
import GalleryPhoto10 from "../assets/wedding_photo10.jpg";
import GalleryPhoto11 from "../assets/wedding_photo11.jpg";
import GalleryPhoto12 from "../assets/wedding_photo12.jpg";
import GalleryPhoto13 from "../assets/wedding_photo13.jpg";
import GalleryPhoto14 from "../assets/wedding_photo14.jpg";
import GalleryPhoto15 from "../assets/wedding_photo15.jpg";
import GalleryPhoto16 from "../assets/wedding_photo16.jpg";
import GalleryPhoto17 from "../assets/wedding_photo17.jpg";
import GalleryPhoto18 from "../assets/wedding_photo18.jpg";

import GalleryPhoto21 from "../assets/wedding_photo21.jpg";
import GalleryPhoto22 from "../assets/wedding_photo22.jpg";
import GalleryPhoto23 from "../assets/wedding_photo23.jpg";
import GalleryPhoto24 from "../assets/wedding_photo24.jpg";
import GalleryPhoto25 from "../assets/wedding_photo25.jpg";
import GalleryPhoto26 from "../assets/wedding_photo26.jpg";
import GalleryPhoto27 from "../assets/wedding_photo27.jpg";

import GalleryPhoto31 from "../assets/wedding_photo31.jpg";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
  {
    original: GalleryPhoto18,
    thumbnail: GalleryPhoto18,
  },
  {
    original: GalleryPhoto21,
    thumbnail: GalleryPhoto21,
  },
  {
    original: GalleryPhoto22,
    thumbnail: GalleryPhoto22,
  },
  {
    original: GalleryPhoto23,
    thumbnail: GalleryPhoto23,
  },
  {
    original: GalleryPhoto24,
    thumbnail: GalleryPhoto24,
  },
  {
    original: GalleryPhoto25,
    thumbnail: GalleryPhoto25,
  },
  {
    original: GalleryPhoto26,
    thumbnail: GalleryPhoto26,
  },
  {
    original: GalleryPhoto27,
    thumbnail: GalleryPhoto27,
  },

  {
    original: GalleryPhoto31,
    thumbnail: GalleryPhoto31,
  },
  // {
  //   original: GalleryPhoto5,
  //   thumbnail: GalleryPhoto5,
  // },
  // {
  //   original: GalleryPhoto6,
  //   thumbnail: GalleryPhoto6,
  // },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
