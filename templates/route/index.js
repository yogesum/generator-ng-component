import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= classedName %>Component from './<%= name %>.component';
import routing from './<%= name %>.routes';
import './<%= name %>.scss';

export default angular
  .module('quiApp.main', [uiRouter])
  .config(routing)
  .component('main', <%= classedName %>Component)
  .name;
