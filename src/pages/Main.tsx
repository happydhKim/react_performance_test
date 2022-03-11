import { useQuery } from 'react-query';
import { Button } from 'components/Button';

import type { FC } from 'react';

const Main: FC = () => {
  const { data: first } = useQuery('first', () =>
    fetch('/api/first').then(res => res.json()),
  );
  const { data: second } = useQuery('second', () =>
    fetch('/api/second').then(res => res.json()),
  );
  const { data: third } = useQuery('third', () =>
    fetch('/api/third').then(res => res.json()),
  );
  const { data: fourth } = useQuery('fourth', () =>
    fetch('/api/fourth').then(res => res.json()),
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
