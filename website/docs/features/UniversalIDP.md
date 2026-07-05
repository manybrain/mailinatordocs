---
id: universal-idp
title: Mailinator Universal IDP
---

# Mailinator Universal IDP

Mailinator Universal IDP is a standards-compliant OpenID Connect (OIDC) Identity Provider built for testing SSO integrations. Use it in development, staging, QA, and automated test environments when you need to verify an application's OIDC login flow without configuring a production identity provider or creating real user accounts.

:::warning Testing only
Mailinator Universal IDP is not a production authentication system. Only configure it in applications and environments where you explicitly want Mailinator to act as a trusted test identity provider.
:::

## How it works

Universal IDP implements the OIDC Authorization Code flow. Your application redirects to Mailinator for authentication, the test user enters an inbox name, and Mailinator issues a signed ID token that your application can validate through the published JWKS endpoint.

## Public mode

Public mode is available at `idp.mailinator.com` and issues identities using `@mailinator.com` email addresses.

Use public mode for:

1. Quick SSO prototypes.
2. Local development.
3. Developer sandboxes.
4. Non-sensitive QA checks.

Public mode is rate limited and should not be used for sensitive workflows.

## Private mode

Mailinator subscribers with [Private Domains](/documentation/docs/core/privatemailbox/) can use Universal IDP with their own domain. When authenticated with a Mailinator API token or active Mailinator session, Universal IDP can issue tokens for identities at your Private Domain.

Use private mode for:

1. Enterprise testing environments.
2. Integration tests where the email domain matters.
3. End-to-end tests that already use Mailinator Private Domains.
4. SSO flows that need repeatable, private test identities.

## OIDC discovery

Point your OIDC client at the discovery endpoint:

```text
https://idp.mailinator.com/idp/.well-known/openid-configuration
```

## Endpoints

| Endpoint | URL |
| --- | --- |
| Authorization | `https://idp.mailinator.com/idp/authorize` |
| Token | `https://idp.mailinator.com/idp/token` |
| JWKS | `https://idp.mailinator.com/idp/jwks.json` |

## Authorization parameters

The authorization endpoint accepts standard OIDC parameters:

| Parameter | Description |
| --- | --- |
| `client_id` | Your application identifier. |
| `redirect_uri` | The callback URL where Mailinator sends the user after authentication. |
| `response_type` | Use `code` for the Authorization Code flow. |
| `scope` | Request `openid email` for standard identity claims. |
| `state` | Recommended CSRF protection token. |
| `nonce` | Recommended replay protection value, passed through to the ID token. |

## Example authorization request

```text
https://idp.mailinator.com/idp/authorize?
  client_id=MyTestApp&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid%20email&
  state=abc123&
  nonce=xyz789
```

## Token claims

ID tokens include standard identity claims similar to:

```json
{
  "iss": "https://idp.mailinator.com",
  "sub": "testuser@mailinator.com",
  "aud": "MyTestApp",
  "azp": "MyTestApp",
  "email": "testuser@mailinator.com",
  "email_verified": true,
  "nonce": "xyz789",
  "iat": 1712345678,
  "exp": 1712349278
}
```

## Private domain authentication

Private Domain users can authenticate Universal IDP requests with:

1. A Mailinator API token as a Bearer token in the `Authorization` header.
2. An existing Mailinator session cookie.

When authenticated, Universal IDP can issue tokens for identities at your Private Domain.

For AI-agent workflows that need SSO testing, see [Agent Recipes](/documentation/docs/ai-agents/agent-recipes/) and [Agent Safety and Privacy](/documentation/docs/ai-agents/agent-safety-privacy/). For TOTP and 2FA testing, see [Authenticator](/documentation/docs/features/authenticatorinator/).

For the original announcement, see [Introducing Mailinator's Universal IDP](https://www.mailinator.com/introducing-mailinators-universal-idp/).
