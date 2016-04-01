/**
* Home of Map-Plugin
**/

var mapTools = {
    settings : {},
    bcolors : ['#2980B9', '#8E44AD', '#C83D2F', '#EC5E00', '#F1C40F', '#27AE60', '#34495E', '#EB008D', '#FF66C2', '#CCFF33', '#33CCFF', '#70E000'],
    activeLayer : false,
    selection_state : {
        mouseover : false //fix for multipolygon firefox issue
    }
};

mapTools.getColor = function(){
    var color = this.bcolors.shift();
    this.bcolors.push(color);
    return color;
};

mapTools.getStyle = function(dom){
    return {
        fillColor: dom.color,
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
};

mapTools.getStyleClicked = function(dom){
    return {
        fillColor: dom.color,
        weight: 2,
        opacity: 1,
        color: '#333',
        dashArray: '0',
        fillOpacity: 0.85
    };
};

mapTools.prepare = function(sites){
    for (var dom in sites){
        this.settings[dom] = {
            'id' : sites[dom].id,
            'name' : sites[dom].name,
            'color' : this.getColor(),
            'geojson' : 'shapes/'+sites[dom].id+'.geojson',
            'active' : false
        };
    }
};

mapTools.buildLegend = function(){
    var legend = {
        position : 'bottomright',
        colors : [],
        labels : []
    };
    for (dom in this.settings){
        legend.colors.push(this.settings[dom].color);
        legend.labels.push(this.settings[dom].name);
    }
    return legend;
};

mapTools.preInit = function($scope) {
    angular.extend($scope, {
    muenster: {
        lat: 51.99,
        lng: 7.4,
        zoom: 9,
        //autoDiscover: true
    },
    defaults: {
        scrollWheelZoom: false
    },
    legend : {
        position : 'bottomright',
        colors : [],
        labels : []
    },
    geojson : {}
    });
}
mapTools.initMap = function($scope, $http, sites){
    mapTools.prepare(sites);
    var legends = mapTools.buildLegend();
    console.log(legends);
    $scope.legend = legends;
    var settings = {};
    var domStyle;
    angular.forEach(mapTools.settings, function(dom){
        $http.get(dom.geojson).success(function(data, status) {
            if (dom.id == $scope.parse($scope.selectedSite).id){
                domStyle = mapTools.getStyleClicked(dom);
            }
            else {
                domStyle = mapTools.getStyle(dom);
            }
            settings[dom.id] = {
                data: data,
                resetStyleOnMouseout: false,
                style: domStyle
            };
            //dirty hack, cause $q..then() won't play with me
            if (Object.keys(mapTools.settings).length == Object.keys(settings).length){
                angular.extend($scope.geojson, settings);
            }
        });
    });
}

mapTools.mouseOver = function($scope, ev, leafletPayload){
    if (mapTools.selection_state.mouseover != leafletPayload.layerName){
        var target = leafletPayload.leafletEvent.target;
        var layer = leafletPayload.leafletEvent.target;
        layer.setStyle({
            weight: 2,
            color: '#777',
            dashArray: '0',
            fillOpacity: 0.4
        });
        layer.bringToFront();
        mapTools.selection_state.mouseover = leafletPayload.layerName;
    }
};

mapTools.mouseOut = function($scope, ev, leafletPayload){
    mapTools.selection_state.mouseover = false;
    var target = leafletPayload.leafletEvent.target;
    var layer = leafletPayload.leafletEvent.target;
    var activeLayer = angular.fromJson($scope.selectedSite);
    if (activeLayer && leafletPayload.layerName == activeLayer.id){
        layer.setStyle(mapTools.getStyleClicked(mapTools.settings[leafletPayload.layerName]));
    }else{
        layer.setStyle(mapTools.getStyle(mapTools.settings[leafletPayload.layerName]));
    }
    if (mapTools.activeLayer){
        mapTools.activeLayer.bringToFront();
    }
};

mapTools.watchSelectedSite = function($scope, leafletData, newValue, oldValue){
    var oldID = angular.fromJson(oldValue);
    var newID = angular.fromJson(newValue);
    leafletData.getGeoJSON().then(function(lObjs){
        if (oldID){
            var obj = {};
            for (layer in lObjs[oldID.id]._layers){
                obj = lObjs[oldID.id]._layers[layer];
                break;
            }
            obj.setStyle(mapTools.getStyle(mapTools.settings[oldID.id]));
        }
        if (newID){
            var obj = {};
            for (layer in lObjs[newID.id]._layers){
                obj = lObjs[newID.id]._layers[layer];
                break;
            }
            obj.setStyle(mapTools.getStyleClicked(mapTools.settings[newID.id]));
            obj.bringToFront();
            mapTools.activeLayer = obj;
            
        }
    });
};

mapTools.onLeafletDirectiveGeoJsonDommapClick = function($scope, $filter, ev, leafletPayload, sites){
    $scope.selectedSite = $filter('json')(sites[leafletPayload.layerName]);
};