import React from "react";
import { NavLink } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-scroll";

import styles from "../styles";
import { homeCardsData } from "../utils/data";
import Slider from "../components/TypingSlider";

const Home: React.FC = () => (
	<>
		<section className="relative bg-hero-pattern bg-cover bg-no-repeat min-h-screen">
			<div className="flex items-center justify-center flex-col inset-0 bg-primary bg-opacity-50 min-h-screen">
				<div
					className={`${styles.padding} max-w-7xl my-0 mx-auto relative z-0 flex items-center justify-center flex-col gap-8`}
				>
					<div className="flex items-center justify-center">
						<Slider />
					</div>

					<h1 className="text-5xl text-center text-white font-bold md:text-[60px]">
						Connected Ecole, <br /> Your trusted education partner
					</h1>

					<p className="text-[18px] text-[white] font-[500] border border-solid border-[#5a607b] p-8 rounded-md">
						"Education is not the preparation of life education, is life itself"
						- <span className="font-bold text-[20px]">John DEWEW</span>
					</p>
				</div>
				<Link
					to="company"
					className="bg-primary cursor-pointer text-white px-4 py-2 rounded font-bold "
				>
					Learn more
				</Link>
			</div>
		</section>

		<section
			className={`${styles.padding} max-w-7xl my-0 mx-auto relative z-0`}
			id="company"
		>
			<div className="container flex flex-col gap-9  my-0 mx-auto ">
				<h2 className="text-primary text-[1.5rem] font-[600] capitalize text-center">
					<span>-</span> <span>The company</span>
				</h2>

				<ul
					className="cards grid items-center justify-center
        gap-6 md:flex md:justify-center md:items-center"
				>
					{homeCardsData.map(({ id, title, description }) => (
						<li
							key={id}
							className="h-full flex justify-between flex-col items-center gap-8 text-center w-full shadow-card p-4 rounded-2xl border border-solid border-[#e1e1eb]"
						>
							<h3 className="text-[1.25rem] text-center text-primary font-[600]">
								{title}
							</h3>
							<p className="text-center">{description}</p>
							<NavLink
								to="/"
								className="bg-primary text-white py-[0.6rem] px-[0.85rem] rounded-[0.8rem] font-[600]"
							>
								Read more
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</section>

		<section
			className={`${styles.padding} max-w-7xl my-0 mx-auto relative z-0`}
		>
			<div className="flex flex-col gap-7">
				<div className="mission">
					<h3 className="text-primary font-bold text-2xl">Mission</h3>
					<p className="text-[20px]">
						Accelerer latransition de l'afrique vers le monde technologique.
					</p>
				</div>

				<div className="vision">
					<h3 className="text-primary font-bold text-2xl">Vision</h3>
					<p className="text-[20px]">Etre le geant panafricain du digital</p>
				</div>
			</div>
		</section>

		<section
			className={`${styles.padding} max-w-7xl my-0 mx-auto relative z-0`}
		>
			<div className="container flex flex-col gap-9  my-0 mx-auto ">
				<h2 className="text-primary text-[1.5rem] font-[600] capitalize text-center">
					<span>-</span> <span>The partners</span>
				</h2>

				<div className="partners flex flex-col gap-4 md:flex-wrap md:flex-row md:justify-evenly">
					<ul className="flex flex-col gap-3">
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>Ministere de l'EST</span>
						</li>
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>Ministere de l'Esu</span>
						</li>
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>Aitlors</span>
						</li>
					</ul>

					<ul className="flex flex-col gap-3">
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>Le parrain</span>
						</li>
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>Cafe Kinois</span>
						</li>
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>L'enfant congolais du future</span>
						</li>
					</ul>

					<ul className="flex flex-col gap-3">
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>Airtel CD</span>
						</li>
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>VV Logistics</span>
						</li>
						<li className="flex justify-start items-center gap-2">
							<FaCircleCheck className="text-primary text-[1.5rem]" />
							<span>Kibali gold mine</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</>
);

export default Home;
