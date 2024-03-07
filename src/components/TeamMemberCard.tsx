import React from 'react';

interface TeamMemberProps {
	imageUrl: string;
	name: string;
	designation: string;
	about: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
	imageUrl,
	name,
	designation,
	about,
}) => {
	return (
		<div className='rounded-md px-4 py-2 bg-[#e8f4fd]'>
			<div className='flex flex-row items-center mr-2'>
				<div className='min-w-28 flex flex-col items-center mr-2.5'>
					<img
						src={imageUrl}
						alt={name}
						className='max-w-[80px] h-[95px] object-cover mx-2 my-1 rounded-md'
					/>
					<p className='font-bold text-sm text-center'>{name}</p>
					<p className='font-medium text-xs text-center text-slate-400'>{designation}</p>
				</div>
				<p className='text-sm font-normal'>{about}</p>
			</div>
		</div>
	);
};

export default TeamMemberCard;
