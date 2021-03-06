import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';

import { ReCaptchaInitialize } from '../components';
import { IFormsModelItem } from '@src/core/interfaces';
import { syncActionCreators } from '@src/core/redux/form';

interface StateProps {
  formsModelReCaptcha: IFormsModelItem,
}

interface DispatchProps {
  createFormsModelItem: (payload: any) => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    formsModelReCaptcha: (state: RootState) => {
      if ('registration' in state.form.formsModel) {
        if ('reCaptcha' in state.form.formsModel['registration']) {
          return state.form.formsModel['registration']['reCaptcha'];
        }
      }
    },
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    createFormsModelItem: syncActionCreators.createFormsModelItem,
  }, dispatch);

export const ReCaptchaInitializeConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(ReCaptchaInitialize);