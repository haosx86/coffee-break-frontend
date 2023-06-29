export const scrollEnd = async () => {
  if (!document) return

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
