angular
	.module('blankets.components.navbar')
	.directive('navbar', Navbar);

function Navbar() {
	return {
		restrict: 'E',
		scope: {
			navbarData: "="
		},
		templateUrl: '/blankets/features/components/navbar/navbar.html',
		controller: NavbarCtrl,
		controllerAs: 'NavbarVM',
		bindToController: true
	}
}

function NavbarCtrl() {
	var vm = this;

	vm.navbarButtons = [{
		title: 'Open Shifts',
		link: 'openShifts'
		}, {
		title: 'Post Shifts',
		link: 'postShifts'
		}, {
        title: 'My Shifts',
        link: 'myShifts'
		}]
}
