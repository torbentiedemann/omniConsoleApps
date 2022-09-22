public class OmniChannelHelperController {
	@AuraEnabled
    public static UserServicePresence getUserServicePresence(Id userId) {
        String queryString = 'SELECT ServicePresenceStatusId FROM UserServicePresence WHERE UserId =  \'' + userId + '\' ORDER BY CreatedDate desc LIMIT 1 OFFSET 1';
        UserServicePresence usp = Database.query(queryString);
        return usp;
    }
}