import { Avatar, Button, Chip, Menu, Stack } from "@mui/material"
import { useRef } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectAvatar, selectAvatarIndex, selectIsAvatarMenuOpen, selectShowNavbar, setAvatarIndex, setAvatarMenuOpen } from "../redux/topLevelSlice"




export default function Navbar() {
    const showNavbar = useAppSelector(selectShowNavbar)
    const avatarIndex = useAppSelector(selectAvatarIndex)
    const avatarUrl = useAppSelector(selectAvatar)
    const isAvatarMenuOpen = useAppSelector(selectIsAvatarMenuOpen)

    const avatarRef = useRef(null)

    const dispatch = useAppDispatch()

    function incrementAvatar(){
        dispatch(setAvatarIndex((avatarIndex + 1) % 4))
    }

    function decrementAvatar(){
        dispatch(setAvatarIndex((avatarIndex + 4 - 1) % 4))
    }

    return (
        <>
            {
                showNavbar &&
                <div style={{ width: "100%", height: "4rem", backgroundColor: "blue", padding: ".5rem 1rem", display:"flex" }}>
                    <button style={{ padding: 0, border: 0}} onClick={()=>dispatch(setAvatarMenuOpen(true))}>
                        <Avatar ref={avatarRef} src={avatarUrl} style={{ height: "4rem", width: "4rem" }} variant="square" />
                    </button>
                    <div style={{height:"100%", display:"flex", flexDirection:"column"}}>
                        <Button size="small" onClick={incrementAvatar}>/\</Button>
                        <Button size="small" onClick={decrementAvatar}>\/</Button>
                    </div>
                    <Menu open={isAvatarMenuOpen} anchorEl={avatarRef?.current} onClose={()=>dispatch(setAvatarMenuOpen(false))}>
                        <Stack direction="column" spacing={1}>
                            <Chip label="Webpage Viewer" color="primary" variant="outlined"/>
                            <Chip label="Gamer" color="secondary" variant="outlined"/>
                        </Stack>
                    </Menu>
                </div>
            }
        </>
    )
}