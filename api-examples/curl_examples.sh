## The following are shell examples from our previous documentation.

# --- Example 1 ---
# This command will deliver the message to the "bob" inbox

curl -v -d '{"from":"someplace@xyz.com", "subject":"testing", "text" : "helloworld", "to" : "jack" }'      
-H "Content-Type: application/json"      
-X POST "https://api.mailinator.com/api/v2/domains/<your_webhook_token>/webhook/bob/"


# --- Example 2 ---
# REST calls require your team's API token in every call
curl "https://api.mailinator.com/api_endpoint_here?token=YourTeamAPIToken"

# or

curl --header "Authorization: YourTeamAPIToken"
     "https://api.mailinator.com/api_endpoint_here"


# --- Example 3 ---
# Example uses a public domain with an inbox called testinbox:

curl "https://api.mailinator.com/api/v2/domains/public/inbox/testinbox"

# Example uses a private domain and gets all messages for a domain:

curl "https://api.mailinator.com/api/v2/domains/private/inbox?limit=2"


# --- Example 4 ---
# Example uses a private domain, inbox called testinbox, and a message id

curl "https://api.mailinator.com/api/v2/domain/private/inboxes/testinbox/messages/testinbox-1570635306-12914603"


# --- Example 5 ---
#Example uses a private domain and message id

curl "https://api.mailinator.com/api/v2/domain/private/messages/testinbox-1570635306-12914603"


# --- Example 6 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/inboxes/:inbox/messages/:message_id/attachments"


# --- Example 7 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/messages/:message_id/attachments"

Response:
{
   "attachments": [
        {
            "filename": "notes.pdf",
            "content-disposition": "attachment; filename=\"notes.pdf\"",
            "content-transfer-encoding": "base64",
            "content-type": "application/pdf",
            "attachment-id": 0
        }
    ]
}


# --- Example 8 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/inboxes/:inbox/messages/:message_id/attachments/:attachment_name"


# --- Example 9 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/messages/:message_id/attachments/:attachment_name"


# --- Example 10 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/inboxes/:inbox/messages/:message_id/links"

Response:
{
"links": [
        "https://www.yoursite.com/activate",
        "https://www.yoursite.com/privacy",
        "https://www.facebook.com/oursitepage"
         ]
}


# --- Example 11 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/messages/:message_id/links"

Response:
{
"links": [
        "https://www.yoursite.com/activate",
        "https://www.yoursite.com/privacy",
        "https://www.facebook.com/oursitepage"
         ]
}


# --- Example 12 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/messages/:message_id/linksfull"

Response:
{
"links": [
            {
                "link": "https://www.yoursite.com/activate", 
                "text": "Link Text 1" 
            },
            {
                "link": "https://www.yoursite.com/privacy", 
                "text": "Link Text 2" 
            },
            {
                "link": "https://www.facebook.com/oursitepage", 
                "text": "Link Text 3" 
            }
        ]
}


# --- Example 13 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/inboxes/:inbox/messages/:message_id/smtplog"

