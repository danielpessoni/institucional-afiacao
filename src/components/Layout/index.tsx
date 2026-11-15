import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { WhatsAppButton } from "../shared/FloatingWhatsAppButton"

export const Layout = () => {
    return (
        <div className="h-screen overflow-hidden">
            <Header />
            <Outlet />
            <Footer />
            <WhatsAppButton /> 
        </div>
    )
}