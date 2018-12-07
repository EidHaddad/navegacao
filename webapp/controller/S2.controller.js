sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ovly.navegacao.controller.S2", {

		onPressAdd: function (oEvent) {

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("adicionar");

		}

	});
});