Response:
{
  "log": [
    {
      "time": "0ms",
      "event": "SOCKET_OPEN",
      "details": "Connection from: 92.46.141.000"
    },
    {
      "time": "0ms",
      "event": "OUTGOING",
      "details": "220 mail.mailinator.com ESMTP Postfix"
    },
    {
      "time": "9ms",
      "event": "INCOMING",
      "details": "EHLO mail2.mail.emailsenderr.com"
    },
    {
      "time": "9ms",
      "event": "OUTGOING",
      "details": "250-mail.mailinator.com 250-8BITMIME 250-STARTTLS 250 Ok"
    },
    {
      "time": "19ms",
      "event": "INCOMING",
      "details": "STARTTLS"
    },
    {
      "time": "19ms",
      "event": "OUTGOING",
      "details": "220 Ready to start TLS"
    },
    {
      "time": "42ms",
      "event": "TLS_ACTIVE"
    },
    {
      "time": "42ms",
      "event": "INCOMING",
      "details": "EHLO mail2.mail.emailsenderr.com"
    },
    {
      "time": "42ms",
      "event": "OUTGOING",
      "details": "250-mail.mailinator.com 250-8BITMIME 250-STARTTLS 250 Ok"
    },
    {
      "time": "52ms",
      "event": "INCOMING",
      "details": "MAIL FROM:<ourtest@emailsenderr.com> BODY=8BITMIME"
    },
    {
      "time": "52ms",
      "event": "OUTGOING",
      "details": "250 Ok"
    },
    {
      "time": "61ms",
      "event": "INCOMING",
      "details": "RCPT TO:<joe@mailinator.com>"
    },
    {
      "time": "61ms",
      "event": "OUTGOING",
      "details": "250 Ok"
    },
    {
      "time": "71ms",
      "event": "INCOMING",
      "details": "DATA"
    },
    {
      "time": "71ms",
      "event": "OUTGOING",
      "details": "354 End data with <CR><LF>.<CR><LF>"
    },
    {
      "time": "71ms",
      "event": "DATA",
      "details": "[ Data Delivery Starts ]"
    },
    {
      "time": "91ms",
      "event": "DATA",
      "details": "[ 37703 data bytes received ]"
    },
    {
      "time": "91ms",
      "event": "MSG_SAVED",
      "details": "Public Message Stored: joe-1685399503-21354072"
    },
    {
      "time": "93ms",
      "event": "OUTGOING",
      "details": "250 Ok"
    },
    {
      "time": "102ms",
      "event": "INCOMING",
      "details": "QUIT"
    },
    {
      "time": "102ms",
      "event": "OUTGOING",
      "details": "221 Bye"
    },
    {
      "time": "112ms",
      "event": "SOCKET_CLOSED"
    }
  ]
}


# --- Example 14 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/messages/:message_id/smtplog"

Response:
{
	"log": [
    {
      "time": "0ms",
      "event": "SOCKET_OPEN",
      "details": "Connection from: 92.46.141.000"
    },
    {
      "time": "0ms",
      "event": "OUTGOING",
      "details": "220 mail.mailinator.com ESMTP Postfix"
    },
    {
      "time": "9ms",
      "event": "INCOMING",
      "details": "EHLO mail2.mail.emailsenderr.com"
    },
    {
      "time": "9ms",
      "event": "OUTGOING",
      "details": "250-mail.mailinator.com 250-8BITMIME 250-STARTTLS 250 Ok"
    },
    {
      "time": "19ms",
      "event": "INCOMING",
      "details": "STARTTLS"
    },
    {
      "time": "19ms",
      "event": "OUTGOING",
      "details": "220 Ready to start TLS"
    },
    {
      "time": "42ms",
      "event": "TLS_ACTIVE"
    },
    {
      "time": "42ms",
      "event": "INCOMING",
      "details": "EHLO mail2.mail.emailsenderr.com"
    },
    {
      "time": "42ms",
      "event": "OUTGOING",
      "details": "250-mail.mailinator.com 250-8BITMIME 250-STARTTLS 250 Ok"
    },
    {
      "time": "52ms",
      "event": "INCOMING",
      "details": "MAIL FROM:<ourtest@emailsenderr.com> BODY=8BITMIME"
    },
    {
      "time": "52ms",
      "event": "OUTGOING",
      "details": "250 Ok"
    },
    {
      "time": "61ms",
      "event": "INCOMING",
      "details": "RCPT TO:<joe@mailinator.com>"
    },
    {
      "time": "61ms",
      "event": "OUTGOING",
      "details": "250 Ok"
    },
    {
      "time": "71ms",
      "event": "INCOMING",
      "details": "DATA"
    },
    {
      "time": "71ms",
      "event": "OUTGOING",
      "details": "354 End data with <CR><LF>.<CR><LF>"
    },
    {
      "time": "71ms",
      "event": "DATA",
      "details": "[ Data Delivery Starts ]"
    },
    {
      "time": "91ms",
      "event": "DATA",
      "details": "[ 37703 data bytes received ]"
    },
    {
      "time": "91ms",
      "event": "MSG_SAVED",
      "details": "Public Message Stored: joe-1685399503-21354072"
    },
    {
      "time": "93ms",
      "event": "OUTGOING",
      "details": "250 Ok"
    },
    {
      "time": "102ms",
      "event": "INCOMING",
      "details": "QUIT"
    },
    {
      "time": "102ms",
      "event": "OUTGOING",
      "details": "221 Bye"
    },
    {
      "time": "112ms",
      "event": "SOCKET_CLOSED"
    }
  ]
}


