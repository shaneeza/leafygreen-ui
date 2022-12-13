import React, { useEffect } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { css, cx } from '@leafygreen-ui/emotion';
import { useIdAllocator } from '@leafygreen-ui/hooks';
import ChevronRight from '@leafygreen-ui/icon/dist/ChevronRight';
import { useUsingKeyboardContext } from '@leafygreen-ui/leafygreen-provider';
import { palette } from '@leafygreen-ui/palette';

import { useSideNavContext } from '../SideNav/SideNavContext';
import { ulStyleOverrides } from '../SideNav/styles';
import {
  baseStyle,
  buttonClassName,
  indentedStyle,
  themeStyle,
} from '../SideNavGroup/styles';

import {
  collapsibleBaseStyle,
  collapsibleFocusStyle,
  collapsibleGroupBaseStyles,
  collapsibleThemeStyle,
  expandIconStyle,
  openExpandIconStyle,
  transitionStyles,
  ulStyles,
  ulTransitionStyles,
} from './styles';
import { SideNavGroupCollapsedProps } from './types';

/**
 * @internal
 */
export function SideNavGroupCollapsed({
  groupHeaderProps,
  open,
  setOpen,
  menuGroupLabelId,
  indentLevel,
  renderHeader,
  children,
}: SideNavGroupCollapsedProps) {
  const { width, theme, darkMode } = useSideNavContext();
  const { usingKeyboard } = useUsingKeyboardContext();

  const menuId = useIdAllocator({ prefix: 'menu' });

  const nodeRef = React.useRef(null);
  const ulRef = React.useRef<HTMLUListElement>(null);

  // compute the entered ul wrapper styles based on the ul height
  useEffect(() => {
    const ulHeight = ulRef?.current?.getBoundingClientRect().height ?? 0;
    transitionStyles['entered'] = css`
      opacity: 1;
      max-height: ${ulHeight + 1}px; // +1 for border
      border-bottom: 1px solid
        ${darkMode ? palette.gray.dark1 : palette.gray.light2};
    `;
  }, [open, ulRef, darkMode]);

  return (
    <>
      <button
        {...groupHeaderProps}
        aria-controls={menuId}
        aria-expanded={open}
        className={cx(
          buttonClassName,
          baseStyle,
          themeStyle[theme],
          collapsibleBaseStyle,
          collapsibleThemeStyle[theme],
          css`
            width: ${width}px;
          `,
          {
            [collapsibleFocusStyle]: usingKeyboard,
            [indentedStyle(indentLevel, darkMode)]: indentLevel > 1,
          },
        )}
        onClick={() => setOpen((curr: boolean) => !curr)}
      >
        {renderHeader()}
        <ChevronRight
          role="presentation"
          size={12}
          className={cx(expandIconStyle, {
            [openExpandIconStyle]: open,
          })}
        />
      </button>
      <Transition
        in={open}
        appear
        timeout={150}
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
      >
        {(state: TransitionStatus) => (
          <div
            ref={nodeRef}
            className={cx(collapsibleGroupBaseStyles, transitionStyles[state])}
          >
            <ul
              ref={ulRef}
              id={menuId}
              aria-labelledby={menuGroupLabelId}
              className={cx(ulStyleOverrides, ulStyles, {
                [ulTransitionStyles]: ['entering', 'entered'].includes(state),
              })}
            >
              {children}
            </ul>
          </div>
        )}
      </Transition>
    </>
  );
}