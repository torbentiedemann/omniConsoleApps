({
    onWorkAccepted : function(component, event, helper) {
        console.log("Work accepted.");
        let workItemId = event.getParam('workItemId');
        let workId = event.getParam('workId');
        console.log(event);
        console.log(workItemId);
        console.log(workId);
        var userId = $A.get("$SObjectType.CurrentUser.Id");
		console.log(userId);
        try {
            let newStatus = "0N57Q000000GuVb";
            let omniAPITest = component.find("omniToolkitId");
            omniAPITest.setServicePresenceStatus({statusId: newStatus})
            .then( function( result ) {
                console.log( "Result from set status", JSON.stringify( result ) );
            }).catch(function( error ) {
                console.log( "Error in set status", JSON.stringify( error ) ) ;
            });
        } catch(err) {
            console.log(err);
        }
    },
    onWorkClosed : function(component, event, helper) {
        try {
            var userId = $A.get("$SObjectType.CurrentUser.Id");
 			helper.server(component, "c.getUserServicePresence", { userId: userId })
            .then(result => { console.log(result) })
            .catch(error => { console.log(error) })
            let newStatus = "0N57Q000000GuVW";
            let omniAPITest = component.find("omniToolkitId");
            omniAPITest.setServicePresenceStatus({statusId: newStatus})
            .then( function( result ) {
                console.log( "Result from set status", JSON.stringify( result ) );
            }).catch(function( error ) {
                console.log( "Error in set status", JSON.stringify( error ) ) ;
            });
        } catch(err) {
            console.log(err);
        }
    }
})