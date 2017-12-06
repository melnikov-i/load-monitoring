import * as React from 'react';

import {
  SpinnerLayout,
  CircularSpinner
} from '@src/styled';

interface SpinnerProps {

}

export const Spinner: React.SFC<SpinnerProps> = () => {
  return (
    <SpinnerLayout>
      <CircularSpinner
        width={'15px'}
        color={'#2f4050'}
        degBefore={'120deg'}
        degAfter={'45deg'} />
    </SpinnerLayout>
  );
}