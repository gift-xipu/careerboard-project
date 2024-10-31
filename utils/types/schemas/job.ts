export type Job = {
  id: string;
  column_id: string;
  title: string;
  post_url?: string;
  salary: string;
  location: string;
  description: string;
  deadline: string;
  company: Company;
  jobPostStatus:
    | 'Job Created'
    | 'Applied'
  statusChangedAt: string;
};
