import Image from "next/image";
import Head from "next/head";
import Headline from "./home/components/headline/Headline";
import OurServices from "./home/components/ourServices/OurServices";

export default function Home() {
  return (
    <div>
      <Headline />
      <OurServices />
    </div>
  );
}
