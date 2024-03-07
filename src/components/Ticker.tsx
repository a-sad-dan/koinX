import React from 'react';

interface TickerProps {
	valueChange: number;
}

// todo - Ticker SVG fix

const Ticker: React.FC<TickerProps> = ({ valueChange }) => {
	const changeClass =
		valueChange > 0 ? 'text-green-500 bg-green-200' : 'text-red-500 bg-red-200';

	return (
		<div className={`flex items-center ${changeClass} px-2 py-1.5 rounded-md w-fit pr-3`}>
			<svg
				className={`w-4 h-4 ${changeClass}`}
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d={valueChange > 0 ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
				/>
			</svg>
			<span className={`ml-1 text-xs font-bold`}>
				{valueChange > 0 ? '+' : ''}
				{valueChange.toFixed(2)}%
			</span>
		</div>
	);
};

export default Ticker;
