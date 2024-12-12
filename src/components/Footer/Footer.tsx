export default function Footer() {
  return (
    <footer className="flex flex-col p-4 gap-2 justify-start items-center w-full text-footer dark:text-footer-dark">
      <span className="flex flex-row gap-2">
        Made with ❤️ by
        <a
          className="text-eiilo dark:text-eiilo-dark hover:text-eiilo-active"
          href="https://eiilo.com"
          target="_blank"
        >
          eiilo
        </a>
      </span>
      <span className="text-center">
        All rights reserved &copy; 2024 GoodHabitBadHabit
      </span>
    </footer>
  );
}
