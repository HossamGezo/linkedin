import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import {Provider} from "react-redux";
import store from "./redux/app/store.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
