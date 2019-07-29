
import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;
const _navigators = {};


// export function navigate(routeName, params) {
//     //alert('routeName ' , routeName)
//     _navigator.dispatch(
//         NavigationActions.navigate({
//             routeName,
//             params,
//         })
//     );
// }

export function goBack() {
    _navigator.dispatch(NavigationActions.back());
}

export function back(type) {
    _navigators[type].dispatch(NavigationActions.back());
}
