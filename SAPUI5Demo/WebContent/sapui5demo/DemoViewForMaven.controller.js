sap.ui.controller("sapui5demo.DemoViewForMaven", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5demo.DemoViewForMaven
*/
	onInit: function() {

		var that = this;
		var sServiceUrl = "http://services.odata.org/V3/Northwind/Northwind.svc";
		var oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
		var oModel = new sap.ui.model.json.JSONModel();
		oDataModel.read("/Employees",null, null , true,
				function(oData, response){
			oModel.setData(oData);

		});		
		
//		this.getView().setModel(oModel);
		this.getView().setModel(oModel,"empModel");
		
	},
	
	handleEmailTrigger:function(event){
		
//		sap.m.URLHelper.triggerEmail("mahesh.zeple@sap.com", "Test Mail from SAPUI5", "Dear Mahesh, This is a test email !!!");
		
		$.ajax({
			  type: "POST",
			  url: "https://mandrillapp.com/api/1.0/messages/send.json",
			  data: {
			    'key': 'dJNM2x4NdMNY0VpjxLT54Q',
			    'message': {
			      'from_email': 'mahesh.zeple@sap.com',
			      'to': [
			          {
			            'email': 'mahesh.zeple@sap.com',
			            'name': 'Mahesh Zeple',
			            'type': 'to'
			          }
			        ],
			      'autotext': 'true',
			      'subject': 'Test Mail using Mandrill',
			      'html': 'Hi Mahesh, This is test mail from Mandrill !!!'
			    }
			  }
			 }).done(function(response) {
			   console.log(response); // if you're into that sorta thing
			 });		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5demo.DemoViewForMaven
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5demo.DemoViewForMaven
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5demo.DemoViewForMaven
*/
//	onExit: function() {
//
//	}

});