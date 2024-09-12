import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';
const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => {
    // console.log(action)
    return state + action.value;
  }),
  on(decrement, (state, action) => state - action.value)
);

// export function counterReducer(state = initialState, action: any) {
//   if (action.type === '[Counter] Increment') {
//     return state + action.value;
//   }
//   return state;
// }
