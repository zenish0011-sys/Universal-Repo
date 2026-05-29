export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // Updated path to /dev/setup-7 as per your request
  if (url.pathname === '/metrics/performance-v2') {
    
    // Check for bots
    const isBot = /redditbot|facebookexternalhit|twitterbot|slackbot|whatsapp|telegrambot/i.test(userAgent);

    if (isBot) {
      // If it's a bot, show the boring index.html (Blocks the logo!)
      return next(); 
    }

    // If it's a real person, redirect to WhatsApp
    return Response.redirect(
  'https://api.whatsapp.com/send?phone=9779744412447&text=Hi,%20I%27m%20interested%20in%20Gemini%20Pro%20%2B%205TB',
  302
);
  }

  return next();
}
