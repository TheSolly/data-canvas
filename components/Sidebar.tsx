import React from "react";
import objectData from "../public/objectData.json";

enum ClassTypes {
	Date = "Date",
	Number = "Number",
	Amount = "Amount",
	Supplier = "Supplier",
	Description = "Description",
	Name = "Name",
}

type SidebarProps = {
	onItemSelect: (item: number[]) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onItemSelect }) => {
	const handleBoxClick = (boxId: number[]) => {
		onItemSelect(boxId);
	};

	return (
		<aside className='w-1/4 h-full bg-gray-50 p-4 shadow-lg'>
			{Object.keys(ClassTypes).map((classType, index) => (
				<>
					<div key={index}>
						<h3>{classType}</h3>
					</div>
					<div className='ml-4 before:border-l-2 border-gray-300'>
						{objectData.boxes
							.filter((box) => box.class === classType)
							.map((box, index) => (
								<div
									className='p-2 hover:bg-gray-100 cursor-pointer'
									key={index}
									onClick={() => handleBoxClick(box.points)}
								>
									{box.text}
								</div>
							))}
					</div>
				</>
			))}
		</aside>
	);
};

export default Sidebar;
