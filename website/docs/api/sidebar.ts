import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/intro",
      label: "Overview"
    },
    {
      type: "doc",
      id: "api/mailinator-api",
      label: "Authentication"
    },
    {
      type: "doc",
      id: "api/tools",
      label: "Developer Tools"
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
          label: "Get all message summaries for an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-inbox-messages",
          label: "Delete all messages for an inbox",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/post-message",
          label: "Create a message for an inbox",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-inbox-message",
          label: "Get a message from an inbox",
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
          label: "Get a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-summary",
          label: "Get a summary for a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-text",
          label: "Get text content for a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-text-plain",
          label: "Get text/plain content for a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-text-html",
          label: "Get text/html content for a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-headers",
          label: "Get SMTP headers for a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-inbox-message-smtp-log",
          label: "Get SMTP log entries for a message from an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-smtp-log",
          label: "Get SMTP log entries for a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-inbox-message-raw",
          label: "Get raw RFC 822 payload for a message from an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-raw",
          label: "Get raw RFC 822 payload for a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/stream-domain-messages",
          label: "Stream all messages from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/stream-inbox-messages",
          label: "Stream all messages from an inbox",
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
          label: "Get attachments for a message from an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-message-attachments",
          label: "Get attachments for a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-inbox-message-attachment",
          label: "Download an attachment from an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-message-attachment",
          label: "Download an attachment from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-inbox-message-links",
          label: "Get links in a message from an inbox",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-message-links",
          label: "Get links in a message from a domain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-message-links-full",
          label: "Get link metadata for a message from a domain",
          className: "api-method get",
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
          label: "Get a list of private domains",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-domain",
          label: "Get private domain details",
          className: "api-method get",
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
          label: "Get instant TOTP code based on a secret key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-stored-authenticator-code",
          label: "Get instant TOTP code based on a stored authenticator ID Generates a Time-based One-Time Password (TOTP) code using an already saved authenticator. The generated code can be used for two-factor authentication (2FA) during login or other secure operations. authenticator_id is case sensitive.",
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
          label: "Get team statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-team",
          label: "Get team configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-team-info",
          label: "Get team info snapshot",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
