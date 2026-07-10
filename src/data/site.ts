export const siteConfig = {
  name: 'The Mayling Bot',
  descriptor: 'Legal & privacy',
  siteTitle: 'The Mayling Bot',
  appId: '1501345603018293428',
  effectiveDate: 'July 10, 2026' as string | null,
  lastUpdated: 'July 10, 2026',
  policyVersion: '1.3.0',
  draft: false,
  contactEmail: 'danboarknights@gmail.com' as string | null,
};

export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.replace(/^\/+/, '');
  return cleanPath ? `${base}${cleanPath}` : base;
}
