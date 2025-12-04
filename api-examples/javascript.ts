// The following are JavaScript SDK examples from our old documentation. The latest versions can be found on the Mailinator website. 
// Uses Microsoft's typed-rest-client. All requests are async functions.
// --- IGNORE ---

// --- Authentication ---
const mailinatorClient = new MailinatorClient("YourTeamAPIToken");


// --- Get Inbox ---
   mailinatorClient.request(new GetInboxRequest(domain.name))
          .then(response => {
          const result = response.result;
          const msgs = result?.msgs;
          if (msgs !== undefined) {
            msgs.forEach((msg) => {
              const subject = msg.subject;
              const parts = msg.parts;
	      //..
              // process message
              })
            }
          });


// --- Get Inbox Message ---
    mailinatorClient.request(new GetInboxMessageRequest("<domain>", "<inbox-name>", "<msg-id>"))
            .then(response => {
                const result = response.result;
                const parts = result?.parts;
                const subject = result?.subject;
                const headers = result?.headers;
            });


// --- Example 4 ---
    mailinatorClient.request(new GetMessageRequest("<domain>", "<msg-id>"))
            .then(response => {
                const result = response.result;
                const parts = result?.parts;
                const subject = result?.subject;
                const headers = result?.headers;
            });


// --- Example 5 ---
    mailinatorClient.request(new GetInboxMessageAttachmentsRequest("domain", "inbox", "message_id"))
            .then(response => {
                const result = response.result;
                const attachments = result?.attachments;
                if (attachments !== undefined) {
                    attachments.forEach((element)=>{
                        const filename = element.filename;
                    });
                }
            });


// --- Example 6 ---
    mailinatorClient.request(new GetMessageAttachmentsRequest("domain", "message_id"))
            .then(response => {
                const result = response.result;
                const attachments = result?.attachments;
                if (attachments !== undefined) {
                    attachments.forEach((element)=>{
                        const filename = element.filename;
                    });
                }
            });


// --- Example 7 ---
        const file = fs.createWriteStream("filename");
        mailinatorClient.request(new GetInboxMessageAttachmentRequest("<domain>", "<inbox-name>", "<msg-id>", attachmentId))
            .then(response => {
                response.result!.pipe(file);
            });


// --- Example 8 ---
        const file = fs.createWriteStream("filename");
        mailinatorClient.request(new GetMessageAttachmentRequest("<domain>", "<msg-id>", attachmentId))
            .then(response => {
                response.result!.pipe(file);
            });


// --- Example 9 ---
    mailinatorClient.request(new GetInboxMessageLinksRequest("domain", "inbox", "message_id"))
            .then(response => {
                const result = response.result;
                const links = result?.links;
                if (links !== undefined) {
                    links.forEach((link)=>{
                        //...
                    });
                }
            });


// --- Example 10 ---
    mailinatorClient.request(new GetMessageLinksRequest("domain", "message_id"))
            .then(response => {
                const result = response.result;
                const links = result?.links;
                if (links !== undefined) {
                    links.forEach((link)=>{
                       //...
                    });
                }
            });


// --- Example 11 ---
    mailinatorClient.request(new GetMessageLinksFullRequest("domain", "message_id"))
            .then(response => {
                const result = response.result;
                const links = result?.links;
                if (links !== undefined) {
                    links.forEach((link)=>{
                        //...
                    });
                }
            });


// --- Example 12 ---
    mailinatorClient.request(new GetInboxMessageSmtpLogRequest("domain", "inbox", "message_id"))
            .then(response => {
            });


// --- Example 13 ---
    mailinatorClient.request(new GetMessageSmtpLogRequest("domain", "message_id"))
            .then(response => {
            });


// --- Example 14 ---
    mailinatorClient.request(new GetInboxMessageRawRequest("domain", "inbox", "message_id"))
            .then(response => {
            });


// --- Example 15 ---
    mailinatorClient.request(new GetMessageRawRequest("domain", "message_id"))
            .then(response => {
            });


// --- Example 16 ---
    mailinatorClient.request(new GetLatestInboxMessagesRequest("domain", "inbox"))
            .then(response => {
            });


// --- Example 17 ---
    mailinatorClient.request(new GetLatestMessagesRequest("domain"))
            .then(response => {
            });


// --- Example 18 ---
    mailinatorClient.request(new GetSmsInboxRequest("private", "testinbox", "testinbox-1570635306-12914603"))
            .then(response => {
            });


// --- Example 19 ---
    mailinatorClient.request(new DeleteDomainMessagesRequest("domain"))
            .then(response => {
                const count = response.result!.count;
            });


