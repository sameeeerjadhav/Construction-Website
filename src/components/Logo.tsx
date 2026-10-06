export function Logo({ markOnly = false }: { markOnly?: boolean }) {
  return (
    <span className={markOnly ? "logo logo-mark" : "logo"}>
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 54c0-10 4-18 4-28 0 10 4 18 4 28" />
        <path d="M32 50C32 38 18 34 10 18c8 10 16 16 22 18 6-2 14-8 22-18C46 34 32 38 32 50z" />
        <path d="M32 46c-12-.6-20-5-22-12 6 4 13 6 22 7 9-1 16-3 22-7-2 7-10 11.4-22 12z" />
        <path d="M12 58h40" />
      </svg>
      {markOnly ? null : (
        <span className="logo-words">
          <strong>Vaishnavi</strong>
          <em>Constructions</em>
          <small>Row Houses | Jalgaon</small>
        </span>
      )}
    </span>
  );
}
