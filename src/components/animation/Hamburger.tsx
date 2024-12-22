'use client';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef, useState } from 'react';

interface IProps {}

function Hamburger(props: IProps) {
  const [animationData, setAnimationData] = useState();

  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  useEffect(() => {
    fetch('/lottie/hamburger_close.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAnimationData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onHover = () => {
    if (!lottieRef.current) return;

    lottieRef.current.setSpeed(4);
    lottieRef.current.setDirection(1);
    lottieRef.current.play();
  };

  const onLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.setDirection(-1); // Play in reverse (close to hamburger)
      lottieRef.current.play();
    }
  };

  useEffect(() => {
    console.log('animationData ', animationData, lottieRef.current);
    if (!animationData || !lottieRef.current) return;

    lottieRef.current.pause();
  }, [animationData]);

  if (!animationData) return <div>...loading</div>;
  return (
    <div
      onMouseOver={onHover}
      onMouseOut={onLeave}
      className='relative flex size-[32px] cursor-pointer items-center justify-center bg-black text-black'
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoPlay={false}
        loop={false}
        style={{ width: 40, fill: 'red', stroke: 'black' }}
      />
    </div>
  );
}

export default Hamburger;
