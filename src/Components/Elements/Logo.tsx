import { Link, useSearchParams } from "react-router";

export default function Logo() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  return (
    <Link to={`/?page=${page}`} className="flex w-fit gap-2 cursor-pointer">
      <img src="/Union.svg" alt="Logo image" />
      <h1 className="flex gap-1 self-center text-xl font-bold">
        <span className="h-fit text-sky-900">Prog</span>
        <span className="h-fit text-[#141624]">Blog</span>
      </h1>
    </Link>
  );
}
