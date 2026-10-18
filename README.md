<p align="center">
  <img src="docs/banner.png" alt="PocketMoney: your budget, in your pocket" width="100%">
</p>

<h1 align="center">PocketMoney</h1>

<p align="center">
  <b>Your budget, in your pocket.</b><br>
  Set a monthly budget, log spending in a few taps, and see where your money went.
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
  <a href="#get-started">Get started</a> ·
  <a href="#features">Features</a> ·
  <a href="docs/USER-GUIDE.md">User guide</a> ·
  <a href="docs/CLOUD-SYNC.md">Cloud sync</a> ·
  <a href="PRIVACY.md">Privacy</a>
</p>

---

<p align="center">
  <img src="docs/screenshot-dashboard.png" alt="Dashboard" width="49%">
  <img src="docs/screenshot-summary.png" alt="Monthly summary" width="49%">
</p>

## Get started

1. **Open** the [app](https://jeffyboii.github.io/PocketMoney-Tracker/) in any browser.
2. **Install** it so it works like a normal app and offline:

| Device | How |
|---|---|
| Phone | Browser menu > *Add to Home Screen* (iPhone: Safari > Share > *Add to Home Screen*) |
| PC | In Chrome, Edge or Brave, click the install icon in the address bar |

3. Tap **Set Budget**, then start logging. The [user guide](docs/USER-GUIDE.md) covers the rest.

No account is needed. Your data stays in your browser unless you turn on [cloud sync](docs/CLOUD-SYNC.md).

## Features

| | |
|---|---|
| 💰 **Budget** | Remaining balance, safe-to-spend per day, and alerts at 85% and when over |
| ⚡ **Fast logging** | Quick options, item suggestions that fill in the amount, last category remembered |
| 🗂️ **Categories** | Show, hide or create your own, with emoji and colours |
| 📊 **History** | Monthly archive with a category breakdown chart, plus search and filters |
| ↩️ **Safety nets** | Undo on delete, repeat buttons, JSON and CSV backups |
| 🎨 **Your style** | Name, picture, accent colour, currency and wallpaper |
| ☁️ **Sync** | Optional, free, between phone and PC |
| 📴 **Offline** | Installable and works without internet |

## Docs

- [User guide](docs/USER-GUIDE.md): how to use every part of the app
- [Cloud sync setup](docs/CLOUD-SYNC.md): Supabase, hosting, moving data, troubleshooting
- [Changelog](docs/CHANGELOG.md): what's new
- [Privacy](PRIVACY.md): what is and isn't stored

## Run your own copy

1. Fork this repo and turn on GitHub Pages (*Settings > Pages > Deploy from branch `main`, `/ (root)`*).
2. Optional: set up [cloud sync](docs/CLOUD-SYNC.md) and put your URL and **anon** key in `config.js`.
3. Never put a `service_role` key in this repo.

## Built with

A single `index.html` with no build step, plus a service worker and web manifest. Charts use Chart.js, and cloud sync uses Supabase when configured.

## License

[MIT](LICENSE)
