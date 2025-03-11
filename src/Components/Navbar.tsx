import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/contact">Contact</Link>
        </div>
    )
}