import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import NotFound from "./NotFound";
import { createTheme } from "@material-ui/core/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  }
});

const API_URL = "https://jsonplaceholder.typicode.com";

const dataProvider = jsonServerProvider(API_URL);

const App = () => (
  <Admin theme={theme} dashboard={Dashboard} catchAll={NotFound} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
