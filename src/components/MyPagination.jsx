'use client'
import updateURLWithParams from '@/libs/utils/updateURLWithParams'
import { Pagination } from 'antd'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function MyPagination ({ totalItems, defaultPageSize, currentPage }) {
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
