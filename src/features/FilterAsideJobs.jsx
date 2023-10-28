'use client'
import { filterOption } from '@/libs/ant'
import { JOB_OPTIONS } from '@/libs/utils/contants'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, /* DatePicker, */ Form, Input, Select } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import updateURLWithParams from '@/libs/utils/updateURLWithParams'

function FilterAsideJobs () {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const serachParamsObj = Object.fromEntries(searchParams)

  const handleSubmitForm = (data) => {
    const { keyword } = data
    router.push(`${pathname}?${updateURLWithParams(searchParams, {
      q: keyword
    })}`)
  }

  return (
    <aside className='w-full md:w-[clamp(300px,30%,500px)] h-full'>
      <Card className='w-full' bodyStyle={{ display: 'flex', flexDirection: 'column' }}>
        <Title level={3}>Filtro de trabajos</Title>
        <Form layout='vertical' onFinish={handleSubmitForm}>
          <Form.Item label={<Text type='secondary'>Realiza tu búsqueda hacia los puestos que desees.</Text>} name='keyword'>
            <Input.Search size='large' placeholder='Ingeniero de software...' />
          </Form.Item>
        </Form>
        <Text type='secondary' className='!mb-3'>Realiza tu búsqueda mediante los filtros, asi encontrarás el puesto que buscas mas rápido.</Text>
        <Form
          layout='horizontal' wrapperCol={4} onValuesChange={(changedValues, allValues) => {
            const values = Object.fromEntries(
              Object.entries(allValues).filter(([_, valor]) => !!valor)
            )
            router.push(`${pathname}?${updateURLWithParams(searchParams, {
              ...values
            })}`)
          }}
        >
          <Form.Item name='jobMode'>
            <Select
              size='large'
              className='w-full'
              showSearch
              placeholder='Modalidad de trabajo'
              optionFilterProp='children'
              filterOption={filterOption}
              options={JOB_OPTIONS.modes}
            />
          </Form.Item>
          <Form.Item name='jobType'>
            <Select
              size='large'
              className='w-full'
              showSearch
              placeholder='Tipo de trabajo'
              optionFilterProp='children'
              defaultValue={serachParamsObj.jobType}
              filterOption={filterOption}
              options={JOB_OPTIONS.types}
            />
          </Form.Item>
          <Form.Item name='jobTime'>
            <Select
              size='large'
              className='w-full'
              showSearch
              placeholder='Tiempo o Turno'
              optionFilterProp='children'
              defaultValue={serachParamsObj.jobTime}
              filterOption={filterOption}
              options={JOB_OPTIONS.time}
            />
          </Form.Item>
          {/* <DatePicker.RangePicker size='large' className='w-full' />
          <Select
            size='large'
            className='w-full'
            showSearch
            placeholder='Tipo de trabajo'
            optionFilterProp='children'
              // onChange={onChange}
              // onSearch={onSearch}
              // filterOption={filterOption}={filterOption={filterOption}}
            options={JOB_OPTIONS.types}
          /> */}
          {/* <Form.Item name='jobArea'>
            <Select
              size='large'
              className='w-full min-w-[200px]'
              showSearch
              placeholder='Área'
              optionFilterProp='children'
              defaultValue={serachParamsObj.jobArea}
              filterOption={filterOption}
              options={JOB_OPTIONS.areas}
            />
          </Form.Item> */}
          <Form.Item name='seniority'>
            <Select
              size='large'
              className='w-full'
              showSearch
              placeholder='Nivel de experiencia'
              optionFilterProp='children'
              defaultValue={serachParamsObj.seniority}
              filterOption={filterOption}
              options={JOB_OPTIONS.seniority}
            />
          </Form.Item>
        </Form>

        <Button
          type='primary'
          shape='round'
          icon={<FontAwesomeIcon icon={faTrash} />}
          className='!bg-red-500 !text-white !font-semibold !mx-auto'
          onClick={() => {
            router.push(pathname)
          }}
        />
      </Card>
    </aside>
  )
}
export default FilterAsideJobs
