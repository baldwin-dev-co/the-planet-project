const documentarySchema = {
	name: 'documentary',
	title: 'Documentary',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'videoUrl',
			title: 'Video URL',
			type: 'slug',
		},
		{
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
