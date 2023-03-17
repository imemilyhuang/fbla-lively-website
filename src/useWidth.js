import { useState, useEffect } from "react"

function getWidth() {
  // const { innerWidth: width, innerHeight: height } = window;
  // return {
  //   width,
  //   height
  // };

  return window.innerWidth
}

export default function useWidth() {
  const [windowDimensions, setWindowDimensions] = useState(getWidth());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
