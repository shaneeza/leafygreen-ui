import { Align, Justify } from '@leafygreen-ui/popover';
import { TooltipProps } from '@leafygreen-ui/tooltip';

// Exclude these from tooltip (tooltip already extends popover props)
type ModifiedTooltipProps = Omit<
  TooltipProps,
  | 'usePortal'
  | 'justify'
  | 'align'
  | 'onClick'
  | 'trigger'
  | 'triggerEvent'
  | 'shouldClose'
  | 'className'
  | 'children'
  | 'onClose'
>;

export interface GuidecueProps extends ModifiedTooltipProps {
  /**
   * Determines if the `Tooltip` will appear as open or close.
   * @default: false
   */
  open: boolean;
  /**
   * Callback to change the open state of the Tooltip in consuming applications.
   */
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * Pass a reference to an element that the beacon or tooltip(if stand-alone) should be centered against.
   */
  refEl: React.RefObject<HTMLElement>;
  /**
   * Used to display the number of steps. If `numberOfSteps` is `<= 1` then the step text will not show and a stand-alone tooltip without the beacon will be used.
   * @default: 1
   */
  numberOfSteps?: number;
  /**
   * Used to display the current step.
   * @default: 1
   */
  currentStep?: number;
  /**
   * Determines whether the `Tooltip` will appear in dark mode.
   * @default: false
   */
  darkMode?: boolean;
  /**
   * Title to appear inside of Tooltip.
   */
  title: string;
  /**
   * Body content to appear inside the tooltip, under the title.
   */
  children: React.ReactNode;
  /**
   * ClassName to be applied to the tooltip element.
   */
  tooltipClassName?: string;
  /**
   * Text to appear inside the primary button. If no string is provided then it defaults to `'Next'` if the `currentStep < numberOfSteps` or `'Got it'` if `currentStep === numberOfSteps`.
   */
  buttonText?: string;
  /**
   * Callback fired when the dismiss(X) button is clicked or when the `Esc` key is pressed. This only applies to the multi-step guided tooltip.
   */
  onClose?: () => void;
  /**
   * Callback fired when the bottom primary button is clicked. This applies to both the stand-alone and guided multi-step guided tooltip. This is also fired when the `Esc` key is pressed in the stand-alone tooltip.
   */
  onButtonClick?: () => void;
  /**
   * Determines the alignment of the tooltip.
   * @default: 'top'
   */
  tooltipAlign?: Exclude<Align, 'center-vertical' | 'center-horizontal'>;
  /**
   * Determines the justification of the tooltip.
   * @default: 'middle'
   */
  tooltipJustify?: Exclude<Justify, 'fit'>;
  /**
   * Determines the alignment of the beacon. The beacon is only shown when `numberOfSteps` is `> 1`, making it a multi-step guided tooltip.
   * @default: 'center-horizontal'
   */
  beaconAlign?: Align;
}