# --- Example 15 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/inboxes/:inbox/messages/:message_id/raw"

Response:
{
	Received: from mail-yw1-f176.google.com([209.85.128.176])
	        by mail.mailinator.com with SMTP (Mailinator)
	        for test@upwork.testinator.com;
	        Wed, 06 Mar 2024 10:52:45 +0000 (UTC)
	Received: by mail-yw1-f176.google.com with SMTP id 00721157ae682-608959cfcbfso19179197b3.3
	        for <test@upwork.testinator.com>; Wed, 06 Mar 2024 02:52:45 -0800 (PST)
	DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
	        d=gmail.com; s=20230601; t=1709722364; x=1710327164; darn=upwork.testinator.com;
	        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject
	         :date:message-id:reply-to;
	        bh=4XO1ydePK3rlJ0KhcjtTS8ttPcuYaY+leg4kwkMWp8s=;
	        b=JRCK1L3y2bLLYiVytUKgDe5s7aHHgyYYL6CmI7QZq6300KSeRPolcU2YDF0r/oYJuY
	         P99yQR6un4gGyDhPSHb0EBUvAI46nejjrlmxlMylLs+AeIgr5Z4gTOEwNc9pbiZvLvwb
	         1hfeI4EZK44ZvsWeUmNctnkZGJwdccYuHJ45fdlT41aXxBqTDUNEW8m5LjlK1Sg7gcxn
	         CWPaxkp3YhIFz+x7stwQGZBeI+LoO3wVod2iJU+00AD46Bv5BMAzL51DczxiES/O9fBl
	         ZRPjsO6ukJPqwTDyNi5AlGq8DlF346U5aaBoyzNzcWPFjGF46D+Fp2HmzHPIpeW6cmFE
	         bldg==
	X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
	        d=1e100.net; s=20230601; t=1709722364; x=1710327164;
	        h=to:subject:message-id:date:from:mime-version:x-gm-message-state
	         :from:to:cc:subject:date:message-id:reply-to;
	        bh=4XO1ydePK3rlJ0KhcjtTS8ttPcuYaY+leg4kwkMWp8s=;
	        b=lR6eMNn42UBEvCAPTdSWNZBrk7x8AjwOzh/9ysVM7P6Bx9IEWzlW3PqGC79qYFIr5K
	         L+Qbf7+WBxYkn90VvBxjpXJ+UyvNk8qFnU2gts7RTqK7VHJnc+f/Bsli4nI5saa1hPpQ
	         oRpNpzHK6A5K8A5iHpmqxRPjXmK1kJ+6Z8n4w5aGEJBpLWduiQmd0j9++eq4SVBtZbnr
	         pj5SkMTHK7HCMW6mkRlvaNEwpOGIkdtdY+V7xmcAFdlPhDVL3s5G9iItQ14GW1cegyam
	         X6N3VtgCXgqJOdQG9WejNw4awRvzDNSs7tuQE07KHRtb2mS/x3g+sTC7ah6t/PB5xsE7
	         SRGw==
	X-Gm-Message-State: AOJu0YzPaTIAfTe63/v0bL0TtqjgkGE+qxweXYZyRtZKXwW9Pj6Fp3BH
		FxPZZsens/skcyOaG6GXbDWocBsFkPkRBQWndtwECH8zmncmjIOGamVZsXWa4pe0u3xNpQJz1n6
		SqP5kzDnD5iyDQZwmLCDwuphVX4hAE+L7II0=
	X-Google-Smtp-Source: AGHT+IG3k2sw7M4VUd4TdDhanFAz0Btk7qoMFlbzfNPvJIgGfHvgAL++zvCvPHfw87gPzEhUSoruytuTK8uKWlmppDk=
	X-Received: by 2002:a0d:fa02:0:b0:609:832c:3541 with SMTP id
	 k2-20020a0dfa02000000b00609832c3541mr15774528ywf.39.1709722364479; Wed, 06
	 Mar 2024 02:52:44 -0800 (PST)
	MIME-Version: 1.0
	From: Test Test <test@gmail.com>
	Date: Wed, 6 Mar 2024 12:52:34 +0200
	Message-ID: <CABn2mnd2NQ9R0j4i0otu81W-DmTtrPmKfc9zxnxOpPdprZiHCg@mail.gmail.com>
	Subject: Hello
	To: test@test.testinator.com
	Content-Type: multipart/alternative; boundary="000000000000331df60612fbc2e3"
	--000000000000331df60612fbc2e3
	Content-Type: text/plain; charset="UTF-8"
	Hello
	--000000000000331df60612fbc2e3
	Content-Type: text/html; charset="UTF-8"
	<div dir="ltr">Hello</div>
	--000000000000331df60612fbc2e3--
}


