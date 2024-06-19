// pages/api/instagram.js

export default async function handler(req, res) {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN; // Ensure this is set in .env.local
    const userId = process.env.INSTAGRAM_USER_ID; // Ensure this is set in .env.local
  
    try {
      const response = await fetch(
        `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink&limit=4&access_token=${accessToken}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch Instagram photos');
      }
  
      const data = await response.json();
      res.status(200).json(data.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }