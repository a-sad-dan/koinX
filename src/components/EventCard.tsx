import React from 'react';

interface EventCardProps {
	icon: string;
	title: string;
	description: string;
	cardColor: string;
}

const EventCard: React.FC<EventCardProps> = ({
	icon,
	title,
	description,
	cardColor,
}) => {
	const bgClassLight = `bg-${cardColor}-100`;
	const bgClassDark = `bg-${cardColor}-300`;
	return (
		<div
			className={`rounded-lg shadow-lg p-4 flex flex-shrink-0  w-1/4 min-w-96 ${bgClassLight}`}
		>
			<div
				className={`flex-none mr-4 w-12 h-12 p-2 rounded-full ${bgClassDark}`}
			>
				<img
					src={icon}
					alt='Event Icon'
					className='w-full'
				/>
			</div>
			<div>
				<h3 className='text-xl font-bold mb-2'>{title}</h3>
				<p className='text-gray-700'>{description}</p>
			</div>
		</div>
	);
};

export default EventCard;
