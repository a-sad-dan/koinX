// utils/coinGeckoAPI.ts

interface CoinPrice {
	inr: number;
	inr_24h_change: number;
	usd: number;
	usd_24h_change: number;
}

interface CoinInfo {
	[coinId: string]: CoinPrice;
}

const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

export async function fetchCoinData(coinId: string) {
	try {
		const response = await fetch(
			`${COINGECKO_API_BASE_URL}/simple/price?ids=${coinId}&vs_currencies=inr,usd&include_24hr_change=true`
		);

		if (!response.ok) {
			throw new Error('Failed to fetch data from CoinGecko API');
		}

		const data: CoinInfo = await response.json();
		return data[coinId];
	} catch (error) {
		console.error('Error fetching data from CoinGecko API:', error);
		return null;
	}
}

export const getTrendingCoins = async (): Promise<string[]> => {
	try {
		const response = await fetch(
			'https://api.coingecko.com/api/v3/search/trending'
		);
		const data = await response.json();
		return data;
		
	} catch (error) {
		console.error('Error fetching trending coins:', error);
		return [];
	}
};
