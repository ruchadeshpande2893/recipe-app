import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="name">
                <p>Flavor Lab</p>
            </div>
            <Navbar />
        </div>
    )
}