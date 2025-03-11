import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Layout.css";


export default function Layout() {
    return (
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}