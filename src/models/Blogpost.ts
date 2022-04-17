export interface Blogpost {
	id: string;
	title: string;
	shortDescription: string;
	fullContent?: string;
	tags: string[];
	slug: string;
	coverImageUrl: string;
	createdAt: Date;
	author: string;
}
