# AI Instructions for This Repository

## Purpose
This repository contains the Mailinator documentation. AI assistants and contributors should treat the OpenAPI specification as the source of truth for API behavior.

## Relationship Between OpenAPI and Documentation
- Authoritative: Endpoints, parameters, schemas, request/response bodies, and status codes must match the OpenAPI specification.
- Derived: Reference docs should be derived from the OpenAPI spec whenever possible.
- Supplemental: Narrative guides, tutorials, and examples may add context but must not contradict the spec.

## Conflict Resolution
If the documentation and OpenAPI spec disagree:
1. Assume the OpenAPI spec is correct.
2. Update the documentation to match the spec, or
3. If the spec appears wrong, open an issue to correct the spec before changing docs.

## Change Workflow (Recommended)
- When changing API behavior, update the OpenAPI spec first.
- Then update documentation to reflect those changes.
- Prefer adding or updating examples that mirror spec-defined schemas.

## Example Expectations
- Use request/response examples that align with schema definitions.
- Avoid adding undocumented parameters or fields in docs unless they are in the spec.

## Rationale
These rules prevent drift, keep docs accurate, and make automation (linting, doc generation, validation) feasible.
