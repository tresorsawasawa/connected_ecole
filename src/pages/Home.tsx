import React from "react";
import { NavLink } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";


import styles from "../styles";
import { homeCardsData } from "../utils/data";

const Home: React.FC = () => (
	<>
		<section className={`${styles.padding} max-w-7xl my-0 mx-auto relative z-0`}>
			<div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:px-20 ">
				<ul className="welcome flex justify-center items-center flex-col sm:items-start">
					<li className="welcomeItem text-[18px] font-[600] text-secondary">
						Bienvenues
					</li>
					<li className="welcomeItem text-[18px] font-[600] text-secondary">
						Welcome
					</li>
					<li className="welcomeItem text-[18px] font-[600] text-secondary">
						Karibu
					</li>
				</ul>

				<h2 className="connectedEcole text-[1.5rem] text-center flex flex-col leading-10 font-[600] sm:text-[18px] sm:leading-6 sm:items-start">
					<span className="welcomeItem">Connected Ecole</span>{" "}
					<span className="welcomeItem">Le portail des ecoles</span>
				</h2>
			</div>
		</section>

		<section className={`${styles.padding} max-w-7xl my-0 mx-auto relative z-0`}>
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
							<NavLink to="/" className="bg-primary text-white py-[0.6rem] px-[0.85rem] rounded-[0.8rem] font-[600]">Read more</NavLink>
						</li>
					))}
				</ul>
			</div>
		</section>

    <section className={`${styles.padding} max-w-7xl my-0 mx-auto relative z-0`}>
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
