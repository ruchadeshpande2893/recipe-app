import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const rows = 4;
    const cols = 50;
    const textAreaPlaceholder = "Write your feedback or comments here";
    const [querySubmit, setQuerySubmit] = useState<string>("");

    function submit() {
        setQuerySubmit("Your query has been submitted.")
        console.log("hi");
    }

    return (
        <div className="contact">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <form onSubmit={submit}>
                    <input className="common" id="first-name" type="text" placeholder="First Name"></input>
                    <input className="common" id="last-name" type="text" placeholder="Last Name"></input>
                    <input className="common" id="email" type="email" placeholder="Email"></input>
                    <textarea className="common" placeholder={textAreaPlaceholder} rows={rows} cols={cols}></textarea>
                    <button className="common" type="submit">Submit</button>
                </form>
                <p>{querySubmit}</p>
            </div>
        </div>
    )
}