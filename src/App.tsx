import AboutCard from './components/AboutCard';
import GetStartedCard from './components/GetStartedCard';
import Navbar from './components/Navbar';
import OverviewCard from './components/OverviewCard';
import SelectedCoinCard from './components/SelectedCoinCard';
import SentimentCard from './components/SentimentCard';
import SuggestedCoins from './components/SuggestedCoins';
import TeamCard from './components/TeamCard';
import TokenomicsCard from './components/TokenomicsCard';
import TrendingCoinsCard from './components/TrendingCoinsCard';

const App = () => {
	return (
		<>
			<Navbar />
			<div className='bg-[#eff2f5]  size-full relative grid grid-cols-[70vw,auto] gap-x-4 '>
				Main Section
				<main className='h-full ml-20 py-3 flex flex-col gap-4 relative col-start-1 col-end-2'>
					<SelectedCoinCard coinId='bitcoin' />
					<OverviewCard />
					<SentimentCard />
					<AboutCard />
					<TokenomicsCard />
					<TeamCard />
				</main>
				<div className='col-start-2 col-end-3 py-3 px-3 mr-3 flex flex-col gap-4 mr-[4rem] relative'>
					<div className='sticky top-[9rem] mt-[2rem] flex flex-col gap-4'>
						<GetStartedCard />
						<TrendingCoinsCard />
					</div>
				</div>
				<div className='col-start-1 col-end-3 overflow-hidden bg-white'>
					<div className='mr-[5rem] overflow-clip'>
						<SuggestedCoins />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
