import React, { useState } from "react";
import ImageCanvas from "../components/ImageCanvas";
import Sidebar from "../components/Sidebar";

const IndexPage: React.FC = () => {
	const [selectedItem, setSelectedItem] = useState<number[] | null>(null);

	const handleSidebarItemClick = (item: number[]) => {
		setSelectedItem(item);
	};

	return (
		<div>
			<ImageCanvas selectedItem={selectedItem} />
			<Sidebar onItemSelect={handleSidebarItemClick} />
		</div>
	);
};

export default IndexPage;
