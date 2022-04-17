import { writable, type Writable } from 'svelte/store';

import type { Blogpost } from '../models/Blogpost';
import { db } from '../db';

export const Blogposts: Writable<Blogpost[]> = writable([]);

export const loadAllBlogposts = async () => {
	let { data: blogposts, error } = await db
		.from('blogposts')
		.select('id,title,shortDescription,tags,slug,author,coverImageUrl,fullContent')
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
