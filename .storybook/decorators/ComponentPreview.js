import React from 'react';
import { css, cx } from '@leafygreen-ui/emotion';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { palette } from '@leafygreen-ui/palette';

const rootStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 100px;
  height: 100%;
`;

const darkModeStyle = css`
  background-color: ${palette.black};
`;

// eslint-disable-next-line react/display-name
export default (Story, options) => {
  const darkMode = options.args.darkMode;
  return (
    <LeafyGreenProvider>
      <div className={cx(rootStyle, { [darkModeStyle]: darkMode })}>
        <Story darkMode={darkMode} {...options} />
      </div>
    </LeafyGreenProvider>
  );
};
