export default function useFormattedDate(date: string | undefined) {
  if(!date) return;
  return new Date(date).toLocaleDateString("en-EG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}