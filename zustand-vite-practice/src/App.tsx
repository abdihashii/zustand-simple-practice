import { useBearStore } from './hooks/useBearStore';

const Controls = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return (
    <button
      className="w-fit mx-auto py-2 px-4 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
      onClick={increasePopulation}
    >
      one up
    </button>
  );
};

function App() {
  const bears = useBearStore((state) => state.bears);

  return (
    <main className="flex h-screen">
      <section className="text-center mt-36 m-auto w-6/12 flex flex-col gap-6">
        {bears} around here...
        <Controls />
      </section>
    </main>
  );
}

export default App;
