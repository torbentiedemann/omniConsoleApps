({
    doInit : function(component, event, helper) {
        var channel = '/event/Sample_Event__e';
        const replayId = -1;
          
        const empApi = component.find("empApi");
          
        //A callback function that's invoked for every event received
        const callback = function (message) {
            var obj = message.data.payload;
            console.log(obj);
             
            component.set("v.status", obj.Status__c);
            component.set("v.message", obj.message__c);
            component.set("v.recordId", obj.recordId__c);
            
            var workspace = component.find("workspace");
            workspace.getFocusedTabInfo().then(function(response) {
            	var focusedTabId = response.tabId;
                console.log(focusedTabId);
                // close tab after 10 seconds
                window.setTimeout(
                    $A.getCallback(function() {
                        console.log('10 seconds later...');
                        console.log(focusedTabId);
                        workspace.closeTab( { tabId: focusedTabId } );
                        //fire toast message
                        var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                        "mode" : 'sticky',
                        "title" : "Success",
                        "message" : obj.message__c,
                        "type" : "success"
                        });
                        toastEvent.fire();
                    }), 10000); 
            })
            .catch(function(error) {
            	console.log(error);
            }); 
        };
         
        // Subscribe to the channel and save the returned subscription object.
        empApi.subscribe(channel, replayId, callback).then(function(newSubscription) {
            //console.log("Subscribed to channel 1" + channel);
        });
         
        const errorHandler = function (message) {
            console.error("Received error ", JSON.stringify(message));
        };
         
        //A callback function that's called when an error response is received from the server for the handshake, connect, subscribe, and unsubscribe meta channels.
        empApi.onError(errorHandler);
    }
})