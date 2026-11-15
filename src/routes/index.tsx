import { Routes, Route } from 'react-router-dom'
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { Services } from "../pages/Services"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
            </Route>
        </Routes>
    )
}