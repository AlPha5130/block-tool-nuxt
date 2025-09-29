export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Methods', 'POST, OPTIONS')
  setCorsHeaders(event)
  return ''
})
