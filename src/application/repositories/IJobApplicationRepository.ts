import type { JobApplication } from '@app/models';

export interface IJobApplicationRepository {
	findById(id: JobApplication['id']): Promise<JobApplication | null>;
	findByJob(jobId: JobApplication['jobId']): Promise<JobApplication[]>;
	findByCandidate(
		candidateId: JobApplication['candidateId'],
	): Promise<JobApplication[]>;
	create(application: JobApplication): Promise<void>;
	update(application: JobApplication): Promise<void>;
}
