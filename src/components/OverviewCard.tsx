import React from 'react';
import Card from './Card';
import PriceBar from './PriceBar';

const OverviewCard: React.FC = () => {
	return (
		<Card>
			<p className='font-semibold text-xl '>Performance</p>
			<PriceBar timeValue="Today's" lowValue={46920.23} highValue={65920.93} currentValue={48637}/>
			<PriceBar timeValue="52W" lowValue={16930.23} highValue={66920.93} />
		</Card>
	);
};

export default OverviewCard;
