export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // Updated path to /dev/setup-7 as per your request
  if (url.pathname === '/ys/pod-status') {
    
    // Check for bots
    const isBot = /redditbot|facebookexternalhit|twitterbot|slackbot|whatsapp|telegrambot/i.test(userAgent);

    if (isBot) {
      // If it's a bot, show the boring index.html (Blocks the logo!)
      return next(); 
    }

    // If it's a real person, redirect to WhatsApp

return Response.redirect(
  'https://t.me/ghost_db2?text=Hi%20I%27m%20interested%20in%20Gemini%20Pro%2018%20months',
  302
);
  }

  return next();
}
