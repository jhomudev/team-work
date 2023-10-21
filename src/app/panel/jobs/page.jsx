import FilterAsideJobs from '@/features/FilterAsideJobs'
import JobsList from '@/features/JobsList'
import axios from 'axios'

const getJobs = async (searchParams = {}) => {
  const req = await axios('http://localhost:3000/api/jobs', {
    params: searchParams
  })
  const data = await req.data
  return data
}

const JobsPage = async ({ params, searchParams }) => {
  const dataJobs = await getJobs(searchParams)

  return (
    <>
      <h1 className='text-xl text-gray-700 font-semibold mb-5'>Trabajos</h1>
      <hr />
      <br />
      <div className='flex gap-5 flex-wrap'>
        <FilterAsideJobs />
        <JobsList dataJobs={dataJobs} />
      </div>
    </>
  )
}
export default JobsPage
