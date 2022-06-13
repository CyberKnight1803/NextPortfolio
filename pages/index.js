import { useState, useEffect } from "react";

import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import LeftFooter from "../components/Footer/LeftFooter";
import RightFooter from "../components/Footer/RightFooter";
import Footer from "../components/Footer/Footer";
import clientPromise from "../lib/mongodb";


const HomePage = (props) => {

  const userDetails = JSON.parse(props.userDetails);

  // const [userInfo, setUserInfo] = useState({
  //   username: "", 
  //   aboutme: "", 
  //   techstack: ""
  // });


  // useEffect(() => {
  //     fetch('/api/about', {
  //         method: 'GET', 
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //     .then(response => response.json())
  //     .then(data => setUserInfo(data.userInfo[0]));
  // }, []);

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
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex items-center p-8">
      {displayContent && <LeftFooter 
                            github={userDetails.github} 
                            linkedin={userDetails.linkedin} 
                            twitter={userDetails.twitter}
                            instagram={userDetails.instagram}>
                          </LeftFooter>
      }
        <Home userInfo={userDetails}></Home>
      {displayContent && <RightFooter></RightFooter>}
      </div>
      <Footer></Footer>
    </div>
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