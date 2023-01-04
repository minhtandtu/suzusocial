import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../components/layout/mainlayout";
import { Hero } from "../components/home/Hero";
import { OurServices } from "../components/home/OurServices";
import { OurHightLightProjects } from "../components/home/OurHightLightProjects";
import { getNewProjects } from "../services";
import useTrans from "../components/hooks/useTrans";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

function Home({ projects }) {
  const trans = useTrans();
  const router = useRouter();
  function changeLang(lang) {
    router.push("/", "/", { locale: lang });
  }
  return (
    <>
      <Head>
        <title>SuZu Social</title>
        <meta name="description" content="Welcome to Suzu Social Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero />
        <OurServices />
        <OurHightLightProjects projects={projects} />
      </main>
    </>
  );
}

Home.Layout = MainLayout;

export default Home;

export async function getStaticProps({ locale }) {
  const projects = (await getNewProjects({ locale })) || [];
  return {
    props: { projects },
  };
}
