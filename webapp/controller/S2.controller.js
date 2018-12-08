sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ovly.navegacao.controller.S2", {

		onItemPress: function (oEvent) {
			
			var oParameters = oEvent.getParameters();
			
			// @type sap.m.StandardListItem
			var oItemPressed = oParameters.listItem;
			var sTitle = oItemPressed.getTitle();
			
			// alert(sTitle);
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("exibir", {
				identificador: sTitle,
			},true);
			
		},
		
		onPressAdd: function (oEvent) {

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("adicionar");

		}

	});
});