import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FaqSection } from "@/components/faq-section";
import { PublicFooter } from "@/components/public-footer";
import { SectionLabel } from "@/components/section-label";
import { faqPageSchema, resourceArticleSchema } from "@/lib/schema";
import { RelatedResources } from "@/components/related-resources";

export const metadata: Metadata = {
  title: "How to remove Fireflies AI from Zoom",
  description:
    "Remove the Fireflies notetaker from a Zoom call, uninstall the app, the team setting that overrides yours, and the three Zoom controls that keep bots out.",
  alternates: {
    canonical: "/resources/remove-fireflies-ai-from-zoom",
  },
};

const faqs = [
  {
    question: "How do I remove Fireflies from a Zoom meeting right now?",
    answer:
      "Open the participant list, click More next to Fireflies Notetaker, and choose Remove. Fireflies documents that if the notetaker is removed before 3 minutes, no transcript or notes will be created.",
  },
  {
    question: "Can I remove Fireflies from Zoom if I am not the host?",
    answer:
      "Fireflies does not say, and Zoom's technical library frames removal as something the host does. Fireflies' own FAQ notes the bot may request permission if you are not the host and that a host must admit it through a waiting room. If you are not the host, ask the host to remove it or to leave it in the waiting room.",
  },
  {
    question: "Why does Fireflies keep joining after I turned auto-join off?",
    answer:
      "Two documented reasons. Recording Rules can add meetings back by keyword, email, or domain. And on a team workspace, Fireflies documents an admin-level Auto-record meetings setting under Settings, Team, Recording & Privacy that can force a choice for everyone rather than letting teammates choose. If your toggle seems to have no effect, ask your workspace admin.",
  },
  {
    question: "How do I uninstall the Fireflies app from Zoom?",
    answer:
      "For your own account, open the Zoom Workplace desktop app, go to the Marketplace tab, open My Library, find Fireflies, click More under Actions, and choose Remove. An account admin removes it for everyone from the Zoom App Marketplace under Manage, Apps on Account, Added Apps. Zoom says removing an app deactivates it for all users on the account.",
  },
  {
    question: "Which Zoom settings stop other people's notetaker bots?",
    answer:
      "Three, all documented by Zoom: the waiting room, Block users in specific domains from joining meetings and webinars under Account Settings, Meeting, Security, and Only authenticated users can join meetings. Zoom's technical library also notes that automated tools joining as participants show up in these security features and that a host may remove or report an uninvited one.",
  },
] as const;

const sources = [
  {
    label: "Fireflies guide: how to remove Fireflies from a meeting (or stop it from joining)",
    href: "https://guide.fireflies.ai/articles/7098191513-how-to-remove-fireflies-from-a-meeting-or-stop-it-from-joining",
  },
  {
    label: "Fireflies guide: how Fireflies joins and records your meetings (FAQ)",
    href: "https://guide.fireflies.ai/articles/9554534786-how-fireflies-joins-and-records-your-meetings-faqs",
  },
  {
    label: "Fireflies guide: how to disable the Fireflies auto-join settings",
    href: "https://guide.fireflies.ai/articles/8587670572-how-to-disable-the-fireflies-auto-join-settings",
  },
  {
    label: "Fireflies guide: control auto-join and email settings for teammates",
    href: "https://guide.fireflies.ai/articles/2847812384-how-to-control-autojoin-and-email-settings-for-teammates",
  },
  {
    label: "Fireflies guide: integrate Zoom with Fireflies (disconnect step)",
    href: "https://guide.fireflies.ai/articles/8956173738-how-to-integrate-zoom-with-fireflies",
  },
  {
    label: "Fireflies guide: stop Fireflies accessing your Google account and calendar",
    href: "https://guide.fireflies.ai/articles/5113338943-how-do-i-stop-fireflies-from-accessing-my-google-account-and-calendar",
  },
  {
    label: "Zoom support: remove an app from your library",
    href: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062865",
  },
  {
    label: "Zoom support: manage apps on your account (admin removal)",
    href: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060122",
  },
  {
    label: "Zoom support: waiting room",
    href: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061231",
  },
  {
    label: "Zoom support: block users in specific domains from joining meetings and webinars",
    href: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063852",
  },
  {
    label: "Zoom support: only authenticated users can join meetings",
    href: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063837",
  },
  {
    label: "Zoom support: manage which Zoom apps can join as a participant (SDK apps)",
    href: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0083775",
  },
  {
    label: "Zoom technical library: manage automated tools and participants in your meetings",
    href: "https://library.zoom.com/zoom-workplace/zoom-meetings/securing-zoom-meetings-explainer/manage-automated-tools-and-participants-in-your-zoom-meetings",
  },
  { label: "Minutes security & privacy architecture", href: "/security" },
] as const;

