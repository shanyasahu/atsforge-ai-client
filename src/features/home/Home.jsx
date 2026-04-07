import ThemeToggle from "../theme/components/ThemeToggle";

function Home() {
  return (
    <div className="bg-(--bg) text-(--text) min-h-screen">
      <h1 className="text-red-500">welcome this is homepage</h1>
      this is para
      <p></p>
      <ThemeToggle />
    </div>
  );
}

export default Home;
