export default function(currentRoute, route) {
  let regName, match;
  const currentRouteName = currentRoute.name;
  const routeName = route.name;
debugger;
  if (routeName === 'application') {
    return true;
  }

  regName = routeName.replace('.', '\\.');
  match = currentRouteName.match(new RegExp(`(^|\\.)${regName}(\\.|$)`));
  if (match && match[0].match(/^\.[^.]+$/)) {
    match = false;
  }
  return !!match;
}
