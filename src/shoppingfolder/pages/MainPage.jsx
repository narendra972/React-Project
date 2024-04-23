import { useState } from "react";
import React from "react";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Gents } from "../data";
import { Ladies } from "../data";
import WomanCollection from "../components/WomanCollection";

function MainPage() {
  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [ladiesFashion, setLadiesFashion] = useState(Ladies);

  console.log(Gents);
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomanCollection ladiesFashion={ladiesFashion} />
      <Footer />
    </div>
  );
}

export default MainPage;
