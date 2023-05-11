import { useEffect } from 'react';
import { StyledBackground } from "../Styles/StyledBackground";

export function Background() {

  useEffect(() => {
    const onScroll = () => {
      const scrollPercent = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      document.documentElement.style.setProperty('--scroll', String(scrollPercent));
    };

    window.addEventListener('scroll', onScroll);
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <>
      <StyledBackground className="bg" />
      <StyledBackground className="bg2" />
      <StyledBackground className="bg3" />
    </>
  );
}




