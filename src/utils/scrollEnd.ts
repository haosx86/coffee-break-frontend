const SCROLL_DELAY = 500

export const scrollEnd = async () => {
  if (!document) return

  await new Promise((resolve) => setTimeout(resolve, SCROLL_DELAY))

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
