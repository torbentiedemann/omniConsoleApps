({
    acceptWork: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkitDemo");
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
    },
    getAgentWorkload: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkitDemo");
        omniAPI.getAgentWorkload().then(function(result) {
            console.log('Retrieved Agent Configured Capacity and Current Workload successfully');
            console.log('Agent\'s configured capacity is: ' + result.configuredCapacity);
            console.log('Agent\'s currently assigned workload is: ' + result.currentWorkload);
        }).catch(function(error) {
            console.log(error);
        });
    },
    getStatus: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkitDemo");
        omniAPI.getServicePresenceStatusId().then(function(result) {
            console.log('Status Id is: ' + result.statusId);
        }).catch(function(error) {
            console.log(error);
        });
    },
    getStatusChannels: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkitDemo");
        omniAPI.getServicePresenceStatusChannels().then(function(result) {
            var channels = JSON.parse(result.channels);
            //For example purposes, just retrieve the first channel
            console.log('First channel ID is: ' + channels[0].channelId);
            console.log('First channel developer name is: ' + channels[0].developerName);
        }).catch(function(error) {
            console.log(error);
        });
    },
    raiseFlag: function(cmp, evt, hlp) {
    var omniAPI = cmp.find("omniToolkitDemo");
    omniAPI.getAgentWorks().then(function(result) {           
        var works = JSON.parse(result.works);
        var work = works[0];
        omniAPI.raiseAgentWorkFlag({workId: work.workId, message: "Help me please!"}).then(function(res) {
            if (res) {
                console.log("Flag raised successfully");
            } else {
                console.log("Flag raise failed");
            }
        }).catch(function(error) {
            console.log(error);
        });
    });        
	},
    lowerFlag: function(cmp, evt, hlp) {
    var omniAPI = cmp.find("omniToolkitDemo");
    omniAPI.getAgentWorks().then(function(result) {           
        var works = JSON.parse(result.works);
        var work = works[0];
        omniAPI.lowerAgentWorkFlag({workId: work.workId}).then(function(res) {
            if (res) {
                console.log("Flag lowered successfully");
            } else {
                console.log("Flag lower failed");
            }
        }).catch(function(error) {
            console.log(error);
        });
    });        
	},
    getAllUtilityInfo : function(component, event, helper) {
        var utilityBarAPI = component.find("utilitybar");
        utilityBarAPI.getAllUtilityInfo().then(function(response) {
            console.log(response);
            var myUtilityInfo = response[1];
            utilityBarAPI.openUtility({
                utilityId: myUtilityInfo.id
            });
       })
        .catch(function(error) {
            console.log(error);
        });
    }
})