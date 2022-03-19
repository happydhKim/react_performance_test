import { useQuery } from 'react-query';
import { getFirst, getSecond, getThird, getFourth } from 'services/mainService';

  
const useMain = () => {
  const { isLoading: firstLoading, data: first, isError, error } = useQuery(
    ['first'],
    async () => getFirst(),
    { retry: 5 },
  );
  const { isLoading: secondLoading, data: second } = useQuery(
    ['second', first],
    async () => getSecond(first.depth),
    { enabled: !!first, retry: 3 },
  );
  const { isLoading: thirdLoading, data: third } = useQuery(
    ['third', second],
    async () => getThird(second.depth),
    { enabled: !!second, retry: 3 },
  );
  const { isLoading: fourthLoading, data: fourth } = useQuery(
    ['fourth', third],
    async () => getFourth(third.depth),
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