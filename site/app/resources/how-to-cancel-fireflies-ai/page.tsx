import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FaqSection } from "@/components/faq-section";
import { PublicFooter } from "@/components/public-footer";
import { SectionLabel } from "@/components/section-label";
import { faqPageSchema, resourceArticleSchema } from "@/lib/schema";
import { RelatedResources } from "@/components/related-resources";

export const metadata: Metadata = {
  title: "How to cancel Fireflies AI",
  description:
    "Cancel under Settings, Account, Subscriptions. What happens to your plan and transcripts, the two refund pages that disagree, and how to export first.",
  alternates: {
    canonical: "/resources/how-to-cancel-fireflies-ai",
  },
};

const faqs = [
  {
    question: "How do I cancel my Fireflies subscription?",
    answer:
      "In the Fireflies web app open Settings, then Account, scroll to Subscriptions, and click Cancel next to the active plan. Pick a reason and confirm with Cancel Subscription, or Cancel Team Subscription for a team plan. Fireflies' terms say to cancel at least 24 hours before the end of the current period to avoid the next charge.",
  },
  {
    question: "What happens to my transcripts after I cancel?",
    answer:
      "Fireflies says you keep paid features until the end of the billing cycle, then drop to the Free tier, and that your existing meetings and data stay. Downloading transcripts and audio is documented as a Pro-and-above feature, so export before the downgrade if you want files.",
  },
  {
    question: "Does Fireflies give refunds?",
    answer:
      "Fireflies' help center publishes two answers. One article says there are no refunds on subscriptions or AI credits. A separate refund-policy article says a full refund is available within 7 days if you have logged 3 or fewer meetings on a monthly plan or 20 or fewer on an annual plan, with pro-rated refunds only on monthly plans. The terms of service have no refund clause. Cite the refund-policy article when you write to support.",
  },
  {
    question: "How do I delete my Fireflies account entirely?",
    answer:
      "Open Settings, then Account, scroll to Delete Account, and click Delete my account. Fireflies says the account is deactivated immediately and permanently deleted after 30 days, and that support can restore it inside that window. The privacy policy states the same 30-day figure.",
  },
  {
    question: "I subscribed through the App Store or Google Play. Where do I cancel?",
    answer:
      "Fireflies' help center does not document app-store cancellation. Subscriptions bought through Apple or Google are managed in that store's subscription settings, not in the Fireflies app. That is how those stores work in general rather than a Fireflies-specific instruction.",
  },
] as const;

const sources = [
  {
    label: "Fireflies guide: how to cancel your Fireflies subscription",
    href: "https://guide.fireflies.ai/articles/6637635140-how-to-cancel-fireflies-subscription",
  },
  {
    label: "Fireflies guide: how to cancel AI credits subscriptions",
    href: "https://guide.fireflies.ai/articles/1908831527-how-to-cancel-ai-credits-subscriptions",
  },
  {
    label: "Fireflies guide: manage account, subscriptions, billing, and refunds",
    href: "https://guide.fireflies.ai/articles/4475230290-manage-fireflies-account-subscriptions-billing-and-refunds",
  },
  {
    label: "Fireflies guide: understand Fireflies' refund policy",
    href: "https://guide.fireflies.ai/articles/8731544498-fireflies-refund-policy",
  },
  {
    label: "Fireflies terms of service (cancellation notice clause)",
    href: "https://fireflies.ai/terms-of-service",
  },
  {
    label: "Fireflies guide: download transcripts, summaries, and recordings",
    href: "https://guide.fireflies.ai/articles/3319752033-how-to-download-transcripts-summaries-and-meeting-recordings-from-fireflies",
  },
  {
    label: "Fireflies guide: export your Fireflies account data",
    href: "https://guide.fireflies.ai/articles/8915664468-how-to-export-your-fireflies-account-data",
  },
  {
    label: "Fireflies guide: delete a meeting",
    href: "https://guide.fireflies.ai/articles/1311785862-how-to-delete-a-meeting-from-fireflies",
  },
  {
    label: "Fireflies guide: delete your Fireflies account",
    href: "https://guide.fireflies.ai/articles/7418886518-how-to-delete-fireflies-account",
  },
  {
    label: "Fireflies guide: revoke Fireflies' access to your Google account and calendar",
    href: "https://guide.fireflies.ai/articles/8350183569-how-do-i-stop-or-revoke-fireflies-access-to-my-google-account-and-calendar",
  },
  {
    label: "Fireflies guide: pricing plans",
    href: "https://guide.fireflies.ai/articles/3734844560-learn-about-the-fireflies-pricing-plans",
  },
  {
    label: "Fireflies privacy policy (deletion within 30 days)",
    href: "https://fireflies.ai/privacy-policy",
  },
] as const;

