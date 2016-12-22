
module angularWithTS.components.group {

      class ProfileGroupListItemController {

        constructor() {
       
        }

         


    }

    angular.module('angularWithTS.components.group', [])
        .controller('ProfileGroupListItemController', ProfileGroupListItemController)
        .component('mycustomcontrol', {
            templateUrl: 'app/components/group/group.html',
            controller: 'ProfileGroupListItemController as vm'
        });

   
}


