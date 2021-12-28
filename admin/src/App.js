import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const API_URL = "https://jsonplaceholder.typicode.com";

const dataProvider = jsonServerProvider(API_URL);

const App = () => <Admin dataProvider={dataProvider} />;

export default App;
