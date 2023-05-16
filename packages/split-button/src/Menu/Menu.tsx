import React, { ComponentType, ReactElement } from 'react';
import isEmpty from 'lodash/isEmpty';

import Button from '@leafygreen-ui/button';
import { cx } from '@leafygreen-ui/emotion';
import Icon from '@leafygreen-ui/icon';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { isComponentType } from '@leafygreen-ui/lib';
import { Menu as LGMenu, MenuItemProps } from '@leafygreen-ui/menu';

import { triggerBaseStyles, triggerThemeStyles } from './Menu.styles';
import { MenuProps } from './Menu.types';

export const Menu = ({
  variant,
  align,
  justify,
  size,
  baseFontSize,
  menuItems,
  containerRef,
}: MenuProps) => {
  const { theme } = useDarkMode();

  const renderMenuItems = () => {
    if (menuItems) {
      if ('props' in menuItems) {
        if (!isEmpty(menuItems.props)) {
          // Array of menuItems
          if (Array.isArray(menuItems.props.children)) {
            return menuItems.props.children.map(
              (
                menuItem: ComponentType<MenuItemProps>,
                index: number,
              ): ReactElement | undefined => {
                if (isComponentType(menuItem, 'MenuItem')) {
                  return React.cloneElement(menuItem, {
                    active: false,
                    key: `menuItem-${index}`,
                  });
                }
              },
            );
          }

          // Object with one menuItem
          // React returns an object instead of an array if there is one item
          const menuItem = menuItems.props.children;

          if (isComponentType(menuItem, 'MenuItem')) {
            return React.cloneElement(menuItem, {
              active: false,
            });
          }
        }
      }
    } else {
      console.warn('MenuItems are required');
    }
  };

  return (
    <LGMenu
      align={align}
      justify={justify}
      refEl={containerRef}
      trigger={
        <Button
          type="button"
          leftGlyph={<Icon glyph="CaretDown" />}
          variant={variant}
          size={size}
          baseFontSize={baseFontSize}
          className={cx(triggerBaseStyles, triggerThemeStyles(theme, variant!))}
        />
      }
    >
      {renderMenuItems()}
    </LGMenu>
  );
};

Menu.displayName = 'Menu';
