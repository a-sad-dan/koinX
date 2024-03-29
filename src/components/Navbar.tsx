import koinxLogo from '../assets/koinx-logo.svg';

const Navbar: React.FC = () => {
	return (
		<nav className='flex flex-row justify-between text-base font-medium text-zinc-950 bg-white px-20 py-4 sticky top-0 z-10 col-span-2'>
			<img
				src={koinxLogo}
				alt='koinX Logo'
			/>
			<div className='flex flex-row items-center gap-7'>
				<ul className='flex flex-row gap-7 items-center'>
					<li>
						<a href='#crypto-taxes'>Crypto Taxes</a>
					</li>
					<li>
						<a href='#free-tools'>Free Tools</a>
					</li>
					<li>
						<a href='#resource-center'>Resource Center</a>
					</li>
				</ul>
				<button className='get-started-button px-4 py-2 text-slate-50 bg-blue-600 rounded-md'>Get Started</button>
			</div>
		</nav>
	);
};

export default Navbar;
