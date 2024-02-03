import Items from "./Items";
import List from "./List";
import { projects } from "../../assets/Data";
import { useState } from "react";
import "./CaseStudy.css";
import { motion } from "framer-motion";

const allNavList = [
	...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
	const [projectItems, setProjectItems] = useState(projects);
	const [navList, setNavList] = useState(allNavList);

	const filterItems = (category) => {
		const filteredData = projects.filter(
			(project) => project.category === category
		);
		setProjectItems(filteredData);
	};

	return (
		<section className="portfolio section" id="work">
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<div className="case-studio-header text-center">
                    <h5 className="section-subtitle">CASE STUDIES</h5>
                    <h1 className="section-title">Detailing of our products</h1>
                </div>
			</motion.div>
			<List list={navList} filterItems={filterItems} />
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				className="portfolio__container container grid"
			>
				<Items projectItems={projectItems} />
			</motion.div>
		</section>
	);
};

export default Portfolio;
