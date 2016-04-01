
/*  Copyright 2016 PetaByteBoy

    This file is part of the Material Design Firmware Downloader.

    The Material Design Firmware Downloader is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    The Material Design Firmware Downloader is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with the Material Design Firmware Downloader.  If not, see <http://www.gnu.org/licenses/>. */

angular.module('firmwareDownload', ['ngMaterial', 'leaflet-directive'])
  .controller('DownloadCtrl', function($scope, $location, $interpolate, $filter, $http, leafletData) {
    mapTools.preInit($scope);
    $http.get('config.json').then(function(res) {
      $scope.config = res.data;
      var config = res.data;
      document.title = config.name + ' Firmware';

      leafletData.getGeoJSON().then(function(lObjs){
        window.leafletDataGeoJSON = lObjs;
      });
      mapTools.initMap($scope, $http, config.sites, leafletData);

      $scope.parse = function (string) {
        try {
          return JSON.parse(string);
        } catch (error) {}
      };

      $scope.splitString = function (string, nb) {
         return string.substring(0,nb);
      };

      $scope.interpolate = function (value) {
        try {
          if (typeof(value) != undefined) {
            return $interpolate(value)($scope);
          }
        } catch (error) {}
      };



      $scope.$on("leafletDirectiveGeoJson.dommap.mouseover", function(ev, leafletPayload) {
        mapTools.mouseOver($scope, ev, leafletPayload);
      });

      $scope.$on("leafletDirectiveGeoJson.dommap.mouseout", function(ev, leafletPayload) {
        mapTools.mouseOut($scope, ev, leafletPayload);
      });

      //TODO: better way for "external" updating layer style
      $scope.$watch("selectedSite", function(newValue, oldValue) {
        console.log(newValue);
        console.log($scope.selectedSite);
        mapTools.watchSelectedSite($scope, leafletData, newValue, oldValue);
      });

      $scope.$on("leafletDirectiveGeoJson.dommap.click", function(ev, leafletPayload) {
        mapTools.onLeafletDirectiveGeoJsonDommapClick($scope, $filter, ev, leafletPayload, config.sites);
      });

      $scope.selectionChanged = function () {
        var newURL = window.location.protocol + '//' + window.location.host + window.location.pathname;

        var args = []
        if($scope.selectedRouter)
          args.push('router=' + $scope.parse($scope.selectedRouter).id)
        if($scope.selectedManufacturer)
          args.push('manufacturer=' + $scope.parse($scope.selectedManufacturer).id)
        if($scope.selectedSite)
          args.push('region=' + $scope.parse($scope.selectedSite).id)
        if($scope.selectedMode != 'factory')
          args.push('mode=' + $scope.selectedMode)
        newURL += '?' + args.join('&')
        console.log(newURL);
        History.pushState(null, null, newURL);
      };

    $scope.buildFirmwareUrl = function() {
        var site = $scope.parse($scope.selectedSite);
        if (site != null && site.proxy_to != null){
            $scope.downloadableSite = $filter('json')(config.sites[site.proxy_to]);
        }else {
            $scope.downloadableSite = angular.copy($scope.selectedSite);
        }
        var url = $scope.interpolate(config.url);
        var manufacturer = $scope.selectedManufacturer;
        var router = $scope.selectedRouter;

        if (manufacturer == null || router == null) {
            return url;
        }
        if (manufacturer.name == config.manufacturers['netgear'].name && $scope.selectedMode == 'factory') {
            url += '.img';
        } else if (router.extension != null) {
            url += '.'+router.extension;
        } else {
            url += '.bin';
        }
      console.log(url);
      return url;
    };

      //select factory by default
      $scope.selectedMode = 'factory';

      //read selection from url parameters
      if($location.search().mode != null) { $scope.selectedMode = $location.search().mode; }
      if($location.search().region != null) { $scope.selectedSite = $filter('json')(config.sites[$location.search().region]); }
      if($location.search().manufacturer != null) { $scope.selectedManufacturer = $filter('json')(config.manufacturers[$location.search().manufacturer]); }
      if($location.search().router != null) { $scope.selectedRouter = $filter('json')(config.routers[$location.search().router]); }
    }, function(err) {console.log(err)});
  })
  //make parameters work without #! in the url
  .config(function($locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  });
