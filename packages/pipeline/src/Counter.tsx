import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@leafygreen-ui/emotion';
import { SegmentXs, SegmentS, SegmentM, SegmentL } from './svgs';

import {
  Size,
  counterThemeStyles,
  counterBaseStyles,
  counterSizeStyles,
  svgLayer1Styles,
  svgLayer2Styles,
  baseSizeStyles,
  counterSvgBaseStyles,
} from './styles';
import PipelineContext from './PipelineContext';

interface CounterProps {
  /**
   * Content that will appear inside of the Counter component.
   */
  children?: ReactNode;

  /**
   * Classname applied to Counter content container.
   **/
  className?: string;

  /**
   * Alter the rendered size of the component. Inherited from the parent Pipeline component.
   */
  size: Size;
}

const segments: Record<Size, React.ComponentType<any>> = {
  [Size.XSmall]: SegmentXs,
  [Size.Small]: SegmentS,
  [Size.Normal]: SegmentM,
  [Size.Large]: SegmentL,
} as const;

/**
 * # Counter
 *
 * React Component to render the counter for the number of hidden stages in the Pipeline component.
 *
 * ```
 * <Counter />
 * ```
 * @param props.className Classname applied to Counter content container.
 */
const Counter = forwardRef(
  (
    { className = '', children, size, ...rest }: CounterProps,
    ref: Ref<HTMLDivElement>,
  ): ReactElement => {
    const Icon = segments[size];
    const { theme } = useContext(PipelineContext);

    return (
      <div
        {...rest}
        data-testid="pipeline-counter"
        className={cx(
          baseSizeStyles[size],
          counterBaseStyles,
          counterSizeStyles[size],
          counterThemeStyles[theme],
          className,
        )}
        ref={ref}
        // Adding this so on focus the tooltip will show up
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {/* The counter is a unique shape that is not easily accomplished with css alone so we are using an SVG. We are also using the SVG to show hover and focus states. The reason we have 2 SVGs is to mimic the behavior of a div expanding horizontally when the text increases since an SVG does not stretch horizontally while maintaining its height.*/}
        <div className={counterSvgBaseStyles}>
          <div>
            <Icon className={cx(svgLayer1Styles)} />
          </div>
          <div>
            <Icon className={cx(svgLayer2Styles)} />
          </div>
        </div>
        {/* Children will be the tooltip provided by the Pipeline component */}
        {children}
      </div>
    );
  },
);

Counter.displayName = 'Counter';

Counter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Size)).isRequired,
};

export default Counter;
