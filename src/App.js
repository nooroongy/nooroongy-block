import { NooButton, NooInput } from "./components";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <Block contesnts={
        <>
          <NooButton>클릭</NooButton>
          <NooInput></NooInput>
        </>
      } />
    </div>
  );
}

export default App;
