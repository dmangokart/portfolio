export default function OpenSource() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-start py-16 px-6 sm:px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          Open Source
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            Highlight your open source contributions, libraries you've created,
            and communities you're involved with.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Share your open source work here.
          </p>
        </div>
      </main>
    </div>
  );
}
