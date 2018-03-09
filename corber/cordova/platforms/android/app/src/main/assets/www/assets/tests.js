'use strict';

define('my-guha-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dashboard.js should pass ESLint\n\n4:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:14 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n5:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:14 - \'Ember\' is not defined. (no-undef)\n6:15 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:15 - \'Ember\' is not defined. (no-undef)\n35:17 - Unexpected console statement. (no-console)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n10:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n11:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n12:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n13:5 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n15:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n16:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n17:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n18:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n19:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n20:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n21:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n22:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)');
  });

  QUnit.test('routes/avisos.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/avisos.js should pass ESLint\n\n');
  });

  QUnit.test('routes/avisos/nuevo-aviso.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/avisos/nuevo-aviso.js should pass ESLint\n\n');
  });

  QUnit.test('routes/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dashboard.js should pass ESLint\n\n');
  });

  QUnit.test('routes/emergencias.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/emergencias.js should pass ESLint\n\n');
  });

  QUnit.test('routes/encuestas.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/encuestas.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/nueva-emergencia.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/nueva-emergencia.js should pass ESLint\n\n');
  });

  QUnit.test('routes/nueva-solicitud.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/nueva-solicitud.js should pass ESLint\n\n');
  });

  QUnit.test('routes/nuevo-aviso.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/nuevo-aviso.js should pass ESLint\n\n');
  });

  QUnit.test('routes/responder-encuesta.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/responder-encuesta.js should pass ESLint\n\n');
  });

  QUnit.test('routes/solicitudes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/solicitudes.js should pass ESLint\n\n');
  });

  QUnit.test('routes/status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/status.js should pass ESLint\n\n');
  });

  QUnit.test('torii-adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'torii-adapters/application.js should pass ESLint\n\n');
  });
});
define('my-guha-app/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createOfflineRef;


  /**
   * Creates an offline firebase reference with optional initial data and url.
   *
   * Be sure to `stubfirebase()` and `unstubfirebase()` in your tests!
   *
   * @param  {!Object} [initialData]
   * @param  {string} [url]
   * @param  {string} [apiKey]
   * @return {!firebase.database.Reference}
   */
  function createOfflineRef(initialData, url = 'https://emberfire-tests-2c814.firebaseio.com', apiKey = 'AIzaSyC9-ndBb1WR05rRF1msVQDV6EBqB752m6o') {

    if (!_firebase.default._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    const config = {
      apiKey: apiKey,
      authDomain: 'emberfire-tests-2c814.firebaseapp.com',
      databaseURL: url,
      storageBucket: ''
    };

    let app;

    try {
      app = _firebase.default.app();
    } catch (e) {
      app = _firebase.default.initializeApp(config);
    }

    const ref = app.database().ref();

    app.database().goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('my-guha-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('my-guha-app/tests/helpers/destroy-firebase-apps', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyFirebaseApps;


  const { run } = Ember;

  /**
   * Destroy all Firebase apps.
   */
  function destroyFirebaseApps() {
    const deletions = _firebase.default.apps.map(app => app.delete());
    Ember.RSVP.all(deletions).then(() => run(() => {
      // NOOP to delay run loop until the apps are destroyed
    }));
  }
});
define('my-guha-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'my-guha-app/tests/helpers/start-app', 'my-guha-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }
    });
  };
});
define('my-guha-app/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {!Ember.Application} app
   * @param  {!firebase.database.Reference} ref
   * @param  {string} [model]  The model, if overriding a model specific adapter
   */
  function replaceAppRef(app, ref, model = 'application') {
    app.register('service:firebaseMock', ref, { instantiate: false, singleton: true });
    app.inject('adapter:firebase', 'firebase', 'service:firebaseMock');
    app.inject('adapter:' + model, 'firebase', 'service:firebaseMock');
  }
});
define('my-guha-app/tests/helpers/replace-firebase-app-service', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = replaceFirebaseAppService;
  /**
   * Replaces the `firebaseApp` service with your own using injection overrides.
   *
   * This is usually not needed in test modules, where you can re-register over
   * existing names in the registry, but in acceptance tests, some registry/inject
   * magic is needed.
   *
   * @param  {!Ember.Application} app
   * @param  {!Object} newService
   */
  function replaceFirebaseAppService(app, newService) {
    app.register('service:firebaseAppMock', newService, { instantiate: false, singleton: true });
    app.inject('torii-provider:firebase', 'firebaseApp', 'service:firebaseAppMock');
    app.inject('torii-adapter:firebase', 'firebaseApp', 'service:firebaseAppMock');
  }
});
define('my-guha-app/tests/helpers/resolver', ['exports', 'my-guha-app/resolver', 'my-guha-app/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('my-guha-app/tests/helpers/start-app', ['exports', 'my-guha-app/app', 'my-guha-app/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('my-guha-app/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = stubFirebase;


  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */
  function stubFirebase() {
    // check for existing stubbing
    if (!_firebase.default._unStub) {
      var originalSet = _firebase.default.database.Reference.prototype.set;
      var originalUpdate = _firebase.default.database.Reference.prototype.update;
      var originalRemove = _firebase.default.database.Reference.prototype.remove;

      _firebase.default._unStub = function () {
        _firebase.default.database.Reference.prototype.set = originalSet;
        _firebase.default.database.Reference.prototype.update = originalUpdate;
        _firebase.default.database.Reference.prototype.remove = originalRemove;
      };

      _firebase.default.database.Reference.prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase.default.database.Reference.prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase.default.database.Reference.prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('my-guha-app/tests/helpers/torii', ['exports', 'my-guha-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.stubValidSession = stubValidSession;


  const {
    torii: { sessionServiceName }
  } = _environment.default;

  function stubValidSession(application, sessionData) {
    let session = application.__container__.lookup(`service:${sessionServiceName}`);

    let sm = session.get('stateMachine');
    Ember.run(() => {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('my-guha-app/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = unstubFirebase;
  function unstubFirebase() {
    if (typeof _firebase.default._unStub === 'function') {
      _firebase.default._unStub();
      delete _firebase.default._unStub;
    }
  }
});
define('my-guha-app/tests/test-helper', ['my-guha-app/app', 'my-guha-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('my-guha-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/dashboard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/avisos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/avisos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/avisos/nuevo-aviso-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/avisos/nuevo-aviso-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/emergencias-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/emergencias-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/encuestas-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/encuestas-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/nueva-emergencia-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/nueva-emergencia-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/nueva-solicitud-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/nueva-solicitud-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/nuevo-aviso-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/nuevo-aviso-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/responder-encuesta-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/responder-encuesta-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/solicitudes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/solicitudes-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/status-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/status-test.js should pass ESLint\n\n');
  });
});
define('my-guha-app/tests/unit/controllers/dashboard-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | dashboard', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:dashboard');
      assert.ok(controller);
    });
  });
});
define('my-guha-app/tests/unit/controllers/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define('my-guha-app/tests/unit/routes/avisos-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:avisos', 'Unit | Route | avisos', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/avisos/nuevo-aviso-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:avisos/nuevo-aviso', 'Unit | Route | avisos/nuevo aviso', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/dashboard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/emergencias-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:emergencias', 'Unit | Route | emergencias', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/encuestas-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:encuestas', 'Unit | Route | encuestas', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/nueva-emergencia-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:nueva-emergencia', 'Unit | Route | nueva emergencia', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/nueva-solicitud-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:nueva-solicitud', 'Unit | Route | nueva solicitud', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/nuevo-aviso-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:nuevo-aviso', 'Unit | Route | nuevo aviso', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/responder-encuesta-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:responder-encuesta', 'Unit | Route | responder encuesta', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/solicitudes-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:solicitudes', 'Unit | Route | solicitudes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/tests/unit/routes/status-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:status', 'Unit | Route | status', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    let route = this.subject();
    assert.ok(route);
  });
});
define('my-guha-app/config/environment', [], function() {
  var prefix = 'my-guha-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('my-guha-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
