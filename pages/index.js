import { useState, useEffect } from "react";

import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import LeftFooter from "../components/Footer/LeftFooter";
import RightFooter from "../components/Footer/RightFooter";
import clientPromise from "../lib/mongodb";

import Head from "next/head";

const HomePage = (props) => {

  const userDetails = JSON.parse(props.userDetails);

  const [displayContent, setDisplayContent] = useState(true);

  const displayContentHandler = () => {
    setDisplayContent(window.matchMedia("(min-width: 640px)").matches);
  };

  let windowSize;
  useEffect(() => {
    windowSize = window.matchMedia("(min-width: 640px)").matches;
    if (!windowSize)
      setDisplayContent(false);
  }, [windowSize]);

  useEffect(() => {
    window.matchMedia("(min-width: 640px)").addEventListener('change', displayContentHandler);

    return () => {
      window.matchMedia("(min-width: 640px)").removeEventListener('change', displayContentHandler);
    };
  }, [displayContent, windowSize]);


  return (
    <>
      <Head>
        <title>Omkar | CyberKnight</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <div className="flex flex-col min-h-screen overflow-visible">
        <NavBar displayContent={displayContent}></NavBar>
          <div className="flex items-center p-8">
            {displayContent && <LeftFooter 
                                  github={userDetails.github} 
                                  linkedin={userDetails.linkedin} 
                                  twitter={userDetails.twitter}
                                  instagram={userDetails.instagram}>
                                </LeftFooter>
            }
              <Home userInfo={userDetails} showIcons={displayContent}></Home>
            {displayContent && <RightFooter></RightFooter>}
          </div>
      </div>
    </>
  );
};

export default HomePage;


export async function getStaticProps(context){

  const client = await clientPromise;
  const db = client.db("portfolio");
  const userInfo = await db.collection("about").find({}).toArray();
  
  return {
    props: {
      userDetails: JSON.stringify(userInfo[0])
    }, 
    revalidate: 10
  };
}