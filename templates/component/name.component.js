import controller from './<%= name %>.controller';
import template from './<%= name %>.jade';

const <%= classedName %>Component = {
  template,
  controller,
  bindings: { message: '<' },
};

export default <%= classedName %>Component;
