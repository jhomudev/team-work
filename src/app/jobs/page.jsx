import JobsList from '@/features/JobsList'

const JobsPage = () => {
  return (
    <div className='container-block py-10'>
      <h1 className='text-xl font-semibold mb-5'>Trabajos</h1>
      <hr />
      <br />
      <main className='grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]'>
        <JobsList />
      </main>
    </div>
  )
}
export default JobsPage
