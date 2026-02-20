// Simple scroll reveal initializer using IntersectionObserver
export function initReveal() {
  if (typeof window === "undefined") return;
  const win = window as any;
  if (win.__revealInit) return;
  win.__revealInit = true;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add("in-view");
        } else {
          // keep visible after in view; comment out to only animate once
          // el.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  const nodes = document.querySelectorAll<HTMLElement>(".reveal");
  nodes.forEach((n) => observer.observe(n));
}

export default initReveal;
