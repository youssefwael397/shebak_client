import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NotifyMessage } from "../../components/Messages";
import axiosInstance from "../../lib/axiosInstancs"

export const register = createAsyncThunk(
    "register",
    async (args, { rejectWithValue }) => {
        try {
            console.log('register thunk')
            const url = "/api/register";
            console.log(args)
            const form = new FormData()
            for (let key in args) { 
                form.append(key, args[key])
            }
            const res = await axiosInstance.post(url, form);
            return res.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const initialState = {
    is_loading: false,
    is_success: false,

    registerInfo: {
        username: '',
        email: '',
        face_video: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        ResetSuccess(state) {
            state.success = null;
        },
    },
    extraReducers: {
        [register.pending]: (state, { payload }) => {
            state.is_loading = true;
        },
        [register.fulfilled]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = true;
            state.api_errors = [];
            NotifyMessage({
                type: 'success',
                title: "Register",
                description: payload.message
            })
        },
        [register.rejected]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = false;
            console.log(payload)
            NotifyMessage({
                type: 'error',
                title: "Register Error",
                description: payload.response?.data.message || payload.message
            })
        }
    }
})

// Action creators are generated for each case reducer function
export const { ResetSuccess } = authSlice.actions;

export default authSlice.reducer