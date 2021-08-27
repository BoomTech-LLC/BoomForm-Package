export const getTimeFields = (format) => {
  const fields = [
    { key: 'hour', placeholder: 'HH' },
    { key: 'minute', placeholder: 'MM' },
    { key: 'format' }
  ]
  return format === '24h' ? fields.splice(0, 2) : fields
}
