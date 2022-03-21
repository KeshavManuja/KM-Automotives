import { createStore, applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { CarReducer } from './Reducers/CarsReducer';
import { AlertReducer } from './Reducers/AlertReducer';

const composeEnhancers = composeWithDevTools({

});

const rootreducer = combineReducers(
    {
        CarReducer,
        AlertReducer
    }
)

const store = createStore(
  rootreducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store