import { Spin } from 'antd'

function LoadingPage () {
  return (
    <div className='h-[calc(100vh_-_80px)] grid place-items-center'>
      <Spin size='large' />
    </div>
  )
}
export default LoadingPage
