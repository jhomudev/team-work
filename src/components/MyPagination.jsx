'use client'
import { Pagination } from 'antd'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// import { useCallback } from 'react'

export const updateURLWithParams = (searchParams, paramsToAdd) => {
  // Itera sobre el objeto paramsToAdd y agrega o reemplaza los parámetros
  const currentParams = new URLSearchParams(searchParams)
  for (const key in paramsToAdd) {
    currentParams.set(key, paramsToAdd[key])
  }
  // Obtén la URL actualizada con los parámetros de búsqueda modificados
  return currentParams.toString()
}

const MyPagination = ({ totalItems, defaultPageSize, currentPage }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Pagination
      showSizeChanger
      total={totalItems}
      showTotal={(total) => `Total ${total} items`}
      defaultPageSize={defaultPageSize}
      current={currentPage}
      pageSizeOptions={['10', '15', '20', '50']}
      onChange={(page, pageSize) => {
        router.push(`${pathname}?${updateURLWithParams(searchParams, {
          page,
          rowsPerPage: pageSize
        })}`)
      }}
    />
  )
}
export default MyPagination
