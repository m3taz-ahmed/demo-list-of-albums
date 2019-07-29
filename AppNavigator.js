import Login    from "./src/screens/Login";
import Home     from "./src/screens/Home";
import Details  from "./src/screens/Details";

import { createStackNavigator, createAppContainer } from "react-navigation";

 const AppNavigator = createStackNavigator(
    {
      Login,
      Home,
      Details
    });

  
 
  export default createAppContainer(AppNavigator);