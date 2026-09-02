import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FaqSection } from "@/components/faq-section";
import { PublicFooter } from "@/components/public-footer";
import { SectionLabel } from "@/components/section-label";
import { faqPageSchema, resourceArticleSchema } from "@/lib/schema";
import { RelatedResources } from "@/components/related-resources";

export const metadata: Metadata = {
  title: "How to remove Fireflies AI from Microsoft Teams",
  description:
    "Remove the Fireflies notetaker from a Teams meeting, who is allowed to, the admin-center block and lobby settings that keep it out, and what they miss.",
  alternates: {
    canonical: "/resources/remove-fireflies-ai-from-teams",
  },
};

const faqs = [
  {
    question: "How do I remove Fireflies from a Teams meeting that is already running?",
    answer:
      "Open the participant list, click the three dots next to Fireflies, and choose Remove from meeting. Fireflies documents that if the notetaker is removed before 3 minutes, no transcript or notes will be created.",
  },
  {
    question: "Can I remove Fireflies if I am not the meeting organizer?",
    answer:
      "Only if you hold the co-organizer or presenter role. Microsoft's roles table lists Remove participants as available to organizers, co-organizers, and presenters, and not to attendees. A plain attendee has to ask one of those people. Fireflies' own article does not mention roles at all.",
  },
  {
    question: "Will blocking the Fireflies app in the Teams admin center keep the bot out?",
    answer:
      "It blocks the Fireflies app inside your tenant, and Microsoft states that guests follow your org-wide app policies too. Neither Microsoft nor Fireflies documents that an app block stops a bot joining from another tenant as an ordinary participant through the meeting link. For that, the lobby settings are the control.",
  },
  {
    question: "How do I stop my own Fireflies bot joining Teams meetings?",
    answer:
      "In Fireflies, open Settings, then Recording & Privacy, and toggle off Auto-record meetings. Or open Settings, then Meeting Settings, and change Auto-join calendar meetings to Only when I invite fred@fireflies.ai. Check Recording Rules as well, since a rule can add meetings back.",
  },
  {
    question: "Which Teams setting keeps uninvited bots in the lobby?",
    answer:
      "Set the meeting policy Who can bypass the lobby to anything except Everyone. Microsoft documents that anonymous joiners then wait in the lobby. The setting Anonymous users can join a meeting, under Meetings, Meeting settings, Participants in the Teams admin center, controls whether they can join at all; Microsoft is moving it from an org-wide toggle to a per-organizer policy of the same name.",
  },
] as const;

const sources = [
  {
    label: "Fireflies guide: how to remove Fireflies from a meeting (or stop it from joining)",
    href: "https://guide.fireflies.ai/articles/7098191513-how-to-remove-fireflies-from-a-meeting-or-stop-it-from-joining",
  },
  {
    label: "Fireflies guide: how to disable the Fireflies auto-join settings",
    href: "https://guide.fireflies.ai/articles/8587670572-how-to-disable-the-fireflies-auto-join-settings",
  },
  {
    label: "Fireflies guide: learn about Fireflies auto-join settings",
    href: "https://guide.fireflies.ai/articles/5074225515-learn-about-fireflies-auto-join-settings",
  },
  {
    label: "Fireflies guide: team settings for workspace admins (Integrations Permissions)",
    href: "https://guide.fireflies.ai/articles/3422594586-team-settings-complete-guide-workspace-admins",
  },
  {
    label: "Fireflies guide: revoke Fireflies' access to your Google account and calendar",
    href: "https://guide.fireflies.ai/articles/8350183569-how-do-i-stop-or-revoke-fireflies-access-to-my-google-account-and-calendar",
  },
  {
    label: "Microsoft Support: roles in Microsoft Teams meetings",
    href: "https://support.microsoft.com/en-us/teams/meetings/roles-in-microsoft-teams-meetings",
  },
  {
    label: "Microsoft Learn: manage apps in the Teams admin center",
    href: "https://learn.microsoft.com/en-us/microsoftteams/manage-apps",
  },
  {
    label: "Microsoft Learn: apps for external users and guests",
    href: "https://learn.microsoft.com/en-us/microsoftteams/apps-external-users",
  },
  {
    label: "Microsoft Learn: control who can bypass the meeting lobby",
    href: "https://learn.microsoft.com/en-us/microsoftteams/who-can-bypass-meeting-lobby",
  },
  {
    label: "Microsoft Learn: anonymous users in meetings",
    href: "https://learn.microsoft.com/en-us/microsoftteams/anonymous-users-in-meetings",
  },
  { label: "Minutes security & privacy architecture", href: "/security" },
] as const;

