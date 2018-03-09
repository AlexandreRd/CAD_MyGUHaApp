'use strict';

define('my-guha-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
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
