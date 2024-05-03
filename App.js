import React from "react";

import { store } from "./store";
import { Provider } from "react-redux";
import Navigation from "./Navigation";
import Screen from "./app/components/Screen";

function App() {
  return (
    <Provider store={store}>
      <Screen>
        <Navigation />
      </Screen>
    </Provider>
  );
}

export default App;
