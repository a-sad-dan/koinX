import React, { useRef } from 'react';

interface ItemSliderProps {
	children: React.ReactNode;
}

const ItemSlider: React.FC<ItemSliderProps> = ({ children }) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
		if (scrollRef.current) {
			const delta = event.deltaY;

			if (delta < 0) {
				// Scroll Up
				scrollRef.current.scrollLeft -= scrollRef.current.clientWidth;
			} else if (delta > 0) {
				// Scroll Down
				scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
			}
		}
	};

	return (
		<div
			className='relative w-full overflow-hidden'
			style={{ scrollBehavior: 'smooth' }}
			onWheel={handleWheel}
		>
			<div
				ref={scrollRef}
				className='flex flex-nowrap overflow-x-auto gap-4 pb-4'
				style={{ scrollBehavior: 'smooth' }}
			>
				{children}
			</div>
		</div>
	);
};

export default ItemSlider;
