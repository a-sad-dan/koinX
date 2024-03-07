import React from 'react';
import Card from './Card';
import { getTrendingCoins } from '../utils/coinGeckoAPI';
import { useState, useEffect } from 'react';
import Ticker from './Ticker';

const TrendingCoinsCard = () => {
	const [trendingCoins, setTrendingCoins] = useState<string[]>([]);

	useEffect(() => {
		const fetchTrendingCoins = async () => {
			const coins = await getTrendingCoins();
			setTrendingCoins(coins.coins.slice(0, 3));
			console.log(coins.coins.slice(0, 3));
		};

		fetchTrendingCoins();
	}, []);

	return (
		<div className=''>
			<Card>
				<p>Trending Coins (24h)</p>
				{trendingCoins.map((coin: any, index) => (
					<div
						key={index}
						className='flex items-center gap-2 justify-between'
					>
						<div className='flex items-center gap-2'>
							<img src={coin.item.thumb} className='rounded-full w-7'/>
							<p className=''>{coin.item.name}</p>
						</div>
						<Ticker
							valueChange={coin.item.data.price_change_percentage_24h.usd}
						/>
					</div>
				))}
			</Card>
		</div>
	);
};

export default TrendingCoinsCard;
