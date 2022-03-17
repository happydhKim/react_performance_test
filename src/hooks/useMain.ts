import { useQuery } from 'react-query';

const useMain = () => {
  const { isLoading: firstLoading, data: first, isError, error } = useQuery(['first'], () =>
  fetch('/api/first').then(res => res.json()),
  { retry: 5 },
  );
  const { isLoading: secondLoading, data: second } = useQuery(['second', first], () =>
    fetch(`/api/second?depth=${first.depth}`).then(res => res.json()),
    { enabled: !!first, retry: 3 },
  );
  const { isLoading: thirdLoading, data: third } = useQuery(['third', second], () =>
    fetch(`/api/third?depth=${second.depth}`).then(res => res.json()),
    { enabled: !!second, retry: 3 },
  );
  const { isLoading: fourthLoading, data: fourth } = useQuery(['fourth', third], () =>
    fetch(`/api/fourth?depth=${third.depth}`).then(res => res.json()),
    { enabled: !!third, retry: 3 },
  );

  return {
    firstLoading,
    secondLoading,
    thirdLoading,
    fourthLoading,
    first,
    second,
    third,
    fourth,
  }
};

export default useMain;