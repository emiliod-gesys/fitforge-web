export function isCrawlerUserAgent(ua: string | null | undefined): boolean {
  if (!ua) return false;
  return /Googlebot|Google-InspectionTool|GoogleOther|AdsBot-Google|Storebot-Google|APIs-Google|FeedFetcher-Google|bingbot|Slurp|DuckDuckBot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot|YandexBot|Bytespider|GPTBot|ClaudeBot|ia_archiver|Wget|curl|python-requests|Go-http-client|axios/i.test(
    ua,
  );
}
