# Is Fireflies AI safe?

Last reviewed: 2026-09-02

Safe from what is the real question. Safe from Fireflies misusing your data is answerable from its own documents. Safe for the other people on the call is a consent question Fireflies hands back to you. Safe from your audio ever leaving your control is an architecture question no cloud notetaker can answer yes to.

## The short answer

Fireflies documents **AES-256 at rest and TLS 1.2+ in transit**, **SOC 2 Type II**, **GDPR**, a **HIPAA business associate agreement**, a contractual promise **not to train AI on your content**, and **no employee access to meeting content by default**. Audio and transcripts live on **US cloud servers** (AWS and Google Cloud) until you or a retention rule deletes them.

## Where your audio goes

Stored and processed in Fireflies' US cloud infrastructure on AWS and GCP. No statement found that audio is auto-deleted after transcription; an account can set an automatic deletion period (Fireflies' example: one month).

**Private Storage** (Enterprise) stores transcripts, audio, and summaries in a Fireflies-managed bucket in Google Cloud US West; a related option, **Bring Your Own Storage**, puts them in a bucket you own on AWS S3 or Google Cloud Storage. Fireflies states data is still processed on its US servers and only stored in the designated bucket.

The data processing agreement points to a subprocessor list on trust.fireflies.ai. That page is script-rendered and could not be read on the review date, so this page names no vendors. Open the list yourself.

## Training, access, and deletion

- **Training:** terms of service section 5(c): Fireflies will not use your User Content to train, retrain, fine-tune, or otherwise improve any generative AI models. The privacy policy contractually prohibits vendors from model training. No plan-based exception found.
- **Access:** internal teams do not have access to meeting content by default; access requires your explicit permission, typically for support. Workspace sharing defaults (teammates and anyone with the link vs only participants and teammates) are a separate, user-controlled layer.
- **Deletion:** deleted meetings are permanently removed; the terms say "within a reasonable timeframe" with backup and legal carve-outs. Account deletion: 30 days per help center and privacy policy.

## Certifications, precisely

- **SOC 2 Type II:** listed on the security page; the only dated statement is a January 2022 blog post (compliance as of December 2021). Ask for the current report.
- **GDPR:** listed, with a DPA published.
- **HIPAA:** Fireflies provides BAAs to healthcare organizations; conditions in [Is Fireflies.ai HIPAA compliant?](/resources/is-fireflies-ai-hipaa-compliant).
- **ISO 27001:** not claimed on any Fireflies page we read; third-party trackers disagree. Unverified.

## The consent question

The bot announces itself three ways: a chat message, a spoken notice about 10 seconds after Take Notes starts, and an "AI Taking Notes" camera watermark.

Fireflies writes that on many platforms users are considered OK with recording as long as they do not object, and that participants must remove the bot or reject recording if they do not agree. If you disable a consent or notification option, Fireflies says you are responsible for informing participants and complying with recording law.

Silence is not consent in an all-party consent state. See [recording consent law by state](/resources/is-it-legal-to-record-a-meeting).

A class action filed December 2025 in an Illinois federal court alleges Fireflies stores voiceprints of every meeting participant without consent under Illinois biometric privacy law. An allegation, unresolved on the review date. Fireflies' privacy policy states voice and biometric data is destroyed within three years of an individual's last interaction.

## Breaches

No reported security incident found from Fireflies or a reputable outlet as of the review date.

## So, safe?

- **Whether Fireflies handles data responsibly:** its documentation says the right things in concrete language, and we found nothing contradicting it. Set a retention period, tighten the sharing default, confirm the subprocessor list.
- **Whether the people on your calls agreed:** the announcement helps, but the legal duty is yours, and in all-party states silence does not meet it.
- **Whether the audio can stay off a vendor's servers:** no cloud notetaker can say yes. Minutes records device-side, transcribes locally with whisper.cpp, and writes markdown to your disk; nothing joins the call and no audio is uploaded. See [/security](/security) and [Fireflies vs Minutes](/compare/fireflies-vs-minutes).

## Sources

- https://guide.fireflies.ai/articles/9596505232-learn-about-data-storage-and-transfer
- https://guide.fireflies.ai/articles/2154538358-policy-on-keeping-information-safe
- https://guide.fireflies.ai/articles/7434774675-responsible-and-secure-meeting-notetaking-with-fireflies
- https://guide.fireflies.ai/articles/3687416644-learn-about-private-storage
- https://guide.fireflies.ai/articles/7003995379
- https://fireflies.ai/terms-of-service
- https://fireflies.ai/privacy-policy
- https://fireflies.ai/security
- https://fireflies.ai/hipaa
- https://fireflies.ai/data-processing-agreement
- https://fireflies.ai/blog/is-fireflies-ai-safe/
- https://www.jdsupra.com/legalnews/lawsuit-alleges-fireflies-ai-corp-8472044/