// --- Example 20 ---
    mailinatorClient.request(new DeleteInboxMessagesRequest("domain", "inbox"))
            .then(response => {
                const count = response.result!.count;
            });


// --- Example 21 ---
    mailinatorClient.request(new DeleteMessageRequest("domain", "inbox", "message_id"))
            .then(response => {
                const count = response.result!.count;
            });


// --- Example 22 ---
        const msg = new MessageToPost("subject", "from", "text")
        mailinatorClient.request(new PostMessageRequest("domain", "inbox", msg))
            .then(response => {
                const count = response.result!.id;
            });


// --- Example 23 ---
	mailinatorClient.request(new GetStatsRequest())
            .then(r => {
                // ...
            });


// --- Example 24 ---
	mailinatorClient.request(new GetTeamRequest())
            .then(r => {
                // ...
            });


// --- Example 25 ---
	mailinatorClient.request(new GetTeamInfoRequest())
            .then(r => {
                // ...
            });


// --- Example 26 ---
        mailinatorClient.request(new GetDomainsRequest())
            .then(r => {
                const domains = r.result;
                domains?.domains.forEach((domain) => {
                    const name = domain.name;
                    // ...
                })
            });


// --- Example 27 ---
        mailinatorClient.request(new GetDomainRequest("domain_id"))
            .then(r => {
                const domain = r.result;
                const name = domain?.name;
                // ...
            });


// --- Example 28 ---
    mailinatorClient.request(new CreateDomainRequest("domain_name"))
            .then(r => {
            });


// --- Example 29 ---
    mailinatorClient.request(new DeleteDomainRequest("domain_id"))
            .then(r => {
                const statusCode = r.statusCode;
                // ...
            });


// --- Example 30 ---
        const actionData = new ActionData();
        actionData.url = "https://www.mywebsite.com/restendpoint";
        const action = new Action();
        action.action = ActionType.WEBHOOK;
        action.action_data = actionData;

        const condition = new Condition();
        condition.operation = OperationType.EQUALS;
        condition.value = "raul";

        const ruleToCreate = new RuleToCreate();
        ruleToCreate.name = 'rule name';
        ruleToCreate.priority = 15;
        ruleToCreate.conditions = [condition];
        ruleToCreate.actions = [action];
        mailinatorClient.request(new CreateRuleRequest("domain_id", ruleToCreate))
            .then(r => {
                const rule = r.result;
                const name = rule?.name;
                // ...
            });


// --- Example 31 ---
    mailinatorClient.request(new EnableRuleRequest("domain_id", "rule_id"))
            .then(r => {
                const statusCode = r.statusCode;
                // ...
            });


// --- Example 32 ---
    mailinatorClient.request(new DisableRuleRequest("domain_id", "rule_id"))
            .then(r => {
                const statusCode = r.statusCode;
                // ...
            });


// --- Example 33 ---
    mailinatorClient.request(new GetRulesRequest("domain_id"))
            .then(r => {
                const result = r.result;
                const rules = result?.rules;
                // ...
            });


// --- Example 34 ---
    mailinatorClient.request(new GetRuleRequest("domain_id", "rule_id"))
            .then(r => {
                const result = r.result;
                const name = result?.name;
                // ...
            });


// --- Example 35 ---
    mailinatorClient.request(new DeleteRuleRequest("domain_id", "rule_id"))
            .then(r => {
                const result = r.result;
                const status = result?.status;
                // ...
            });


// --- Example 36 ---
    mailinatorClient.request(new PrivateWebhookRequest("webhookToken", webhook))
            .then(r => {
                const result = r.result;
                const status = result?.status;
                // ...
            });


// --- Example 37 ---
    mailinatorClient.request(new PrivateInboxWebhookRequest("webhookToken", "inbox", webhook))
            .then(r => {
                const result = r.result;
                const status = result?.status;
                // ...
            });


// --- Example 38 ---
    mailinatorClient.request(new PrivateCustomServiceWebhookRequest("webhookToken", "customService", webhook))
            .then(r => {
            });


// --- Example 39 ---
    mailinatorClient.request(new PrivateCustomServiceInboxWebhookRequest("webhookToken", "customService", "inbox", webhook))
            .then(r => {
            });


// --- Example 40 ---
    mailinatorClient.request(new InstantTOTP2FACodeRequest("auth_secret"))
            .then(r => {
            });


// --- Example 41 ---
    mailinatorClient.request(new GetAuthenticatorsRequest())
            .then(r => {
            });


// --- Example 42 ---
    mailinatorClient.request(new GetAuthenticatorsByIdRequest("auth_id"))
            .then(r => {
                const result = r.result;
                const status = result?.status;
                // ...
            });
