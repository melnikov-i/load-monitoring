import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { rootReducer, RootState } from '@src/redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function confugureStore(initialState?: RootState) {  
  return createStore(
    rootReducer,
    initialState!,
    composeWithDevTools(
      applyMiddleware(/*thunk*/)
    )
  );
}

const store = confugureStore();
export default store;