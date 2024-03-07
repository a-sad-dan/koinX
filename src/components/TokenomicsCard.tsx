import Card from './Card';
import './tokenomics.css';

const TokenomicsCard = () => {
	return (
		<Card>
			<p className='font-semibold text-xl'>Tokenomics</p>
			<p className='font-semibold text-base'>Initial Distribution</p>
			<div className='flex flex-row gap-4 items-center'>
				<div className=' relative rounded-full overflow-clip w-min min-w-[140px]'>
					<div className=' aspect-square bg-[conic-gradient(_orange_35%,#0082ff_0)] -rotate-[115deg] rounded-full;'>
						<div className='w-3/5 bg-white z-[2] aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
					</div>
				</div>
				<ul className='ml-2 relative'>
					<li className='bullet blue flex items-center gap-2'>
						Crowdsale Investors : 80%
					</li>
					<li className='bullet orange flex items-center gap-2'>
						Foundation : 20%
					</li>
				</ul>
			</div>
			<p className='text-sm mb-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
				odio, sint reprehenderit culpa aliquam eligendi eveniet blanditiis enim
				quos omnis eaque, nostrum atque, ab minima est corrupti non facere? Ad.
			</p>
		</Card>
	);
};

export default TokenomicsCard;
