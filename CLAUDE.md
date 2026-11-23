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
  non-conference series (`nonConfSeriesGames`) until conference play begins,
  3-game ones after, 3-game conference series,
  midweek from week 2 in about two weeks of three (`midweekFreq: 'most'`), mostly a single Tuesday game and
  sometimes a Tuesday–Wednesday pair (`midweek: 'mostly-single'`), never a
  midweek doubleheader. Baseball opens two weeks after softball
  (`startWeeksLater` 2, used by `gameDate`; `startVersion` 1 set it on older
  baseball saves; the owner's rule, Nov. 2026). The World Series is the College World Series at
  Charles Schwab Field, Omaha; softball's is the Women's College World Series
  at Devon Park, Oklahoma City.
- A conference of `confHomeAwayMax` (5) or fewer teams plays each rival
  twice, a 3-game series at each field (the owner's rule, Nov. 2026); bigger
  conferences play each rival once, the host swapping every year. Both sides.
- Inning counts on screen come from `settings.innings`; never hardcode 7.
- Seeds on screen: at a regional every team shows its regional seed, 1 to
  the regional's size (`regionalSeed`; regionals of 2 to 8); super regional
  hosts show their national seed; at the World Series only national seeds
  1 to `wsSize` show (`shownSeed(season, team, 'mcws')`).

## The AAU look

- The AAU look (Nov. 2026, ported from AAU Field Hockey, built to match the
  owner's mockups): a two-row top bar (brand row, then the menu); scoreboard
  cards (`gameCard`: the conference's color bar and logo, the doubleheader
  and series tag, a row per team with the runs, hits and errors under an
  R H E header, the loser faded); standings with the conference list down
  the side (`st-*`), each conference in its colors (`confVars`, `confHead`;
  conference W-L, GB), All conferences compact, the last 5 (postseason
  included) opening the poll's game pop-up; the poll as a board (`pb-*`)
  beside movers, receiving votes and dropped out, under the No. 1 team's
  card; the team page header in the team's colors with title banners and a
  numbers strip (`teamHero`) and schedule boxes (`ts2-*`: one
  regular-season box, conference logo on conference games, a box per
  tournament, a venue column, the result opening the box score).
  Postseason → Full bracket (`renderFullBracket`, the owner's ask, Nov.
  2026) is a summary board, not drawn brackets: each regional as a list of
  its teams with their record there (faded once out), super regionals as
  series boxes, the World Series (Bracket A, Championship Series, Bracket B)
  on the navy panel in the middle, Bracket A's paths on the left and B's on
  the right; any box opens that event's whole bracket in a pop-up
  (`openEventBracket`).
  Navy `--board`, gold `--optic`; Oswald, Saira Condensed, Inter.

## Owner's rules

- Teams start in the owner's eight conferences (the AAU Dynasty alignment),
  with drawn logos in `img/conf/` (`tools/conf_logos.py`).
- Ratings come from the 2026 season (Wikipedia, school sites); D-III programs
  are rated low. Coaches are the real 2026 head coaches. Say where data came
  from in `js/data.js`.
- User-facing text says "AAU National Tournament" and "World Series", never
  NCAA or MCWS. Internal names (`mcws`, `mcwsVenue`, `regionals`, `supers`)
  stay as they are.
- Selection uses the Power Index (NPI): `npi` in `js/standings.js`, with
  each side's NCAA Division III dials in `settings.npi` (`NPI_BY_SIDE` in
  `js/league.js`), when `settings.index` is 'npi' (the default;
  `indexVersion` 1 switched older saves from the current or next season
  on). A level game counts as a tie in the NPI even if penalty kicks or a
  shootout decided it. The committee goes straight down the NPI: no tiers
  (`sheet.tiers` empty). `rating(season)` gives the season's index in the
  RPI's shape (value in `rpi`, plus `rank`, `sosRank`); use it, not
  `rpi()`, and `indexName(season)` for on-screen labels.
- Conference home and away (`js/homeaway.js`, the owner's rule, Nov. 2026):
  no team plays more than two conference weekends in a row away (`MAX_AWAY`)
  or three at home (`MAX_HOME`); a week without a conference game ends a
  run. `generateSchedule` draws the season (`drawSchedule`), then
  `spreadConfHomes` trades hosts between a pair's two meetings, turns around
  triangles of single meetings or a single meeting (every team within one
  game or series of half), and trades two conference weeks when every team
  plays on the same days in both. A pair meeting twice keeps one at each
  school. Once-a-year hosts still swap every year (`keepSwaps`): those
  conferences' round robins are drawn with that in mind
  (`swapFriendlyRounds`), and a rare team may still go three weekends away.
- Regionals avoid first-round matchups between conference rivals
  (`avoidConferenceMatchups` in `js/postseason.js`, the owner's rule): after
  the serpentine, teams on one seed line trade regionals (lowest lines
  first), then, as a last resort, a team moves one seed line; the top line
  never moves. `pods(field, n, season)` applies it, so bracketology, the
  selection preview and the announced field agree. Bracketology and the
  preview show each regional's first-round matchups.
- The Greater South Conference (the owner's, coming in; Kansas, Missouri,
  Tulane, UAB, Vanderbilt, Iowa State, Saint Louis, Memphis) has its logo
  ready (`gsc.svg`, the owner's pick: slanted GSC, striped S, compass in the
  G; Saira Black): it's in the Add conference pick (`AAU_CONFERENCES`), and
  a Greater South made by hand gets it on load (`migrateLeague`).
- The Horizon Valley Conference (the owner's, coming in; Loyola Chicago, UIC,
  IU Indianapolis, UMKC, Missouri S&T, Cincinnati, Dayton, West Virginia,
  Ohio, Southern Illinois) has its logo ready the same way (`hvc.svg`, the
  owner's pick: slanted HVC in Archivo Expanded Black with white, orange and
  plum outlines, a striped orange sun rising behind).
- The Western Athletic Conference is coming back (the owner's; Northern
  Arizona, San Diego State, Nevada, UNLV, Oregon State, BYU, Utah State,
  Washington State) with the owner's pick for its logo, the 1992–2010 WAC
  logo linked from the web (`CONF_LOGO_LINKS.wac`), ready the same way.
- The Rocky West Conference (the owner's, coming in; Colorado State, Denver,
  Colorado School of Mines, Montana, Montana State, North Dakota, North
  Dakota State, New Mexico, New Mexico State, UTEP, UTSA) and the Colonial 10
  (Northeastern, UMass Amherst, Lehigh, Temple, Rhode Island, East Carolina,
  Charlotte, George Mason, VCU) have their logos ready the same way, the
  owner's picks (Nov. 2026): `rwc.svg`, RWC slanted in Saira Black, forest
  green, before a snow-capped range and a gold sun; `c10.svg`, a block C in
  red and white stripes and a navy 10 in Bungee, a red star over the 1.
  The three conferences' thirty schools are in the Add team pick
  (`AAU_SCHOOLS`, `crop: 4`: ESPN logos, `AAU_PROGRAMS` venues for the
  sports each plays, coaches added by hand), not in the starting league.
- Realignment from AAU Dynasty (`js/realign.js`, Nov. 2026): the hub's
  Realignment page leaves a plan in IndexedDB `aau-realignment` (read
  when the app loads or comes back into view, never created here); the
  Offseason page shows it (`realignBanner`) with a review where each move,
  join and leave can be unticked (`realignModal`). Only teams in the AAU's
  all-sports conferences move; schools join only if they play this sport
  (`AAU_PROGRAMS`), at `JOIN_RATING` (60) with their venue and logo; new
  conferences get their logo; empty ones can be retired. Applied or skipped
  is kept in `league.realign[planId]`.

## Before every commit

- `python3 tools/stamp.py`
- `sh tools/check.sh`
- `node tests/logic.test.mjs`
- `python3 tests/ui_test.py` (Playwright; Chromium is preinstalled)
