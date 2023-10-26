import FilterAsideJobs from '@/features/FilterAsideJobs'
import JobsList from '@/features/JobsList'
import { Breadcrumb } from 'antd'
import axios from 'axios'

const getJobs = async (searchParams = {}) => {
  const req = await axios('http://localhost:3000/api/jobs', {
    params: searchParams
  })
  const data = await req.data
  return data
}

async function JobsPage ({ params, searchParams }) {
  const dataJobs = await getJobs(searchParams)

  return (
    <>
      <Breadcrumb
        className='w-full'
        items={[
          {
            title: <span>Bolsa de empleo</span>
          }
        ]}
      />
      <br />
      <div className='flex gap-5 flex-col sm:flex-row'>
        <FilterAsideJobs />
        <JobsList dataJobs={dataJobs} />
      </div>
    </>
  )
}
export default JobsPage
