// The following are CSharp SDK examples from our old documentation. The latest versions can be found on the Mailinator website. 

// --- Authentication ---
mailinatorClient := mailinator.NewMailinatorClient("YourTeamAPIToken")


// --- Example 2 ---
    res, err := mailinatorClient.FetchInbox(&FetchInboxOptions{Domain: "yourDomainNameHere", Inbox: "yourInboxHere"})


// --- Example 3 ---
    res, err := mailinatorClient.FetchInboxMessage(&FetchInboxMessageOptions{"yourDomainNameHere", "yourInboxHere", "yourMessageIdHere"})


// --- Example 4 ---
    res, err := mailinatorClient.FetchMessage(&FetchMessageOptions{"yourDomainNameHere", "yourMessageIdHere"})


// --- Example 5 ---
    res, err := mailinatorClient.FetchInboxMessageAtachments(&FetchInboxMessageAttachmentsOptions{"yourDomainNameHere", "yourInboxHere", "yourMessageIdWithAttachmentHere"})


// --- Example 6 ---
    res, err := mailinatorClient.FetchMessageAtachments(&FetchMessageAttachmentsOptions{"yourDomainNameHere", "yourMessageIdWithAttachmentHere"})


// --- Example 7 ---
    res, err := mailinatorClient.FetchInboxMessageAttachment(&FetchInboxMessageAttachmentOptions{"yourDomainNameHere", "yourInboxHere", "yourMessageIdWithAttachmentHere", "yourAttachmentIdHere"})


// --- Example 8 ---
    res, err := mailinatorClient.FetchMessageAttachment(&FetchMessageAttachmentOptions{"yourDomainNameHere", "yourMessageIdWithAttachmentHere", "yourAttachmentIdHere"})


// --- Example 9 ---
    res, err := mailinatorClient.FetchInboxMessageLinks(&FetchInboxMessageLinksOptions{"yourDomainNameHere", "yourInboxHere", "yourMessageIdHere"})


// --- Example 10 ---
    res, err := mailinatorClient.FetchMessageLinks(&FetchMessageLinksOptions{"yourDomainNameHere", "yourMessageIdHere"})


// --- Example 11 ---
    res, err := mailinatorClient.FetchMessageLinksFull(&FetchMessageLinksFullOptions{"yourDomainNameHere", "yourMessageIdHere"})


// --- Example 12 ---
    res, err := mailinatorClient.FetchInboxMessageSmtpLog(&FetchInboxMessageSmtpLogOptions{"yourDomainNameHere", "yourInboxHere", "yourMessageIdHere"})


// --- Example 13 ---
    res, err := mailinatorClient.FetchMessageSmtpLog(&FetchMessageSmtpLogOptions{"yourDomainNameHere", "yourMessageIdHere"})


// --- Example 14 ---
    res, err := mailinatorClient.FetchInboxMessageRaw(&FetchInboxMessageRawOptions{"yourDomainNameHere", "yourInboxHere", "yourMessageIdHere"})


// --- Example 15 ---
    res, err := mailinatorClient.FetchMessageRaw(&FetchMessageRawOptions{"yourDomainNameHere", "yourMessageIdHere"})


// --- Example 16 ---
    res, err := mailinatorClient.FetchLatestInboxMessages(&FetchLatestInboxMessagesOptions{"yourDomainNameHere", "yourInboxHere"})


// --- Example 17 ---
    res, err := mailinatorClient.FetchLatestMessages(&FetchLatestMessagesOptions{"yourDomainNameHere"})


// --- Example 18 ---
    res, err := mailinatorClient.FetchSMSMessage(&FetchSMSMessageOptions{"yourDomainNameHere", "TeamSMSNumber"})


// --- Example 19 ---
    res, err := mailinatorClient.DeleteAllDomainMessages(&DeleteAllDomainMessagesOptions{"yourDomainNameHere"})


// --- Example 20 ---
    res, err := mailinatorClient.DeleteAllInboxMessages(&DeleteAllInboxMessagesOptions{"yourDomainNameHere", "yourInboxHere"})


// --- Example 21 ---
    res, err := mailinatorClient.DeleteMessage(&DeleteMessageOptions{"yourDomainNameHere", "yourInboxHere", "yourMessageIdHere"})


// --- Example 22 ---
    message := MessageToPost{
			Subject: "Testing message",
			From:    "test_email@test.com",
			Text:    "Hello World!",
		}
    res, err := mailinatorClient.PostMessage(&PostMessageOptions{"yourDomainNameHere", "yourInboxHere", message})


