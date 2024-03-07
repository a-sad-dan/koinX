import Card from './Card';

import btcLogo from '../assets/btc-logo.svg';
import { useState, useEffect } from 'react';
import { fetchCoinData } from '../utils/coinGeckoAPI';
import Ticker from './Ticker';
import TradingViewWidget from './TradingViewWidget';

interface CoinPrice {
	inr: number;
	inr_24h_change: number;
	usd: number;
	usd_24h_change: number;
}

const SelectedCoinCard: React.FC<{ coinId: string }> = ({ coinId }) => {
	const [coinPrice, setCoinPrice] = useState<CoinPrice | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchCoinData(coinId);
			if (data) {
				setCoinPrice(data);
			}
		};

		fetchData();
	}, [coinId]);

	if (!coinPrice) {
		// todo - Spinner instead of this
		return <div>Loading...</div>;
	}

	return (
		<section className=''>
			<p className='text-sm text-slate-500 font-medium mb-3'>
				Cryptocurrencies »
				<span className='text-slate-600 font-semibold pl-2'>{coinId}</span>
			</p>
			<Card>
				<div className='flex flex-row gap-2 items-center'>
					<img
						src={btcLogo}
						className='w-8 h-8'
					/>
					<p className='text-xl font-semibold text-slate-800 capitalize'>
						{coinId}
					</p>
					<p className='text-xs font-semibold text-slate-400 uppercase'>BTC</p>
					<p className='ml-6 p-2.5 py-2 bg-slate-500 rounded-lg text-white text-sm font-medium'>
						Rank #1
					</p>
				</div>

				{/* Coin Price */}
				<div>
					<div className='flex flex-row gap-4 items-center mb-1.5'>
						<p className='text-2xl font-semibold'>${coinPrice.usd}</p>{' '}
						<Ticker
							valueChange={parseFloat(coinPrice.usd_24h_change.toFixed(2))}
						/>
						<p className='font-medium text-sm text-slate-400'>(24 H)</p>
					</div>
					<p>₹{coinPrice.inr}</p>
				</div>

				{/* Trading View Widget */}
				<TradingViewWidget />
			</Card>
		</section>
	);
};

export default SelectedCoinCard;
