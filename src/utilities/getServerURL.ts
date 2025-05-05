export const PAYLOAD_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export const getServerURL = () => {
  return PAYLOAD_SERVER_URL
}
