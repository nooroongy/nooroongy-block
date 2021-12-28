import { NooButton, NooInput } from "./components";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <Block contesnts={
        <>
          <NooButton w='4' h='5' >클릭</NooButton>
          <NooButton w='5' h='5' >클릭</NooButton>
          <NooButton w='6' h='5' >클릭</NooButton>
          <NooButton w='7' h='5' >클릭</NooButton>
          <NooButton w='8' h='5' >클릭</NooButton>
          <NooButton w='9' h='5' >클릭</NooButton>
          <NooInput></NooInput>
        </>
      } />
    </div>
  );
}

export default App;
