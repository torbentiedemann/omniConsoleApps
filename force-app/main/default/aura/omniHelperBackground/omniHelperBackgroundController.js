({
    onWorkAccepted : function(component, event, helper) {
        console.log("Work accepted.");
        let workItemId = event.getParam('workItemId');
        let workId = event.getParam('workId');
        console.log(event);
        console.log(workItemId);
        console.log(workId);
        try {
            let newStatus = "0N57Q000000GuVb";
            let omniAPITest = component.find("omniToolkitId2");
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
            let newStatus = "0N57Q000000GuVW";
            let omniAPITest = component.find("omniToolkitId2");
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