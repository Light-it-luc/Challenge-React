import { CelebrationIcon } from "@/ui/Icons";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500"] });

interface SignedInProps {
  params: {
    username: string;
  };
}

export default function SignedIn({ params: { username } }: SignedInProps) {
  return (
    <main className="flex flex-col flex-1 items-center justify-center p-16 gap-4">
      <CelebrationIcon />
      <div>
        <h2
          className={`text-3xl text-center text-bold text-green-600 ${ubuntu.className}`}
        >
          Great!
        </h2>
        <h2
          className={`text-3xl text-center text-bold text-green-600 max-w-64 ${ubuntu.className}`}
        >
          You signed in as {username}
        </h2>
      </div>
    </main>
  );
}
