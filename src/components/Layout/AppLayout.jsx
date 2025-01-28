import { Outlet } from "react-router-dom"
import { Footer } from "../Ui/Footer"
import { Headers } from "../Ui/Headers"

export const AppLayout = () => {
    return <>
        <Headers />

        <Outlet />

        <Footer />
    </>
}