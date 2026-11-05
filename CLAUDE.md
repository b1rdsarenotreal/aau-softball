# AAU Softball & Baseball

A college softball and baseball dynasty for the AAU's member schools,
starting in 2030. Softball and baseball are two separate dynasties behind a
switch in the top bar: softball has the 61 AAU schools with varsity softball,
baseball the 64 with varsity baseball (Division I and III; no Canadian member
has either). It started as a copy of the owner's MCS Dynasty and keeps its
engine and features.

**It is not synced with MCS Dynasty, SACAA Dynasty, AAU Volleyball or AAU
Dynasty.** Changes here aren't ported to those repos, and theirs aren't
ported here, unless the owner asks. (MCS and SACAA keep each other in sync;
that rule doesn't include this repo.)

## Two sides

- `league.side` is 'softball' or 'baseball'. Each side has its own save key
  (`js/store.js`: `aau-softball-league`, `aau-baseball-league`), its own team
  rows (`SOFTBALL_TEAMS`, `BASEBALL_TEAMS` in `js/data.js`) and its own
  default settings (`SIDE_SETTINGS` / `defaultSettings(side)` in
  `js/league.js`). The two never read each other's data.
- Keep features shared; put differences in data or settings, not in code
  that checks the sport.
- Baseball is softball with these settings: 9 innings (`innings`), the
  10-run rule after 7, no runner-on-second tiebreaker, about a third as many
  preseason tournaments (`tourneyShare` 0.35, weeks 1–2), 4-game Thu–Sun
  non-conference series (`nonConfSeriesGames`), 3-game conference series,
  midweek from week 2 in about two weeks of three (`midweekFreq: 'most'`), mostly a single Tuesday game and
  sometimes a Tuesday–Wednesday pair (`midweek: 'mostly-single'`), never a
  midweek doubleheader. The World Series is the College World Series at
  Charles Schwab Field, Omaha; softball's is the Women's College World Series
  at Devon Park, Oklahoma City.
- Inning counts on screen come from `settings.innings`; never hardcode 7.
- Seeds on screen: at a regional every team shows its regional seed, 1 to
  the regional's size (`regionalSeed`; regionals of 2 to 8); super regional
  hosts show their national seed; at the World Series only national seeds
  1 to `wsSize` show (`shownSeed(season, team, 'mcws')`).

## Owner's rules

- Teams start in the owner's eight conferences (the AAU Dynasty alignment),
  with drawn logos in `img/conf/` (`tools/conf_logos.py`).
- Ratings come from the 2026 season (Wikipedia, school sites); D-III programs
  are rated low. Coaches are the real 2026 head coaches. Say where data came
  from in `js/data.js`.
- User-facing text says "AAU National Tournament" and "World Series", never
  NCAA or MCWS. Internal names (`mcws`, `mcwsVenue`, `regionals`, `supers`)
  stay as they are.

## Before every commit

- `python3 tools/stamp.py`
- `sh tools/check.sh`
- `node tests/logic.test.mjs`
- `python3 tests/ui_test.py` (Playwright; Chromium is preinstalled)
