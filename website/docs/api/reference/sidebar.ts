import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/reference/mailinator-api",
    },
    {
      type: "category",
      label: "Messages",
      items: [
        {
          type: "doc",
          id: "api/reference/list-domain-messages",
          label: "Fetch message summaries for a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/delete-domain-messages",
          label: "Delete all messages in a domain",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reference/list-inbox-messages",
          label: "Fetch message summaries for a specific inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/delete-inbox-messages",
          label: "Delete all messages from an inbox",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reference/get-inbox-message",
          label: "Fetch a message scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/delete-inbox-message",
          label: "Delete a specific message",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reference/get-domain-message",
          label: "Fetch a message scoped to a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-inbox-message-smtp-log",
          label: "Fetch SMTP log entries for a message scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-message-smtp-log",
          label: "Fetch SMTP log entries for a message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-inbox-message-raw",
          label: "Fetch the raw RFC 822 payload scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-message-raw",
          label: "Fetch the raw RFC 822 payload for a message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-latest-inbox-messages",
          label: "Fetch the latest messages for an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-latest-domain-messages",
          label: "Fetch the latest messages for a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/stream-domain-messages",
          label: "Stream all messages for a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/stream-inbox-messages",
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
          id: "api/reference/list-inbox-message-attachments",
          label: "List attachments for a message within an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/list-message-attachments",
          label: "List attachments for a message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-inbox-message-attachment",
          label: "Download an attachment scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-message-attachment",
          label: "Download an attachment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/list-inbox-message-links",
          label: "List links in a message scoped to an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/list-message-links",
          label: "List links in a message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/list-message-links-full",
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
          id: "api/reference/post-message",
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
          id: "api/reference/list-domains",
          label: "List private domains",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/create-domain",
          label: "Create a private domain",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reference/get-domain",
          label: "Retrieve a private domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/delete-domain",
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
          id: "api/reference/list-rules",
          label: "List rules for a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/create-rule",
          label: "Create a routing rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reference/get-rule",
          label: "Retrieve a routing rule",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/update-rule-state",
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
          id: "api/reference/get-instant-totp-code",
          label: "Generate a TOTP code based on a secret key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-stored-authenticator-code",
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
          id: "api/reference/get-team-stats",
          label: "Retrieve team statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-team",
          label: "Retrieve team configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reference/get-team-info",
          label: "Retrieve team info snapshot",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
