public class PlatformEventController {
	public static void publishEvent(){
        Sample_Event__e event = new Sample_Event__e();
        event.message__c = 'Inactive Tab was closed.';
        event.recordId__c = '0016F000041zsTDQAY';
        event.status__c = 'Success';
        EventBus.publish(event);
    }
    public static void createCase(){
        Case c = new Case();
        c.Status = 'New';
        c.OwnerId = '00G7Q000000modMUAQ';
        c.Origin = 'Email';
        insert c;
    }
}