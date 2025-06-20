export default function Home() {
  return (
    <>
      <div
        className="hidden h-screen w-screen bg-cover bg-center sm:block"
        style={{
          backgroundImage: "url(/main.png)",
        }}
      />
      <div
        className="block h-screen w-screen bg-cover bg-center sm:hidden"
        style={{
          backgroundImage: "url(/mobile.png)",
        }}
      />
    </>
  );
}
