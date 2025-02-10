import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiLogoWhatsapp } from "react-icons/bi";

function Footer() {
    return (
        <footer className="text-white py-12 px-6 md:px-24 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
                {/* Logo & Description */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold">ZekeMedia</h2>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Leading digital media agency providing top-notch solutions in branding, design, and marketing.
                    </p>
                    <div className="flex gap-4 text-lg">
                        <BiLogoFacebook className="cursor-pointer hover:text-blue-500" />
                        <BiLogoTwitter className="cursor-pointer hover:text-blue-400" />
                        <BiLogoWhatsapp className="cursor-pointer hover:text-green-500" />
                        <BiLogoInstagram className="cursor-pointer hover:text-pink-500" />
                        <BiLogoLinkedin className="cursor-pointer hover:text-blue-600" />
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Pages</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">Portfolio</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li className="hover:text-white cursor-pointer">Branding</li>
                        <li className="hover:text-white cursor-pointer">Web Design</li>
                        <li className="hover:text-white cursor-pointer">SEO Optimization</li>
                        <li className="hover:text-white cursor-pointer">Digital Marketing</li>
                        <li className="hover:text-white cursor-pointer">Content Creation</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-gray-400">Lagos, Nigeria</p>
                    <p className="text-gray-400">Email: bammigbalatoyese@gmail.com</p>
                    <p className="text-gray-400">Phone: +234 816 988 5711</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 text-sm mt-6">
                © {new Date().getFullYear()} ZekeMedia | Designed & Developed by Zeke
            </div>
        </footer>
    );
}

export default Footer;