# --- Example 16 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/messages/:message_id/raw"

Response:
{
	Received: from mail-yw1-f176.google.com([209.85.128.176])
	        by mail.mailinator.com with SMTP (Mailinator)
	        for test@upwork.testinator.com;
	        Wed, 06 Mar 2024 10:52:45 +0000 (UTC)
	Received: by mail-yw1-f176.google.com with SMTP id 00721157ae682-608959cfcbfso19179197b3.3
	        for <test@upwork.testinator.com>; Wed, 06 Mar 2024 02:52:45 -0800 (PST)
	DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
	        d=gmail.com; s=20230601; t=1709722364; x=1710327164; darn=upwork.testinator.com;
	        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject
	         :date:message-id:reply-to;
	        bh=4XO1ydePK3rlJ0KhcjtTS8ttPcuYaY+leg4kwkMWp8s=;
	        b=JRCK1L3y2bLLYiVytUKgDe5s7aHHgyYYL6CmI7QZq6300KSeRPolcU2YDF0r/oYJuY
	         P99yQR6un4gGyDhPSHb0EBUvAI46nejjrlmxlMylLs+AeIgr5Z4gTOEwNc9pbiZvLvwb
	         1hfeI4EZK44ZvsWeUmNctnkZGJwdccYuHJ45fdlT41aXxBqTDUNEW8m5LjlK1Sg7gcxn
	         CWPaxkp3YhIFz+x7stwQGZBeI+LoO3wVod2iJU+00AD46Bv5BMAzL51DczxiES/O9fBl
	         ZRPjsO6ukJPqwTDyNi5AlGq8DlF346U5aaBoyzNzcWPFjGF46D+Fp2HmzHPIpeW6cmFE
	         bldg==
	X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
	        d=1e100.net; s=20230601; t=1709722364; x=1710327164;
	        h=to:subject:message-id:date:from:mime-version:x-gm-message-state
	         :from:to:cc:subject:date:message-id:reply-to;
	        bh=4XO1ydePK3rlJ0KhcjtTS8ttPcuYaY+leg4kwkMWp8s=;
	        b=lR6eMNn42UBEvCAPTdSWNZBrk7x8AjwOzh/9ysVM7P6Bx9IEWzlW3PqGC79qYFIr5K
	         L+Qbf7+WBxYkn90VvBxjpXJ+UyvNk8qFnU2gts7RTqK7VHJnc+f/Bsli4nI5saa1hPpQ
	         oRpNpzHK6A5K8A5iHpmqxRPjXmK1kJ+6Z8n4w5aGEJBpLWduiQmd0j9++eq4SVBtZbnr
	         pj5SkMTHK7HCMW6mkRlvaNEwpOGIkdtdY+V7xmcAFdlPhDVL3s5G9iItQ14GW1cegyam
	         X6N3VtgCXgqJOdQG9WejNw4awRvzDNSs7tuQE07KHRtb2mS/x3g+sTC7ah6t/PB5xsE7
	         SRGw==
	X-Gm-Message-State: AOJu0YzPaTIAfTe63/v0bL0TtqjgkGE+qxweXYZyRtZKXwW9Pj6Fp3BH
		FxPZZsens/skcyOaG6GXbDWocBsFkPkRBQWndtwECH8zmncmjIOGamVZsXWa4pe0u3xNpQJz1n6
		SqP5kzDnD5iyDQZwmLCDwuphVX4hAE+L7II0=
	X-Google-Smtp-Source: AGHT+IG3k2sw7M4VUd4TdDhanFAz0Btk7qoMFlbzfNPvJIgGfHvgAL++zvCvPHfw87gPzEhUSoruytuTK8uKWlmppDk=
	X-Received: by 2002:a0d:fa02:0:b0:609:832c:3541 with SMTP id
	 k2-20020a0dfa02000000b00609832c3541mr15774528ywf.39.1709722364479; Wed, 06
	 Mar 2024 02:52:44 -0800 (PST)
	MIME-Version: 1.0
	From: Test Test <test@gmail.com>
	Date: Wed, 6 Mar 2024 12:52:34 +0200
	Message-ID: <CABn2mnd2NQ9R0j4i0otu81W-DmTtrPmKfc9zxnxOpPdprZiHCg@mail.gmail.com>
	Subject: Hello
	To: test@test.testinator.com
	Content-Type: multipart/alternative; boundary="000000000000331df60612fbc2e3"
	--000000000000331df60612fbc2e3
	Content-Type: text/plain; charset="UTF-8"
	Hello
	--000000000000331df60612fbc2e3
	Content-Type: text/html; charset="UTF-8"
	<div dir="ltr">Hello</div>
	--000000000000331df60612fbc2e3--
}


