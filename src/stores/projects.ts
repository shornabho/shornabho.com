import { get, writable, type Writable } from 'svelte/store';

import { db } from '../db';
import type { Project } from '../models/Project';

export const Projects: Writable<Project[]> = writable([]);

export const loadAllProjects = async () => {
	let { data: projects, error } = await db
		.from('projects')
		.select('id,title,subtitle,shortDescription,tags,role,webUrl,gitUrl,docsUrl,slug')
		.order('started_at', { ascending: false });

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
	Projects.set(projects);
};

export const loadProject = async (slug: string) => {
	let { data, error } = await db.from('projects').select('fullContent').filter('slug', 'eq', slug);

	Projects.update((projects: Project[]) => {
		return projects.map((project: Project) => {
			if (project.slug == slug) project.fullContent = data.at(0)?.fullContent;
			return project;
		});
	});
};

loadAllProjects();
