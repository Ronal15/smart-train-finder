// backend/src/services/auth.service.js
async function getAccessToken() {
  const response = await axios.post('https://login.microsoftonline.com/2cda5d59-f09a-4d71-8f94-5c2e3d5657a4/oauth2/token', 
    `grant_type=client_credentials&client_id=${process.env.DB_CLIENT_ID}&client_secret=${process.env.DB_CLIENT_SECRET}&resource=https://db-api.com`,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );
  return response.data.access_token;
}