# Goldleaf Ghostwriting Security Specification

## Data Invariants
1. **Inquiry Integrity**: An inquiry must always have a valid email, name, service, and message.
2. **Immutable Timestamps**: The `createdAt` field must be set to the server time during creation and cannot be modified.
3. **Restricted Status**: The `status` field must default to 'new' and can only be updated by authenticated administrators.
4. **Uniqueness**: Document IDs must be alphanumeric and length-restricted.

## The Dirty Dozen Payloads (Red Team Test Cases)

1. **Identity Spoofing**: Attempt to create an inquiry with an `email` of an admin but without permissions. (Denied)
2. **Ghost Field Injection**: Attempt to create an inquiry with an extra field `isVerified: true`. (Denied)
3. **Invalid Type**: Send `message` as a boolean. (Denied)
4. **Oversized String**: Send `message` with 2MB of text. (Denied)
5. **Timestamp Poisoning**: Send a client-side date instead of `request.time`. (Denied)
6. **Self-Promotion**: Create an inquiry and immediately try to update `status` to 'reviewed'. (Denied)
7. **Cross-Tenant Reading**: Authenticated User A tries to list all inquiries from User B. (Denied)
8. **Malformed ID**: Attempt to create a document with ID `/..%2f..%2f`. (Denied)
9. **Update Hijack**: Try to change the `service` field on an already submitted inquiry. (Denied)
10. **Delete Attack**: Random user tries to delete an inquiry by ID. (Denied)
11. **Negative Size**: Send a `name` with `.size() < 2`. (Denied)
12. **Null Injection**: Send `service: null` for a required field. (Denied)

## Test Runner Logic
Verified via `firestore.rules.test.ts`. All above attempts return `PERMISSION_DENIED`.
