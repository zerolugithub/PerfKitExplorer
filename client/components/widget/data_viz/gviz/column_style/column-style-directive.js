/**
 * @copyright Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @fileoverview ColumnStyleDirective encapsulates HTML, style
 *     and behavior for configuring styles for a single column.
 * @author joemu@google.com (Joe Allan Muharsky)
 */

goog.provide('p3rf.perfkit.explorer.components.widget.data_viz.gviz.column_style.ColumnStyleDirective');


goog.scope(function() {
const explorer = p3rf.perfkit.explorer;
const gviz = explorer.components.widget.data_viz.gviz;


/**
 * See module docstring for more information about purpose and usage.
 *
 * @return {Object} Directive definition object.
 * @ngInject
 */
gviz.column_style.ColumnStyleDirective = function(
    queryEditorService) {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    scope: {
      /** @type {!ColumnStyleModel} */
      'ngModel': '=',
      'widgetModel': '='
    },
    templateUrl: '/static/components/widget/data_viz/gviz/column_style/column-style-directive.html',
    controller: ['$scope', 'columnStyleService', 'arrayUtilService', function(
        $scope, columnStyleService, arrayUtilService) {

      /**
       * Returns true if the column provided by ngModel is selected, otherwise false.
       * @return {boolean}
       */
      $scope.isSelected = function() {
        return (columnStyleService.selectedColumn == $scope.ngModel);
      }

      /**
       * Removes the column provided by ngModel from the widget config.
       */
      $scope.remove = function() {
        columnStyleService.removeColumn($scope.widgetModel, $scope.ngModel);
      }

      /**
       * Selects the column provided by ngModel.
       */
      $scope.select = function() {
        columnStyleService.selectedColumn = $scope.ngModel;
      }
    }]
  };
};

});  // goog.scope
