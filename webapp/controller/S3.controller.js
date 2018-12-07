sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.navegacao.controller.S3", {

		onBack        : function (oEvent) {

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("padrao");

		}

	});

});