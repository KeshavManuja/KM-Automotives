import { createStore, applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { CarReducer } from './Reducers/CarsReducer';
const composeEnhancers = composeWithDevTools({

});

const rootreducer = combineReducers(
    {
        CarReducer
    }
)
const store = createStore(
  rootreducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store