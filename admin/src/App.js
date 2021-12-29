import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PostList, PostEdit } from "./posts";

const API_URL = "https://jsonplaceholder.typicode.com";

const dataProvider = jsonServerProvider(API_URL);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
