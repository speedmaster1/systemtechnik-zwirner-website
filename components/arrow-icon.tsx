export function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "down" | "up" }) {
  const path = direction === "down"
    ? "M8 2.5v11M3.75 9.25 8 13.5l4.25-4.25"
    : direction === "up"
      ? "M8 13.5v-11M3.75 6.75 8 2.5l4.25 4.25"
      : "M3 13 13 3M6 3h7v7";

  return <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d={path}/></svg>;
}
