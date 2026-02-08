# Specification

## Summary
**Goal:** Extend the Note screen with a Propose Day add-on message and a Propose Day themed proposing illustration.

**Planned changes:**
- Append the following Propose Day message to the existing Note screen text, preserving line breaks and punctuation exactly:
  - "Happy Propose Day"
  - "Life will be more beautiful if you are with me."
- Add a new static illustration asset under `frontend/public/assets/generated` and display it on the Note screen via a `/assets/generated/...` path (no backend fetch).

**User-visible outcome:** On the Note screen, users will see the original note text plus the added two-line Propose Day message, along with a romantic illustration of a boy kneeling and proposing to a girl while wishing her Happy Propose Day.
