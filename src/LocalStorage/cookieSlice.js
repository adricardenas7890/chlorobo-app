import { createSlice } from '@reduxjs/toolkit'

// Three modes, available, solved, hidden
export const cookieSlice = createSlice({
    name: 'cookieConsent',
    initialState: {
        asked: false,
        consent: false
    },
    reducers: {
        GiveConsent: (state) => {
            state["consent"] = true;
            state["asked"] = true;
        },
        DenyConsent: (state) => {
            state["asked"] = true;
        }
  }
})

export const { GiveConsent, DenyConsent } = cookieSlice.actions

export default cookieSlice.reducer