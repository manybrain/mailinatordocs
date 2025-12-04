# The following are Ruby SDK examples from our old documentation. The latest versions can be found on the Mailinator website. 

# --- Authentication ---
mailinatorClient = MailinatorClient::Client.new(auth_token: "YourTeamAPIToken")


# --- Example 2 ---
    response = mailinatorClient.messages.fetch_inbox(domain:"yourDomainNameHere", inbox: "yourInboxHere", skip: 0, limit: 50, sort: "ascending", decodeSubject: false)


# --- Example 3 ---
    response = mailinatorClient.messages.fetch_inbox_message(domain:"yourDomainNameHere", inbox: "yourInboxHere", messageId: "yourMessageIdHere")


# --- Example 4 ---
    response = mailinatorClient.messages.fetch_message(domain:"yourDomainNameHere", messageId: "yourMessageIdHere")


# --- Example 5 ---
    response = mailinatorClient.messages.fetch_inbox_message_attachments(domain:"yourDomainNameHere", inbox: "yourInboxHere", messageId: "yourMessageIdWithAttachmentHere")


# --- Example 6 ---
    response = mailinatorClient.messages.fetch_message_attachments(domain:"yourDomainNameHere", messageId: "yourMessageIdWithAttachmentHere")


# --- Example 7 ---
    response = mailinatorClient.messages.fetch_inbox_message_attachment(domain:"yourDomainNameHere", inbox: "yourInboxHere", messageId: "yourMessageIdWithAttachmentHere", attachmentId: "yourAttachmentIdHere")


# --- Example 8 ---
    response = mailinatorClient.messages.fetch_message_attachment(domain:"yourDomainNameHere", messageId: "yourMessageIdWithAttachmentHere", attachmentId: "yourAttachmentIdHere")


# --- Example 9 ---
    response = mailinatorClient.messages.fetch_inbox_message_links(domain:"yourDomainNameHere", inbox: "yourInboxHere", messageId: "yourMessageIdHere")


# --- Example 10 ---
    response = mailinatorClient.messages.fetch_message_links(domain:"yourDomainNameHere", messageId: "yourMessageIdHere")


# --- Example 11 ---
    response = mailinatorClient.messages.fetch_message_links_full(domain:"yourDomainNameHere", messageId: "yourMessageIdHere")


# --- Example 12 ---
    response = mailinatorClient.messages.fetch_inbox_message_smtp_log(domain:"yourDomainNameHere", inbox: "yourInboxHere", messageId: "yourMessageIdHere")


# --- Example 13 ---
    response = mailinatorClient.messages.fetch_message_smtp_log(domain:"yourDomainNameHere", messageId: "yourMessageIdHere")


# --- Example 14 ---
    response = mailinatorClient.messages.fetch_inbox_message_raw(domain:"yourDomainNameHere", inbox: "yourInboxHere", messageId: "yourMessageIdHere")


# --- Example 15 ---
    response = mailinatorClient.messages.fetch_message_raw(domain:"yourDomainNameHere", messageId: "yourMessageIdHere")


# --- Example 16 ---
    response = mailinatorClient.messages.fetch_latest_inbox_messages(domain:"yourDomainNameHere", inbox: "yourInboxHere")


# --- Example 17 ---
    response = mailinatorClient.messages.fetch_latest_messages(domain:"yourDomainNameHere")


# --- Example 18 ---
    response = mailinatorClient.messages.fetch_sms_message(domain:"domainName", teamSmsNumber: "teamSMSNumber")


# --- Example 19 ---
    response = mailinatorClient.messages.delete_all_domain_messages(domain:"yourDomainNameHere")


# --- Example 20 ---
    response = mailinatorClient.messages.delete_all_inbox_messages(domain:"yourDomainNameHere", inbox: "yourInboxHere")


# --- Example 21 ---
    response = mailinatorClient.messages.delete_message(domain:"yourDomainNameHere", inbox: "yourInboxHere", messageId: "yourMessageIdHere")


