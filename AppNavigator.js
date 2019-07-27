import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

import { createStackNavigator, createAppContainer } from "react-navigation";

 const AppNavigator = createStackNavigator(
    {
      Home,
      Details
    }
  );
  
 
  export default createAppContainer(AppNavigator);