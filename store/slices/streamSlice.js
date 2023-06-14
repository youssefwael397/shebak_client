import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NotifyMessage } from "../../components/Messages";
import axiosInstance from "../../lib/axiosInstancs"

export const startStream = createAsyncThunk(
    "stream/start",
    async (args, { rejectWithValue }) => {
        try {
            const url = "/stream";
            const res = await axiosInstance.get(url);
            return res.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


export const stopStream = createAsyncThunk(
    "stream/stop",
    async (args, { rejectWithValue }) => {
        try {
            const url = "/stream/stop";
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
    is_streaming: false,
}

export const streamSlice = createSlice({
    name: 'stream',
    initialState,
    reducers: {
        ResetSuccess(state) {
            state.success = null;
        },
    },
    extraReducers: {
        // start stream
        [startStream.pending]: (state, { payload }) => {
            state.is_loading = true;
            state.is_streaming = false;
        },
        [startStream.fulfilled]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = true;
            state.api_errors = [];
            state.is_streaming = true;
            state.streams = payload.data;
        },
        [startStream.rejected]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = false;
            state.is_streaming = false;
        },
        // stop stream
        [stopStream.pending]: (state, { payload }) => {
            state.is_loading = true;
        },
        [stopStream.fulfilled]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = true;
            state.api_errors = [];
            state.is_streaming = false;
            state.streams = payload.data;
        },
        [stopStream.rejected]: (state, { payload }) => {
            state.is_loading = false;
            state.is_success = false;
        },

    }
})

// Action creators are generated for each case reducer function
export const { ResetSuccess } = streamSlice.actions;

export default streamSlice.reducer