# --- Example 17 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/inboxes/:inbox/messages/*"

Response:
{
	"msgs": [],
	"to": null
}


# --- Example 18 ---
curl "https://api.mailinator.com/api/v2/domain/:domain/messages/*"

Response:
{
	"msgs": [],
	"to": null
}


# --- Example 19 ---
curl "https://api.mailinator.com/api/v2/domains/:domain/inboxes/:YOUR_TEAM_SMS_NUMBER"


# --- Example 20 ---
curl -X DELETE "https://api.mailinator.com/api/v2/domains/:domain/inboxes/"

Response:
{
    "status" : "ok",
    "count" : 1048
}


# --- Example 21 ---
curl -X DELETE "https://api.mailinator.com/api/v2/domains/:domain/inboxes/:inbox"

Response:
{
    "status" : "ok",
    "count" : 11
}


# --- Example 22 ---
curl -X DELETE "https://api.mailinator.com/api/v2/domains/:domain/inboxes/:inbox/messages/:message_id"

Response:
{
    "status" : "ok",
    "count" : 1
}


# --- Example 23 ---
curl -d '{"from":"ourtest@xyz.com", "subject":"testing message", "text" : "hello world" }'
     -H "Content-Type: application/json"
     -X POST "https://api.mailinator.com/api/v2/domains/:domain/inboxes/:inbox/messages"

Response:
{
    "status" : "ok",
    "id" : "testinbox-3282929-109191"
}


# --- Example 24 ---
curl "https://api.mailinator.com/api/v2/team/stats"

Response:
{
     "stats": [
           {
             "date": "20200921",
             "retrieved": {
                "web_private": 1029,
                "web_public": 0,
                "api_email": 983
                "api_error": 1,
              },
              "sent": {
                "sms": 0,
                "email": 1990
              }
           },
           {
             "date": "20200922",
             "retrieved": {
                "web_private": 829,
                "web_public": 2,
                "api_email": 800
                "api_error": 0,
              },
              "sent": {
                "sms": 3,
                "email": 1402
              }
           }
      ]
}


