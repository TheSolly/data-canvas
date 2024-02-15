// create the index.tsx for this project
import React from "react";
import ImageCanvas from "../components/ImageCanvas";
import Sidebar from "../components/Sidebar";

const IndexPage: React.FC = () => {
	return (
		<div>
			<ImageCanvas />
			<Sidebar />
		</div>
	);
};

export default IndexPage;
