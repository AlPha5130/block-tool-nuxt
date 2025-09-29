export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Methods', 'GET, PUT, OPTIONS')
  setCorsHeaders(event)
  return ''
})
