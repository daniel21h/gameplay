export const discordAuth = {
  redirect_uri: process.env.REDIRECT_URI as string,
  scope: process.env.SCOPE as string,
  response_type: process.env.RESPONSE_TYPE as string,
  client_id: process.env.CLIENT_ID as string,
  cdn_image: process.env.CDN_IMAGE as string,
}