import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const signUp = createAsyncThunk('auth/signup', async (args, thunkApi) => {
// try {
//     const url = '/api/signup'
//     // const res = axios;
// } catch (error) {
    
// }
// })

const initialState = {
    is_loading: false,
    api_errors: [],
    is_success: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    // extraReducers: 
})


export default authSlice.reducer