# --- Example 22 ---
    messageToPost = {
        subject:"Testing ruby message",
        from:"test_email_ruby@test.com", 
        text:"I love Ruby!"
      }
    response = mailinatorClient.messages.post_message(domain:"yourDomainNameHere", inbox: "yourInboxHere", messageToPost: messageToPost)


# --- Example 23 ---
    response = mailinatorClient.stats.get_team_stats


# --- Example 24 ---
    response = mailinatorClient.stats.get_team


# --- Example 25 ---
    response = mailinatorClient.stats.get_team_info


# --- Example 26 ---
    response = mailinatorClient.domains.get_domains


# --- Example 27 ---
    response = mailinatorClient.domains.get_domain(domainId:"yourDomainIdHere")


# --- Example 28 ---
    response = mailinatorClient.domains.create_domain(domainId: "domain_name")


# --- Example 29 ---
    response = mailinatorClient.domains.delete_domain(domainId:"domain_id")


# --- Example 30 ---
    ruleToPost = {
        name:        "RuleName",
        priority:    15,
        description: "Description",
        conditions: [
          {
            operation: "PREFIX",
            condition_data: {
              field: "to",
              value: "raul"
            }
          }
        ],
        enabled: true,
        match:   "ANY",
        actions: [
          {
            action: "WEBHOOK",
            action_data: {
              url: "https://www.google.com"
            }
          }
        ]
      }

    response = mailinatorClient.rules.create_rule(domainId:"yourDomainIdHere", ruleToPost: ruleToPost)


# --- Example 31 ---
    response = mailinatorClient.rules.enable_rule(domainId:"yourDomainIdHere", ruleId: "yourRuleIdHere")


# --- Example 32 ---
    response = mailinatorClient.rules.disable_rule(domainId:"yourDomainIdHere", ruleId: "yourRuleIdHere")


# --- Example 33 ---
    response = mailinatorClient.rules.get_all_rules(domainId:"yourDomainIdHere")


# --- Example 34 ---
    response = mailinatorClient.rules.get_rule(domainId:"yourDomainIdHere", ruleId: "yourRuleIdHere")


# --- Example 35 ---
    response = mailinatorClient.rules.delete_rule(domainId:"yourDomainIdHere", ruleId: "yourRuleIdHere")


# --- Example 36 ---
	webhook = {
		from:"MyMailinatorRubyTest",
		subject:"testing message",
		text:"hello world",
		to:"jack"
	}
    response = mailinatorClient.webhooks.private_webhook(whToken: "webhookToken", webhook:webhook)


# --- Example 37 ---
	webhook = {
		from:"MyMailinatorRubyTest",
		subject:"testing message",
		text:"hello world",
		to:"jack"
	}
    response = mailinatorClient.webhooks.private_inbox_webhook(whToken: "webhookToken", inbox: "inbox", webhook:webhook)


# --- Example 38 ---
	webhook = {
		from:"MyMailinatorRubyTest",
		subject:"testing message",
		text:"hello world",
		to:"jack"
	}
    response = mailinatorClient.webhooks.private_custom_service_webhook(whToken: "webhookToken", customService: "customService", webhook:webhook)


# --- Example 39 ---
	webhook = {
		from:"MyMailinatorRubyTest",
		subject:"testing message",
		text:"hello world",
		to:"jack"
	}
    response = mailinatorClient.webhooks.private_custom_service_inbox_webhook(whToken: "webhookToken", customService: "customService", inbox: "inbox", webhook:webhook)


# --- Example 40 ---
    response = mailinatorClient.authenticators.instant_totp_2fa_code(totpSecretKey: "auth_secret")


# --- Example 41 ---
    response = mailinatorClient.authenticators.get_authenticators()


# --- Example 42 ---
    response = mailinatorClient.authenticators.get_authenticators_by_id(id: "auth_id")
