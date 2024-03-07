import React from 'react';
import Card from './Card';
import ItemSlider from './itemSlider';
import EventCard from './EventCard';

import newspaperIcon from '../assets/newspaper-outline.svg';
import trendingIcon from '../assets/trending-up-outline.svg';


const SentimentCard: React.FC = () => {
	return (
		<Card>
			{/* To load some dynamic styles */}
			<div className='bg-green-100 bg-red-100 bg-blue-100 bg-blue-300 hidden'></div>

			<p className='font-semibold text-xl'>Sentiment</p>
			<p className='sub_heading'>Key Events</p>
			<ItemSlider>
				<EventCard
					title='lorem ipsum dolor si amet'
					icon={newspaperIcon}
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
					cardColor='green'
				/>
				<EventCard
					title='lorem ipsum dolor si amet'
					icon={trendingIcon}
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
					cardColor='blue'
				/>
				<EventCard
					title='lorem ipsum dolor si amet'
					icon={newspaperIcon}
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
					cardColor='red'
				/>
			</ItemSlider>
			<p className='sub_heading'>Analysts Estimates</p>
			<div className='flex flex row gap-5'>
				<div className='rounded-full bg-green-200  p-2 grid place-content-center aspect-square'>
					<p>76%</p>
				</div>
				<div className='flex flex-col gap-2 grow '>
					<div className='flex flex-row gap-2 grow items-center'>
						<p>Buy</p>
						<div className='percentage_bar h-2.5  grow'>
							<div className='bg-green-500 w-1/2 h-full rounded-sm' style={{width:'76%'}}></div>
						</div>
						<p>76%</p>
					</div>
					<div className='flex flex-row gap-2 grow items-center'>
						<p>Hold</p>
						<div className='percentage_bar h-2.5  grow'>
							<div className='bg-gray-300 w-1/2 h-full rounded-sm' style={{width:'8%'}}></div>
						</div>
						<p>8%</p>
					</div>
					<div className='flex flex-row gap-2 grow items-center'>
						<p>Sell</p>
						<div className='percentage_bar h-2.5  grow'>
							<div className='bg-red-500 w-1/2 h-full rounded-sm' style={{width:'16%'}}></div>
						</div>
						<p>16%</p>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default SentimentCard;
