export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS')
  setCorsHeaders(event)
  return ''
})
