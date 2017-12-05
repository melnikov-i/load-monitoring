// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { Dispatch } from '@src/redux';




// import { /*syncActionCreators,*/ asyncActionCreators } from '@src/redux/common';
import { Main } from '@src/components';

// import {
//   CommonDataModelSelector,
// } from '@src/selectors';

const mapStateToProps = createStructuredSelector({});

// const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
// }, dispatch);

export const MainConnected = 
  connect(mapStateToProps, /*mapDispatchToProps*/{})(Main);  
