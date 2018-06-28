import { bindActionCreators } from 'redux';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch, RootState } from '@src/core/redux';

import { Checkbox } from '../components';

import { syncActionCreators } from '@src/core/redux/form';
import { IFormModelCheckboxItem } from '@src/core/interfaces';

interface StateProps { }

interface DispatchProps {
  changeCheckboxValue: (payload: any) => any,
  changeCheckboxFocused: (payload: any) => any,
}

interface OwnProps {
  items: IFormModelCheckboxItem,
}

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    changeCheckboxValue: syncActionCreators.changeCheckboxValue,
    changeCheckboxFocused: syncActionCreators.changeCheckboxFocused,
  }, dispatch);

export const CheckboxConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    null, mapDispatchToProps)(Checkbox));