# --- Example 25 ---
curl "https://api.mailinator.com/api/v2/team"

Response:
{
	"private_domains": [
		{
			"pd": "",
			"enabled": true
		}
	],
	"webhook_tokens": [
		{
			"description": "Private",
			"whtoken": ""
		}
	],
	"sms_numbers": [],
	"members": [
		{
			"role": "team_admin",
			"_id": "",
			"email": ""
		}
	],
	"plan_data": {
		"storage_mb": 50,
		"num_private_domains": 10,
		"email_reads_per_day": 3333,
		"team_accounts": 5
	},
	"_id": "",
	"plan": "",
	"team_name": "team",
	"status": "active",
	"token": ""
}


# --- Example 26 ---
curl "https://api.mailinator.com/api/v2/teaminfo"

Response:
{
	"server_time": "server_time",
	"domains": [
		"domain1",
        "domain2"
    ]
}


# --- Example 27 ---
curl "https://api.mailinator.com/api/v2/domains"

Response:
{
  "domains" :
     [
	     {
	       "_id": "5c9602f5e881b5fbe91c754a",
         "description": "Domain representing some testing",
         "enabled": true,
         "name": "my.test.domain",
         "ownerid": "59188558619b4f3879751781",
         "rules": []
	     }
	   ]
}


# --- Example 28 ---
curl "https://api.mailinator.com/api/v2/domains/:domain_id"

Response:
{
   "_id": "5c9602f5e881b5fbe91c754a",
   "description": "Domain representing some testing",
   "enabled": true,
   "name": "my.test.domain.com",
   "ownerid": "59188558619b4f3879751781",
   "rules": []
}


# --- Example 29 ---
curl -X POST "https://api.mailinator.com/api/v2/domains/:domain_id"

Response:
{
  "status" : "ok"
}


# --- Example 30 ---
curl -X DELETE "https://api.mailinator.com/api/v2/domains/:domain_id"

Response:
{
  "status" : "ok"
}


# --- Example 31 ---
curl -H "content-type: application/json"
     -X POST "https://api.mailinator.com/api/v2/domains/:domain_id/rules/"
     -d "@data.json"

(data.json):
{
   "description": "Rule to post all incoming mail starting with test* to my webhook",
   "enabled": true,
   "name": "testprefixpost",
   "conditions": [
      {
        "operation": "PREFIX",
        "condition_data": {
          "field": "to",
          "value": "test"
          }
      }
   ],
   "actions": [
      {
        "action" : "WEBHOOK",
        "action_data": {
           "url" : "https://www.mywebsite.com/restendpoint"
        }
      }
   ]
}

Response:
{
   "_id": "5c9602f5e881b5fbe91c754a",
   "description": "Rule to post all incoming mail starting with test* to my webhook",
   "enabled": true,
   "name": "testprefixpost",
   "conditions": [
      {
        "operation": "PREFIX",
        "condition_data": {
          "field": "to",
          "value": "test"
          }
      }
   ],
   "actions": [
      {
        "action" : "WEBHOOK",
        "action_data": {
           "url" : "https://www.mywebsite.com/restendpoint"
        }
      }
   ]
}


# --- Example 32 ---
curl -X PUT "https://api.mailinator.com/api/v2/domains/:domain_id/rules/:rule_id?action=enable"

Response:
{
   "status": "ok"
}


# --- Example 33 ---
curl -X PUT "https://api.mailinator.com/api/v2/domains/:domain_id/rules/:rule_id/?action=disable"

Response:
{
   "status": "ok"
}


# --- Example 34 ---
curl "https://api.mailinator.com/api/v2/domains/:domain_id/rules/"

