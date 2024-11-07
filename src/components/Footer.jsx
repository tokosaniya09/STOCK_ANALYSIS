import { useState } from "react";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
    const [searchTerm, setSearchTerm] = useState("");
    const mail = () => {
        return ""; 
    } 

    return (
        <div className="footer ">
            <div className="foo1">
                Navigate with Insight
            </div>
            <SubscribeForm/>
            <div className="foo3">
                <p className="mb-2">Follow us on:</p>
                <div className="allIcons flex gap-4 justify-center">
                    <i className="fa-brands fa-instagram "></i>
                    <i className="fa-brands fa-facebook "></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
            <div className="foo4 ">
                Contact us: 123 456 789
            </div>
        </div>
    );
}


