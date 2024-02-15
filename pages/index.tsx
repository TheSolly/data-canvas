import React, { useState, useEffect } from "react";
import ImageCanvas from "../components/ImageCanvas";
import Sidebar from "../components/Sidebar";
import { FaBars } from "react-icons/fa";

const IndexPage: React.FC = () => {
	const [selectedItem, setSelectedItem] = useState<number[] | null>(null);
	const [showSidebar, setShowSidebar] = useState(false);

	const handleSidebarItemClick = (item: number[]) => {
		setShowSidebar(false);
		setSelectedItem(item);
	};

	const handleBurgerMenuClick = () => {
		setShowSidebar(!showSidebar);
		setSelectedItem(null);
	};

	useEffect(() => {
		const closeSidebar = () => {
			console.log(showSidebar);
			if (showSidebar) {
				setShowSidebar(false);
			}
		};

		document.addEventListener("click", closeSidebar);

		return () => {
			document.removeEventListener("click", closeSidebar);
		};
	}, [showSidebar]);

	return (
		<main>
			<div className='absolute top-0 left-0 z-10'>
				<button onClick={handleBurgerMenuClick}>
					<FaBars />
				</button>
				{showSidebar && <Sidebar onItemSelect={handleSidebarItemClick} />}
			</div>
			<ImageCanvas selectedItem={selectedItem} />
		</main>
	);
};

export default IndexPage;
