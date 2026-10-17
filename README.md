# PocketMoney Tracker

A simple, good-looking personal expense tracker that runs in your browser. Set a monthly budget, log food, parking, uni and other spending, and see monthly summaries. Works on phone and PC, and syncs between devices.

**Use it now:** https://jeffyboii.github.io/PocketMoney-Tracker/

## Features
- Monthly budget with spent / remaining balance and daily safe-to-spend
- Quick-add buttons and saved quick options
- Monthly history and summary charts
- Custom name, profile picture, accent colour and wallpaper
- Export / import backups (JSON, CSV)
- Optional cloud sync between phone and PC (free account)
- Installable: works like an app and offline

## Install as an app
- **Phone:** open the link, then browser menu > *Add to Home Screen* (iPhone: Safari > Share > *Add to Home Screen*).
- **PC:** open the link in Chrome, Edge or Brave and click the install icon in the address bar.

## Your data
Without an account, your data stays in your own browser only. If you create an account under *Settings > Data Backup > Cloud Sync*, your data is saved to the cloud so your devices stay in sync. Each account can only see its own data.

## Run your own copy
1. Fork this repo and enable GitHub Pages (Settings > Pages > Deploy from `main`, `/ (root)`).
2. For cloud sync, create a free [Supabase](https://supabase.com) project, run `supabase-setup.sql` in its SQL Editor, and put your project URL and **anon** key in `config.js` (see `config.example.js`).
3. Never put a `service_role` key in this repo.

Leave `config.js` empty to run without cloud sync.

## License
MIT
