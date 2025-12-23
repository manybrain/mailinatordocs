import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/intro",
      label: "Introduction"
    },
    {
      type: "doc",
      id: "api/mailinator-api",
      label: "Authentication"
    },
    {
      type: "category",
      label: "Messages",
      items: [
        {
          type: "doc",
          id: "api/list-domain-messages",
          label: "Get all message summaries for a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-domain-messages",
          label: "Delete all messages for a domain",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/list-inbox-messages",
          label: "Get all message summaries for a specific inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-inbox-messages",
          label: "Delete all messages for a specific inbox",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-inbox-message",
          label: "Get a message scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-inbox-message",
          label: "Delete a specific message",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-domain-message",
          label: "Get a message scoped to a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-latest-inbox-messages",
          label: "Get the latest messages for an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-latest-domain-messages",
          label: "Get the latest messages for a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-domain-message",
          label: "Get a message scoped to a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-inbox-message-smtp-log",
          label: "Get SMTP log entries for a message scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-smtp-log",
          label: "Get SMTP log entries for a message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-inbox-message-raw",
          label: "Get the raw RFC 822 payload scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-raw",
          label: "Get the raw RFC 822 payload for a message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/stream-domain-messages",
          label: "Stream all messages for a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/stream-inbox-messages",
          label: "Stream all messages for a specific inbox",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Attachments",
      items: [
        {
          type: "doc",
          id: "api/list-inbox-message-attachments",
          label: "List attachments for a message within an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-message-attachments",
          label: "List attachments for a message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-inbox-message-attachment",
          label: "Download an attachment scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-attachment",
          label: "Download an attachment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-inbox-message-links",
          label: "List links in a message scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-message-links",
          label: "List links in a message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-message-links-full",
          label: "Retrieve link metadata for a message",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Delivery",
      items: [
        {
          type: "doc",
          id: "api/post-message",
          label: "Inject a message into an inbox",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Domains",
      items: [
        {
          type: "doc",
          id: "api/list-domains",
          label: "List private domains",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-domain",
          label: "Create a private domain",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-domain",
          label: "Retrieve a private domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-domain",
          label: "Delete a private domain",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Rules",
      items: [
        {
          type: "doc",
          id: "api/list-rules",
          label: "List rules for a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-rule",
          label: "Create a routing rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-rule",
          label: "Retrieve a routing rule",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-rule-state",
          label: "Enable or disable a routing rule",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Authenticator",
      items: [
        {
          type: "doc",
          id: "api/get-instant-totp-code",
          label: "Generate a TOTP code based on a secret key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-stored-authenticator-code",
          label: "Retrieves a TOTP code based on a stored authenticator ID found in Web Interface",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Stats",
      items: [
        {
          type: "doc",
          id: "api/get-team-stats",
          label: "Retrieve team statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-team",
          label: "Retrieve team configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-team-info",
          label: "Retrieve team info snapshot",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
