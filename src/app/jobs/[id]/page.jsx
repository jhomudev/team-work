import axios from 'axios'

const getDataJob = async ({ id }) => {
  const req = await axios(`http://localhost:3000/api/jobs/${id}`)
  const data = await req.data
  return data
}
const page = async ({ params }) => {
  const id = params.id
  const job = await getDataJob({ id })
  return (
    <div>
      <pre>
        {JSON.stringify(job)}
      </pre>
    </div>
  )
}
export default page
