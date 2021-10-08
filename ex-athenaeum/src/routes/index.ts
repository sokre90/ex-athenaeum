import { lazy } from 'react';

export interface AppRoute {
	path: string;
	exact?: boolean;
	component: any;
	routes?: AppRoute[];
}

export const routes: AppRoute[] = [
	{
		path: '/books',
		exact: true,
		component: lazy(() => import('../components/book/BooksPage')),
	},
	{
		path: '/books/:id',
		component: lazy(() => import('../components/book/BookForm')),
	},
	{
		path: '/library',
		component: lazy(() => import('../components/book/BookLibrary')),
	},
	{
		path: '/cart',
		component: lazy(() => import('../components/book/BooksCartPage')),
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
