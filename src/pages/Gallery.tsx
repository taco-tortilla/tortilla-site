import React, { useState } from "react";

// Components
import { Header } from "../components/Header";

// Libraries
import GalleryLibrary from "react-photo-gallery";
import { Footer } from "../components/Footer";
import { Button } from "@mui/material";

// Style
import style from "./Galley.module.scss";

export const Gallery = () => {
  const [select, setSelect] = useState<number>(0);
  return (
    <div className={style.wrapper}>
      <header>
        <Header />
      </header>
      <div className={style.container}>
        {/* <Button variant="outlined"> Photo </Button>
        <Button variant="outlined"> Picture </Button> */}
        <GalleryLibrary photos={photos} />
      </div>
      <Footer />
    </div>
  );
};

export const photos = [
  {
    src: "https://user-images.githubusercontent.com/101196108/204067977-db3fadb2-27aa-44ab-81a8-117f9e05850c.jpg",
    width: 878,
    height: 878,
  },
  {
    src: "https://user-images.githubusercontent.com/101196108/204067937-7e084a9c-4b78-41b3-9e52-516d14403f21.jpg",
    width: 2000,
    height: 1125,
  },
  {
    src: "https://user-images.githubusercontent.com/101196108/204068216-ad59bf82-0955-4329-adcd-adfb9fc950ee.JPG",
    width: 2000,
    height: 1125,
  },
  {
    src: "https://user-images.githubusercontent.com/101196108/204068111-78776d18-a51a-43ff-879c-7550fdfb3655.jpg",
    width: 3024,
    height: 4032,
  },
  {
    src: "https://user-images.githubusercontent.com/101196108/204068048-16bf96be-55cb-4894-a403-627caa7f5fa3.jpg",
    width: 2000,
    height: 1125,
  },
  {
    src: "https://user-images.githubusercontent.com/101196108/204068170-590b81e3-8a06-4a85-8cd7-8b251ba8c016.JPG",
    width: 1125,
    height: 2000,
  },
];
