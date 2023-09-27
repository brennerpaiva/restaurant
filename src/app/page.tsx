import Image from "next/image";
import Head from "next/head";
import Headline from "./home/components/headline/Headline";
import OurServices from "./home/components/ourServices/OurServices";
import Menu from "./home/components/menu/Menu";
import Feedbacks from "./home/components/feedbacks";
import Reserve from "./home/components/reserve";
import Modal from "./components/modal";
import Header from "@/app/components/header/Header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Headline />
      <OurServices />
      <Menu />
      <Feedbacks />
      <Reserve />
      <Modal />
      <Footer />
    </div>
  );
}
