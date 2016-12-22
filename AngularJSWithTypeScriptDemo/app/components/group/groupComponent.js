var angularWithTS;
(function (angularWithTS) {
    (function (components) {
        (function (group) {
            var ProfileGroupListItemController = (function () {
                function ProfileGroupListItemController() {
                }
                return ProfileGroupListItemController;
            })();

            angular.module('angularWithTS.components.group', []).controller('ProfileGroupListItemController', ProfileGroupListItemController).component('mycustomcontrol', {
                templateUrl: 'app/components/group/group.html',
                controller: 'ProfileGroupListItemController as vm'
            });
        })(components.group || (components.group = {}));
        var group = components.group;
    })(angularWithTS.components || (angularWithTS.components = {}));
    var components = angularWithTS.components;
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=groupComponent.js.map
