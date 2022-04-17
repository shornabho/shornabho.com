import { writable, type Writable } from 'svelte/store';

import type { Blogpost } from '../models/Blogpost';
import { db } from '../db';

export const getAllBlogposts = async (): Promise<Blogpost[]> => {
	let { data: blogposts, error } = await db
		.from('blogposts')
		.select('*')
		.order('createdAt', { ascending: false });

	blogposts = blogposts.map((blogpost) => {
		return {
			...blogpost,
			createdAt: new Date(blogpost.createdAt)
		};
	});

	if (error) throw error;
	else return blogposts;
};

export const getBlogpost = async (slug: string): Promise<Blogpost> => {
	let { data: blogpost, error } = await db.from('blogposts').select('*').filter('slug', 'eq', slug);

	if (error) throw error;
	else return { ...blogpost.at(0), createdAt: new Date(blogpost.at(0).createdAt) };
};