// --- Example 23 ---
    res, err := mailinatorClient.GetTeamStats()


// --- Example 24 ---
    res, err := mailinatorClient.GetTeam()


// --- Example 25 ---
    res, err := mailinatorClient.GetTeamInfo()


// --- Example 26 ---
    res, err := mailinatorClient.GetDomains()


// --- Example 27 ---
    res, err := mailinatorClient.GetDomain(&GetDomainOptions{"yourDomainIdHere"})


// --- Example 28 ---
    res, err := mailinatorClient.CreateDomain(&CreateDomainOptions{"domain_name"})


// --- Example 29 ---
    res, err := mailinatorClient.DeleteDomain(&DeleteDomainOptions{"domain_id"})


// --- Example 30 ---
    rule := RuleToCreate{
		Name:        "RuleName",
		Priority:    15,
		Description: "Description",
		Conditions: []Condition{
			Condition{
				Operation: OperationType("PREFIX"),
				ConditionData: ConditionData{
					Field: "to",
					Value: "raul",
				},
			},
		},
		Enabled: true,
		Match:   MatchType("ANY"),
		Actions: []ActionRule{
			ActionRule{
				Action: ActionType("WEBHOOK"),
				ActionData: ActionData{
					Url: "https://www.google.com",
				},
			},
		},
	}

	res, err := mailinatorClient.CreateRule(&CreateRuleOptions{"yourDomainIdHere", rule})


// --- Example 31 ---
    res, err := mailinatorClient.EnableRule(&EnableRuleOptions{"yourDomainIdHere", "yourRuleIdHere"})


// --- Example 32 ---
    res, err := mailinatorClient.DisableRule(&DisableRuleOptions{"yourDomainIdHere", "yourRuleIdHere"})


// --- Example 33 ---
    res, err := mailinatorClient.GetAllRules(&GetAllRulesOptions{"yourDomainIdHere"})


// --- Example 34 ---
    res, err := mailinatorClient.GetRule(&GetRuleOptions{"yourDomainIdHere", "yourRuleIdHere"})


// --- Example 35 ---
    res, err := mailinatorClient.DeleteRule(&DeleteRuleOptions{"yourDomainIdHere", "yourRuleIdHere"})


// --- Example 36 ---
	var  testWebhook  =  Webhook{
		From: "sender@example.com",
		Subject: "Test Subject",
		Text: "Hello, this is a test message.",
		To: "recipient@example.com",
	}
    res, err := mailinatorClient.PrivateWebhook(&PrivateWebhookOptions{WebhookToken: "webhookToken", Webhook: webhook})


// --- Example 37 ---
	var  testWebhook  =  Webhook{
		From: "sender@example.com",
		Subject: "Test Subject",
		Text: "Hello, this is a test message.",
		To: "recipient@example.com",
	}
    res, err := mailinatorClient.PrivateInboxWebhook(&PrivateInboxWebhookOptions{WebhookToken: "webhookToken", Webhook: webhook, Inbox: "inbox"})


// --- Example 38 ---
	var  testWebhook  =  Webhook{
		From: "sender@example.com",
		Subject: "Test Subject",
		Text: "Hello, this is a test message.",
		To: "recipient@example.com",
	}
    res, err := mailinatorClient.PrivateCustomServiceWebhook(&PrivateCustomServiceWebhookOptions{WebhookToken: "webhookToken", Webhook: webhook, CustomService: "customService"})


// --- Example 39 ---
	var  testWebhook  =  Webhook{
		From: "sender@example.com",
		Subject: "Test Subject",
		Text: "Hello, this is a test message.",
		To: "recipient@example.com",
	}
    res, err := mailinatorClient.PrivateCustomServiceInboxWebhook(&PrivateCustomServiceInboxWebhookOptions{WebhookToken: "webhookToken", Webhook: webhook, CustomService: "customService", Inbox: "inbox"})


// --- Example 40 ---
    res, err := mailinatorClient.InstantTOTP2FACode(&InstantTOTP2FACodeOptions{"auth_secret"})


// --- Example 41 ---
    res, err := mailinatorClient.GetAuthenticators()


// --- Example 42 ---
    res, err := mailinatorClient.GetAuthenticatorsById(&GetAuthenticatorsByIdOptions{"auth_id"})
