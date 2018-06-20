import { connect, MapStateToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { Spinner } from '../components';

interface StateProps { }

interface DispatchProps { }

interface OwnProps {
  width: number,
  color: string,
  bgColor: string,
}


const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({});

export const SpinnerConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, {})(Spinner)
);