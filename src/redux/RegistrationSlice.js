import {createSlice} from '@reduxjs/toolkit';

const RegistrationSlice = createSlice({
  name: 'repository',
  initialState: {
    loading: false,
    isError: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export default RegistrationSlice.reducer;

export const {
  setLoading,
  setIsError,
} = RegistrationSlice.actions;
