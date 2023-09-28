import Image from "next/image";
import Head from "next/head";
import Headline from "./home/components/Headline";
import OurServices from "./home/components/OurServices";
import Menu from "./home/components/Menu";
import Feedbacks from "./home/components/Feedbacks";
import Reserve from "./home/components/Reserve";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Headline />
      <OurServices />
      <Menu />
      <Feedbacks />
      <Reserve />
      <Footer />
    </div>
  );
}
