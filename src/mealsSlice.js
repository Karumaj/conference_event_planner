// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
   {name: 'Breakfast', cost: 50 , selected: fallse},
   {name: 'High Tea', cost: 25 , selected: fallse},
   {name: 'Lunch', cost: 65 , selected: fallse},
   {name: 'Dinner', cost: 70 , selected: fallse}

  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.paylod].selected = !state[action.payload].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
