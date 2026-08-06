import { CiHeart } from "react-icons/ci";

/** Thin divider with a heart in the middle — a small signature touch. */
export const HeartDetail = () => {
  return (
    <div
      aria-hidden
      className="flex w-full items-center gap-3 text-muted-foreground/50"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
      <CiHeart className="h-5 w-5" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
    </div>
  );
};
