class <%= classedName %>Service {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getTodos() {
    return this.$http.get('/api/todos').then(response => response.data);
  }
}

export default TodoService;
