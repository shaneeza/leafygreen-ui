import React from 'react';
import { css, cx } from '@leafygreen-ui/emotion';
import { HTMLElementProps } from '@leafygreen-ui/lib';
import { BaseFontSize, fontFamilies, typeScales } from '@leafygreen-ui/tokens';
import { Mode } from '../types';
import { palette } from '@leafygreen-ui/palette';
import { useBaseFontSize } from '@leafygreen-ui/leafygreen-provider';

const descriptionStyle = css`
  font-family: ${fontFamilies.default};
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;
`;

const descriptionTypeScale: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: css`
    font-size: ${typeScales.body1.fontSize};
    line-height: ${typeScales.body1.lineHeight};
  `,
  [BaseFontSize.Body2]: css`
    font-size: ${typeScales.body2.fontSize};
    line-height: ${typeScales.body2.lineHeight};
  `,
};

const descriptionColorStyle: Record<Mode, string> = {
  [Mode.Light]: css`
    color: ${palette.gray.dark1};
  `,
  [Mode.Dark]: css`
    color: ${palette.gray.light1};
  `,
};

const disabledDescriptionColorStyle: Record<Mode, string> = {
  [Mode.Light]: css`
    color: ${palette.gray.base};
  `,
  [Mode.Dark]: css`
    color: ${palette.gray.light1};
  `,
};

type DescriptionProps = HTMLElementProps<'p', never> & {
  darkMode?: boolean;
  disabled?: boolean;
};

export const Description = ({
  darkMode = false,
  disabled = false,
  children,
  className,
  ...rest
}: DescriptionProps) => {
  const baseFontSize = useBaseFontSize() as BaseFontSize;
  const mode = darkMode ? Mode.Dark : Mode.Light;

  return (
    <p
      className={cx(
        descriptionStyle,
        descriptionColorStyle[mode],
        descriptionTypeScale[baseFontSize],
        {
          [disabledDescriptionColorStyle[mode]]: disabled,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

Description.displayName = 'Description';