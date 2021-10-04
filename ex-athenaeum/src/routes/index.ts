import { lazy } from 'react';

export interface AppRoute {
	path: string;
	exact?: boolean;
	component: any;
	routes?: AppRoute[];
}

export const routes: AppRoute[] = [
	{
		path: '/',
		exact: true,
		component: lazy(() => import('../components/home/Home')),
	},
	{
		path: '/books',
		exact: true,
		component: lazy(() => import('../components/book/BookGrid')),
	},
	{
		path: '/books/:id',
		component: lazy(() => import('../components/book/BookForm')),
	},
	{
		path: '/users',
		component: lazy(() => import('../components/user/UserTable')),
	},
];

// export function RouteWithSubRoutes(route: AppRoute): any {
// 	return (
// 		<Route
// 			path={route.path}
// 			render={(props) => (
// 				// pass the sub-routes down to keep nesting
// 				<route.component {...props} routes={route.routes} />
// 			)}
// 		/>
// 	);
// }
