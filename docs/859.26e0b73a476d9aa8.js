'use strict';
(self.webpackChunkjavascript_typescript_kata = self.webpackChunkjavascript_typescript_kata || []).push([
  [859],
  {
    8859: (y, a, t) => {
      t.r(a), t.d(a, { default: () => d });
      var n = t(5442),
        h = t(4438),
        l = t(8498),
        u = t(7673),
        c = t(983),
        v = t(1397),
        i = t(5198);
      const o = r => {
          const p = r.params.name;
          return p
            ? (0, h.WQX)(i.L)
                .find(p)
                .pipe((0, v.Z)(s => (s.body ? (0, u.of)(s.body) : ((0, h.WQX)(l.Ix).navigate(['404']), c.w))))
            : (0, u.of)(null);
        },
        d = [
          {
            path: '',
            loadComponent: () =>
              Promise.all([t.e(76), t.e(699)])
                .then(t.bind(t, 9699))
                .then(r => r.AuthorityComponent),
            data: { authorities: ['ROLE_ADMIN'] },
            canActivate: [n.y],
          },
          {
            path: ':name/view',
            loadComponent: () =>
              t
                .e(996)
                .then(t.bind(t, 7996))
                .then(r => r.AuthorityDetailComponent),
            resolve: { authority: o },
            data: { authorities: ['ROLE_ADMIN'] },
            canActivate: [n.y],
          },
          {
            path: 'new',
            loadComponent: () =>
              t
                .e(12)
                .then(t.bind(t, 7012))
                .then(r => r.AuthorityUpdateComponent),
            resolve: { authority: o },
            data: { authorities: ['ROLE_ADMIN'] },
            canActivate: [n.y],
          },
        ];
    },
    5198: (y, a, t) => {
      t.d(a, { L: () => v });
      var n = t(4438),
        h = t(1626),
        l = t(8768),
        u = t(9601),
        c = t(6404);
      let v = (() => {
        class i {
          constructor() {
            (this.http = (0, n.WQX)(h.Qq)),
              (this.applicationConfigService = (0, n.WQX)(u.a)),
              (this.resourceUrl = this.applicationConfigService.getEndpointFor('api/authorities'));
          }
          create(o) {
            return this.http.post(this.resourceUrl, o, { observe: 'response' });
          }
          find(o) {
            return this.http.get(`${this.resourceUrl}/${o}`, { observe: 'response' });
          }
          query(o) {
            const e = (0, c.$)(o);
            return this.http.get(this.resourceUrl, { params: e, observe: 'response' });
          }
          delete(o) {
            return this.http.delete(`${this.resourceUrl}/${o}`, { observe: 'response' });
          }
          getAuthorityIdentifier(o) {
            return o.name;
          }
          compareAuthority(o, e) {
            return o && e ? this.getAuthorityIdentifier(o) === this.getAuthorityIdentifier(e) : o === e;
          }
          addAuthorityToCollectionIfMissing(o, ...e) {
            const d = e.filter(l.W);
            if (d.length > 0) {
              const r = o.map(s => this.getAuthorityIdentifier(s));
              return [
                ...d.filter(s => {
                  const f = this.getAuthorityIdentifier(s);
                  return !r.includes(f) && (r.push(f), !0);
                }),
                ...o,
              ];
            }
            return o;
          }
          static {
            this.ɵfac = function (e) {
              return new (e || i)();
            };
          }
          static {
            this.ɵprov = n.jDH({ token: i, factory: i.ɵfac, providedIn: 'root' });
          }
        }
        return i;
      })();
    },
  },
]);
