import type { H3Event } from 'h3'

export function setCorsHeaders(event: H3Event, allowedOrigins: string[] = ['*']) {
  const headers = getHeaders(event)
  setHeader(event, 'Access-Control-Max-Age', 86400)
  if (!headers.origin) {
    setResponseStatus(event, 400)
  } else {
    if (allowedOrigins.includes(headers.origin)) {
      setResponseStatus(event, 204)
      setHeader(event, 'Access-Control-Allow-Origin', headers.origin)
      setHeader(event, 'Access-Control-Allow-Credentials', 'true')
      setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')
      setHeader(event, 'Vary', 'Origin')
    } else if (allowedOrigins.includes('*')) {
      setResponseStatus(event, 204)
      setHeader(event, 'Access-Control-Allow-Origin', '*')
    } else {
      setResponseStatus(event, 403)
    }
  }
}
