import { jobAreas, jobModes, jobTime, jobTypes, seniority } from '@/static/enums'

export const getDataOptions = (obj) => {
  const array = []

  for (const key in obj) {
    // array.push({ value: key, label: obj[key] })
    array.push({ value: obj[key], label: obj[key] })
  }

  return array
}

export const JOB_OPTIONS = {
  modes: getDataOptions(jobModes),
  types: getDataOptions(jobTypes),
  time: getDataOptions(jobTime),
  areas: jobAreas.map(area => ({
    value: area,
    label: area
  })),
  seniority: getDataOptions(seniority)
}
