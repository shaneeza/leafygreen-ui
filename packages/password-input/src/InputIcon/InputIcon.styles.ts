import { css } from '@leafygreen-ui/emotion';
import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

import { States } from '../PasswordInput/PasswordInput.types';

import { StateProps } from './InputIcon.types';

export const baseStyles = css`
  position: absolute;
  top: 50%;
  right: ${spacing[5]}px;
  transform: translate(0%, -50%);
`;

export const themeStateStyles: Record<Theme, Record<StateProps, string>> = {
  [Theme.Light]: {
    [States.Error]: css`
      color: ${palette.red.base};
    `,
    [States.Warning]: css`
      color: ${palette.red.base};
    `,
    [States.Valid]: css`
      color: ${palette.green.dark1};
    `,
  },
  [Theme.Dark]: {
    [States.Error]: css`
      color: ${palette.red.light1};
    `,
    [States.Warning]: css`
      color: ${palette.red.light1};
    `,
    [States.Valid]: css`
      color: ${palette.green.base};
    `,
  },
};