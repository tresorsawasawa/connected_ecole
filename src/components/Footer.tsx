import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import { navLinks, socialData } from "../utils/data";

const Footer: React.FC = () => {
	return (
		<footer className="bg-primary text-white py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h1 className="text-2xl font-bold">Connected Ecole</h1>
						<p className="text-sm mt-2">Your trusted education partner</p>
					</div>

					{/* Navigation Links */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h2 className="text-xl font-semibold mb-3">Quick Links</h2>
						<ul>
							{navLinks.map(({ id, title, path }) => (
								<li key={id}>
									<Link to={path} className="hover:text-gray-400">
										{title}
									</Link>
								</li>
							))}
							<li>
								<Link to="/faq" className="hover:text-gray-400">
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h2 className="text-xl font-semibold mb-3">Contact Us</h2>
						<p className="text-[1rem] mb-1">
							123 Education Street
							<br />
							City, State, 12345
						</p>
						<p className="text-[1rem]">
							<span className="flex items-center gap-1">
								<MdOutlineMailOutline className="text-[20px]" />
								info@school.com
							</span>
							<br />
							<span className="flex items-center gap-1 mt-[-10px]">
								<FaPhone className="text-[20px]" />
								+(243) XXX XXX
							</span>
						</p>
					</div>

					{/* Social Media Links */}
					<div className="w-full md:w-1/4">
						<h2 className="text-xl font-semibold mb-3">Follow Us</h2>
						<ul className="flex space-x-4">
							{socialData.map(({ id, icon, path }) => (
								<li key={id}>
									<Link
										to={path}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-gray-400"
									>
										{icon}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="text-center mt-6 border-t border-gray-300 pt-6">
					<p className="text-sm">
						&copy; Powered By Connected Ecole {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
