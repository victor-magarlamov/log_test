export default function initIntersecObserver (config, callback) {
  return new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (
        entry.isIntersecting &&
        getComputedStyle(entry.target).visibility !== 'hidden'
      ) {
        callback();
      }
    });
  }, config);
}
