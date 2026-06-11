export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-(--bg)">
      <img
        src="/favicon.png"
        alt="logo"
        className="w-30 h-30 object-contain animate-ping"
      />
    </div>
  );
}
