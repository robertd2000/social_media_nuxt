import UrlPattern from 'url-pattern'
import { decodeAccessToken } from '../utils/jwt'
import { sendError } from 'h3'
import { getUserById } from '../db/user'

export default defineEventHandler(async (event) => {
  const endpoints = [
    '/api/auth/user',
    '/api/user/tweets',
    '/api/tweets',
    '/api/tweets/:id',
  ]

  const isHandled = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint)

    return pattern.match(event.req.url)
  })

  if (!isHandled) {
    return
  }

  const token = event.req.headers['authorization']?.split(' ')[1]

  const decoded = decodeAccessToken(token)

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Unauthorized',
      })
    )
  }

  try {
    const userId = decoded.userId

    const user = await getUserById(userId)

    event.context.auth = { user }
  } catch (error) {
    return
  }
})
