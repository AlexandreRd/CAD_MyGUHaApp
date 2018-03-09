import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('Login');
  this.route('Dashboard');
  this.route('Avisos', function() {
    this.route('Nuevo-Aviso');
  });
  this.route('Solicitudes');
  this.route('Emergencias');
  this.route('Status');
  this.route('Encuestas');
  this.route('Nuevo-Aviso');
  this.route('Nueva-Emergencia');
  this.route('Nueva-Solicitud');
  this.route('Responder-Encuesta');
});

export default Router;
