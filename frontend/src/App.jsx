import Header from "./components/Heade";

function App() {
  return (
    <>
      <div className="flex-col">
      <Header />
      <div className="flex justify-center items-center">
        <img
          src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg"
          alt="RecipeHub/"
          className="z-0 opacity-60"
        />
        <div className="absolute z-10 flex">
          <h1 className="text-6xl font-bold text-blue-900 text-center">
            ¡Bienvenido a Recipe Hub!
          </h1>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
