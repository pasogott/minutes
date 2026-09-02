import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FaqSection } from "@/components/faq-section";
import { PublicFooter } from "@/components/public-footer";
import { SectionLabel } from "@/components/section-label";
import { faqPageSchema, resourceArticleSchema } from "@/lib/schema";
import { RelatedResources } from "@/components/related-resources";

export const metadata: Metadata = {
  title: "Is Fireflies AI safe?",
  description:
    "Fireflies encrypts data, says it does not train AI on your content, and offers a HIPAA BAA. The open questions are where audio goes and who consented.",
  alternates: {
    canonical: "/resources/is-fireflies-ai-safe",
  },
};

const faqs = [
  {
    question: "Is Fireflies AI safe to use?",
    answer:
      "By its own documentation, Fireflies runs the controls you would expect of a cloud vendor: AES-256 encryption at rest, TLS 1.2 or higher in transit, SOC 2 Type II, GDPR, a HIPAA business associate agreement, a contractual promise not to train AI on your content, and no employee access to meeting content by default. Whether that is safe enough depends on whether you are allowed to put the audio on a US cloud at all, and whether everyone on the call agreed.",
  },
  {
    question: "Does Fireflies use my meetings to train AI?",
    answer:
      "Fireflies' terms of service say it will not use your User Content to train, retrain, fine-tune, or otherwise improve any generative AI models, and its privacy policy says it contractually prohibits vendors from using the information for their own model training. We found no plan-based exception in either document.",
  },
  {
    question: "Where does Fireflies store my recordings?",
    answer:
      "In the United States, on AWS and Google Cloud, per Fireflies' data storage article. Enterprise customers can use Private Storage, a Fireflies-managed bucket, or Bring Your Own Storage, a bucket the customer owns on AWS S3 or Google Cloud Storage. Fireflies states that processing still happens on its US servers either way.",
  },
  {
    question: "Does the Fireflies bot tell people it is recording?",
    answer:
      "Yes, in three ways per Fireflies: a chat message announcing it has joined, a spoken notice about 10 seconds after Take Notes starts, and an AI Taking Notes camera watermark. Fireflies also documents that on many platforms participants are considered to accept recording unless they object, and that if you disable those notices you are responsible for informing participants and complying with recording law.",
  },
  {
    question: "Has Fireflies had a data breach?",
    answer:
      "We found no reported breach. We did find a class action filed in December 2025 in an Illinois federal court alleging that Fireflies stores voiceprints of meeting participants without consent under Illinois biometric privacy law. That is an allegation, unresolved on our review date, not a finding.",
  },
] as const;

const sources = [
  {
    label: "Fireflies guide: learn about data storage and transfer",
    href: "https://guide.fireflies.ai/articles/9596505232-learn-about-data-storage-and-transfer",
  },
  {
    label: "Fireflies guide: policy on keeping information safe",
    href: "https://guide.fireflies.ai/articles/2154538358-policy-on-keeping-information-safe",
  },
  {
    label: "Fireflies guide: responsible and secure meeting notetaking",
    href: "https://guide.fireflies.ai/articles/7434774675-responsible-and-secure-meeting-notetaking-with-fireflies",
  },
  {
    label: "Fireflies guide: learn about Private Storage",
    href: "https://guide.fireflies.ai/articles/3687416644-learn-about-private-storage",
  },
  {
    label: "Fireflies guide: recording consent and meeting compliance",
    href: "https://guide.fireflies.ai/articles/7003995379",
  },
  { label: "Fireflies terms of service (section 5c, AI training)", href: "https://fireflies.ai/terms-of-service" },
  { label: "Fireflies privacy policy", href: "https://fireflies.ai/privacy-policy" },
  { label: "Fireflies security page", href: "https://fireflies.ai/security" },
  { label: "Fireflies HIPAA page", href: "https://fireflies.ai/hipaa" },
  {
    label: "Fireflies data processing agreement (subprocessor list reference)",
    href: "https://fireflies.ai/data-processing-agreement",
  },
  {
    label: "Fireflies blog: SOC 2 Type II (January 2022)",
    href: "https://fireflies.ai/blog/is-fireflies-ai-safe/",
  },
  {
    label: "JD Supra: lawsuit alleges Fireflies.AI Corp. collects voiceprints without consent (December 2025)",
    href: "https://www.jdsupra.com/legalnews/lawsuit-alleges-fireflies-ai-corp-8472044/",
  },
  { label: "Minutes security & privacy architecture", href: "/security" },
] as const;

const LAST_REVIEWED = "2026-09-02";

function Strong({ children }: { children: ReactNode }) {
  return <span className="font-medium text-[var(--text)]">{children}</span>;
}

