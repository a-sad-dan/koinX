import { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { getTrendingCoins } from '../utils/coinGeckoAPI';
import Ticker from './Ticker';

const SuggestedCoins: React.FC = () => {
	const [trendingCoins, setTrendingCoins] = useState<string[]>([]);

	useEffect(() => {
		const fetchTrendingCoins = async () => {
			const coins = await getTrendingCoins();
			setTrendingCoins(coins.coins.slice(0, 12));
			console.log(coins.coins.slice(0, 12));
		};

		fetchTrendingCoins();
	}, []);

	return (
		<section className='bg-white bottom-0 left-0 px-20 py-4'>
			<div>
				<p className='font-semibold text-lg mb-3'>You May Also Like</p>
				<Carousel>
					{trendingCoins.map((coin: any, index) => (
						<div
							key={index}
							className='flex flex-col  gap-2 justify-between bg-orange-100 p-5 py-3 rounded-lg '
						>
							<div className='flex gap-2'>
								<img
									src={coin.item.thumb}
									className='rounded-full w-7'
								/>
								<p className=''>{coin.item.symbol}</p>
								<Ticker
									valueChange={coin.item.data.price_change_percentage_24h.usd}
								/>
							</div>
							<p>{coin.item.data.price}</p>
							<img src={coin.item.data.sparkline} />
						</div>
					))}
				</Carousel>
			</div>
			<div>
				<p className='font-semibold text-lg mb-4'>Trending Coins</p>
				<Carousel>
					{trendingCoins.map((coin: any, index) => (
						<div
							key={index}
							className='flex flex-col  gap-2 justify-between bg-orange-100 p-5 py-3 rounded-lg '
						>
							<div className='flex gap-2'>
								<img
									src={coin.item.thumb}
									className='rounded-full w-7'
								/>
								<p className=''>{coin.item.symbol}</p>
								<Ticker
									valueChange={coin.item.data.price_change_percentage_24h.usd}
								/>
							</div>
							<p>{coin.item.data.price}</p>
							<img src={coin.item.data.sparkline} />
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
};

export default SuggestedCoins;
