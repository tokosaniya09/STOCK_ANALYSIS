import { useState } from "react";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
    const [searchTerm, setSearchTerm] = useState("");
    const mail = () => {
        return ""; 
    } 

    return (
        <div className="footer flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 p-4 md:p-8 bg-gray-800 text-white">
            <div className="foo1 text-lg font-semibold mb-4 md:mb-0">
                Navigate with Insight
            </div>
            <div className="foo2 flex flex-col items-center md:items-start mb-4 md:mb-0">
                <p className="mb-2">Subscribe us:</p>
                <div className="header-input-container flex flex-col md:flex-row items-center gap-2">
                <input
                    type="text"
                    placeholder="Your e-mail Id"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    className="px-4 py-3 border border-gray-300 rounded-md md:w-48 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-500"
                />

                    <button 
                        onClick={mail}
                        className="mt-4 md:mt-0 px-3 py-5 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Subscribe
                    </button>

                </div>
            </div>
            <div className="foo3 mb-4 md:mb-0 text-center">
                <p className="mb-2">Follow us on:</p>
                <div className="allIcons flex gap-4 justify-center">
                    <i className="fa-brands fa-instagram text-2xl hover:text-pink-500"></i>
                    <i className="fa-brands fa-facebook text-2xl hover:text-blue-500"></i>
                    <i className="fa-brands fa-twitter text-2xl hover:text-blue-400"></i>
                </div>
            </div>
            <div className="foo4 text-lg font-semibold">
                Contact us: 123 456 789
            </div>
        </div>
    );
}


