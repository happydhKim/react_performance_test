import styled from '@emotion/styled';

import type { FC } from 'react';

const Main: FC = () => {
  const list = new Array(10000).fill(0).map((item, i) => i);
  console.log(list);
  return (
    <>
      {list.map((i) => (
        <div key={i}>
          <Typography>안녕하세요??</Typography>
        </div>
      ))}
    </>
  );
};

export default Main;

const Typography = styled.div`
  font-weight: 500;
  font-size: 30px;
  white-space: nowrap;
`;
