import { useAppDispatch } from "../redux/hooks"
import { setNavbar } from "../redux/topLevelSlice"

export default function Landing() {
    const dispatch = useAppDispatch()
    return (<div>
        <h2>test</h2>
        <button onClick={()=>{dispatch(setNavbar(false))}}></button>
        {/* <h1>Head Empty</h1>
        <div style={{ width: "100vw", display: "flex" }}>
            <img src="https://i.pinimg.com/originals/c7/d0/61/c7d0619b4f0f1f7bc69dc0cf88da5c0c.jpg" alt="No thoughts, head empty" />
            <img src="https://i.pinimg.com/originals/85/88/bd/8588bda8f0defe611234179f195a08ac.jpg" alt="No thoughts, head empty" />
            <img src="https://i.redd.it/me9k305fcmx51.png" alt="No thoughts, head empty" />
        </div> */}
    </div >)
}