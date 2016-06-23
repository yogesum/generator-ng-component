import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= classedName %>Component from './<%= name %>.component';
import routing from './<%= name %>.routes';
import './<%= name %>.scss';

export default angular
  .module('<%= scriptAppName %>', [uiRouter])
  .config(routing)
  .component('<%= name %>', <%= classedName %>Component)
  .name;
