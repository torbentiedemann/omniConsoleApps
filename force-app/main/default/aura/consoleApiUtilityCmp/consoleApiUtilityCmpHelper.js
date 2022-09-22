({    
    server: function(component, actionName, params) {
    return new Promise($A.getCallback((resolve, reject) => {
        var action = component.get(actionName);
        params && action.setParams(params);
        action.setCallback(this, result => {
            switch (result.getState()) {
                case "DRAFT":
                case "SUCCESS":
                    resolve(result.getReturnValue());
                    break;
                default:
                    reject(result.getError());
            }
        });
        $A.enqueueAction(action);
    }));
	}
})