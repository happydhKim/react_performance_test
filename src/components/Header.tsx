import { memo } from 'react';
import { css } from '@emotion/react';

import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header
      css={css`
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
      `}
    >
      <strong
        css={css`
          cursor: pointer;
          margin-left: 30px;
          padding: 16px 0;
          font-size: 20px;
        `}
      >
        Title 🐝
      </strong>
      <span>로그인</span>
    </header>
  );
};

export default memo(Header);
