import React, { useRef, useState } from 'react';
import ArrowLeftIcon from '../assets/chevron-left.svg';
import ArrowRightIcon from '../assets/chevron-right.svg';

type CarouselProps = {
	children: React.ReactNode[];
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);
	const cardWidth = 320; // Width of each card in pixels
	const visibleCards = 2; // Number of visible cards at a time

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setStartX(event.pageX - carouselRef.current!.offsetLeft);
		setScrollLeft(carouselRef.current!.scrollLeft);
	};

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		const x = event.pageX - carouselRef.current!.offsetLeft;
		const walk = (x - startX) * 1; // Adjust the scroll speed here
		carouselRef.current!.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleScroll = (scrollOffset: number) => {
		if (carouselRef.current) {
			const newScrollPosition =
				scrollLeft + scrollOffset * cardWidth * visibleCards;
			carouselRef.current.scrollTo({
				left: newScrollPosition,
				behavior: 'smooth',
			});
			setScrollLeft(newScrollPosition);
		}
	};

	const handleScrollRight = () => {
		handleScroll(1); // Scroll one card to the right
	};

	const handleScrollLeft = () => {
		handleScroll(-1); // Scroll one card to the left
	};

	return (
		<div className='relative'>
			<div
				ref={carouselRef}
				className='flex overflow-x-auto scrollbar-hide gap-4 w-screen'
				style={{
					scrollSnapType: 'x mandatory',
					scrollBehavior: 'smooth',
					display: 'flex',
					cursor: isDragging ? 'grabbing' : 'grab',
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
			>
				{children.map((child, index) => (
					<div
						key={index}
						className='flex-shrink-0 flex mr-4 '
					>
						{child}
					</div>
				))}
				<button
					onClick={handleScrollLeft}
					className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-lg z-10'
				>
					<img
						src={ArrowLeftIcon}
						alt='Left Arrow'
						className='h-6 w-6 text-gray-600'
					/>
				</button>
				<button
					onClick={handleScrollRight}
					className='absolute top-1/2 -right-10 -translate-y-1/2 translate-x- bg-gray-100 p-2 rounded-full shadow-lg z-10'
				>
					<img
						src={ArrowRightIcon}
						alt='Right Arrow'
						className='h-6 w-6 text-gray-600'
					/>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
