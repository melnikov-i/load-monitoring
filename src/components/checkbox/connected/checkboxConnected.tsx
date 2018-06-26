import { bindActionCreators } from 'redux';
import { connect, MapDispatchToPropsParam } from 'react-redux';

import { Dispatch, RootState } from '@src/core/redux';

import { Checkbox } from '../components';

import { syncActionCreators } from '@src/core/redux/form';
import { IFormsModelItem } from '@src/core/interfaces';

interface StateProps { }

interface DispatchProps {
  changeInputValue: (payload: any) => any,
}

interface OwnProps {
  items: IFormsModelItem,
}

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    changeInputValue: syncActionCreators.changeInputValue,
  }, dispatch);

export const CheckboxConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    null, mapDispatchToProps)(Checkbox);