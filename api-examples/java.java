// The following are Java SDK examples from our old documentation. The latest versions can be found on the Mailinator website. 

// --- Maven Configuration ---
Maven:
  <dependencies>
    <dependency>
      <groupId>com.manybrain</groupId>
      <artifactId>mailinator-client</artifactId>
      <version>1.0</version>
    </dependency>
  </dependencies>

Gradle:
  compile 'com.manybrain:mailinator-client:1.0'


// --- Authentication ---
MailinatorClient mailinatorClient = new MailinatorClient("YourTeamAPIToken");


// --- Example 3 ---
   Inbox inbox = mailinatorClient.request(new GetInboxRequest("private"));
   List<Message> messages = inbox.getMsgs();
   for (Message m : messages) {
     String subject = m.getSubject();
     List<Part> parts = m.getParts();
     // process message
   }


// --- Example 4 ---
  Message m = mailinatorClient.request(
  new GetInboxMessageRequest("<domain>", "<inbox-name>", "<msg-id>"));

   List<Parts> parts = m.getParts();
   String subject = m.getSubject();
   Map<String, Object> headers = m.getHeaders();


// --- Example 5 ---
  Message m = mailinatorClient.request(
  new GetMessageRequest("<domain>", "<msg-id>"));

   List<Parts> parts = m.getParts();
   String subject = m.getSubject();
   Map<String, Object> headers = m.getHeaders();


// --- Example 6 ---
  List<Attachment> attachments = mailinatorClient.request(
    new GetInboxMessageAttachmentsRequest("domain", "inbox", "message_id"));


// --- Example 7 ---
  List<Attachment> attachments = mailinatorClient.request(
    new GetMessageAttachmentsRequest("domain", "message_id"));


// --- Example 8 ---
   Attachment attachment = mailinatorClient.request(
          new GetInboxMessageAttachmentRequest("<domain>", "<inbox-name>", "<msg-id>", attachmentId));


// --- Example 9 ---
   Attachment attachment = mailinatorClient.request(
          new GetMessageAttachmentRequest("<domain>", "<msg-id>", attachmentId));


// --- Example 10 ---
  List<Links> links = mailinatorClient.request(
    new GetInboxMessageLinksRequest("domain", "inbox", "message_id"));


// --- Example 11 ---
  List<Links> links = mailinatorClient.request(
    new GetMessageLinksRequest("domain", "message_id"));


// --- Example 12 ---
  List<Links> links = mailinatorClient.request(
    new GetMessageLinksFullRequest("domain", "message_id"));


// --- Example 13 ---
  SmtpLog smtpLog = mailinatorClient.request(
    new GetInboxMessageSmtpLogRequest("domain", "inbox", "message_id"));


// --- Example 14 ---
  SmtpLog smtpLog = mailinatorClient.request(
    new GetMessageSmtpLogRequest("domain", "message_id"));


// --- Example 15 ---
  String raw = mailinatorClient.request(
    new GetInboxMessageRawRequest("domain", "inbox", "message_id"));


// --- Example 16 ---
  String raw = mailinatorClient.request(
    new GetMessageRawRequest("domain", "message_id"));


// --- Example 17 ---
  Inbox messages = mailinatorClient.request(
    new GetLatestInboxMessagesRequest("domain", "inbox"));


// --- Example 18 ---
  Inbox messages = mailinatorClient.request(
    new GetLatestMessagesRequest("domain"));


// --- Example 19 ---
  List<Attachment> attachments = mailinatorClient.request(
    new GetSmsInboxRequest("domain", "YOUR_TEAM_SMS_NUMBER"));


// --- Example 20 ---
    DeletedMessages deletedMessages = mailinatorClient.request(
      new DeleteDomainMessagesRequest("domain"));
    System.out.println(deletedMessages.getCount() + " messages deleted");


// --- Example 21 ---
  DeletedMessages deletedMessages = mailinatorClient.request(new DeleteInboxMessagesRequest("domain", "inbox"));
  System.out.println(deletedMessages.getCount() + " messages deleted");


// --- Example 22 ---
    mailinatorClient.request(new DeleteMessageRequest("domain", "inbox", "message_id"));
    System.out.println(deletedMessages.getCount() + " messages deleted");


// --- Example 23 ---
   MessageToPost msgToPost = new MessageToPost("subject", "from", "text_body");
   mailinatorClient.request(new PostMessageRequest("domain", "inbox", msgToPost));


// --- Example 24 ---
	mailinatorClient.request(new GetStatsRequest());


// --- Example 25 ---
	mailinatorClient.request(new GetTeamRequest());


// --- Example 26 ---
	mailinatorClient.request(new GetTeamInfoRequest());


// --- Example 27 ---
	mailinatorClient.request(new GetDomainsRequest());


// --- Example 28 ---
	mailinatorClient.request(new GetDomainRequest("domain_id"));


// --- Example 29 ---
	mailinatorClient.request(new CreateDomainRequest("domain_name"));


// --- Example 30 ---
	mailinatorClient.request(new DeleteDomainRequest("domain_id"));


// --- Example 31 ---
	ActionData  actionData  =  ActionData.builder()
	.url("https://www.mywebsite.com/restendpoint")
	.build();

	Action  action  =  Action.builder()
	.action(WEBHOOK)
	.actionData(actionData)
	.build();

	Condition  condition  =  Condition.builder()
	.operation(EQUALS)
	.conditionData(ConditionData.builder()
	.field("to")
	.value("raul")
	.build())
	.build();

	RuleToCreate  ruleToCreate  =  RuleToCreate.builder()
	.name("rule name")
	.priority(15)
	.conditions(Collections.singletonList(condition))
	.actions(Collections.singletonList(action))
	.build();
	
	mailinatorClient.request(new CreateRuleRequest("domain_id", ruleToCreate));


// --- Example 32 ---
	mailinatorClient.request(new EnableRuleRequest("domain_id", "rule_id"));


// --- Example 33 ---
	mailinatorClient.request(new DisableRuleRequest("domain_id", "rule_id"));


// --- Example 34 ---
	mailinatorClient.request(new GetRulesRequest("domain_id"));


// --- Example 35 ---
	mailinatorClient.request(new GetRuleRequest("domain_id", "rule_id"));


// --- Example 36 ---
	mailinatorClient.request(new DeleteRuleRequest("domain_id", "rule_id"));


// --- Example 37 ---
	Webhook webhook = new Webhook("from", "subject", "text", "to");
	mailinatorClient.request(new PrivateWebhookRequest("webhookToken", webhook));


// --- Example 38 ---
	Webhook webhook = new Webhook("from", "subject", "text", "to");
	mailinatorClient.request(new PrivateInboxWebhookRequest("webhookToken", "inbox", webhook));


// --- Example 39 ---
	Webhook webhook = new Webhook("from", "subject", "text", "to");
	mailinatorClient.request(new PrivateCustomServiceWebhookRequest("webhookToken", "customService", webhook));


// --- Example 40 ---
	Webhook webhook = new Webhook("from", "subject", "text", "to");
	mailinatorClient.request(new PrivateCustomServiceInboxWebhookRequest("webhookToken", "customService", "inbox", webhook));


// --- Example 41 ---
	mailinatorClient.request(new InstantTOTP2FACodeRequest("auth_secret"));


// --- Example 42 ---
	mailinatorClient.request(new GetAuthenticatorsRequest());


// --- Example 43 ---
	mailinatorClient.request(new GetAuthenticatorsByIdRequest("auth_id"));
