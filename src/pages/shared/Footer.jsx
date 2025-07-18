import React from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Send,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 md:px-20 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* About Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Background-image</h2>
                    <p className="text-sm text-gray-300 mb-4">
                        We only carry designs we believe in ethically and aesthetically – original, authentic pieces that are made to last. <a href="#" className="underline">Learn more</a>
                    </p>
                    <p className="text-sm text-gray-400">Street Address Wari Dhaka</p>
                    <p className="text-sm text-gray-400">+88018650-222-54</p>
                    <p className="text-sm text-gray-400">diptabanik0@gmail.com</p>
                </div>

                {/* Our Company Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Our Company</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Our Store</a></li>
                        <li><a href="#">Store Location</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Sale</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Compare</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Sign Up to Newsletter</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Subscribe for store updates and discounts.
                    </p>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="px-4 py-2 rounded bg-white text-black text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 hover:border-b-4 hover:border-yellow-600 transition-all duration-300"
                        >
                            Subscribe <Send size={16} />
                        </button>
                    </form>
                    <p className="text-xs text-gray-400 mt-2">
                        ***By entering the e-mail you accept the terms and conditions and the privacy policy.
                    </p>
                </div>
            </div>

            {/* Social Icons */}
            <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-400">&copy; 2025 Fashion Women. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook /></a>
                    <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram /></a>
                    <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter /></a>
                    <a href="#" className="hover:text-yellow-400 transition-colors"><Youtube /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
