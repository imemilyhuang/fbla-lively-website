import { useState, useEffect } from "react"

function getHeight() {
  // const { innerWidth: width, innerHeight: height } = window;
  // return {
  //   width,
  //   height
  // };

  return window.innerHeight
}

export default function useHeight() {
  const [windowDimensions, setWindowDimensions] = useState(getHeight());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getHeight());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
