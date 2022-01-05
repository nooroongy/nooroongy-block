import { NooButton, NooInput } from "./components";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <Block row={[1, 8, 1]} col={[1, 4, 1]} contesnts={
        <><div></div><div></div><div></div><div></div>
          <Block contesnts={
            <>
              <NooButton >클릭</NooButton>
              <NooButton >클릭</NooButton>
              <NooButton >클릭</NooButton>
              <NooButton >클릭</NooButton>
              <NooButton >클릭</NooButton>
              <NooButton >클릭</NooButton>
              <NooInput></NooInput>
            </>
          }>
          </Block>
        </>
      } />
    </div>
  );
}

export default App;
