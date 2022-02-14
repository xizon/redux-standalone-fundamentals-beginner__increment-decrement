//store
import { createStore } from 'redux';

import countReducer from './reducers.js'

/*
Output: 
{
    count: 0
}
*/

const store = createStore(countReducer);

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState();
  console.log('state: ', state);
}

// Update the UI with the initial data
render();
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render);


//
function render(res) {
  document.getElementById('root').innerHTML = JSON.stringify(res);
}

render(store.getState());

//actions
document.getElementById('button-1').addEventListener( 'click', function(e) {
  store.dispatch({ type: 'INCREMENT' });
  render(store.getState());
});

document.getElementById('button-2').addEventListener( 'click', function(e) {
  store.dispatch({ type: 'DECREMENT' });
  render(store.getState());
});