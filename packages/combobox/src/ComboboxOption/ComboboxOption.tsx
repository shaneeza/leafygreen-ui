import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@leafygreen-ui/checkbox';
import { cx } from '@leafygreen-ui/emotion';
import { useForwardedRef, useIdAllocator } from '@leafygreen-ui/hooks';
import Icon, { isComponentGlyph } from '@leafygreen-ui/icon';
import { InputOption, InputOptionContent } from '@leafygreen-ui/input-option';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { palette } from '@leafygreen-ui/palette';

import {
  ComboboxOptionProps,
  InternalComboboxOptionProps,
} from '../Combobox.types';
import { ComboboxContext } from '../ComboboxContext';
import { wrapJSX } from '../utils';

import {
  checkIconStyle,
  comboboxOptionBaseStyle,
  comboboxOptionSizeStyle,
  disallowPointer,
  displayNameStyle,
  // flexSpan,
} from './ComboboxOption.styles';
// import { OptionContent } from './OptionContent';

/**
 * Internal ComboboxOption Component for use within Combobox only.
 *
 * Prefer using {@link ComboboxOption}
 */
export const InternalComboboxOption = React.forwardRef<
  HTMLLIElement,
  InternalComboboxOptionProps
>(
  (
    {
      glyph,
      isSelected,
      displayName,
      isFocused,
      disabled,
      setSelected,
      className,
      ...rest
    }: InternalComboboxOptionProps,
    forwardedRef,
  ) => {
    const { darkMode } = useDarkMode();
    const { multiselect, size, withIcons, inputValue } =
      useContext(ComboboxContext);
    const optionRef = useForwardedRef(forwardedRef, null);
    const optionTextId = useIdAllocator({ prefix: 'combobox-option-text' });

    const handleOptionClick = useCallback(
      (e: React.SyntheticEvent) => {
        // console.group();
        // console.log('optionRef', optionRef.current);
        // console.log('e.target', e.target);
        // console.log('e.currentTarget', e.currentTarget);
        // console.groupEnd();
        // stopPropagation will not stop the keyDown event (only click)
        // since the option is never `focused`, only `aria-selected`
        // the keyDown event does not actually fire on the option element
        e.stopPropagation();

        if (!disabled) {
          setSelected();
        }
      },
      [disabled, setSelected],
    );

    const icon = useMemo((): JSX.Element => {
      if (glyph) {
        if (isComponentGlyph(glyph)) {
          return glyph;
        }
        console.error(
          '`ComboboxOption` instance did not render icon because it is not a known glyph element.',
          glyph,
        );
      }

      return <></>;
    }, [glyph]);

    const checkbox = (
      <Checkbox
        aria-labelledby={optionTextId}
        checked={isSelected}
        tabIndex={-1}
        disabled={disabled}
        darkMode={darkMode}
        className={disallowPointer}
      />
    );

    const multiSelectLeftGlyph = withIcons ? icon : checkbox;
    const multiSelectRightGlyph = withIcons && checkbox;

    const singleSelectLeftGlyph = icon; // TODO: add check for with icons
    const singleSelectRightGlyph = isSelected && (
      <Icon
        glyph="Checkmark"
        className={checkIconStyle[size]}
        color={darkMode ? palette.blue.light1 : palette.blue.base}
      />
    );

    return (
      <InputOption
        {...rest}
        as="li"
        ref={optionRef}
        highlighted={isFocused}
        disabled={disabled}
        aria-label={displayName}
        darkMode={darkMode}
        className={cx(
          comboboxOptionBaseStyle,
          comboboxOptionSizeStyle[size],
          className,
        )}
        onClick={handleOptionClick}
        onKeyDown={handleOptionClick}
        // leftGlyph={multiselect ? multiSelectLeftGlyph : singleSelectLeftGlyph}
        // rightGlyph={
        //   multiselect ? multiSelectRightGlyph : singleSelectRightGlyph
        // }
      >
        {/* <OptionContent
          disabled={disabled}
          displayName={displayName}
          glyph={glyph}
          isSelected={isSelected}
        /> */}
        <InputOptionContent
          leftGlyph={multiselect ? multiSelectLeftGlyph : singleSelectLeftGlyph}
          rightGlyph={
            multiselect ? multiSelectRightGlyph : singleSelectRightGlyph
          }
        >
          <span id={optionTextId} className={displayNameStyle(isSelected)}>
            {wrapJSX(displayName, inputValue, 'strong')}
          </span>
        </InputOptionContent>
      </InputOption>
    );
  },
);
InternalComboboxOption.displayName = 'ComboboxOption';

export function ComboboxOption(_: ComboboxOptionProps): JSX.Element {
  throw Error('`ComboboxOption` must be a child of a `Combobox` instance');
}
ComboboxOption.displayName = 'ComboboxOption';

ComboboxOption.propTypes = {
  displayName: PropTypes.string,
  value: PropTypes.string,
  glyph: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
