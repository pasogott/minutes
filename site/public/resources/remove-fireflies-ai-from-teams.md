# How to remove Fireflies AI from Microsoft Teams

Last reviewed: 2026-09-02

Teams has a role system that decides who is even allowed to remove a participant, and an admin center whose app block does less than people expect.

## The one-line answer

Open the participant list, click the three dots next to **Fireflies**, and choose **Remove from meeting**. Fireflies states that if the notetaker is removed **before 3 minutes**, no transcript or notes will be created.

Read that narrowly. It is about transcript and notes creation. Fireflies does not say what happens to audio captured during those minutes.

## Who is allowed to remove it

Microsoft's roles table lists **Remove participants** as available to the **organizer**, **co-organizers**, and **presenters**. Attendees do not have it. If there is no remove option next to Fireflies, you are an attendee: ask the organizer or a presenter, or ask to be promoted. Fireflies' own article does not mention roles.

## If the bot is yours

- **Turn it off:** Settings → **Recording & Privacy** → toggle off **Auto-record meetings**.
- **Or narrow when it joins:** Settings → **Meeting Settings** → **Auto-join calendar meetings**. Fireflies documents four options: all meetings with a web-conference link, only meetings that I own, only meetings with teammates, and only when I invite fred@fireflies.ai. The same dropdown is under **Calendar meeting settings** in the dashboard's Upcoming panel.
- **If it still joins, check Recording Rules.** Keyword, email, and domain exceptions can add meetings back. See [stop Fireflies from joining your meetings](/resources/stop-fireflies-from-joining-meetings).
- **Workspace admins:** Settings → Team → **Integrations Permissions** lets an admin see who is connected to each integration and, in Fireflies' words, remotely disconnect or remove integration access. It does nothing about a bot from another company.

## If the bot is not yours

**Block the app in the admin center.** Teams admin center → **Teams apps** → **Manage apps** → select the app → **Block**. Org-wide app settings can disallow all third-party apps. Microsoft states guests in your tenant follow your org-wide app policies.

The limit: that governs your tenant's app catalog. A Fireflies bot invited by someone at another company joins through the meeting link as a participant and installs nothing in your tenant. Neither Microsoft nor Fireflies publishes a statement that an app block stops that.

**Use the lobby.** Microsoft documents that setting the meeting policy **Who can bypass the lobby** to anything except **Everyone** makes anonymous joiners wait. The setting **Anonymous users can join a meeting** (Meetings → Meeting settings → Participants) decides whether they can join at all; Microsoft is moving it from an org-wide toggle to a per-organizer policy of the same name. Our reading of Fireflies' own guide draws the same line: joining is not capturing, and a bot held in the lobby is not recording. The trade-off is that human guests wait too.

## Disconnecting Fireflies from Microsoft

Fireflies publishes a revoke-access article for Google Calendar (complete removal is deleting the account: Settings → Account → Delete my account). We could not find a Microsoft-specific equivalent. The sourced options are the Auto-record toggle, the admin Integrations Permissions page, and account deletion.

## The version of this problem that solves itself

Capture on the participant's own machine and there is no participant to remove, no role question, and no lobby to configure. Minutes records device-side and transcribes locally with whisper.cpp; nothing joins the call and no audio is uploaded. Content leaves your machine only when you send it somewhere (a summarizer you configured, an agent you connect). See [/security](/security) and [Fireflies vs Minutes](/compare/fireflies-vs-minutes). Tell people you are recording either way: [recording consent law by state](/resources/is-it-legal-to-record-a-meeting).

## Sources

- https://guide.fireflies.ai/articles/7098191513-how-to-remove-fireflies-from-a-meeting-or-stop-it-from-joining
- https://guide.fireflies.ai/articles/8587670572-how-to-disable-the-fireflies-auto-join-settings
- https://guide.fireflies.ai/articles/5074225515-learn-about-fireflies-auto-join-settings
- https://guide.fireflies.ai/articles/3422594586-team-settings-complete-guide-workspace-admins
- https://support.microsoft.com/en-us/teams/meetings/roles-in-microsoft-teams-meetings
- https://learn.microsoft.com/en-us/microsoftteams/manage-apps
- https://learn.microsoft.com/en-us/microsoftteams/apps-external-users
- https://learn.microsoft.com/en-us/microsoftteams/who-can-bypass-meeting-lobby
- https://learn.microsoft.com/en-us/microsoftteams/anonymous-users-in-meetings
- https://guide.fireflies.ai/articles/8350183569-how-do-i-stop-or-revoke-fireflies-access-to-my-google-account-and-calendar
