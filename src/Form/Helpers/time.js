export const getTimeFields = (format) => {
  const fields = [
    { key: 'hour', placeholder: 'hh' },
    { key: 'minute', placeholder: 'mm' },
    { key: 'format' }
  ]
  return format === '24h' ? fields.splice(0, 2) : fields
}
