'use client'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input, Select } from 'antd'

const SearchJobForm = () => {
  return (
    <Form className='w-[min(100%,600px)]'>
      <Form.Item>
        <Input
          prefix={<FontAwesomeIcon className='text-gray-300' icon={faSearch} />}
          size='large'
          placeholder='Empleo o puesto'
        />
      </Form.Item>
      <Form.Item>
        <Select
          size='large'
          className='w-full'
          showSearch
          placeholder='Ubicación - Ayacucho'
          optionFilterProp='children'
          options={[
            {
              value: 'all',
              label: 'Todos'
            },
            {
              value: 'ayacucho',
              label: 'Ayacucho'
            },
            {
              value: 'huanta',
              label: 'Huanta'
            },
            {
              value: 'socos',
              label: 'Socos'
            }
          ]}
        />
      </Form.Item>
      <Button block type='primary' size='large' htmlType='submit'>Buscar trabajo</Button>
    </Form>
  )
}
export default SearchJobForm
