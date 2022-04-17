import { writable, type Writable } from 'svelte/store';

import type { Blogpost } from '../models/Blogpost';
import { db } from '../db';

export const Blogposts: Writable<Blogpost[]> = writable([
	// {
	// 	title: 'Why I use Prettier to format my code!',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit euismod mauris sit amet dictum. Pellentesque sit amet malesuada lectus. Etiam tristique lorem ac pellentesque vehicula. Pellentesque sit amet malesuada lectus...',
	// 	tags: ['fastapi', 'express.js', 'react', 'redux'],
	// 	slug: 'why-i-use-prettier-to-format-my-code',
	// 	coverImageUrl:
	// 		'https://repository-images.githubusercontent.com/75104123/f6f27280-61e5-11e9-8759-33288e842a50',
	// 	author: 'shornabho',
	// 	createdAt: new Date(2021, 9, 10)
	// },
	// {
	// 	title: 'Will Vite replace Webpack?',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit euismod mauris sit amet dictum. Pellentesque sit amet malesuada lectus. Etiam tristique lorem ac pellentesque vehicula. Pellentesque sit amet malesuada lectus...',
	// 	tags: ['flask', 'python', 'socketio', 'postgres'],
	// 	slug: 'will-vite-replace-webpack',
	// 	coverImageUrl:
	// 		'https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/webpack-vite.png?fit=1200%2C600&ssl=1',
	// 	author: 'shornabho',
	// 	createdAt: new Date(2021, 9, 10)
	// },
	// {
	// 	title: 'Is FastAPI the cleanest Python API framework ever?',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit euismod mauris sit amet dictum. Pellentesque sit amet malesuada lectus. Etiam tristique lorem ac pellentesque vehicula. Pellentesque sit amet malesuada lectus...',
	// 	tags: ['express.js', 'firebase', 'angular', 'aws ec2'],
	// 	slug: 'fastapi-cleanest-python-api-framework',
	// 	coverImageUrl: 'https://miro.medium.com/max/1400/1*mK7gx0yT5HeKbpQ30NS3yg.jpeg',
	// 	author: 'shornabho',
	// 	createdAt: new Date(2021, 9, 10)
	// },
	// {
	// 	title: 'Will Svelte/SvelteKit rule the future?',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit euismod mauris sit amet dictum. Pellentesque sit amet malesuada lectus. Etiam tristique lorem ac pellentesque vehicula. Pellentesque sit amet malesuada lectus...',
	// 	tags: ['flask', 'postgres', 'd3.js', 'python'],
	// 	slug: 'will-svelte-sveltekit-rule-the-future',
	// 	coverImageUrl: 'https://miro.medium.com/max/1400/1*D4Q_5erHUdm8zXNaxPsEGQ.png',
	// 	author: 'shornabho',
	// 	createdAt: new Date(2021, 9, 10)
	// }
]);

export const loadAllBlogposts = async () => {
	let { data: blogposts, error } = await db
		.from('blogposts')
		.select('id,title,shortDescription,tags,slug,author,coverImageUrl')
		.order('createdAt', { ascending: false });

	Blogposts.set(blogposts);
};

export const loadBlogpost = async (slug: string) => {
	let { data, error } = await db.from('blogposts').select('fullContent').filter('slug', 'eq', slug);

	Blogposts.update((blogposts: Blogpost[]) => {
		return blogposts.map((blogpost: Blogpost) => {
			if (blogpost.slug == slug) blogpost.fullContent = data.at(0)?.fullContent;
			return blogpost;
		});
	});
};

loadAllBlogposts();
