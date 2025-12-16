import type { Job } from '@app/models';

export interface IJobRepository {
	findById(id: Job['id']): Promise<Job | null>;
	findByRecruiter(recruiterId: Job['recruiterId']): Promise<Job[]>;
	create(job: Job): Promise<void>;
	update(job: Job): Promise<void>;
}
