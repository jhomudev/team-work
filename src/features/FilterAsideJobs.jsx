'use client'
import { jobAreas, jobModes, jobTime, jobTypes, seniority } from '@/static/enums'
import { Card, /* DatePicker, */ Form, Input, Select, Space } from 'antd'
import { useSearchParams } from 'next/navigation'

const getDataOptions = (obj) => {
  const array = []

  for (const key in obj) {
    array.push({ value: key, label: obj[key] })
  }

  return array
}

const FilterAsideJobs = () => {
  const JOB_OPTIONS = {
    modes: getDataOptions(jobModes),
    types: getDataOptions(jobTypes),
    time: getDataOptions(jobTime),
    areas: jobAreas.map(area => ({
      value: area,
      label: area
    })),
    seniority: getDataOptions(seniority)
  }

  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <aside className='w-full md:w-[clamp(300px,30%,500px)] h-full'>
      <Card className='w-full'>
        <h2 className='mb-3 text-lg'>Filtro de trabajos</h2>
        <Form layout='vertical'>
          <Form.Item label='Realiza tu búsqueda hacia los puestos que desees.'>
            <Input.Search size='large' placeholder='Ingeniero de software...' />
          </Form.Item>
        </Form>
        <p className='text-sm text-gray-500 mb-3'>Realiza tu búsqueda mediante los filtros, asi encontrarás el puesto que buscas mas rápido.</p>
        <Space className='w-full' wrap wra size={15}>
          <Select
            size='large'
            className='w-full'
            showSearch
            placeholder='Modalidad de trabajo'
            optionFilterProp='children'
              // onChange={onChange}
              // onSearch={onSearch}
            filterOption={filterOption}
            options={JOB_OPTIONS.modes}
          />
          <Select
            size='large'
            className='w-full'
            showSearch
            placeholder='Tipo de trabajo'
            optionFilterProp='children'
              // onChange={onChange}
              // onSearch={onSearch}
            filterOption={filterOption}
            options={JOB_OPTIONS.types}
          />
          <Select
            size='large'
            className='w-full'
            showSearch
            placeholder='Tiempo o Turno'
            optionFilterProp='children'
              // onChange={onChange}
              // onSearch={onSearch}
            filterOption={filterOption}
            options={JOB_OPTIONS.time}
          />
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
          <Select
            size='large'
            className='w-full min-w-[200px]'
            showSearch
            placeholder='Área'
            optionFilterProp='children'
              // onChange={onChange}
              // onSearch={onSearch}
            filterOption={filterOption}
            options={JOB_OPTIONS.areas}
          />
          <Select
            size='large'
            className='w-full'
            showSearch
            placeholder='Nivel de experiencia'
            optionFilterProp='children'
              // onChange={onChange}
              // onSearch={onSearch}
            filterOption={filterOption}
            options={JOB_OPTIONS.seniority}
          />
        </Space>
      </Card>
    </aside>
  )
}
export default FilterAsideJobs
