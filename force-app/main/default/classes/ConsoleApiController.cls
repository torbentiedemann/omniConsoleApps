public class ConsoleApiController {
	@AuraEnabled
    public static AgentWork createAgentWork(Id userId, Id caseId) {
        List<AgentWork> aw = [SELECT Id FROM AgentWork WHERE WorkItemId = :caseId AND Status NOT IN ('Closed','Unavailable','Canceled') AND UserId != :userId];        
            AgentWork a = new AgentWork();
            a.CapacityWeight = 1;
            a.ServiceChannelId = '0N97Q000000HXUqSAO';
            a.ShouldSkipCapacityCheck = true;
            a.UserId = userId;
            a.WorkItemId = caseId;
        	if (aw.size() < 1) {
            	insert a;
            	}
            return a;        
    }
}