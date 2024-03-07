import Card from './Card';

const AboutCard = () => {
	return (
		<Card>
			<p className='font-semibold text-xl'>About Bitcoin</p>

			<div className='border-b-2 border-gray-100 rounded-sm pb-1.5 '>
				<p className='font-semibold text-base'>What is Bitcoin?</p>
				<p className='text-sm'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
					ut, deleniti ducimus beatae similique nesciunt esse tenetur obcaecati
					ipsa quam harum voluptates nulla minima placeat sint hic nihil nemo
					dolores.
				</p>
			</div>

			<div className='border-b-2 border-gray-100 rounded-sm pb-1.5 '>
				<p className='font-semibold text-base'>Lorem ipsum dolor sit amet</p>
				<div className='text-sm'>
					<p className='mb-2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Consequatur ut, deleniti ducimus beatae similique nesciunt esse
						tenetur obcaecati ipsa quam harum voluptates nulla minima placeat
						sint hic nihil nemo dolores.
					</p>
					<p className='mb-2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Consequatur ut, deleniti ducimus beatae similique nesciunt esse
						tenetur obcaecati ipsa quam harum voluptates nulla minima placeat
						sint hic nihil nemo dolores.
					</p>
					<p className='mb-2'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Consequatur ut, deleniti ducimus beatae similique nesciunt esse
						tenetur obcaecati ipsa quam harum voluptates nulla minima placeat
						sint hic nihil nemo dolores.
					</p>
				</div>
			</div>
			<div className='border-b-2 border-gray-100 rounded-sm pb-3'>
				<p className='font-semibold text-xl capitalize mb-2.5'>
					Already Holding Bitcoin?
				</p>
				<div className='flex flex-row gap-6 '>
					<div className='bg-gradient-to-br from-emerald-300 to-sky-800 p-4 rounded-md flex-1 flex flex-row gap-6'>
						<img
							src='https://images.unsplash.com/photo-1612043273531-601d2cd4855e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjB0cmFkaW5nfGVufDB8fDB8fHww'
							className='w-32
						aspect-square object-cover rounded-md'
						/>
						<div className='flex flex-col justify-between py-1.5 max-w-32'>
							<p className='text-white text-lg font-bold'>
								Calculate your Profits
							</p>
							<button className='bg-white px-2.5 py-1 text-sm rounded-md font-medium'>
								Check Now 🡢
							</button>
						</div>
					</div>

					<div className='bg-gradient-to-br from-orange-200 to-red-600 p-4 rounded-md flex-1 flex flex-row gap-6'>
						<img
							src='https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmUlMjB0cmFkaW5nfGVufDB8fDB8fHww '
							className='w-32
						aspect-square object-cover rounded-md'
						/>
						<div className='flex flex-col justify-between py-1.5 max-w-32'>
							<p className='text-white text-lg font-bold'>
								Calculate your Tax Liability
							</p>
							<button className='bg-white px-2.5 py-1 text-sm rounded-md font-medium'>
								Check Now 🡢
							</button>
						</div>
					</div>
				</div>
			</div>
			<p className='mb-2 text-sm'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
				voluptatum harum, mollitia quaerat exercitationem veniam quas rem nihil
				soluta commodi neque, libero ex repellendus aspernatur nam cumque
				deleniti beatae nulla!
			</p>
		</Card>
	);
};

export default AboutCard;
