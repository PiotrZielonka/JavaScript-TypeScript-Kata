'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [818],
  {
    6192: (u, r, t) => {
      t.d(r, { G: () => h });
      var e = t(4438),
        i = t(1626),
        l = t(6354),
        o = t(9601),
        p = t(6404);
      let h = (() => {
        class s {
          constructor() {
            (this.http = (0, e.WQX)(i.Qq)),
              (this.applicationConfigService = (0, e.WQX)(o.a)),
              (this.resourceUrl = this.applicationConfigService.getEndpointFor('api/admin/users'));
          }
          create(n) {
            return this.http.post(this.resourceUrl, n);
          }
          update(n) {
            return this.http.put(this.resourceUrl, n);
          }
          find(n) {
            return this.http.get(`${this.resourceUrl}/${n}`);
          }
          query(n) {
            const a = (0, p.$)(n);
            return this.http.get(this.resourceUrl, { params: a, observe: 'response' });
          }
          delete(n) {
            return this.http.delete(`${this.resourceUrl}/${n}`);
          }
          authorities() {
            return this.http.get(this.applicationConfigService.getEndpointFor('api/authorities')).pipe((0, l.T)(n => n.map(a => a.name)));
          }
          static {
            this.ɵfac = function (a) {
              return new (a || s)();
            };
          }
          static {
            this.ɵprov = e.jDH({ token: s, factory: s.ɵfac, providedIn: 'root' });
          }
        }
        return s;
      })();
    },
    2818: (u, r, t) => {
      t.r(r), t.d(r, { default: () => h, userManagementResolve: () => o });
      var e = t(4438),
        i = t(7673),
        l = t(6192);
      const o = s => {
          const d = s.paramMap.get('login');
          return d ? (0, e.WQX)(l.G).find(d) : (0, i.of)(null);
        },
        h = [
          { path: '', loadComponent: () => Promise.all([t.e(76), t.e(828)]).then(t.bind(t, 4828)), data: { defaultSort: 'id,asc' } },
          { path: ':login/view', loadComponent: () => t.e(218).then(t.bind(t, 7218)), resolve: { user: o } },
          { path: 'new', loadComponent: () => Promise.all([t.e(76), t.e(274)]).then(t.bind(t, 4274)), resolve: { user: o } },
          { path: ':login/edit', loadComponent: () => Promise.all([t.e(76), t.e(274)]).then(t.bind(t, 4274)), resolve: { user: o } },
        ];
    },
  },
]);
