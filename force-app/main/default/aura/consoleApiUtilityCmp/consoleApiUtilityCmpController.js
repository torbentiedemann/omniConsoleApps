({
	onTabCreated : function(component, event, helper) {
        console.log("Tab created.");
        var newTabId = event.getParam('tabId');
        console.log(newTabId);
        var workspace = component.find("workspace");
        /*
        // close tab after 10 seconds
        window.setTimeout(
    		$A.getCallback(function() {
            	console.log('10 seconds later...');
                console.log(newTabId);
        		workspace.closeTab( { tabId: newTabId } );
                //fire toast message
            	var toastEvent = $A.get("e.force:showToast");
            	toastEvent.setParams({
                "mode" : 'sticky',
                "title" : "Success",
                "message" : "Inactive Tab was closed.",
                "type" : "success"
            	});
            	toastEvent.fire();
    		}), 10000);
        */
        workspace.getTabInfo( {tabId: newTabId} )
        .then(function(response) {
            	var caseId = response.recordId;
                console.log(caseId);
            	var userId = $A.get("$SObjectType.CurrentUser.Id");
                console.log(userId);            
                helper.server(component, "c.createAgentWork", { userId: userId, caseId: caseId })
                .then(result => { console.log(result) })
                .catch(error => { console.log(error) })
            })
        .catch(function(error) {
            console.log(error);
        });       
    },
    onWorkAssigned : function(component, event, helper) {
        console.log("Work assigned.");
        var workItemId = event.getParam('workItemId');
        var workId = event.getParam('workId');
        console.log(workItemId);
        console.log(workId);
        var omniAPI = component.find("omniToolkitDemo");
        omniAPI.getAgentWorks().then(function(result) {
            var works = JSON.parse(result.works);
            var work = works[0];
            omniAPI.acceptAgentWork({workId: work.workId}).then(function(res) {
                if (res) {
                    console.log("Accepted work successfully");
                } else {
                    console.log("Accept work failed");
                }
            }).catch(function(error) {
                console.log(error);
            });
        });
    }
})