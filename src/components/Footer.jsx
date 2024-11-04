import { useState } from "react";
export default function Footer() {
    const [searchTerm, setSearchTerm] = useState("");
    const mail = () => {
        return ""; 
    } 
    return (
        <div className="footer">
            <div className="foo1">Navigate with Insight</div>
            <div className="foo2">
                <p>Subscribe to us : </p>
                <div className="header-input-container">
                    <input
                        type="text"
                        placeholder="Your mail"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <button onClick={mail}>Subscribe</button>
                </div>
            </div>
            <div className="foo3">
                <p>Follow us on : </p>
                <div className="allIcons">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            <div className="foo4">
                Call us : 
                123 456 789
            </div>
        </div>
    )
}