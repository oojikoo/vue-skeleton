import HomePage from 'page/HomePage';
import Pages from 'data/enum/Pages';

export default [
	{
		path: Pages.HOME,
		component: HomePage,
		props: true,
	},
	{
		path: '*',
		component: HomePage,
		props: true,
	},
];
