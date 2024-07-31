import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  password: string;
  errorMessage: string;
  registeredUsers: { [username: string]: string }; // Store username-password pairs
}

const initialState: UserState = {
  username: '',
  password: '',
  errorMessage: '',
  registeredUsers: {}, // Initially, no users are registered
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, action: PayloadAction<{ username: string; password: string }>) {
      const { username, password } = action.payload;
      state.registeredUsers[username] = password; // Add user credentials to state
      state.errorMessage = ''; // Clear any previous error messages
    },
    loginUser(state, action: PayloadAction<{ username: string; password: string }>) {
      const { username, password } = action.payload;
      if (state.registeredUsers[username] === password) {
        state.errorMessage = ''; // Clear any previous error messages
      } else {
        state.errorMessage = 'Please check your username/password'; // Set error message
      }
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { registerUser, loginUser, setUsername } = userSlice.actions;

export default userSlice.reducer;
