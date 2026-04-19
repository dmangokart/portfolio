export default function About() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-start py-16 px-6 sm:px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          About Me
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            Welcome to the About Me section. This is where you can share your story,
            background, skills, and what drives you as a developer.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Edit this page to tell your unique story.
          </p>
        </div>
      </main>
    </div>
  );
}
