import Pet from "./components/Pet";
const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="luna" animal="dog" breed="Havaneese" />
      <Pet name="jack" animal="dog" breed="German" />
      <Pet name="scooby" animal="dog" breed="Buldog" />
    </div>
  );
};

export default App;
