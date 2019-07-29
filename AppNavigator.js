import Login    from "./src/screens/Login";
import Sign     from "./src/screens/Sign";
import Home     from "./src/screens/Home";
import Details  from "./src/screens/Details";

import { createStackNavigator, createAppContainer } from "react-navigation";

 const AppNavigator = createStackNavigator(
    {
      Login,
      Sign,
      Home,
      Details
    });

  
 
  export default createAppContainer(AppNavigator);