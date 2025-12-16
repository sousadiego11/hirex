import type { ApplicationStatus, JobStatus, UserRole } from '@app/enums';

export type User = {
	id: string;
	name: string;
	email: string;
	passwordHash: string;
	role: UserRole;
	createdAt: Date;
	updatedAt?: Date;
};

export type Job = {
	id: string;
	title: string;
	description: string;
	location?: string;
	salaryRange?: string;
	status: JobStatus;
	recruiterId: string;
	createdAt: Date;
	updatedAt?: Date;
};

export type Application = {
	id: string;
	jobId: string;
	candidateId: string;
	coverLetter?: string;
	status: ApplicationStatus;
	createdAt: Date;
	updatedAt?: Date;
};

export type RefreshToken = {
	id: string;
	userId: string;
	tokenHash: string;
	expiresAt: Date;
	createdAt: Date;
};
