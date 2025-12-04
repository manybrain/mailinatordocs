// The following are CSharp SDK examples from our old documentation. The latest versions can be found on the Mailinator website. 

// --- Authentication ---
MailinatorClient mailinatorClient = new MailinatorClient("YourTeamAPIToken");


// --- Get Inbox ---
    FetchInboxRequest fetchInboxRequest = new FetchInboxRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        Skip = 0, 
        Limit = 20, 
        Sort = Sort.asc 
    };
    FetchInboxResponse fetchInboxResponse = await mailinatorClient.MessagesClient.FetchInboxAsync(fetchInboxRequest);


// --- Example 3 ---
    FetchInboxMessageRequest fetchInboxMessageRequest = new FetchInboxMessageRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        MessageId = "yourMessageIdHere" 
    };
    FetchInboxMessageResponse fetchInboxMessageResponse = await mailinatorClient.MessagesClient.FetchInboxMessageAsync(fetchInboxMessageRequest);


// --- Example 4 ---
    FetchMessageRequest fetchMessageRequest = new FetchMessageRequest() 
    { 
        Domain = "yourDomainNameHere",
        MessageId = "yourMessageIdHere" 
    };
    FetchMessageResponse fetchMessageResponse = await mailinatorClient.MessagesClient.FetchMessageAsync(fetchMessageRequest);


// --- Example 5 ---
    FetchInboxMessageAttachmentsRequest fetchInboxMessageAttachmentsRequest = new FetchInboxMessageAttachmentsRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchInboxMessageAttachmentsResponse fetchInboxMessageAttachmentsResponse = await mailinatorClient.MessagesClient.FetchInboxMessageAttachmentsAsync(fetchInboxMessageAttachmentsRequest);


// --- Example 6 ---
    FetchMessageAttachmentsRequest fetchMessageAttachmentsRequest = new FetchMessageAttachmentsRequest() 
    { 
        Domain = "yourDomainNameHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchMessageAttachmentsResponse fetchMessageAttachmentsResponse = await mailinatorClient.MessagesClient.FetchMessageAttachmentsAsync(fetchMessageAttachmentsRequest);


// --- Example 7 ---
    FetchInboxMessageAttachmentRequest fetchInboxMessageAttachmentRequest = new FetchInboxMessageAttachmentRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        MessageId = "yourMessageIdWithAttachmentHere", 
        AttachmentId = "yourAttachmentIdHere" 
    };
    FetchInboxMessageAttachmentResponse fetchInboxMessageAttachmentResponse = await mailinatorClient.MessagesClient.FetchInboxMessageAttachmentAsync(fetchInboxMessageAttachmentRequest);


// --- Example 8 ---
    FetchMessageAttachmentRequest fetchMessageAttachmentRequest = new FetchMessageAttachmentRequest() 
    { 
        Domain = "yourDomainNameHere", 
        MessageId = "yourMessageIdWithAttachmentHere", 
        AttachmentId = "yourAttachmentIdHere" 
    };
    FetchMessageAttachmentResponse fetchMessageAttachmentResponse = await mailinatorClient.MessagesClient.FetchMessageAttachmentAsync(fetchMessageAttachmentRequest);


// --- Example 9 ---
    FetchInboxMessageLinksRequest fetchInboxMessageLinksRequest = new FetchInboxMessageLinksRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchInboxMessageLinksResponse fetchInboxMessageLinksResponse = await mailinatorClient.MessagesClient.FetchInboxMessageLinksAsync(fetchInboxMessageLinksRequest);


