import JobCard from '@/components/JobCard'
import axios from 'axios'

const getJobs = async () => {
  const req = await axios('http://localhost:3000/api/jobs')
  const jobs = await req.data
  return jobs
}
const JobsList = async () => {
  const jobs = await getJobs()
  return jobs.map(job => <JobCard key={job.idName} job={job} />)
}
export default JobsList
