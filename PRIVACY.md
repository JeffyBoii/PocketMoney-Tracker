# Privacy

PocketMoney Tracker is a personal expense tracker. This page explains what happens to your data.

## Without an account
Your expenses, budget, name, picture and wallpaper are saved **only in your own browser** (local storage) on your own device. Nothing is sent to a server. Clearing your browser data or using Factory Reset deletes it.

## With a Cloud Sync account
If you create an account under *Settings > Data Backup > Cloud Sync*:
- Your **email address** and a **scrambled (hashed) password** are stored by [Supabase](https://supabase.com), which provides the sign-in and database. The app never sees or stores your plain password.
- A copy of your app data (expenses, budget, profile name, picture, wallpaper, settings) is stored in a Supabase database so your devices can stay in sync.
- Each account can only read and change its own data (enforced with row level security).
- The person who runs this app's Supabase project can technically see the stored rows in their dashboard. If you do not want that, run your own copy (see the README).

## What is not collected
No ads, no analytics, no tracking and no selling or sharing of your data.

## Third-party requests
When the page loads, your browser fetches fonts from Google Fonts and the Supabase library from jsDelivr, and the site is hosted on GitHub Pages / Netlify. These services may log standard request information such as your IP address, under their own privacy policies.

## Deleting your data
- **Factory Reset** (Settings > Data Backup) deletes the data on your device and the synced copy in the cloud.
- To remove your account completely, open an issue on this repository or contact the project owner.

## Questions
Open an issue on this repository.
