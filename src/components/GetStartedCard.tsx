import getStartedImage from '../assets/graphic.png';

const GetStartedCard = () => {
	return (
		<div className='bg-[#0052fe] p-4 rounded-lg text-white flex flex-col items-center'>
			<h1 className='text-lg font-bold text-center'>
				Get started with Koinx <br /> For FREE
			</h1>
			<p>
				With our ranges of features that you can equip for free, KoinX allows
				you to be more educated and aware of your tax reports
			</p>
			<img  src={getStartedImage} />
      <button className='bg-white text-slate-800 px-4 py-2 rounded-md'>get Started for Free →</button>
		</div>
	);
};

export default GetStartedCard;
