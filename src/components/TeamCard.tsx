import Card from './Card';
import teamMembersData from '../data/teamMembersData';
import TeamMemberCard from './TeamMemberCard';

const TeamCard: React.FC = () => {
	return (
		<Card>
			<p className='font-semibold text-xl'>Team</p>
			<p className='text-sm'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fuga
				reiciendis assumenda quibusdam id ea reprehenderit, corporis beatae
				error repellendus debitis blanditiis voluptate nesciunt, soluta eius
				labore similique fugiat ipsam?
			</p>
			{teamMembersData.map(({name,about,imageUrl,designation})=>
			<TeamMemberCard key={name} name={name} about={about} designation={designation} imageUrl={imageUrl}/>)}
			<div className='pb-1.5'></div>
		</Card>
	);
};

export default TeamCard;
