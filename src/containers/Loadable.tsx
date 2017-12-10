import * as React from 'react';
import Loadable, {
  LoadingComponentProps
} from 'react-loadable';

const LoadingComponent: React.SFC<LoadingComponentProps> = (props) => {
  return (
    <div>
      { props.error }
      { props.isLoading }
      { props.pastDelay }
      { props.timedOut }
    </div>
  );
};

// import { Spinner } from '@src/components';

// function LoadingComponent(props) {
//   if (props.error) {
//     return <div>Error!</div>;
//   } else {
//     return (<Spinner width={5} color={'#2f4050'} />);
//   }
// }

function fakeDelay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

import {
  // Devices,
  // PageOverview,
} from '@src/containers';

export const DevicesLoadable = Loadable({
  loader: new Promise(resolve => resolve).then(() => import('./Devices')),
  loading: LoadingComponent,
  delay: 2000,
  timeout: 10000,
});