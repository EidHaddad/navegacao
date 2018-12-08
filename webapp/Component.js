sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ovly/navegacao/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ovly.navegacao.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

           // jQuery.sap.log.setLevel(jQuery.sap.log.Level.ALL);

			this.getRouter().attachRouteMatched(function (oEvent) {
				var sRoute = oEvent.getParameters().name;
				console.log(sRoute);

			});

			this.getRouter().getRoute("exibir").attachPatternMatched(function (oEvent) {
				jQuery.sap.log.warning("Tela de exibição aberta");
			});

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});