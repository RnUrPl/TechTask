import { createSlice } from '@reduxjs/toolkit';


const initialState =  {
    accesToken:'',
    keyword: '',
    industry: '',
    salaryFrom: 0,
    salaryTo: 200000000
}


const filterOptionsSlice = createSlice({
  name: 'filterOptions',
  initialState,
  reducers: {
    setAccesToken: (state,action) => {
      state.accesToken = action.payload
    },
    setFilterOptions: (state, action) => {
      state.industry = action.payload.industry
      state.salaryFrom = action.payload.salaryFrom
      state.salaryTo = action.payload.salaryTo
    },
    setFiltredKeyword: (state, action) => {
      state.keyword = action.payload
    }
  },
});

export const filterActions = filterOptionsSlice.actions;
export default filterOptionsSlice.reducer;