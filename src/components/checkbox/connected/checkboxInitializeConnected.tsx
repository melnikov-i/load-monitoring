import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';

import { CheckboxInitialize } from '../components';
import { IFormsModelItem } from '@src/core/interfaces';
import { syncActionCreators } from '@src/core/redux/form';

interface StateProps {
  formsModelCheckbox: IFormsModelItem,
}

interface DispatchProps {
  createFormsModelItem: (payload: any) => any,
}

interface OwnProps { }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    formsModelCheckbox: (state: RootState) => {
      if ('registration' in state.form.formsModel) {
        if ('checkbox' in state.form.formsModel['registration']) {
          return state.form.formsModel['registration']['checkbox'];
        }
      }
    },
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    createFormsModelItem: syncActionCreators.createFormsModelItem,
  }, dispatch);

export const CheckboxInitializeConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(CheckboxInitialize);