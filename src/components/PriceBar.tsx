import React from 'react';

interface priceBarProps {
	timeValue: string;
	lowValue: number;
	highValue: number;
	currentValue?: number;
}

const PriceBar: React.FC<priceBarProps> = ({
	timeValue,
	lowValue,
	highValue,
	currentValue = null,
}) => {
	// todo - calc the current val's position based on the low and high value
	return (
		<div className='grid grid-cols-[10%,80%,auto] text-center'>
			<div>
				<p>{timeValue} Low</p>
				<p>{lowValue}</p>
			</div>
			<div className='relative max-w-screen-lg w-[95%]'>
				<div className='h-2 bg-gradient-to-r from-red-500 to-green-400 rounded-md'></div>

				{currentValue && (
					<div className='text-center absolute w-max left-2/3'>
						<p className='-mb-2.5 -mt-1 p-0'>⏶</p>
						<p>${currentValue}</p>
					</div>
				)}
			</div>
			<div>
				<p>{timeValue} High</p>
				<p>{highValue}</p>
			</div>
		</div>
	);
};

export default PriceBar;
