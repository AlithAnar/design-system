import * as React from 'react';
import StatusHint from '../StatusHint';

export const success = () => (
  <StatusHint
    appearance="success"
  >
    {'Success'}
  </StatusHint>
);

export default {
  title: 'Components/StatusHint',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint'
      }
    }
  }
};