const LAST_REVIEWED = "2026-09-02";

function Strong({ children }: { children: ReactNode }) {
  return <span className="font-medium text-[var(--text)]">{children}</span>;
}

export default function CancelFirefliesPage() {
  return (
    <div className="mx-auto max-w-[980px] px-6 pb-16 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            resourceArticleSchema({
              metadata,
              path: "/resources/how-to-cancel-fireflies-ai",
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
          <a href="/resources/how-to-cancel-fireflies-ai.md" className="hover:text-[var(--accent)]">
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
          How to cancel Fireflies AI
        </h1>
        <p className="mt-5 text-[17px] leading-8 text-[var(--text-secondary)]">
          Cancelling is self-serve and takes a minute. The parts worth reading first are
          what happens to your transcripts, the fact that Fireflies publishes two refund
          policies that disagree, and the export step you should do before the downgrade
          rather than after.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-[var(--bg-elevated)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
            Last reviewed: {LAST_REVIEWED}
          </span>
          <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
            How-to guide
          </span>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Export First" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            Do this while you are still on a paid plan. Fireflies documents that downloading
            meeting transcripts, summaries, and audio or video recordings is available on{" "}
            <Strong>Pro plans and higher</Strong>. Once you drop to Free, the per-meeting
            download goes with it.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Strong>Per meeting.</Strong> Fireflies lists PDF, DOCX, SRT, CSV, JSON, and MD
              for the transcript. Audio downloads are MP3 only.
            </li>
            <li>
              <Strong>Whole account.</Strong> Fireflies says it supports full data exports for
              all users upon request. The export contains audio as MP3, video as MP4 where
              available, transcripts and summaries as TXT, and metadata as JSON. The download
              link is valid for 7 days.
            </li>
          </ul>
          <p>
            The two paths use different formats, so if you want DOCX or SRT files, use the
            per-meeting download before cancelling. The account export is the fallback if you
            have already downgraded, since Fireflies does not gate it by plan.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Cancel The Subscription" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              In the web app, open <Strong>Settings</Strong>, then <Strong>Account</Strong>.
            </li>
            <li>
              Scroll to <Strong>Subscriptions</Strong> and click <Strong>Cancel</Strong> next
              to the active plan.
            </li>
            <li>
              Choose a reason, then confirm with <Strong>Cancel Subscription</Strong>, or{" "}
              <Strong>Cancel Team Subscription</Strong> on a team plan.
            </li>
          </ol>
          <p>
            AI credits are a separate subscription. Fireflies documents it under{" "}
            <Strong>Settings</Strong>, then <Strong>Billing</Strong>, then{" "}
            <Strong>AI Credits</Strong>, then <Strong>Edit</Strong>, then{" "}
            <Strong>Cancel Subscription</Strong>. Cancelling the plan does not cancel the
            credits.
          </p>
          <div className="rounded-[8px] border border-[color:var(--border)] bg-[var(--bg-elevated)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
              Timing
            </p>
            <p className="mt-3">
              Fireflies&rsquo; terms of service say you must cancel at least 24 hours before
              the end of the current subscription period to avoid being charged for the next
              one. Do not leave it to the last day.
            </p>
          </div>
          <p>
            If you subscribed through the App Store or Google Play, Fireflies&rsquo; help
            center has no instructions. Those subscriptions are managed in the store&rsquo;s own
            subscription settings, which is how app-store billing works generally rather than
            anything Fireflies documents.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="What Happens Next" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            Per Fireflies, you keep access to paid features until the end of the current
            billing cycle, then the account automatically downgrades to the{" "}
            <Strong>Free</Strong> tier. Fireflies says existing meetings and data stay. The
            Free tier has its own storage and transcription limits, so the data stays but the
            tools around it shrink.
          </p>
          <p>
            Cancelling does not stop the bot. Auto-join is an account setting, not a plan
            feature, and a Free account with a connected calendar still sends the notetaker.
            Turn off <Strong>Auto-record meetings</Strong> under Settings, then Recording
            &amp; Privacy, or follow the{" "}
            <a
              href="/resources/stop-fireflies-from-joining-meetings"
              className="text-[var(--accent)] hover:underline"
            >
              full stop-Fireflies guide
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Refunds: Two Answers" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            As of the review date, Fireflies&rsquo; help center gives two answers, and they
            contradict each other.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The <Strong>account, billing, and refunds</Strong> article says Fireflies does
              not offer refunds on subscriptions or AI credit purchases.
            </li>
            <li>
              The <Strong>refund policy</Strong> article says a monthly plan gets a full refund
              if used for 7 days or less with 3 or fewer meetings logged, pro-rated
              otherwise; an annual plan gets a full refund if used for 7 days or less with 20
              or fewer meetings logged, with no pro-rated refund beyond that. Refunds cover
              subscription plans only, not AI credits, and take 5 to 10 business days.
            </li>
          </ul>
          <p>
            The terms of service contain no refund clause at all. If you are inside the
            seven-day window, write to support and cite the refund-policy article by name.
            We are reporting the discrepancy rather than resolving it; Fireflies may have
            updated one page and not the other.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Deleting Recordings Or The Account" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            <Strong>One meeting.</Strong> Hover the meeting, click the three dots, choose{" "}
            <Strong>Delete</Strong>, and confirm. Fireflies says deleted meetings are
            permanently removed and cannot be recovered.
          </p>
          <p>
            <Strong>The whole account.</Strong> Open <Strong>Settings</Strong>, then{" "}
            <Strong>Account</Strong>, scroll to <Strong>Delete Account</Strong>, and click{" "}
            <Strong>Delete my account</Strong>. Fireflies says the account is deactivated
            immediately and permanently deleted after 30 days, and that support can restore it
            inside that window. The privacy policy states personal information is deleted
            within 30 days of closing an account, which matches.
          </p>
          <p>
            Deleting the account is also the only complete way Fireflies documents to revoke
            its access to a Google account and calendar. If you only want it to stop joining,
            the auto-record toggle is the lighter option.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="What You Were Paying For" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            For reference, Fireflies&rsquo; pricing article on the review date listed Free at
            $0; Pro at $10 per user per month billed annually or $18 monthly; Business at $19
            annually or $29 monthly; and Enterprise at $39 per user per month billed annually.
            Prices change, so check the linked article before relying on these.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="If You Are Leaving Because Of Where The Audio Goes" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            People cancel notetakers for ordinary reasons: cost, a bot that annoyed a client,
            a workplace policy. If yours is that you did not want meeting audio on a
            vendor&rsquo;s servers in the first place, the alternative is not a different
            cloud notetaker but capture that stays on your machine.
          </p>
          <p>
            <Strong>Minutes</Strong> records device-side, transcribes locally with
            whisper.cpp, and writes markdown to your own disk. No bot joins and no audio is
            uploaded. Conversation content leaves your machine only when you send it
            somewhere, such as a summarizer you configured or an AI agent you connect; out of
            the box neither is happening, and the full list is on our{" "}
            <a href="/security" className="text-[var(--accent)] hover:underline">
              security page
            </a>
            . If you want to weigh the two directly, we keep a{" "}
            <a href="/compare/fireflies-vs-minutes" className="text-[var(--accent)] hover:underline">
              Fireflies and Minutes comparison
            </a>{" "}
            that says plainly who should stay with Fireflies.
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
            href="/compare/fireflies-vs-minutes"
            className="inline-flex items-center rounded-[5px] bg-[var(--accent)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-black hover:bg-[var(--accent-hover)]"
          >
            Fireflies vs Minutes
          </a>
          <a
            href="/resources/stop-fireflies-from-joining-meetings"
            className="inline-flex items-center rounded-[5px] border border-[color:var(--border-mid)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text)] hover:bg-[var(--bg-hover)]"
          >
            Stop the bot joining
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

      <RelatedResources slug="how-to-cancel-fireflies-ai" />

      <PublicFooter />
    </div>
  );
}
