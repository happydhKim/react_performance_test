import { memo } from 'react';
import { css } from '@emotion/react';

import type { FC } from 'react';
import type { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {
  const {color, size, children, disabled, onClick} = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      css={css`
        cursor: pointer;
        height: 40px;
        width: 100%;
        text-align: center;
        border-top: 1px solid #ccc;
        background-color: #191f28;
        color: #b0b8c1;
        padding: 0 10px;
        &:hover {
          background-color: #ccc;
        }
      `}
    >
      {children}
    </button>
  );
};

export default memo(Button);
