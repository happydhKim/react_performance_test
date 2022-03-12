import { useQuery } from 'react-query';
import { Button } from 'components/Button';

import type { FC } from 'react';

const Main: FC = () => {
  const { data: first } = useQuery('first', () =>
    fetch('/api/first').then(res => res.json()),
  );
  const { data: second } = useQuery('second', () =>
    fetch(`/api/second?depth=${first.depth}`).then(res => res.json()),
    { enabled: !!first },
  );
  const { data: third } = useQuery('third', () =>
    fetch(`/api/third?depth=${second.depth}`).then(res => res.json()),
    { enabled: !!second },
  );
  const { data: fourth } = useQuery('fourth', () =>
    fetch(`/api/fourth?depth=${third.depth}`).then(res => res.json()),
    { enabled: !!third },
  );
  console.log(first, second, third, fourth); 
  return (
    <>
      <Button>
        Button
      </Button>
      Main pages
    </>
  );
};

export default Main;