// --- Example 10 ---
    FetchMessageLinksRequest fetchMessageLinksRequest = new FetchMessageLinksRequest() 
    { 
        Domain = "yourDomainNameHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchMessageLinksResponse fetchMessageLinksResponse = await mailinatorClient.MessagesClient.FetchMessageLinksAsync(fetchMessageLinksRequest);


// --- Example 11 ---
    FetchMessageLinksFullRequest fetchMessageLinksFullRequest = new FetchMessageLinksFullRequest() 
    { 
        Domain = "yourDomainNameHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchMessageLinksFullResponse fetchMessageLinksFullResponse = await mailinatorClient.MessagesClient.FetchMessageLinksFullAsync(fetchMessageLinksFullRequest);


// --- Example 12 ---
    FetchInboxMessageSmtpLogRequest fetchInboxMessageSmtpLogRequest = new FetchInboxMessageSmtpLogRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchInboxMessageSmtpLogResponse fetchInboxMessageSmtpLogResponse = await mailinatorClient.MessagesClient.FetchInboxMessageSmtpLogAsync(fetchInboxMessageSmtpLogRequest);


// --- Example 13 ---
    FetchMessageSmtpLogRequest fetchMessageSmtpLogRequest = new FetchMessageSmtpLogRequest() 
    { 
        Domain = "yourDomainNameHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchMessageSmtpLogResponse fetchMessageSmtpLogResponse = await mailinatorClient.MessagesClient.FetchMessageSmtpLogAsync(fetchMessageSmtpLogRequest);


// --- Example 14 ---
    FetchInboxMessageRawRequest fetchInboxMessageRawRequest = new FetchInboxMessageRawRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchInboxMessageRawResponse fetchInboxMessageRawResponse = await mailinatorClient.MessagesClient.FetchInboxMessageRawAsync(fetchInboxMessageRawRequest);


// --- Example 15 ---
    FetchMessageRawRequest fetchMessageRawRequest = new FetchMessageRawRequest() 
    { 
        Domain = "yourDomainNameHere", 
        MessageId = "yourMessageIdWithAttachmentHere" 
    };
    FetchMessageRawResponse fetchMessageRawResponse = await mailinatorClient.MessagesClient.FetchMessageRawAsync(fetchMessageRawRequest);


// --- Example 16 ---
    FetchLatestInboxMessagesRequest fetchLatestInboxMessagesRequest = new FetchLatestInboxMessagesRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere"
    };
    FetchLatestInboxMessagesResponse fetchLatestInboxMessagesResponse = await mailinatorClient.MessagesClient.FetchLatestInboxMessagesAsync(fetchLatestInboxMessagesRequest);


// --- Example 17 ---
    FetchLatestMessagesRequest fetchLatestMessagesRequest = new FetchLatestMessagesRequest() 
    { 
        Domain = "yourDomainNameHere",
    };
    FetchLatestMessagesResponse fetchLatestMessagesResponse = await mailinatorClient.MessagesClient.FetchLatestMessagesAsync(fetchLatestMessagesRequest);


// --- Example 18 ---
    var request = new FetchSMSMessagesRequest() { Domain = "domain", TeamSMSNumber = "TeamSMSNumber" };
	var response = await mailinatorClient.MessagesClient.FetchSMSMessagesAsync(request);


// --- Example 19 ---
    DeleteAllDomainMessagesRequest deleteAllDomainMessagesRequest = new DeleteAllDomainMessagesRequest() 
    { 
        Domain = "yourDomainNameHere" 
    };
    DeleteAllDomainMessagesResponse deleteAllDomainMessagesResponse = 
        await mailinatorClient.MessagesClient.DeleteAllDomainMessagesAsync(deleteAllDomainMessagesRequest);


// --- Example 20 ---
    DeleteAllInboxMessagesRequest deleteAllInboxMessagesRequest = new DeleteAllInboxMessagesRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere" 
    };
    DeleteAllInboxMessagesResponse deleteAllInboxMessagesResponse = 
        await mailinatorClient.MessagesClient.DeleteAllInboxMessagesAsync(deleteAllInboxMessagesRequest);


// --- Example 21 ---
    DeleteMessageRequest deleteMessageRequest = new DeleteMessageRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        MessageId = "yourMessageIdHere" 
    };
    DeleteMessageResponse deleteMessageResponse = await mailinatorClient.MessagesClient.DeleteMessageAsync(deleteMessageRequest);


// --- Example 22 ---
    MessageToPost messageToPost = new MessageToPost()
            {
                Subject = "Testing message",
                From = "test_email@test.com",
                Text = "Hello World!"
            };
    PostMessageRequest postMessageRequest = new PostMessageRequest() 
    { 
        Domain = "yourDomainNameHere", 
        Inbox = "yourInboxHere", 
        Message = messageToPost 
    };
    PostMessageResponse postMessageResponse = await mailinatorClient.MessagesClient.PostMessageAsync(postMessageRequest);


// --- Example 23 ---
    GetTeamStatsResponse response = await mailinatorClient.StatsClient.GetTeamStatsAsync();


// --- Example 24 ---
    var response = await mailinatorClient.StatsClient.GetTeamAsync();


// --- Example 25 ---
    var response = await mailinatorClient.StatsClient.GetTeamInfoAsync();


// --- Example 26 ---
    GetAllDomainsResponse getAllDomainsResponse = await mailinatorClient.DomainsClient.GetAllDomainsAsync();


// --- Example 27 ---
    GetDomainRequest getDomainRequest = new GetDomainRequest() 
    { 
        DomainId = "yourDomainIdHere" 
    };
    GetDomainResponse getDomainResponse = await mailinatorClient.DomainsClient.GetDomainAsync(getDomainRequest);


// --- Example 28 ---
    var request = new CreateDomainRequest() { Name = "domain_name" };
	var response = await mailinatorClient.DomainsClient.CreateDomainAsync(request);


// --- Example 29 ---
    var request = new DeleteDomainRequest() { DomainId = "domain_id" };
	var response = await mailinatorClient.DomainsClient.DeleteDomainAsync(request);


