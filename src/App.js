import axios from "axios";
import SiteRouter from "./Router.js";

axios.defaults.withCredentials = true;

const App = () => {
  return (
      <SiteRouter />
  );
};

export default App;
