export interface Project {
	id: string;
	title: string;
	subtitle: string;
	shortDescription: string;
	fullContent?: string;
	tags: string[];
	slug: string;
	urls: {
		git?: string;
		web?: string;
		docs?: string;
	};
	role: string;
}
