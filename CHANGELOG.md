# Changelog

All notable changes to PocketMoney are listed here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- Nothing yet. Ideas and requests are welcome in the [issues](../../issues).

## [1.2.0] - 2026-10-28

### Changed
- Parking now has **three modes**: **APU Indoor** (fixed RM5.60) and **APU Outdoor** (enter your own cost) for APU students, and **General Parking** (enter your own cost) for everyone else. PocketMoney remembers the mode you used last.
- Indoor parking entries from older versions are renamed automatically to **APU Indoor Parking**.
- The **Add money** window now shows only your 4 latest top-ups, so it is less cluttered on phones. Tap **Show more** to see the rest and **Show less** to collapse the list again.
- The "Added this month" heading now shows how many top-ups you have, for example "Added this month (10)".

## [1.1.0] - 2026-10-19

### Added
- **Two parking modes**: **APU Campus** (fixed RM5.60 fee) and **General Parking** (enter your own cost). PocketMoney remembers the mode you used last.
- **Conflict merging** for cloud sync. If you changed data on two devices before they synced, both sets of changes are now merged instead of one overwriting the other.

### Changed
- Parking entries are now named **APU Campus Parking** and **General Parking**. Existing "Indoor" and "Outdoor" parking entries are renamed automatically.
- **Reset all data** now clears your cloud copy too, so your other devices reset along with this one.
- Cloud sync now checks a small revision number first and only downloads your full data when something has changed, which uses less data.

### Fixed
- Signing into a different account no longer overwrites that account's cloud data with the data stored on the device.
- Opening PocketMoney on an old device in a new month no longer overwrites newer cloud data with outdated data.
- The automatic monthly rollover is no longer treated as a manual edit when syncing.

## [1.0.0] - 2026-10-18

First public release.

### Added
- **Monthly budget** with total spent, remaining balance and a budget utilization bar.
- **Safe-to-spend** figure showing how much you can spend per day for the rest of the month, next to your average daily spend.
- **Expense categories**: Food, Parking, Uni and Stuff.
- **Quick add** buttons (+RM5, +RM10, +RM20, +RM50) and **saved quick options** for things you buy often.
- **Repeat, edit and delete** for any transaction, plus **undo**.
- **Search and filter** for the current month's transactions.
- **Monthly history and summary** with an archive of past months, money saved and a category breakdown chart.
- **Personalisation**: name, profile picture, accent colour, wallpaper, dark and light mode, and your own currency symbol.
- **Backups**: export and import JSON, and export CSV.
- **Optional cloud sync** between devices using a free account (Supabase). Each account can only see its own data.
- **Installable PWA** with offline support, for phone and PC.
- Setup files for running your own copy: `config.example.js` and `supabase-setup.sql`.
- [Privacy policy](PRIVACY.md) and [MIT license](LICENSE).

[Unreleased]: ../../compare/v1.2.0...HEAD
[1.2.0]: ../../compare/v1.1.0...v1.2.0
[1.1.0]: ../../releases/tag/v1.1.0
[1.0.0]: ../../releases/tag/v1.0.0
