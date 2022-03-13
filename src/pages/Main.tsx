import { useQuery } from 'react-query';

import type { FC } from 'react';

const Main: FC = () => {
  const { isLoading: firstLoading, data: first, isError, error } = useQuery('first', () =>
    fetch('/api/first').then(res => res.json()),
    {retry: 3},
  );
  const { isLoading: secondLoading, data: second } = useQuery('second', () =>
    fetch(`/api/second?depth=${first.depth}`).then(res => res.json()),
    { enabled: !!first, retry: 3 },
  );
  const { isLoading: thirdLoading, data: third } = useQuery('third', () =>
    fetch(`/api/third?depth=${second.depth}`).then(res => res.json()),
    { enabled: !!second, retry: 3 },
  );
  const { isLoading: fourthLoading, data: fourth } = useQuery('fourth', () =>
    fetch(`/api/fourth?depth=${third.depth}`).then(res => res.json()),
    { enabled: !!third, retry: 3 },
  );

  console.log(first, second, third, fourth, isError, error); 
  return (
    <>
      {firstLoading || secondLoading || thirdLoading || fourthLoading ? 'loading...' : `${first.description}${second.description}${third.description}${fourth.description}`}
    </>
  );
};

export default Main;
