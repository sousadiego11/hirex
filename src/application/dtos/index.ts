import type { JobApplicationStatus, JobStatus, UserRole } from '@app/enums';

export type RegisterUserDTO = {
	name: string;
	email: string;
	password: string;
	roles: UserRole[];
};

export type LoginDTO = {
	email: string;
	password: string;
};

export type UserResponseDTO = {
	id: string;
	name: string;
	email: string;
	roles: UserRole[];
	createdAt: Date;
};

export type CreateJobDTO = {
	title: string;
	description: string;
	location?: string;
	salaryRange?: string;
};

export type UpdateJobDTO = {
	title?: string;
	description?: string;
	location?: string;
	salaryRange?: string;
	status?: JobStatus;
};

export type JobResponseDTO = {
	id: string;
	title: string;
	status: JobStatus;
	recruiterId: string;
	createdAt: Date;
};

export type ApplyToJobDTO = {
	jobId: string;
	coverLetter?: string;
};

export type ApplicationResponseDTO = {
	id: string;
	jobId: string;
	candidateId: string;
	status: JobApplicationStatus;
	createdAt: Date;
};
