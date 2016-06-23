export default function <%= name %>RouteConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('<%= name %>', {
      url: '<%= route %>',
      template: '<<%= kebabName %>></<%= kebabName %>>'
    });
}
