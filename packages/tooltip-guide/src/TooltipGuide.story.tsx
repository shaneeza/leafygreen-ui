import React, { useRef, useState } from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '@leafygreen-ui/button';
import { css } from '@leafygreen-ui/emotion';
import defaultArgTypes from '../../../stories/defaultArgTypes';
import TooltipGuide from '.';

export default {
  title: 'Components/TooltipGuide',
  component: TooltipGuide,
  parameters: {
    controls: {
      exclude: ['className', 'children', 'refEl', 'setOpen', 'tooltipClassName', 'open'],
    },
  },
  argTypes: {
    darkMode: defaultArgTypes.darkMode,
  },
  args: {
    title: 'New feature',
    description: 'This is a new feature. You should try it out',
    buttonText: 'Next',
    numberOfSteps: 4,
    currentStep: 2,
  },
};

const Template: ComponentStory<typeof TooltipGuide> = args => {
  const [open, setOpen] = useState<boolean>(false);
  const triggerRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Button
        onClick={() => setOpen(o => !o)}
        className={css`
          margin-bottom: 100px;
        `}
      >
        Open me
      </Button>
      <div
        ref={triggerRef}
        className={css`
          color: white;
          background: burlywood;
          text-align: center;
          padding: 5px;
        `}
      >
        story refEl trigger
      </div>
      <TooltipGuide
        {...args}
        open={open}
        setOpen={setOpen}
        refEl={triggerRef}
      >
        <p>Hello from inside the tooltip</p>
      </TooltipGuide>
    </>
  );
};

export const Default = Template.bind({});
