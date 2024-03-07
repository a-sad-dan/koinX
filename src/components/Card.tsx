import React, { ReactNode } from 'react';

interface cardProps {
	children: ReactNode;
}

const Card: React.FC<cardProps> = ({ children }) => {
	return <div className='p-6 py-4 bg-white rounded-lg flex flex-col gap-4'>{children}</div>;  
};

export default Card;
