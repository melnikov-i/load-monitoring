import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { ReCaptcha } from '../components';
import { IReCaptchaDynamic } from '../interfaces';

import { syncActionCreators } from '../redux';

interface StateProps {
  validation: IReCaptchaDynamic['validation'],
}

interface DispatchProps {
  updateReCaptchaValue: (payload: string) => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    validation: (state: RootState) => state.registration.reCaptchaDynamic.validation,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    updateReCaptchaValue: syncActionCreators.updateReCaptchaValue,
  }, dispatch);

export const ReCaptchaConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(ReCaptcha);