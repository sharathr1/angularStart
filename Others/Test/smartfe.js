var app = angular.module('myApp', []);


app.controller('myCtrl', function ($scope, $http) {

  $scope.apiurlCRM1 = "http://usmkeimobvs1ap1.od.health.ge.com:8080/ServiceCRMAPI/";
  $scope.apiurlCRM2 = "http://usmkeimobvs2ap1.od.health.ge.com:8080/ServiceCRMAPI/";
  $scope.apiurlOrcle1 = "http://usmkeimobvs1ap1.od.health.ge.com:8080/ServiceOracleAPI/inventory";
  $scope.apiurlOrcle2 = "http://usmkeimobvs2ap1.od.health.ge.com:8080/ServiceOracleAPI/inventory";
  $scope.apiurlmobi1 = "http://usmkeimobvs1ap1.od.health.ge.com:8080/mobilemiddleware/";
  $scope.apiurlmobi2 = "http://usmkeimobvs2ap1.od.health.ge.com:8080/mobilemiddleware/";
  $scope.nodeResponse = " \n";
  $scope.nodeResponseList = [];
  $scope.flag = 0;
  $scope.buttonclick = function (sno) {
    console.log("Inside")
    switch (sno) {
      case 1:
        $scope.button($scope.apiurlCRM1);
        break;
      case 2:
        $scope.button($scope.apiurlCRM2);
        break;
      case 3:
        $scope.button($scope.apiurlOrcle1);
        break;
      case 4:
        $scope.button($scope.apiurlOrcle2);
        break;
      case 5:
        $scope.button($scope.apiurlmobi1);
        break;
      case 6:
        $scope.button($scope.apiurlmobi2);
        break;
      case 7:
        //$scope.nodeResponseList = [];
        $scope.button($scope.apiurlCRM1);
        $scope.button($scope.apiurlCRM2);
        $scope.button($scope.apiurlOrcle1);
        $scope.button($scope.apiurlOrcle2);
        $scope.button($scope.apiurlmobi1);
        $scope.button($scope.apiurlmobi2);
        break;
      default:
    }
  }
  $scope.button = function (apiurl) {
    $http({
      method: "GET",
      url: apiurl
    }).then(function mySuccess(response) {
      console.log(response);
      $scope.myWelcome = response.status + " : " + response.statusText + " : " + apiurl + " \n";
      $scope.nodeResponse = $scope.nodeResponse + " " + $scope.myWelcome + " \n";
    }, function myError(response) {
      try {
        console.log(response);
        // $scope.myWelcome = response.status + " : " + response.statusText + " : "+apiurl +" \  n";
        //  $scope.nodeResponse=$scope.nodeResponse+ " "+$scope.myWelcome + " \n";
        if (response.status == undefined) {
          $scope.myWelcome = "200 : OK : " + apiurl  + $scope.flag + " \n"
          $scope.nodeResponseList.push($scope.myWelcome);
        } else if (response.status == -1) {
          $scope.myWelcome = "Oops ! Server Down " + apiurl  + $scope.flag + " \n";
          $scope.nodeResponseList.push($scope.myWelcome);
        } else {
          $scope.myWelcome = response.status + " : " + response.statusText + " : " + apiurl  + $scope.flag +  " \n";
          $scope.nodeResponseList.push($scope.myWelcome);
        }
         $scope.flag++;
        $scope.nodeResponse = $scope.nodeResponse + " " + $scope.myWelcome + " \n";

      } catch (err) {

      }

    });
  }

});


app.controller('myCtrlProd', function ($scope, $http) {

  $scope.apiurlCRM1 = "http://usmkeimobvs1ap1.od.health.ge.com:8080/ServiceCRMAPI/";
  $scope.apiurlCRM2 = "http://usmkeimobvs2ap1.od.health.ge.com:8080/ServiceCRMAPI/";
  $scope.apiurlOrcle1 = "http://usmkeimobvs1ap1.od.health.ge.com:8080/ServiceOracleAPI/inventory";
  $scope.apiurlOrcle2 = "http://usmkeimobvs2ap1.od.health.ge.com:8080/ServiceOracleAPI/inventory";
  $scope.apiurlmobi1 = "http://usmkeimobvs1ap1.od.health.ge.com:8080/mobilemiddleware/";
  $scope.apiurlmobi2 = "http://usmkeimobvs2ap1.od.health.ge.com:8080/mobilemiddleware/";
  $scope.nodeResponse = " \n";
  $scope.nodeResponseListP = [];
  $scope.flag = 0;
  $scope.buttonclick = function (sno) {
    // $scope.nodeResponseListP=[];
    console.log("Inside")
    switch (sno) {
      case 1:
        $scope.button($scope.apiurlCRM1);
        break;
      case 2:
        $scope.button($scope.apiurlCRM2);
        break;
      case 3:
        $scope.button($scope.apiurlOrcle1);
        break;
      case 4:
        $scope.button($scope.apiurlOrcle2);
        break;
      case 5:
        $scope.button($scope.apiurlmobi1);
        break;
      case 6:
        $scope.button($scope.apiurlmobi2);
        break;
      case 7:
        //$scope.nodeResponseList = [];
        $scope.button($scope.apiurlCRM1);
        $scope.button($scope.apiurlCRM2);
        $scope.button($scope.apiurlOrcle1);
        $scope.button($scope.apiurlOrcle2);
        $scope.button($scope.apiurlmobi1);
        $scope.button($scope.apiurlmobi2);
        break;
      default:
    }
  }
  $scope.button = function (apiurl) {
    $http({
      method: "GET",
      url: apiurl
    }).then(function mySuccess(response) {
      console.log(response);
      $scope.myWelcome = response.status + " : " + response.statusText + " : " + apiurl + " \n";
      $scope.nodeResponse = $scope.nodeResponse + " " + $scope.myWelcome + " \n";
    }, function myError(response) {
      try {
        console.log(response);
        // $scope.myWelcome = response.status + " : " + response.statusText + " : "+apiurl +" \  n";
        //  $scope.nodeResponse=$scope.nodeResponse+ " "+$scope.myWelcome + " \n";
        if (response.status == undefined) {
          $scope.myWelcome = "200 : OK : " + apiurl + $scope.flag + " \n"
          $scope.nodeResponseListP.push($scope.myWelcome);
        } else if (response.status == -1) {
          $scope.myWelcome = "Oops ! Server Down " + apiurl + $scope.flag + " \n";
          $scope.nodeResponseListP.push($scope.myWelcome);
        } else {
          $scope.myWelcome = response.status + " : " + response.statusText + " : " + apiurl + $scope.flag + " \n";
          $scope.nodeResponseListP.push($scope.myWelcome);
        }
        $scope.nodeResponse = $scope.nodeResponse + " " + $scope.myWelcome + " \n";
        $scope.flag++;
      } catch (err) {

      }

    });
  }

});