Response:
{
   "rules" :
   [
      {
         "_id": "5c9602f5e881b5fbe91c754a",
         "description": "Rule to post all incoming mail to test1 or test2, then drop the email",
         "enabled": true,
         "match" : "ANY",
         "name": "testprefixpost",
         "conditions": [
           {
             "operation": "EQUALS",
             "condition_data": {
               "field": "to",
               "value": "test1"
               }
           },
           {
             "operation": "EQUALS",
             "condition_data": {
               "field": "to",
               "value": "test2"
               }
           }
         ],
         "actions" : [
           {
             "action" : "WEBHOOK",
             "action_data": {
                "url" : "https://www.mywebsite.com/restendpoint"
             }
           },
           {
             "action" : "DROP"
           }
         ]
      }
   ]
}


# --- Example 35 ---
curl "https://api.mailinator.com/api/v2/domains/:domain_id/rules/:rule_id"

Response:
{
   "_id": "5c9602f5e881b5fbe91c754a",
   "description": "Rule to post all incoming mail to test1 or test2, then drop the email",
   "enabled": true,
   "match" : "ANY",
   "name": "testprefixpost",
   "conditions": [
     {
      "operation": "EQUALS",
      "condition_data": {
        "field": "to",
        "value": "test1"
        }
     },
     {
      "operation": "EQUALS",
      "condition_data": {
        "field": "to",
        "value": "test2"
        }
     }
   ],
   "actions" : [
     {
       "action" : "WEBHOOK",
       "action_data": {
          "url" : "https://www.mywebsite.com/restendpoint"
       }
     },
     {
       "action" : "DROP"
     }
   ]
}


# --- Example 36 ---
curl -X DELETE "https://api.mailinator.com/api/v2/domains/:domain_id/rules/:rule_id"

Response:
{
   "status" : "ok"
}


# --- Example 37 ---
curl -v -d '{"from":"MyMailinatorTest", "subject":"testing message", "text" : "hello world", "to" : "jack" }'      
-H "Content-Type: application/json"      
-X POST "https://api.mailinator.com/api/v2/domains/webhook?whtoken=<whtoken>"

Response:
{
   "id"     : ""
   "status" : "ok"
}


# --- Example 38 ---
curl -v -d '{"from":"MyMailinatorTest", "subject":"testing message", "text" : "hello world", "to" : "jack" }'      
-H "Content-Type: application/json"      
-X POST "https://api.mailinator.com/api/v2/domains/webhook/:inbox?whtoken=<whtoken>"

Response:
{
   "id"     : ""
   "status" : "ok"
}


# --- Example 39 ---
curl -v -d '{"from":"MyMailinatorTest", "subject":"testing message", "text" : "hello world", "to" : "jack" }'      
-H "Content-Type: application/json"      
-X POST "https://api.mailinator.com/api/v2/domains/:custom_service?whtoken=<whtoken>"

Response:
{
}


# --- Example 40 ---
curl -v -d '{"from":"MyMailinatorTest", "subject":"testing message", "text" : "hello world", "to" : "jack" }'      
-H "Content-Type: application/json"      
-X POST "https://api.mailinator.com/api/v2/domains/:custom_service/:inbox?whtoken=<whtoken>"

Response:
{
}


# --- Example 41 ---
curl -X GET "https://api.mailinator.com/api/v2/totp/:totp_secret_key"

Response:
{
   "time_step": 30,
	"futurecodes": [
		"540822",
		"023305",
		"517071",
		"603160",
		"738742"
	],
	"next_reset_secs": 18,
	"passcode": "652214"
}


# --- Example 42 ---
curl -X GET "https://api.mailinator.com/api/v2/authenticators"

Response:
{
   "passcodes": [
		{
			"time_step": 30,
			"futurecodes": [
				"615882",
				"957590",
				"164222",
				"499774",
				"234143"
			],
			"id": "mariantest",
			"next_reset_secs": 15,
			"passcode": "778706"
		}
	]
}


# --- Example 43 ---
curl -X GET "https://api.mailinator.com/api/v2/authenticators/:auth_id"

Response:
{
	"time_step": 30,
	"futurecodes": [
		"615882",
		"957590",
		"164222",
		"499774",
		"234143"
	],
	"id": "test",
	"next_reset_secs": 15,
	"passcode": "778706"
}