// --- Example 30 ---
    RuleToCreate ruleToCreate = new RuleToCreate()
          {
              Name = "RuleName",
              Priority = 15,
              Description = "Description",
              Conditions = new List<Condition>()
              {
                  new Condition()
                  {
                      Operation = OperationType.PREFIX,
                      ConditionData = new ConditionData()
                      {
                          Field = "to",
                          Value = "raul"
                      }
                  }
              },
              Enabled = true,
              Match = MatchType.ANY,
              Actions = new List<ActionRule>() { new ActionRule() { Action = ActionType.WEBHOOK, ActionData = new ActionData() { Url = "https://www.google.com" } } }
          };
    CreateRuleRequest createRuleRequest = new CreateRuleRequest() 
    { 
        DomainId = "yourDomainIdHere", 
        Rule = ruleToCreate 
    };
    CreateRuleResponse createRuleResponse = await mailinatorClient.RulesClient.CreateRuleAsync(createRuleRequest);


// --- Example 31 ---
    EnableRuleRequest enableRuleRequest = new EnableRuleRequest() 
    { 
        DomainId = "yourDomainIdHere", 
        RuleId = "yourRuleIdHere" 
    };
    EnableRuleResponse enableRuleResponse = await mailinatorClient.RulesClient.EnableRuleAsync(enableRuleRequest);


// --- Example 32 ---
    DisableRuleRequest disableRuleRequest = new DisableRuleRequest() 
    { 
        DomainId = "yourDomainIdHere", 
        RuleId = "yourRuleIdHere" 
    };
    DisableRuleResponse disableRuleResponse = await mailinatorClient.RulesClient.DisableRuleAsync(disableRuleRequest);


// --- Example 33 ---
    GetAllRulesRequest getAllRulesRequest = new GetAllRulesRequest() 
    { 
        DomainId = "yourDomainIdHere" 
    };
    GetAllRulesResponse getAllRulesResponse = await mailinatorClient.RulesClient.GetAllRulesAsync(getAllRulesRequest);


// --- Example 34 ---
    GetRuleRequest getRuleRequest = new GetRuleRequest() 
    { 
        DomainId = "yourDomainIdHere", 
        RuleId = "yourRuleIdHere" 
    };
    GetRuleResponse getRuleResponse = await mailinatorClient.RulesClient.GetRuleAsync(getRuleRequest);


// --- Example 35 ---
    DeleteRuleRequest deleteRuleRequest = new DeleteRuleRequest() 
    { 
        DomainId = "yourDomainIdHere", 
        RuleId = "yourRuleIdHere" 
    };
    DeleteRuleResponse deleteRuleResponse = await mailinatorClient.RulesClient.DeleteRuleAsync(deleteRuleRequest);


// --- Example 36 ---
	var webhook = new Webhook { From = "MyMailinatorCSharpTest", Subject = "testing message", Text = "hello world", To = "jack" };
    var request = new PrivateWebhookRequest() { WebhookToken = "WebhookTokenPrivateDomain", Webhook = webhook };
	var response = await mailinatorClient.WebhooksClient.PrivateWebhookAsync(request);


// --- Example 37 ---
	var webhook = new Webhook { From = "MyMailinatorCSharpTest", Subject = "testing message", Text = "hello world", To = "jack" };
    var request = new PrivateInboxWebhookRequest() { WebhookToken = "WebhookTokenPrivateDomain", Inbox = "WebhookInbox", Webhook = webhook };
	var response = await mailinatorClient.WebhooksClient.PrivateInboxWebhookAsync(request);


// --- Example 38 ---
	var webhook = new Webhook { From = "MyMailinatorCSharpTest", Subject = "testing message", Text = "hello world", To = "jack" };
    var request = new PrivateCustomServiceWebhookRequest() { WebhookToken = "WebhookTokenCustomService", CustomService = "WebhookCustomService", Webhook = webhook };
	var response = await mailinatorClient.WebhooksClient.PrivateCustomServiceWebhookAsync(request);


// --- Example 39 ---
	var webhook = new Webhook { From = "MyMailinatorCSharpTest", Subject = "testing message", Text = "hello world", To = "jack" };
    var request = new PrivateCustomServiceInboxWebhookRequest() { WebhookToken = "WebhookTokenCustomService", CustomService = "WebhookCustomService", Inbox = "WebhookInbox", Webhook = webhook };
    var response = await mailinatorClient.WebhooksClient.PrivateCustomServiceInboxWebhookAsync(request);


// --- Example 40 ---
	var request = new InstantTOTP2FACodeRequest() { TotpSecretKey = "secretKey" };
	var response = await mailinatorClient.AuthenticatorsClient.InstantTOTP2FACodeAsync(request);


// --- Example 41 ---
	var response = await mailinatorClient.AuthenticatorsClient.GetAuthenticatorsAsync();


// --- Example 42 ---
	var request = new GetAuthenticatorsByIdRequest() { Id = "authId" };
	var response = await mailinatorClient.AuthenticatorsClient.GetAuthenticatorsByIdAsync(request);
