# Cloud Sync Setup

Cloud sync is optional. It uses a free [Supabase](https://supabase.com) project as the database and takes about 10 minutes. Leave `config.js` empty to run without it.

## 1. Create the database

1. Sign up at Supabase and click **New project** (any name, a region near you, set a database password).
2. Wait for it to finish creating.
3. Open **SQL Editor > New query**, paste everything from [`supabase-setup.sql`](../supabase-setup.sql) and click **Run**.
4. Go to **Authentication > Sign In / Providers > Email** and turn **off** "Confirm email" so sign-up is instant. Save.
5. Go to **Project Settings > API** and copy the **Project URL** and the **anon public** key.

> Never use the `service_role` key anywhere in this repo. Only the anon key belongs in `config.js`.

## 2. Add your keys

Copy [`config.example.js`](../config.example.js) to `config.js`, then paste the URL and anon key between the quotes.

## 3. Put the site online

Either of these works:

- **GitHub Pages:** *Settings > Pages > Deploy from branch `main`, `/ (root)`*.
- **Netlify:** drag your site folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

## 4. Sign in on every device

Open the app, go to **Settings > Data Backup > Cloud Sync**, create an account and sign in with the same email and password on each device. Each account only sees its own data.

## Moving your existing data

1. In your old app, use **Export JSON**.
2. In the new app, sign in and use **Import JSON**. It then syncs everywhere.

Sign in first on the device that has your real data. A device that signs in later takes the cloud copy.

## Updating the app

Replace `index.html` and keep your `config.js`. The app caches itself for offline use, so reload twice to see the new version.

## Troubleshooting

| Problem | Try this |
|---|---|
| "Cloud sync is not set up" | `config.js` is empty or the URL and key are wrong |
| Can't create an account | Check that "Confirm email" is off in Supabase |
| Changes not showing on another device | Reload twice, and check you're signed in to the same account |
| An old version keeps loading | The service worker cache; reload twice or clear site data |
