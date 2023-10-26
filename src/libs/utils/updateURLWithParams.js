const updateURLWithParams = (searchParams, paramsToAdd) => {
  const currentParams = new URLSearchParams(searchParams)
  for (const key in paramsToAdd) {
    currentParams.set(key, paramsToAdd[key])
  }

  return currentParams.toString()
}

export default updateURLWithParams
