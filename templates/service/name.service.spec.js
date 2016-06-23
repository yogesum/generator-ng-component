/* eslint-env mocha */
/* global expect:false, inject:false */
describe('Service: <%= classedName %>', () => {

  // load the service's module
  beforeEach(angular.mock.module('<%= scriptAppName %>'));

  // instantiate service
  let <%= cameledName %>;
  beforeEach(inject((_<%= cameledName %>_) => {
    <%= cameledName %> = _<%= cameledName %>_;
  }));

  it('should do something', () => {<% if (hasFilter('jasmine')) { %>
    expect(!!<%= cameledName %>).toBe(true);<% } if (hasFilter('mocha')) { %>
    <%= expect() %>!!<%= cameledName %><%= to() %>.be.true;<% } %>
  });

});
