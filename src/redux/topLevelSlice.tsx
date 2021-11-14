import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

import monkey from '../assets/avatars/monkey.jpg'
import panda from '../assets/avatars/panda.jpg'
import skull from '../assets/avatars/skull.jpg'
import underground from '../assets/avatars/underground.jpg'

//Image names stored
export const avatarUrls : string[] = [skull, monkey, panda, underground]

interface TopLevelState{
    showNavbar: boolean,
    avatarIndex: number,
    isAvatarMenuOpen: boolean
}

const initialState : TopLevelState = {
    showNavbar: true,
    avatarIndex: 0,
    isAvatarMenuOpen: false
}

export const topLevelSlice = createSlice({
    name: "top-level",
    initialState,
    reducers: {
        setNavbar(state, action: PayloadAction<boolean>) {
            state.showNavbar = action.payload
        },
        setAvatarIndex(state, action: PayloadAction<number>) {
            state.avatarIndex = action.payload
        },
        setAvatarMenuOpen(state, action: PayloadAction<boolean>) {
            state.isAvatarMenuOpen = action.payload
        }
    }
})

export const { setNavbar, setAvatarIndex, setAvatarMenuOpen } = topLevelSlice.actions

export const selectShowNavbar = (state: RootState) => state.topLevel.showNavbar
export const selectAvatarIndex = (state: RootState) => state.topLevel.avatarIndex
export const selectAvatar = (state: RootState) => avatarUrls?.[state.topLevel.avatarIndex] ?? ""
export const selectIsAvatarMenuOpen = (state: RootState) => state.topLevel.isAvatarMenuOpen

export default topLevelSlice.reducer