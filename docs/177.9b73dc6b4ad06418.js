'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [177],
  {
    2177: (o, n, t) => {
      t.r(n), t.d(n, { default: () => l });
      const l = [
        {
          path: 'user-management',
          loadChildren: () => Promise.all([t.e(76), t.e(818)]).then(t.bind(t, 2818)),
          title: 'userManagement.home.title',
        },
        { path: 'docs', loadComponent: () => t.e(636).then(t.bind(t, 5636)), title: 'global.menu.admin.apidocs' },
        { path: 'configuration', loadComponent: () => Promise.all([t.e(76), t.e(208)]).then(t.bind(t, 208)), title: 'configuration.title' },
        { path: 'health', loadComponent: () => t.e(921).then(t.bind(t, 3921)), title: 'health.title' },
        { path: 'logs', loadComponent: () => Promise.all([t.e(76), t.e(254)]).then(t.bind(t, 2254)), title: 'logs.title' },
        { path: 'metrics', loadComponent: () => Promise.all([t.e(76), t.e(971)]).then(t.bind(t, 9971)), title: 'metrics.title' },
      ];
    },
  },
]);
