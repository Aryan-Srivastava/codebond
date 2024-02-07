import { useState } from 'react'
import { motion } from "framer-motion";

const List = ({ list, filterItems }) => {
    const [active, setActive] = useState(0);
	return (
		<div className="port__items">
			<div className="portfolio__list">
				{list.map((category, index) => {
					return (
						<motion.div
							initial={{ y: 30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							key={index}
							className={`${
								active === index ? "active active-work act" : ""
							}} nav-item`}
						>
							<button
								className={`${
									active === index ? "active active-work" : ""
								} nav-link portfolio__list-items text-cs`}
								onClick={() => {
									setActive(index);
									filterItems(category);
								}}
							>
								{category}
							</button>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

export default List