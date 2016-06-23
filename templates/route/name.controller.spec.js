/* eslint-env mocha */
/* global expect:false, inject:false */
import <%= name %> from './<%= name %>.component';

describe('Component: <%= classedName %>Component', () => {

  // load the controller's module
  beforeEach(angular.mock.module(<%= name %>));

  let <%= classedName %>Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(($componentController) => {
    <%= classedName %>Component = $componentController('<%= name %>', {});
  }));

  it('should ...', () => {<% if (hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if (hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal(1);<% } %>
  });
});
