<p align="center">
  <img src="docs/banner.png" alt="PocketMoney: your budget, in your pocket" width="100%">
</p>

<h1 align="center">PocketMoney</h1>

<p align="center">
  <b>Your budget, in your pocket.</b><br>
  A simple expense tracker with monthly budgets, smart shortcuts and sync between phone and PC.
</p>

<p align="center">
  <img alt="runs in" src="https://img.shields.io/badge/runs%20in-any%20browser-orange">
  <img alt="installable" src="https://img.shields.io/badge/PWA-installable-blue">
  <img alt="offline" src="https://img.shields.io/badge/works-offline-brightgreen">
  <img alt="tracking" src="https://img.shields.io/badge/tracking-none-brightgreen">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-purple">
</p>

<p align="center">
  <a href="https://jeffyboii.github.io/PocketMoney-Tracker/"><b>Open the app</b></a> ·
  <a href="#install">Install</a> ·
  <a href="#features">Features</a> ·
  <a href="#cloud-sync">Cloud sync</a> ·
  <a href="PRIVACY.md">Privacy</a> ·
  <a href="#run-your-own-copy">Run your own</a>
</p>

---

PocketMoney lets you set a monthly budget, log food, parking, uni and other spending in a few taps, and see where your money went. It runs in the browser, installs like an app, works offline, and can sync between your phone and PC with a free account.

<p align="center">
  <img src="docs/screenshot-dashboard.png" alt="Dashboard" width="49%">
  <img src="docs/screenshot-summary.png" alt="Monthly summary" width="49%">
</p>

## Features

**Budgeting**
- Monthly budget with spent, remaining balance and a daily safe-to-spend figure
- Daily insight line showing days left, average spend, what you spent today and your top category
- Alerts when you hit 85% of your budget and when you go over
- Add extra money to the month when your budget changes
- Automatic monthly reset, with past months kept in the archive

**Fast logging**
- Quick add buttons and saved quick options for things you buy often
- Item suggestions from your history, with the amount filled in from last time
- Opens on the category you used last
- Enter to add, undo on delete, and a repeat button for recurring buys

**Categories**
- Choose which categories appear on your bar (Food, Parking, Uni, Stuff and more)
- Add presets like Utilities, Transport, Fun or Rent, or create your own with an emoji
- Hide a category and bring it back later without losing its history

**History and summary**
- Search and filter your transactions
- Monthly summary with a category breakdown chart
- Browse past months from the archive

**Make it yours**
- Name, profile picture, accent colour and wallpaper
- Currency setting

**Your data**
- Backups: export and import JSON, export CSV
- Cloud sync between devices (optional, free account)
- Installable and offline: works like a normal app

## Install

| Device | How |
|---|---|
| **Phone** | Open the link, then browser menu > *Add to Home Screen* (iPhone: Safari > Share > *Add to Home Screen*) |
| **PC** | Open the link in Chrome, Edge or Brave and click the install icon in the address bar |

## Cloud sync

Without an account, your data stays in your own browser only. To sync, go to *Settings > Data Backup > Cloud Sync*, create an account and sign in with the same details on every device. Each account can only see its own data. See [PRIVACY.md](PRIVACY.md).

**Moving existing data:** use *Export JSON* in your old app, then sign in on the new one and use *Import JSON*. Sign in first on the device that has your real data, because a device that signs in later takes the cloud copy.

## Run your own copy

1. Fork this repo and turn on GitHub Pages (*Settings > Pages > Deploy from branch `main`, `/ (root)`*).
2. For cloud sync, create a free [Supabase](https://supabase.com) project, run [`supabase-setup.sql`](supabase-setup.sql) in its SQL Editor, then copy your project URL and **anon** key into `config.js` (see [`config.example.js`](config.example.js)).
3. Never put a `service_role` key in this repo.

Leave `config.js` empty to run without cloud sync.

**Updating:** replace `index.html` and keep your `config.js`. The app caches itself for offline use, so reload twice to see a new version.

## Tech

A single `index.html` with no build step, plus a small service worker and web manifest for offline use and installing. Cloud sync uses Supabase when configured.

## License

[MIT](LICENSE)
