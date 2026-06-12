"use client";

import { useEffect, useRef, useState } from "react";
import { Inter, Jersey_10  } from "next/font/google";

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
});

const Home = () => {
    const text = "HI, I AM SAMANTHA.";
    const [displayed, setDisplayed] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
        }},
        { threshold: 0.5 }
        );

    if (headingRef.current) {
        observer.observe(headingRef.current);
    }

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
  if (!isVisible) return;

  let i = 0;

  const interval = setInterval(() => {
    setDisplayed(text.slice(0, i + 1));
    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 100);

  return () => clearInterval(interval);
}, [isVisible]);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setDisplayed("");
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
    { threshold: 0.5 }
  );

  if (headingRef.current) {
    observer.observe(headingRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <div id="home" className="min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1
            ref={headingRef}
            className={`${jersey.className} text-5xl`}
        >
            {displayed}
            <span className="animate-pulse">|</span>
        </h1>

        <p className={`${inter.className} text-lg`}>
          This is the home section of my portfolio website
        </p>
      </div>
    </div>
  );
};

export default Home;