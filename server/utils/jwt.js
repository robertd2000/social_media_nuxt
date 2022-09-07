import jwt from 'jsonwebtoken'

export const generateTokens = () => {
  return {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
  }
}
