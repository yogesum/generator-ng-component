/* eslint-env mocha */
/* global expect:false, inject:false */
import <%= name %> from './<%= name %>.component';

describe('Component: <%= classedName %>', function () {

  // load the component's module
  beforeEach(angular.mock.module('<%= name %>'));

  let <%= cameledName %>Component;

  // Initialize the component and a mock scope
  beforeEach(inject(($componentController) => {
    <%= cameledName %>Component = $componentController('<%= cameledName %>', {});
  }));

  it('should ...', () => {<% if (hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if (hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal(1);<% } %>
  });
});
