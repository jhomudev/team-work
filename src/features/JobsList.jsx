'use client'
import { JobCard, MyPagination } from '@/components'
import { DEFAULT_PARAMS } from '@/libs/utils/getQueryParams'
import { Button, Empty } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'

function JobsList ({ dataJobs }) {
  const router = useRouter()
  const { data: jobs, totalJobs, totalGlobalJobs } = dataJobs
  const areJobs = jobs.length > 0
  const searchParams = useSearchParams()
  const { q: keyword, page } = Object.fromEntries(searchParams)

  return (
    <>
      <section className='w-full'>
        <p className='font-medium text-gray-500'><span className='font-semibold text-pink-600'>{totalJobs}</span> de <span className='font-semibold text-pink-600'>{totalGlobalJobs}</span> trabajos encontrados.</p>
        <small>Recuerda que puedes usar los filtros o la busqueda para encontrar oportunidades de trabajo más rapido.</small>
        <br /><br />
        {
          areJobs
            ? (
              <>
                <main className='w-full grid gap-3 grid-cols-[repeat(auto-fit,minmax(min(100%,350px),1fr))]'>
                  {
                    jobs.map(job => <JobCard key={job.jobId} job={job} />)
                  }
                </main>
                <br />
                <MyPagination totalItems={totalJobs} defaultPageSize={DEFAULT_PARAMS.rowsPerPage} currentPage={page ? Number(page) : DEFAULT_PARAMS.page} />
              </>
              )
            : (
              <Empty
                image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
                imageStyle={{ height: 60 }}
                rootClassName='w-full min-h-[200px] flex flex-col items-center justify-center bg-white rounded-lg'
                description={
                  <p>
                    {
                      keyword ? <>No se econtraron trabajos relacionados a <span className='text-pink-600'>{keyword}</span></> : 'No se econtraron trabajos.'
                    }
                  </p>
                }
              >
                <Button
                  type='primary'
                  onClick={() => {
                    router.push('/panel/jobs')
                  }}
                >Ver otros trabajos
                </Button>
              </Empty>
              )
        }
      </section>

    </>
  )
}
export default JobsList
