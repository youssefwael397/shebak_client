import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NotifyMessage } from "../../components/Messages";
import axiosInstance from "../../lib/axiosInstancs"

export const getUsers = createAsyncThunk(
    "users",
    async (args, { rejectWithValue }) => {
        try {
            console.log('register thunk')
            const url = "/api/users";
            const res = await axiosInstance.get(url);
            return res.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


export const getUser = createAsyncThunk(
    "user",
    async (id, { rejectWithValue }) => {
        try {
            console.log('register thunk')
            const url = `/api/users/${id}`;
            const res = await axiosInstance.get(url);
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
    user: {},
}

export const userSlice = createSlice({
    name: 'auth',
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
            state.api_errors = [];
            state.users = payload.users;
        },
        [getUsers.rejected]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = false;
        },
        // get user
        [getUser.pending]: (state, { payload }) => {
            state.is_loading = true;
        },
        [getUser.fulfilled]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = true;
            state.api_errors = [];
            state.user = payload.data;
            console.log(payload);
        },
        [getUser.rejected]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { ResetSuccess } = userSlice.actions;

export default userSlice.reducer