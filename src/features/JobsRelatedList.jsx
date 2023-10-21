import { Card } from 'antd'
import Link from 'next/link'

const JobsRelatedList = () => {
  return (
    <section>
      <h2 className='text-lg font-medium text-gray-700 mb-3'>Trabajos relacionados</h2>
      <ul>
        <li>
          <Link href='/panel/jobs/1'>
            <Card hoverable>
              <strong className='font-semibold text-blue-500'>Titulo del tarbajo</strong><br />
              <small>
                <span className='font-semibold text-slate-800'>Enbter Inc.</span>&nbsp;-&nbsp;
                Publicado hace 3 días
              </small>
              <p className='text-sm text-gray-600 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quaerat. Rem sapiente, similique ea perferendis reiciendis fuga, pariatur distinctio explicabo rerum dolorem nostrum sed expedita esse odio accusantium nobis modi.</p>
            </Card>
          </Link>
        </li>
      </ul>
    </section>
  )
}
export default JobsRelatedList
