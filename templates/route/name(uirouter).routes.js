export default function routes($stateProvider) {
  'ngInject';

  $stateProvider
    .state('<%= name %>', {
      url: '<%= route %>',
      template: '<<%= kebabName %>></<%= kebabName %>>',
    });
}
