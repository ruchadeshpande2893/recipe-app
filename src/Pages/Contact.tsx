export default function Contact() {
    const rows = 4
    const cols = 50
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="email" placeholder="Email"></input>
                <textarea rows={rows} cols={cols}></textarea>
                <button type="button">Submit</button>
            </form>
        </div>
    )
}