const LAST_REVIEWED = "2026-09-02";

function Strong({ children }: { children: ReactNode }) {
  return <span className="font-medium text-[var(--text)]">{children}</span>;
}

export default function RemoveFirefliesFromZoomPage() {
  return (
    <div className="mx-auto max-w-[980px] px-6 pb-16 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            resourceArticleSchema({
              metadata,
              path: "/resources/remove-fireflies-ai-from-zoom",
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
          <a href="/resources/remove-fireflies-ai-from-zoom.md" className="hover:text-[var(--accent)]">
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
          How to remove Fireflies AI from Zoom
        </h1>
        <p className="mt-5 text-[17px] leading-8 text-[var(--text-secondary)]">
          The removal itself is one click. The reasons it comes back are a team setting that
          overrides yours and an app that stays installed after you stop using it. Below: the
          in-call step, the uninstall on both the personal and admin side, the Fireflies
          settings that matter, and the three Zoom controls that keep any vendor&rsquo;s bot
          out.
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
        <SectionLabel label="The One-Line Answer" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <div className="rounded-[8px] border border-[color:var(--border)] bg-[var(--bg-elevated)] p-5">
            <p>
              Open the participant list, click <Strong>More</Strong> next to{" "}
              <Strong>Fireflies Notetaker</Strong>, and choose <Strong>Remove</Strong>.
              Fireflies states that if the notetaker is removed{" "}
              <Strong>before 3 minutes</Strong>, no transcript or notes will be created.
            </p>
          </div>
          <p>
            Two footnotes. Fireflies&rsquo; pages label the bot slightly differently, as
            Fireflies Notetaker in one article and Fireflies.ai Notetaker in another, so
            look for either. And the three-minute claim is about transcript and notes
            creation only; Fireflies does not say what happens to audio from those minutes.
          </p>
          <p>
            If you are not the host: Fireflies does not document what a non-host can do, and
            Zoom&rsquo;s technical library describes removal as the host&rsquo;s action.
            Fireflies&rsquo; own FAQ says the bot may request permission when you are not the
            host and that a host must admit it if there is a waiting room. In practice, ask
            the host to remove it or to leave it waiting.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Stop Your Own Bot Coming Back" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            <Strong>Turn off auto-record.</Strong> In Fireflies, open{" "}
            <Strong>Settings</Strong>, then <Strong>Recording &amp; Privacy</Strong>, and
            toggle off <Strong>Auto-record meetings</Strong>.
          </p>
          <p>
            <Strong>Or join on invitation only.</Strong> From the dashboard{" "}
            <Strong>Upcoming</Strong> panel, open <Strong>Calendar meeting settings</Strong>.
            The default is all meetings with a web-conference link; change it to{" "}
            <Strong>Only when I invite fred@fireflies.ai</Strong>.
          </p>
          <div className="rounded-[8px] border border-[color:var(--border)] bg-[var(--bg-elevated)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
              The setting that overrides yours
            </p>
            <p className="mt-3">
              On a team workspace, Fireflies documents an admin control under{" "}
              <Strong>Settings</Strong>, then <Strong>Team</Strong>, then{" "}
              <Strong>Recording &amp; Privacy</Strong>, where the{" "}
              <Strong>Auto-record meetings</Strong> dropdown can be left at Allow teammates
              to choose or forced to a choice such as Record all calendar events with a
              meeting link or Only when invited. Fireflies describes this as letting admins
              control which meetings Fireflies can join and record for the entire team. If
              your personal toggle appears to do nothing, this is why, and the fix is a
              conversation with whoever administers the workspace.
            </p>
          </div>
          <p>
            Recording Rules are the other reason. They target meetings by keyword, email, or
            domain and take precedence over auto-join, which our{" "}
            <a
              href="/resources/stop-fireflies-from-joining-meetings"
              className="text-[var(--accent)] hover:underline"
            >
              Fireflies auto-join guide
            </a>{" "}
            covers in full.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Uninstall It From Zoom" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            Stopping the bot and uninstalling the app are separate. The Fireflies app can sit
            in your Zoom library indefinitely after you stop using it.
          </p>
          <p>
            <Strong>Your own account.</Strong> Zoom documents the path: sign in to the Zoom
            Workplace desktop app, open the <Strong>Marketplace</Strong> tab, then{" "}
            <Strong>My Library</Strong>, find the app, click <Strong>More</Strong> under
            Actions, choose <Strong>Remove</Strong>, and confirm.
          </p>
          <p>
            <Strong>For the whole Zoom account.</Strong> An admin or owner signs in to the
            Zoom App Marketplace, opens <Strong>Manage</Strong>, then{" "}
            <Strong>Apps on Account</Strong>, then the <Strong>Added Apps</Strong> tab,
            selects the app, opens <Strong>Manage app</Strong>, and uses{" "}
            <Strong>Remove App</Strong>. Zoom says removing an app deactivates it for all users
            on the account and that it would need to be added again by a user or admin.
            Neither Zoom article states that removal revokes OAuth tokens, so do not assume
            it does.
          </p>
          <p>
            <Strong>From the Fireflies side.</Strong> Fireflies documents{" "}
            <Strong>Settings</Strong>, then <Strong>Integrations</Strong>, then{" "}
            <Strong>Zoom</Strong>, then <Strong>Disconnect</Strong>, after which Fireflies
            says it will stop sending data to Zoom. Note the direction: that disconnects the
            integration that pushes notes into Zoom. It is not the same as revoking calendar
            access, which Fireflies documents only as account deletion under Settings, then
            Delete Account, with adjusting auto-join settings as the lighter alternative.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Keep Other People's Bots Out" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            None of the Fireflies settings above touch a bot that somebody else&rsquo;s
            account invited. Zoom documents three host-side controls that do, and its
            technical library confirms that automated tools joining as participants are
            visible to these features and that a host may remove or report an uninvited one.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Strong>Waiting room.</Strong> New participants wait until admitted, bots
              included. Fireflies&rsquo; own FAQ acknowledges a host must admit the bot when
              a waiting room is on.
            </li>
            <li>
              <Strong>Block users in specific domains from joining meetings and webinars.</Strong>{" "}
              Under Account Settings, then Meeting, then Security, also available at group
              and user level. Add the notetaker domains you want excluded.
            </li>
            <li>
              <Strong>Only authenticated users can join meetings.</Strong> Same Security
              section, with a per-meeting equivalent, Require authentication to join. Zoom
              says it restricts participants to signed-in users, optionally limited to
              specific email domains.
            </li>
          </ul>
          <p>
            For organizations, Zoom also documents an admin setting to allow or block specific
            SDK apps from joining as participants, under Admin Center Settings, then General,
            then Security, which Zoom describes as controlling unauthorized SDK apps from
            joining and accessing meeting content. Our{" "}
            <a
              href="/resources/remove-ai-notetaker-bots-from-meetings"
              className="text-[var(--accent)] hover:underline"
            >
              general anti-bot guide
            </a>{" "}
            covers the same controls on Meet and Teams.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="The Version Of This Problem That Solves Itself" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            All of this exists because a cloud notetaker needs your audio on its servers and
            sends a participant into the call to collect it. Capture on your own machine and
            there is nothing to remove, nothing to uninstall, and no domain to block.
          </p>
          <p>
            <Strong>Minutes</Strong> records device-side and transcribes locally with
            whisper.cpp, writing markdown to your own disk. No bot joins and no audio is
            uploaded. Conversation content leaves your machine only when you send it
            somewhere, such as a summarizer you configured or an AI agent you connect; out
            of the box neither is happening, and the full list is on our{" "}
            <a href="/security" className="text-[var(--accent)] hover:underline">
              security page
            </a>
            . The direct comparison is at{" "}
            <a href="/compare/fireflies-vs-minutes" className="text-[var(--accent)] hover:underline">
              Fireflies and Minutes
            </a>
            . And as with any recording, tell people; the consent rules are in{" "}
            <a
              href="/resources/is-it-legal-to-record-a-meeting"
              className="text-[var(--accent)] hover:underline"
            >
              recording consent law by state
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
            How botless capture works
          </a>
          <a
            href="/resources/remove-otter-ai-from-zoom"
            className="inline-flex items-center rounded-[5px] border border-[color:var(--border-mid)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text)] hover:bg-[var(--bg-hover)]"
          >
            Same problem, Otter
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

      <RelatedResources slug="remove-fireflies-ai-from-zoom" />

      <PublicFooter />
    </div>
  );
}
