import React from "react";
import "./App.scss";
import Authonticated from "./Authonticated";
import Unauthonticated from "./Unauthonticated";
import { Context } from "./Contexts/Authorization/Authrization";
import { Provider as ThemeProvider } from "./Contexts/Theme/Theme";

function App() {
  const { state } = React.useContext(Context);

  if (state) {
    return (
      <ThemeProvider>
        <Authonticated />
      </ThemeProvider>
    );
  } else {
    return <Unauthonticated />;
  }
}

export default App;
