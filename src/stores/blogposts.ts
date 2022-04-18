import { writable, type Writable } from 'svelte/store';

import type { Blogpost } from '../models/Blogpost';
import { db } from '../db';

export const getAllBlogposts = async (): Promise<Blogpost[]> => {
	let { data: blogposts, error } = await db
		.from('blogposts')
		.select('*')
		.order('createdAt', { ascending: false });

	if (error) throw error;

	blogposts = blogposts.map((blogpost) => {
		return {
			...blogpost,
			createdAt: new Date(blogpost.createdAt)
		};
	});

	return blogposts;
};

export const getBlogpost = async (slug: string): Promise<Blogpost[]> => {
	let { data: blogposts, error } = await db
		.from('blogposts')
		.select('*')
		.filter('slug', 'eq', slug);

	if (error) throw error;

	blogposts = blogposts.map((blogpost) => {
		return {
			...blogpost,
			createdAt: new Date(blogpost.createdAt)
		};
	});

	return blogposts;
};
