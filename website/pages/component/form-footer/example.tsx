import React from 'react';
import FormFooter from '@leafygreen-ui/form-footer';
import LiveExample, { KnobsConfigInterface } from 'components/live-example';

const knobsConfig: KnobsConfigInterface<{
  primaryButtonText: string;
  cancelText?: string;
  backButtonText?: string;
  errorMessage?: string;
}> = {
  primaryButtonText: {
    type: 'text',
    default: 'Save Draft',
    label: 'Primary button text',
  },
  cancelText: {
    type: 'text',
    default: 'Cancel',
    label: 'Cancel button text',
  },
  backButtonText: {
    type: 'text',
    default: '',
    label: 'Back button text',
  },
  errorMessage: {
    type: 'text',
    default: "There's an error on this page.",
    label: 'Error message',
  },
};

export default function CardLiveExample() {
  return (
    <LiveExample knobsConfig={knobsConfig}>
      {({ primaryButtonText, cancelText, backButtonText, errorMessage }) => (
        <FormFooter
          primaryButton={{
            text: primaryButtonText,
          }}
          cancelText={cancelText}
          backButtonText={backButtonText}
          errorMessage={errorMessage}
        />
      )}
    </LiveExample>
  );
}
