import { useState, useEffect } from "react";

import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import LeftFooter from "../components/Footer/LeftFooter";
import RightFooter from "../components/Footer/RightFooter";
import Footer from "../components/Footer/Footer";

const HomePage = () => {


  const [userInfo, setUserInfo] = useState({
    username: "", 
    aboutme: "", 
    techstack: ""
  });

  useEffect(() => {
      fetch('/api/about', {
          method: 'GET', 
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => setUserInfo(data.userInfo[0]));
  }, []);

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
      {displayContent && <LeftFooter></LeftFooter>}
        <Home userInfo={userInfo}></Home>
      {displayContent && <RightFooter></RightFooter>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
