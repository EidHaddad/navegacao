/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"ovly/navegacao/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ovly/navegacao/test/integration/pages/S0",
	"ovly/navegacao/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ovly.navegacao.view.",
		autoWait: true
	});
});