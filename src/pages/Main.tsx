import useMain from 'hooks/useMain';

import type { FC } from 'react';

const Main: FC = () => {
  const { 
    firstLoading,
    secondLoading,
    thirdLoading,
    fourthLoading,
    first,
    second,
    third,
    fourth,
  } = useMain();

  console.log(first, second, third, fourth); 
  return (
    <>
      {firstLoading || secondLoading || thirdLoading || fourthLoading ? 'loading...' : `${first?.description}${second?.description}${third?.description}${fourth?.description}`}
    </>
  );
};

export default Main;
