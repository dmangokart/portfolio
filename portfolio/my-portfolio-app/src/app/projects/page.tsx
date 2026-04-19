export default function Projects() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-start py-16 px-6 sm:px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          Projects
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            Display your personal and professional projects with descriptions,
            technologies used, and links to live demos or repositories.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Add your projects here.
          </p>
        </div>
      </main>
    </div>
  );
}