export default function IsFirefliesSafePage() {
  return (
    <div className="mx-auto max-w-[980px] px-6 pb-16 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            resourceArticleSchema({
              metadata,
              path: "/resources/is-fireflies-ai-safe",
              lastReviewed: LAST_REVIEWED,
              sources,
            }),
            faqPageSchema(faqs),
          ]),
        }}
      />
      <div className="mb-10 flex items-center justify-between border-b border-[color:var(--border)] pb-4">
        <a href="/" className="font-mono text-[15px] font-medium text-[var(--text)]">
          minutes
        </a>
        <div className="flex gap-5 text-sm text-[var(--text-secondary)]">
          <a href="/resources/is-fireflies-ai-safe.md" className="hover:text-[var(--accent)]">
            page.md
          </a>
          <a href="/resources" className="hover:text-[var(--accent)]">
            resources
          </a>
          <a href="/compare" className="hover:text-[var(--accent)]">
            compare
          </a>
        </div>
      </div>

      <section className="max-w-[800px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
          Resource
        </p>
        <h1 className="mt-4 font-serif text-[40px] leading-[0.98] tracking-[-0.045em] text-[var(--text)] sm:text-[58px]">
          Is Fireflies AI safe?
        </h1>
        <p className="mt-5 text-[17px] leading-8 text-[var(--text-secondary)]">
          Safe from what is the real question. Safe from Fireflies misusing your data is
          answerable from its own documents, and the answer is mostly reassuring. Safe for the
          other people on the call is a consent question Fireflies hands back to you. Safe
          from your audio ever leaving your control is an architecture question, and no
          cloud notetaker can answer yes. Every claim below links to the Fireflies page it
          came from.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-[var(--bg-elevated)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
            Last reviewed: {LAST_REVIEWED}
          </span>
          <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
            Privacy review
          </span>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="The Short Answer" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <div className="rounded-[8px] border border-[color:var(--border)] bg-[var(--bg-elevated)] p-5">
            <p>
              Fireflies documents <Strong>AES-256 encryption at rest and TLS 1.2 or higher
              in transit</Strong>, <Strong>SOC 2 Type II</Strong>, <Strong>GDPR</Strong>, a{" "}
              <Strong>HIPAA business associate agreement</Strong>, a contractual promise{" "}
              <Strong>not to train AI on your content</Strong>, and{" "}
              <Strong>no employee access to meeting content by default</Strong>. Your audio
              and transcripts live on <Strong>US cloud servers</Strong> (AWS and Google
              Cloud), and they stay there until you or a retention rule deletes them.
            </p>
          </div>
          <p>
            That is a competent cloud vendor. It is not the same as your audio never leaving
            your machine, and it does not settle whether the people you recorded agreed.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Where Your Audio Goes" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            Fireflies states that your data is stored and processed in its cloud
            infrastructure in the United States, on AWS and GCP. Recordings, transcripts,
            and summaries persist there. We found no statement that audio is deleted
            automatically after transcription; Fireflies instead documents that an account
            can set an automatic deletion period for recordings, transcripts, and notes,
            with one month as its example.
          </p>
          <p>
            <Strong>Private Storage</Strong>, on the Enterprise plan, stores transcripts,
            audio, and summaries in a Fireflies-managed bucket in Google Cloud US West. A
            related option, <Strong>Bring Your Own Storage</Strong>, puts them in a bucket
            you own on AWS S3 or Google Cloud Storage. Read the boundary carefully: Fireflies
            states that data is still processed on its US servers and only stored in the
            designated bucket. Either option changes who holds the files, not whether
            Fireflies sees them.
          </p>
          <p>
            Fireflies&rsquo; data processing agreement points to a subprocessor list on its
            trust center. That page is rendered by script and we could not read it on the
            review date, so this page names no AI or transcription vendors. If which
            third parties touch your audio matters to you, open the list yourself before
            deciding.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Training, Access, And Deletion" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            <Strong>Training.</Strong> Section 5(c) of the terms of service says Fireflies
            will not use your User Content to train, retrain, fine-tune, or otherwise improve
            any generative AI models. The privacy policy adds that it does not use personal
            information for model training and contractually prohibits its vendors from doing
            so. We found no plan-based exception. This is stronger and clearer than many
            competitors&rsquo; language.
          </p>
          <p>
            <Strong>Access.</Strong> Fireflies states that internally its teams do not have
            access to your meeting content by default and that any access requires your
            explicit permission, typically for support. Workspace sharing defaults are a
            separate, user-controlled layer: an admin can set new meetings to be visible to
            teammates and anyone with the link, or only to participants and teammates. Check
            which one your workspace uses, because the vendor&rsquo;s controls do not help if
            your own default is wide open.
          </p>
          <p>
            <Strong>Deletion.</Strong> Deleted meetings are, per Fireflies, permanently
            removed. The terms say deleted content is removed within a reasonable timeframe,
            with backup and legal-compliance carve-outs, which is a promise without a
            number. Account deletion is documented at 30 days in both the help center and the
            privacy policy. For a recording of a meeting you did not host, Fireflies directs
            you to the host or to support, since the file belongs to their account.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Certifications, Precisely" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Strong>SOC 2 Type II.</Strong> Fireflies&rsquo; security page lists it. The
              only dated statement we found is a January 2022 blog post citing compliance as
              of December 2021. Current attestation is on the trust center, which we could not
              render; ask for the report.
            </li>
            <li>
              <Strong>GDPR.</Strong> Listed on the security page, with a data processing
              agreement published.
            </li>
            <li>
              <Strong>HIPAA.</Strong> Fireflies states it provides HIPAA-compliant BAAs to
              healthcare organizations. Our{" "}
              <a
                href="/resources/is-fireflies-ai-hipaa-compliant"
                className="text-[var(--accent)] hover:underline"
              >
                Fireflies HIPAA page
              </a>{" "}
              covers the plan and storage conditions that come with it.
            </li>
            <li>
              <Strong>ISO 27001.</Strong> Not claimed on any Fireflies page we read.
              Third-party trackers disagree with each other about it, so treat it as
              unverified.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="The Consent Question" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            This is where a careful reading of Fireflies&rsquo; own compliance article
            matters most. The bot announces itself three ways: a chat message that it has
            joined, a spoken notice roughly 10 seconds after Take Notes starts, and an AI
            Taking Notes watermark on its camera tile. That is more than some competitors do.
          </p>
          <p>
            Then the model. Fireflies writes that on many platforms users are considered OK
            with recording as long as they do not object, and that participants must remove
            the bot or reject recording if they do not agree. Some integrations require opt-in
            before the bot joins; the default posture elsewhere is opt-out. And Fireflies is
            explicit that if you disable a consent or notification option, you are responsible
            for informing participants and for complying with applicable recording laws.
          </p>
          <p>
            Silence is not consent in an all-party consent state, and a spoken notice
            followed by nobody objecting may not meet that bar. Fireflies is not claiming
            otherwise; it is telling you the obligation is yours. If your calls cross into
            California, Florida, Illinois, or the other all-party states, read{" "}
            <a
              href="/resources/is-it-legal-to-record-a-meeting"
              className="text-[var(--accent)] hover:underline"
            >
              recording consent law by state
            </a>{" "}
            before relying on the bot&rsquo;s announcement.
          </p>
          <p>
            One data point on how this plays out: a class action filed in December 2025 in
            an Illinois federal court alleges that Fireflies records and stores the
            voiceprints of every meeting participant, including people with no account,
            without consent under Illinois&rsquo; biometric privacy law. It is an allegation
            and unresolved on our review date. Fireflies&rsquo; privacy policy does state that
            voice and biometric data is destroyed within three years of an individual&rsquo;s
            last interaction, a clause specific to that law.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Breaches" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            We searched for a reported security incident at Fireflies and found none from
            Fireflies or from a reputable outlet as of the review date. Absence of a report
            is not proof of absence, but it is what the record shows.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="So, Safe?" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            <Strong>If your question is whether Fireflies handles data responsibly:</Strong>{" "}
            its documentation says the right things, in more concrete language than most, and
            we found nothing contradicting it. Set a retention period, tighten the workspace
            sharing default, and confirm the subprocessor list, and you have done what a
            cloud notetaker allows.
          </p>
          <p>
            <Strong>If your question is whether the people on your calls agreed:</Strong>{" "}
            the bot&rsquo;s announcement helps, but Fireflies puts the legal duty on you, and
            in all-party states that duty is not met by silence.
          </p>
          <p>
            <Strong>If your question is whether the audio can stay off a vendor&rsquo;s
            servers entirely:</Strong> no cloud notetaker can say yes, and Fireflies does not
            pretend to. That is the case for capturing on your own machine.{" "}
            <Strong>Minutes</Strong> records device-side, transcribes locally with
            whisper.cpp, and writes markdown to your own disk; nothing joins the call and no
            audio is uploaded. Content leaves your machine only when you send it somewhere,
            such as a summarizer you configure or an AI agent you connect, and out of the box
            neither is happening. The full list is on our{" "}
            <a href="/security" className="text-[var(--accent)] hover:underline">
              security page
            </a>
            , and the direct comparison, including who should stay with Fireflies, is at{" "}
            <a href="/compare/fireflies-vs-minutes" className="text-[var(--accent)] hover:underline">
              Fireflies and Minutes
            </a>
            .
          </p>
        </div>
      </section>

      <FaqSection items={faqs} />

      <section className="mt-14 rounded-[8px] border border-[color:var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-panel)]">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
          Next step
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/security"
            className="inline-flex items-center rounded-[5px] bg-[var(--accent)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-black hover:bg-[var(--accent-hover)]"
          >
            How on-device capture works
          </a>
          <a
            href="/resources/is-fireflies-ai-hipaa-compliant"
            className="inline-flex items-center rounded-[5px] border border-[color:var(--border-mid)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text)] hover:bg-[var(--bg-hover)]"
          >
            The HIPAA answer
          </a>
        </div>
      </section>

      <section className="mt-14">
        <SectionLabel label="Sources" />
        <ul className="space-y-2 text-[14px] leading-7 text-[var(--text-secondary)]">
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} className="text-[var(--accent)] hover:underline">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <RelatedResources slug="is-fireflies-ai-safe" />

      <PublicFooter />
    </div>
  );
}
