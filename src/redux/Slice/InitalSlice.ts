import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllDevs, login, onBoard, signup, skills } from "../API/InitialApi"

const initialState = {
    status: "idle",
    loginData: [],
    signupData: [],
    skills:[],
    onBoard:[],
    allDev:[]
}

export const signupAsync: any = createAsyncThunk(
    "signupAsync",
    async (details) => {
        try {
            const response = await signup(details);
            return response
        } catch (error) {
            throw error;
        }
    }
)


export const loginAsync: any = createAsyncThunk(
    "loginAsync",
    async (details) => {
        try {
            const response = await login(details);
            return response
        } catch (error) {
            throw error;
        }
    }
)


export const skillsAsync: any = createAsyncThunk(
    "skillsAsync",
    async () => {
        try {
            const response = await skills();
            return response
        } catch (error) {
            throw error;
        }
    }
)


export const allDevsAsync: any = createAsyncThunk(
    "allDevsAsync",
    async () => {
        try {
            const response = await getAllDevs();
            return response
        } catch (error) {
            throw error;
        }
    }
)

export const onBoardAsync: any = createAsyncThunk(
    "onBoardAsync",
    async (detail:any) => {
        try {
            const response = await onBoard(detail)
            return response
        } catch (error) {
            throw error;
        }
    }
)

export const initialSlice = createSlice({
    name: "initial",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signupAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signupAsync.fulfilled, (state: any, action: any) => {
                state.status = "idle";
                state.signupData = action.payload;
            })
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state: any, action: any) => {
                state.status = "idle";
                state.loginData = action.payload;
            })
            .addCase(skillsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(skillsAsync.fulfilled, (state: any, action: any) => {
                state.status = "idle";
                state.skills = action.payload;
            })
            .addCase(onBoardAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(onBoardAsync.fulfilled, (state: any, action: any) => {
                state.status = "idle";
                state.onBoard = action.payload;
            })
            .addCase(allDevsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(allDevsAsync.fulfilled, (state: any, action: any) => {
                state.status = "idle";
                state.allDev = action.payload;
            })
    }
})

export default initialSlice.reducer