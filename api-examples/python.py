# The following are Python SDK examples from our old documentation. The latest versions can be found on the Mailinator website. 

# --- Authentication ---
mailinatorClient = Mailinator("YourTeamAPIToken")


# --- Example 2 ---
    inbox = mailinatorClient.request( GetInboxRequest(DOMAIN, INBOX) )


# --- Example 3 ---
    message = self.mailinator.request( GetInboxMessageRequest(DOMAIN, INBOX, message_id) )


# --- Example 4 ---
    message = self.mailinator.request( GetMessageRequest(DOMAIN, message_id) )


# --- Example 5 ---
    attachments = self.mailinator.request( GetInboxMessageAttachmentsRequest(DOMAIN, INBOX, message_id) )


# --- Example 6 ---
    attachments = self.mailinator.request( GetMessageAttachmentsRequest(DOMAIN, message_id) )


# --- Example 7 ---
    response = self.mailinator.request( GetInboxMessageAttachmentRequest(DOMAIN, INBOX, message_id, attachment_id) )


# --- Example 8 ---
    response = self.mailinator.request( GetMessageAttachmentRequest(DOMAIN, message_id, attachment_id) )


# --- Example 9 ---
    links = self.mailinator.request( GetInboxMessageLinksRequest(DOMAIN, INBOX, message_id) )


# --- Example 10 ---
    links = self.mailinator.request( GetMessageLinksRequest(DOMAIN, message_id) )


# --- Example 11 ---
    links = self.mailinator.request( GetMessageLinksFullRequest(DOMAIN, message_id) )


# --- Example 12 ---
    links = self.mailinator.request( GetInboxMessageSmtpLogRequest(DOMAIN, INBOX, message_id) )


# --- Example 13 ---
    links = self.mailinator.request( GetMessageSmtpLogRequest(DOMAIN, message_id) )


# --- Example 14 ---
    links = self.mailinator.request( GetInboxMessageRawRequest(DOMAIN, INBOX, message_id) )


# --- Example 15 ---
    links = self.mailinator.request( GetMessageRawRequest(DOMAIN, message_id) )


# --- Example 16 ---
    links = self.mailinator.request( GetLatestInboxMessagesRequest(DOMAIN, INBOX) )


# --- Example 17 ---
    links = self.mailinator.request( GetLatestMessagesRequest(DOMAIN) )


# --- Example 18 ---
    attachments = self.mailinator.request( GetSmsInboxRequest(DOMAIN, SMS_PHONE_NUMBER) )


# --- Example 19 ---
    response = self.mailinator.request( DeleteDomainMessagesRequest(DOMAIN) )


# --- Example 20 ---
    response = self.mailinator.request( DeleteInboxMessagesRequest(DOMAIN) )    


# --- Example 21 ---
    response = self.mailinator.request( DeleteMessageRequest(DOMAIN, INBOX, message_id) )


# --- Example 22 ---
    post_message = PostMessage({'from':'test_email@test.com', 'subejct': "here my subject", 'text':"hello"})
    response = self.mailinator.request( PostMessageRequest(DOMAIN, INBOX, post_message) )


# --- Example 23 ---
    team = self.mailinator.request( GetTeamStatsRequest() )


# --- Example 24 ---
    team = self.mailinator.request( GetTeamRequest() )


# --- Example 25 ---
    team = self.mailinator.request( GetTeamInfoRequest() )


# --- Example 26 ---
    domains = self.mailinator.request( GetDomainsRequest() )


# --- Example 27 ---
    domain = self.mailinator.request( GetDomainRequest(DOMAIN) )


# --- Example 28 ---
    self.mailinator.request( CreateDomainRequest("domain_name") )


# --- Example 29 ---
    self.mailinator.request( DeleteDomainRequest("domain_id") )


# --- Example 30 ---
    conditions = [Condition(operation=Condition.OperationType.PREFIX, field="to", value="test")]
    actions = [Action(action=Action.ActionType.DROP, action_data=Action.ActionData("https://www.mywebsite.com/restendpoint"))]
    rule = Rule(description="mydescription", enabled=True, name="MyName", conditions=conditions, actions=actions)

    rule = self.mailinator.request( CreateRuleRequest(DOMAIN, rule ) )


# --- Example 31 ---
    self.mailinator.request( EnableRuleRequest(DOMAIN, rule_id) )


# --- Example 32 ---
    self.mailinator.request( DisableRuleRequest(DOMAIN, rule_id) )


# --- Example 33 ---
    rules = self.mailinator.request( GetRulesRequest(DOMAIN) )


# --- Example 34 ---
    rule = self.mailinator.request( GetRuleRequest(DOMAIN, rule_id) )


# --- Example 35 ---
    response = self.mailinator.request( DeleteRuleRequest(DOMAIN, rule_id) )


# --- Example 36 ---
	webhook = Webhook(_from="MyMailinatorPythonTest", subject="testing message", text="hello world", to="jack")
    response = self.mailinator.request( PrivateWebhookRequest("webhookToken", webhook) )


# --- Example 37 ---
	webhook = Webhook(_from="MyMailinatorPythonTest", subject="testing message", text="hello world", to="jack")
    response = self.mailinator.request( PrivateInboxWebhookRequest("webhookToken", "inbox", webhook) )


# --- Example 38 ---
	webhook = Webhook(_from="MyMailinatorPythonTest", subject="testing message", text="hello world", to="jack")
    response = self.mailinator.request( PrivateCustomServiceWebhookRequest("webhookToken", "customService", webhook) )


# --- Example 39 ---
	webhook = Webhook(_from="MyMailinatorPythonTest", subject="testing message", text="hello world", to="jack")
    response = self.mailinator.request( PrivateCustomServiceInboxWebhookRequest("webhookToken", "customService", "inbox", webhook) )


# --- Example 40 ---
    response = self.mailinator.request( InstantTOTP2FACodeRequest("auth_secret") )


# --- Example 41 ---
    response = self.mailinator.request( GetAuthenticatorsRequest() )


# --- Example 42 ---
    response = self.mailinator.request( GetAuthenticatorsByIdRequest("auth_id") )