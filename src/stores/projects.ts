import { get, writable, type Writable } from 'svelte/store';

import { db } from '../db';
import type { Project } from '../models/Project';

export const getAllProjects = async (): Promise<Project[]> => {
	let { data: projects, error } = await db
		.from('projects')
		.select('id,title,subtitle,shortDescription,tags,role,webUrl,gitUrl,docsUrl,slug')
		.order('started_at', { ascending: false });

	if (error) throw error;

	if (projects) {
		projects = projects.map((project) => {
			project = {
				...project,
				urls: {
					git: project.gitUrl,
					web: project.webUrl,
					docs: project.docsUrl
				}
			};
			delete project.gitUrl;
			delete project.webUrl;
			delete project.docsUrl;

			return project;
		});
	}

	return projects;
};

export const getProject = async (slug: string): Promise<Project> => {
	let { data: projects, error } = await db.from('projects').select('*').filter('slug', 'eq', slug);

	if (error) throw error;
	else return projects.at(0);
};
