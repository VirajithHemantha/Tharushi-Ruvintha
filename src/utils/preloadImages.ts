/** Preload image URLs so they are cached before the invitation is shown. */
export function preloadImages(urls: string[]): Promise<void> {
  const unique = [...new Set(urls.filter(Boolean))];

  return Promise.all(
    unique.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.decoding = 'async';
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        }),
    ),
  ).then(() => undefined);
}

export const INVITATION_IMAGE_URLS = [
  '/images/WhatsApp Image 2026-07-16 at 20.09.10.jpeg',
  '/images/WhatsApp Image 2026-07-16 at 20.09.11 (1).jpeg',
  '/images/WhatsApp Image 2026-07-16 at 20.09.11.jpeg',
  '/images/WhatsApp Image 2026-07-16 at 20.09.12.jpeg',
  '/images/WhatsApp Image 2026-07-16 at 20.09.13.jpeg',
  '/images/WhatsApp Image 2026-07-16 at 20.09.14.jpeg',
  '/ivory_satin_bow-removebg-preview.png',
] as const;
