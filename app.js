var app = angular.module('registrationApp', []);
app.controller('RegistrationController', function($scope, $window) {
  $scope.user = {}; // Initialize user object
  $scope.user = {
    qualifications: [{ name: '', year: '', percentage: '' }] // Initialize with one qualification
};
$scope.addQualification = function() {
    if ($scope.user.qualifications.length < 3) {
        $scope.user.qualifications.push({ name: '', year: '', percentage: '' });
    }
};
$scope.years = [];
for (let year = 1990; year <= 2024; year++) {
  $scope.years.push(year);
}
$scope.removeQualification = function(index) {
    if ($scope.user.qualifications.length > 1) {
        $scope.user.qualifications.splice(index, 1);
    }
};
$scope.register = function() {
    if ($scope.registrationForm.$valid) {
        $window.localStorage.setItem('name', $scope.user.name);
        $window.localStorage.setItem('phone', $scope.user.phone);
        $window.localStorage.setItem('email', $scope.user.email);
        $window.localStorage.setItem('qualifications', JSON.stringify($scope.user.qualifications));
        $window.localStorage.setItem('address', $scope.user.address);
        $window.location.href = 'success.html';
    }
};
});
var app = angular.module('myApp', []);
app.controller('SuccessController', function($scope, $window) {
    $scope.name = $window.localStorage.getItem('name');
    $scope.email = $window.localStorage.getItem('email');
    $scope.phone = $window.localStorage.getItem('phone');
    $scope.address = $window.localStorage.getItem('address');
    $scope.qualifications = JSON.parse($window.localStorage.getItem('qualifications'));
});