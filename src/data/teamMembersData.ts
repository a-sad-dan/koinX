interface TeamMemberProps {
	imageUrl: string;
	name: string;
	designation: string;
	about: string;
}

const teamMembersData: TeamMemberProps[] = [
	{
		imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
		name: 'John Doe',
		designation: 'Senior Developer',
		about:
			'John is a passionate developer with extensive experience in web development. He loves working with the latest technologies and is always eager to learn new things.He is passionate about creating compelling content that engages and converts.' ,
	},
	{
		imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
		name: 'Jane Smith',
		designation: 'UX Designer',
		about:
			'Jane is a creative designer with a focus on user experience. She believes in designing products that not only look good but also provide a seamless user experience.',
	},
	{
		imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
		name: 'Mike Johnson',
		designation: 'Marketing Specialist',
		about:
			'Mike is a results-driven marketer with a proven track record of successful campaigns. He is passionate about creating compelling content that engages and converts.',
	},
];

export default teamMembersData;
