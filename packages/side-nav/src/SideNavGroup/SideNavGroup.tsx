import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { cx } from '@leafygreen-ui/emotion';
import { useIdAllocator } from '@leafygreen-ui/hooks';
import { isComponentGlyph } from '@leafygreen-ui/icon';
import { isComponentType } from '@leafygreen-ui/lib';
import { Overline } from '@leafygreen-ui/typography';

import { AccessibleGlyph } from '../AccessibleGlyph/AccessibleGlyph';
import { useSideNavContext } from '../SideNav/SideNavContext';
import { SideNavGroupCollapsed } from '../SideNavGroupCollapsed/SideNavGroupCollapsed';
import { SideNavGroupOpen } from '../SideNavGroupOpen/SideNavGroupOpen';

import {
  iconBaseStyles,
  iconCustomStyle,
  iconCustomThemeStyle,
  listItemStyle,
  overlineStyle,
} from './styles';
import { SideNavGroupProps } from './types';

/**
 * # SideNavGroup
 *
 * ```
<SideNavGroup headerText="Section Header">
  <SideNavItem href="/">
    Back to Home
  </SideNavItem>
</SideNavGroup>
 * ```
 *
 * @param props.className Class name that will be applied to the root-level element.
 * @param props.header Content that will be rendered as the component's header
 *   If a string is provided, it will be rendered with default styling as a header tag.
 * @param props.children Class name that will be applied to the component's header.
 * @param props.collapsible Determines whether or not the Group can be collapsed. @defaultValue false
 * @param props.initialCollapsed Determines whether or not the Group is open by default. @defaultValue true
 */
function SideNavGroup({
  header,
  children,
  collapsible = false,
  initialCollapsed = true,
  glyph,
  className,
  hasActiveItem,
  indentLevel = 0,
  ...rest
}: SideNavGroupProps) {
  const [open, setOpen] = React.useState(!initialCollapsed);

  const menuGroupLabelId = useIdAllocator({ prefix: 'menu-group-label-id' });

  const { theme } = useSideNavContext();

  // Iterate over `children` and render them appropriately
  const renderedChildren = useMemo(() => {
    const checkForNestedGroups = (children: React.ReactNode) => {
      return React.Children.map(children, child => {
        if (
          isComponentType(child, 'SideNavGroup') ||
          isComponentType(child, 'SideNavItem')
        ) {
          return React.cloneElement(child, {
            indentLevel: indentLevel + 1,
          });
        } else if ((child as React.ReactElement)?.props?.children) {
          checkForNestedGroups((child as React.ReactElement).props.children);
          return child;
        } else {
          return child;
        }
      });
    };

    return checkForNestedGroups(children);
  }, [children, indentLevel]);

  // compute whether this group is active
  const isActiveGroup: boolean = useMemo(() => {
    if (hasActiveItem != null) {
      return hasActiveItem;
    }

    const checkForActiveNestedItems = (children: React.ReactNode): boolean => {
      let foundActiveChild = false;

      React.Children.forEach(children, child => {
        if (isComponentType(child, 'SideNavItem') && child.props.active) {
          foundActiveChild = true;
          setOpen(true);
        } else if ((child as React.ReactElement)?.props?.children) {
          checkForActiveNestedItems(
            (child as React.ReactElement).props.children,
          );
        }
      });

      return foundActiveChild;
    };

    return checkForActiveNestedItems(children);
  }, [hasActiveItem, children]);

  // render the provided glyph with appropriate aria roles
  const accessibleGlyph =
    glyph && isComponentGlyph(glyph)
      ? React.cloneElement(glyph, {
          className: glyph.props.className,
          role: 'presentation',
          'data-testid': 'side-nav-group-header-icon',
        })
      : null;

  const renderHeader = () => (
    <div className={iconBaseStyles}>
      <AccessibleGlyph
        isActiveGroup={isActiveGroup}
        accessibleGlyph={accessibleGlyph}
        className={cx(iconCustomStyle, iconCustomThemeStyle[theme])}
      />
      <Overline className={overlineStyle}>{header}</Overline>
    </div>
  );

  // generate shared props for collapsible and static headers
  const groupHeaderProps = {
    'data-testid': 'side-nav-group-header-label',
    id: menuGroupLabelId,
  };

  const sharedProps = {
    groupHeaderProps,
    indentLevel,
    renderHeader: () => renderHeader(),
    menuGroupLabelId,
  };

  return (
    <li className={cx(listItemStyle, className)} {...rest}>
      {collapsible ? (
        // collapsed, all items are inside a dropdown
        <>
          <SideNavGroupCollapsed open={open} setOpen={setOpen} {...sharedProps}>
            {renderedChildren}
          </SideNavGroupCollapsed>
        </>
      ) : (
        // not collapsible, all items are visible
        <SideNavGroupOpen {...sharedProps}>{renderedChildren}</SideNavGroupOpen>
      )}
    </li>
  );
}

SideNavGroup.displayName = 'SideNavGroup';

SideNavGroup.propTypes = {
  className: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
  ]),
  collapsible: PropTypes.bool,
  initialCollapsed: PropTypes.bool,
  glyph: PropTypes.node,
  children: PropTypes.node,
};

export default SideNavGroup;