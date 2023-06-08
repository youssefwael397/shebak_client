import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NotifyMessage } from '../../components/Messages';
import axiosInstance from '../../lib/axiosInstancs';

export const getUsers = createAsyncThunk(
  'users',
  async (args, { rejectWithValue }) => {
    try {
      const url = '/api/users';
      const res = await axiosInstance.get(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getUser = createAsyncThunk(
  'user',
  async (id, { rejectWithValue }) => {
    try {
      const url = `/api/users/${id}`;
      const res = await axiosInstance.get(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const url = `/api/users/${id}`;
      const res = await axiosInstance.delete(url);
      dispatch(getUsers());
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  is_loading: false,
  is_success: false,
  api_errors: null,
  users: [],
  user_warning: null,
  imgPath: 'http://localhost:8000',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    ResetSuccess(state) {
      state.success = null;
    },
  },
  extraReducers: {
    // get users
    [getUsers.pending]: (state, { payload }) => {
      state.is_loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.is_loading = false;
      state.is_success = true;
      state.api_errors = null;
      state.users = payload?.users;
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.is_loading = false;
      state.is_success = false;
    },
    // get user
    [getUser.pending]: (state, { payload }) => {
      state.is_loading = true;
      state.user_warning = null;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.is_loading = false;
      state.is_success = true;
      state.api_errors = null;
      state.user_warning = payload;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.is_loading = false;
      state.is_success = false;
      state.user_warning = null;
      state.api_errors = payload?.response?.data?.message;
    },
    // delete user
    [deleteUser.pending]: (state, { payload }) => {
      state.is_loading = true;
      state.user_warning = null;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.is_loading = false;
      state.is_success = true;
      state.api_errors = null;
      NotifyMessage({
        type: 'success',
        title: 'Delete User',
        description: payload.message,
      });
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.is_loading = false;
      state.is_success = false;
      state.user_warning = null;
      state.api_errors = payload?.response?.data?.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ResetSuccess } = userSlice.actions;

export default userSlice.reducer;
