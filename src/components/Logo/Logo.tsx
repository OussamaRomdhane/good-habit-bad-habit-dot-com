import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        height={100}
        width={100}
        alt="GoodHabitBadHabit logo"
      />
      <h1 className="text-4xl font-bold">
        <span className="text-good-habit dark:text-good-habit-dark">
          GoodHabit
        </span>
        <span className="text-bad-habit">BadHabit</span>
      </h1>
    </Link>
  );
}
