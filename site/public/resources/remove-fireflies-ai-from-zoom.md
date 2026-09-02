# How to remove Fireflies AI from Zoom

Last reviewed: 2026-09-02

The removal is one click. The reasons it comes back are a team setting that overrides yours and an app that stays installed after you stop using it.

## The one-line answer

Open the participant list, click **More** next to **Fireflies Notetaker**, and choose **Remove**. Fireflies states that if the notetaker is removed **before 3 minutes**, no transcript or notes will be created. (Fireflies' pages label the bot as "Fireflies Notetaker" in one article and "Fireflies.ai Notetaker" in another.)

Not the host? Fireflies does not document what a non-host can do, and Zoom's technical library describes removal as the host's action. Fireflies' FAQ says the bot may request permission when you are not the host and that a host must admit it if there is a waiting room. Ask the host to remove it or leave it waiting.

## Stop your own bot coming back

- **Turn off auto-record:** Settings → **Recording & Privacy** → toggle off **Auto-record meetings**.
- **Or join on invitation only:** dashboard **Upcoming** → **Calendar meeting settings** → **Only when I invite fred@fireflies.ai**.
- **The setting that overrides yours:** on a team workspace, Settings → **Team** → **Recording & Privacy** → **Auto-record meetings** can be left at "Allow teammates to choose" or forced to "Record all calendar events with a meeting link" or "Only when invited". Fireflies describes this as admin control over which meetings Fireflies joins for the entire team. If your personal toggle does nothing, this is why.
- **Recording Rules** target meetings by keyword, email, or domain and take precedence over auto-join. See [stop Fireflies from joining your meetings](/resources/stop-fireflies-from-joining-meetings).

## Uninstall it from Zoom

- **Your own account (Zoom doc):** Zoom Workplace desktop app → **Marketplace** tab → **My Library** → find the app → **More** under Actions → **Remove** → confirm.
- **Whole Zoom account (admin, Zoom doc):** Zoom App Marketplace → **Manage** → **Apps on Account** → **Added Apps** → select app → **Manage app** → **Remove App**. Zoom says this deactivates the app for all users on the account. Neither Zoom article states that removal revokes OAuth tokens.
- **From the Fireflies side:** Settings → **Integrations** → **Zoom** → **Disconnect**; Fireflies says it will then stop sending data to Zoom. That is not the same as revoking calendar access, which Fireflies documents only as account deletion (Settings → Delete Account), with adjusting auto-join as the lighter alternative.

## Keep other people's bots out

Zoom documents three host-side controls, and its technical library confirms automated tools joining as participants are visible to them and that a host may remove or report an uninvited one.

- **Waiting room.** Bots wait until admitted; Fireflies' FAQ acknowledges this.
- **Block users in specific domains from joining meetings and webinars.** Account Settings → Meeting → Security; also at group and user level.
- **Only authenticated users can join meetings.** Same Security section, with a per-meeting "Require authentication to join"; can be limited to specific email domains.

Organizations can also allow or block specific SDK apps from joining as participants (Admin Center Settings → General → Security). The [general anti-bot guide](/resources/remove-ai-notetaker-bots-from-meetings) covers Meet and Teams.

## The version of this problem that solves itself

Capture on your own machine and there is nothing to remove, uninstall, or block. Minutes records device-side and transcribes locally with whisper.cpp; nothing joins the call and no audio is uploaded. Content leaves your machine only when you send it somewhere. See [/security](/security), [Fireflies vs Minutes](/compare/fireflies-vs-minutes), and [recording consent law by state](/resources/is-it-legal-to-record-a-meeting).

## Sources

- https://guide.fireflies.ai/articles/7098191513-how-to-remove-fireflies-from-a-meeting-or-stop-it-from-joining
- https://guide.fireflies.ai/articles/9554534786-how-fireflies-joins-and-records-your-meetings-faqs
- https://guide.fireflies.ai/articles/8587670572-how-to-disable-the-fireflies-auto-join-settings
- https://guide.fireflies.ai/articles/2847812384-how-to-control-autojoin-and-email-settings-for-teammates
- https://guide.fireflies.ai/articles/8956173738-how-to-integrate-zoom-with-fireflies
- https://guide.fireflies.ai/articles/5113338943-how-do-i-stop-fireflies-from-accessing-my-google-account-and-calendar
- https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062865
- https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060122
- https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061231
- https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063852
- https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063837
- https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0083775
- https://library.zoom.com/zoom-workplace/zoom-meetings/securing-zoom-meetings-explainer/manage-automated-tools-and-participants-in-your-zoom-meetings
