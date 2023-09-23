import Image from "next/image";
import Head from "next/head";
import Headline from "./home/components/headline/Headline";
import OurServices from "./home/components/ourServices/OurServices";
import Menu from "./home/components/menu/Menu";
import Feedbacks from "./home/components/feedbacks";

export default function Home() {
  return (
    <div>
      <Headline />
      <OurServices />
      <Menu />
      <Feedbacks />
    </div>
  );
}
