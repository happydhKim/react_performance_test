import { memo } from 'react';
import { css } from '@emotion/react';

import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer
      css={css`
        height: 80px;
        width: 100%;
        text-align: center;
        border-top: 1px solid #ccc;
        background-color: #191f28;
        color: #b0b8c1;
        padding: 50px;
      `}
    >
      Bee Hooks 2022
    </footer>
  );
};

export default memo(Footer);
