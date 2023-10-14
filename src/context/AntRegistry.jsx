'use client'

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { useServerInsertedHTML } from 'next/navigation'
import { useMemo } from 'react'

const StyledComponentsRegistry = ({ children }) => {
  const cache = useMemo(() => createCache(), [])
  useServerInsertedHTML(() => (
    <style id='antd' dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ))
  return <StyleProvider cache={cache}>{children}</StyleProvider>
}

export default StyledComponentsRegistry
