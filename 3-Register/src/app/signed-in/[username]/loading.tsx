import { Loading } from "@/components/Loading";

export default function Loader() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center p-16 gap-4">
      <Loading />
    </main>
  );
}
