'use strict';

describe('Controller: DomainpatternCtrl', function () {

  // load the controller's module
  beforeEach(module('linshareAdminApp'));

  var DomainpatternCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DomainpatternCtrl = $controller('DomainpatternCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