const LAST_REVIEWED = "2026-09-02";

function Strong({ children }: { children: ReactNode }) {
  return <span className="font-medium text-[var(--text)]">{children}</span>;
}

export default function RemoveFirefliesFromTeamsPage() {
  return (
    <div className="mx-auto max-w-[980px] px-6 pb-16 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            resourceArticleSchema({
              metadata,
              path: "/resources/remove-fireflies-ai-from-teams",
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
          <a href="/resources/remove-fireflies-ai-from-teams.md" className="hover:text-[var(--accent)]">
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
          How to remove Fireflies AI from Microsoft Teams
        </h1>
        <p className="mt-5 text-[17px] leading-8 text-[var(--text-secondary)]">
          Teams is the platform where this question comes up most, because Teams has a role
          system that decides who is even allowed to remove a participant, and an admin
          center whose app block does less than people expect. Below: the removal step, who
          can do it, the Fireflies settings that stop your own bot, and the two Teams
          policies that actually keep someone else&rsquo;s bot out.
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
              Open the participant list, click the three dots next to{" "}
              <Strong>Fireflies</Strong>, and choose{" "}
              <Strong>Remove from meeting</Strong>. Fireflies states that if the notetaker is
              removed <Strong>before 3 minutes</Strong>, no transcript or notes will be
              created.
            </p>
          </div>
          <p>
            Read the three-minute claim narrowly. It is about transcript and notes creation.
            Fireflies does not say what happens to audio captured during those minutes, and it
            does not say nothing was captured. If that distinction matters for the meeting,
            the reliable move is to keep the bot out, which is what the rest of this page is
            about.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Who Is Allowed To Remove It" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            This is the part that is specific to Teams and that Fireflies&rsquo; own article
            skips entirely. Teams assigns every participant a role, and Microsoft&rsquo;s roles
            table lists <Strong>Remove participants</Strong> as available to the{" "}
            <Strong>organizer</Strong>, <Strong>co-organizers</Strong>, and{" "}
            <Strong>presenters</Strong>. Attendees do not have it.
          </p>
          <p>
            So if you open the participant list and there is no remove option next to
            Fireflies, you are an attendee. Ask the organizer or a presenter to do it, or ask
            the organizer to promote you. In meetings where the organizer has set everyone
            else to attendee, which is common for large or external calls, that is the only
            route.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="If The Bot Is Yours" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            <Strong>Turn it off.</Strong> In Fireflies, open{" "}
            <Strong>Settings</Strong>, then <Strong>Recording &amp; Privacy</Strong>, and
            toggle off <Strong>Auto-record meetings</Strong>.
          </p>
          <p>
            <Strong>Or narrow when it joins.</Strong> Open <Strong>Settings</Strong>, then{" "}
            <Strong>Meeting Settings</Strong>, and change{" "}
            <Strong>Auto-join calendar meetings</Strong>. Fireflies documents four options:
            all meetings with a web-conference link, only meetings that I own, only meetings
            with teammates, and only when I invite fred@fireflies.ai. The same dropdown is
            reachable from the <Strong>Upcoming</Strong> panel on the dashboard under{" "}
            <Strong>Calendar meeting settings</Strong>. The last option is usually what people
            wanted in the first place.
          </p>
          <div className="rounded-[8px] border border-[color:var(--border)] bg-[var(--bg-elevated)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
              If it still joins, check Recording Rules
            </p>
            <p className="mt-3">
              Fireflies describes Recording Rules as a layer of keyword, email, and domain
              exceptions for when the general auto-join setting is not specific enough. A
              rule you set up earlier can keep adding meetings that your main setting now
              excludes. Our{" "}
              <a
                href="/resources/stop-fireflies-from-joining-meetings"
                className="text-[var(--accent)] hover:underline"
              >
                Fireflies auto-join guide
              </a>{" "}
              covers the rules in detail.
            </p>
          </div>
          <p>
            <Strong>For workspace admins.</Strong> Fireflies documents an{" "}
            <Strong>Integrations Permissions</Strong> page under Settings, then Team, which
            lets an admin see which team members are connected to each integration and, in
            Fireflies&rsquo; words, remotely disconnect or remove integration access when
            needed. That is the control for a colleague&rsquo;s bot inside your own Fireflies
            workspace. It does nothing about a bot from another company.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="If The Bot Is Not Yours" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            Nothing in a Fireflies account can cancel a bot that somebody else&rsquo;s account
            invited. For that, the controls live in Teams, and there are two of them with
            different reach.
          </p>
          <p>
            <Strong>Block the app in the admin center.</Strong> Microsoft documents the path:
            sign in to the Teams admin center, go to <Strong>Teams apps</Strong>, then{" "}
            <Strong>Manage apps</Strong>, select the app, and choose <Strong>Block</Strong>.
            The org-wide app settings on the same page can disallow all third-party apps.
            Microsoft also states that guests in your tenant follow your org-wide app
            policies, so a blocked app is blocked for them too.
          </p>
          <p>
            Here is the limit. That block governs your tenant&rsquo;s app catalog. A
            Fireflies bot invited by someone at another company does not install anything in
            your tenant; it joins through the meeting link as a participant. Neither Microsoft
            nor Fireflies publishes a statement that an app block stops that. We looked for
            one and did not find it, so treat the admin-center block as necessary for your own
            people and not sufficient for outsiders.
          </p>
          <p>
            <Strong>Use the lobby.</Strong> This is the control that reaches external bots.
            Microsoft documents that if you set the meeting policy{" "}
            <Strong>Who can bypass the lobby</Strong> to anything except{" "}
            <Strong>Everyone</Strong>, anonymous joiners wait in the lobby, where an organizer
            or presenter decides whether to admit them. The org-wide toggle{" "}
            <Strong>Anonymous users can join a meeting</Strong>, under Meetings, then Meeting
            settings, then Participants, decides whether anonymous users can join at all;
            Microsoft notes it is phasing that org-wide toggle out in favor of a
            per-organizer policy with the same name. Our reading of Fireflies&rsquo; own
            auto-join guide draws the same line: joining a meeting is not the same as
            capturing it, and a bot that is held in the lobby is not recording.
          </p>
          <p>
            The trade-off is real. A lobby that holds bots also holds human guests, and
            somebody has to admit them. For most organizations that is an acceptable cost,
            and it is the only documented control that works regardless of which vendor the
            bot came from.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="Disconnecting Fireflies From Microsoft" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            Fireflies publishes a revoke-access article for Google Calendar, and it says the
            complete removal is deleting the Fireflies account: <Strong>Settings</Strong>,
            then <Strong>Account</Strong>, then <Strong>Delete my account</Strong>. We could
            not find a Microsoft-specific equivalent. Until Fireflies documents one, the
            options with a source behind them are the Auto-record toggle above, the admin
            Integrations Permissions page, and account deletion. If you also want your Teams
            admin to remove Fireflies&rsquo; consent from your Microsoft 365 tenant, that is
            done in Entra under enterprise applications, which Microsoft documents separately
            and which is outside what this page verified.
          </p>
        </div>
      </section>

      <section className="mt-14 max-w-[800px]">
        <SectionLabel label="The Version Of This Problem That Solves Itself" />
        <div className="space-y-4 text-[15px] leading-8 text-[var(--text-secondary)]">
          <p>
            Every step above exists because a cloud notetaker needs the meeting audio on its
            servers, and a bot in the participant list is how it gets there. Capture on the
            participant&rsquo;s own machine and there is no participant to remove, no role
            question, and no lobby to configure.
          </p>
          <p>
            <Strong>Minutes</Strong> is that version: it records device-side and transcribes
            locally with whisper.cpp, writing markdown to your own disk. Nothing joins the
            call and no audio is uploaded. To be exact about our own limits, conversation
            content leaves your machine when you send it somewhere: a summarizer you
            configured, or an AI agent you connect and ask to read your meetings. Out of the
            box neither is happening, and the full list is on our{" "}
            <a href="/security" className="text-[var(--accent)] hover:underline">
              security page
            </a>
            . The direct comparison is at{" "}
            <a href="/compare/fireflies-vs-minutes" className="text-[var(--accent)] hover:underline">
              Fireflies and Minutes
            </a>
            .
          </p>
          <p>
            Device-side capture does not change one thing: tell people you are recording. The
            bot&rsquo;s single virtue was announcing itself. The legal detail is in{" "}
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
            href="/resources/turn-off-built-in-ai-notetakers"
            className="inline-flex items-center rounded-[5px] border border-[color:var(--border-mid)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text)] hover:bg-[var(--bg-hover)]"
          >
            Teams&rsquo; own notetaker
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

      <RelatedResources slug="remove-fireflies-ai-from-teams" />

      <PublicFooter />
    </div>
  );
}
