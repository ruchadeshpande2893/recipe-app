import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <p>&#169; {new Date().getFullYear()} Flavor Lab. All Rights Reserved.</p>
        </div>
    )
}