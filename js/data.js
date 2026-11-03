// Starting leagues, 2030. Two separate dynasties behind the switch at the
// top of the page: softball and baseball. Each has every member of the
// Association of American Universities that plays the sport at any level
// (NCAA Division I and Division III; no Canadian member has a varsity
// team), in the owner's AAU Dynasty conference alignment, with that file's
// baseball and softball memberships. Colors are each school's real colors.
//
// Ratings (OVR; split into OFF / PIT / DEF a few points apart so teams have
// a style) come from the 2026 seasons: the 2026 NCAA Division I softball
// tournament (Texas beat Texas Tech for the title; UCLA reached the WCWS)
// and its final D1Softball Top 25 (Florida, Arizona State, Duke, Texas A&M,
// Stanford, Oregon, Arizona, Virginia), the 2026 NCAA Division I baseball
// tournament (Oklahoma beat North Carolina; UCLA was the No. 1 national seed
// at 52-8, Georgia Tech No. 2; Texas reached Omaha) and its final
// D1Baseball Top 25 (Georgia Tech, UCLA, Kansas, Oregon, USC, Florida,
// Texas A&M), Wikipedia for both, plus each program's usual level for teams
// outside them. Division III programs sit well below (OVR 40-54), ordered by
// 2026 results: softball WashU (30-7-1, UAA champion), Emory (28-14, second)
// and Rochester (36-10); baseball Johns Hopkins (Division III College World
// Series), Chicago (30-15, UAA champion, regional winner) and WashU.
// Head coaches are the real ones for 2026-27 (Wikipedia's current Division I
// baseball coaches list and softball programs list, school sites). Home
// fields are each program's real field where known.

import { DEFAULT_LOGOS } from './logo-import.js?v=20261103152645';

export const START_YEAR = 2030;

export const SIDES = {
  softball: { label: 'Softball', name: 'AAU Softball' },
  baseball: { label: 'Baseball', name: 'AAU Baseball' },
};
export const sideOf = league => (league?.side === 'baseball' ? 'baseball' : 'softball');

// Conference logos the owner picked from the web (linked, not copied; the
// drawn ones in img/conf/ stay for CAC, SWC, UCAA and as fallbacks).
export const CONF_LOGO_LINKS = {
  bigten: 'https://content.sportslogos.net/logos/153/4661/full/big_ten_conference_logo_primary_20115933.png',
  ivy: 'https://content.sportslogos.net/logos/153/4824/full/ivy_league_logo_primary_2019_sportslogosnet-9024.png',
  metro: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/METRO_Primary_LtBG.png/500px-METRO_Primary_LtBG.png',
  pac10: 'https://content.sportslogos.net/logos/153/4945/full/pacific-10_conference_logo_wordmark_1995_sportslogosnet-1134.png',
  uaa: 'https://dbukjj6eu5tsf.cloudfront.net/uaasports.info/images/responsive_2023/logo-main.svg',
};

// The owner's AAU conferences, each with a drawn logo (img/conf/, made by
// tools/conf_logos.py; transparent backgrounds).
export const CONFERENCES = {
  "Big Ten": {"abbr": "B1G", "color": "#0088CE", "altColor": "#0B2A4A", "logo": CONF_LOGO_LINKS.bigten},
  "Coastal Atlantic Conference": {"abbr": "CAC", "color": "#3A4A5C", "altColor": "#5CC6C2", "logo": "img/conf/cac.svg"},
  "Ivy League": {"abbr": "IVY", "color": "#026937", "altColor": "#C9B37E", "logo": CONF_LOGO_LINKS.ivy},
  "Metro Conference": {"abbr": "METRO", "color": "#E03A3E", "altColor": "#23262D", "logo": CONF_LOGO_LINKS.metro},
  "Pacific-10 Conference": {"abbr": "P10", "color": "#092346", "altColor": "#D6A84B", "logo": CONF_LOGO_LINKS.pac10},
  "Southwest Conference": {"abbr": "SWC", "color": "#719AE8", "altColor": "#F28C38", "logo": "img/conf/swc.svg"},
  "UC Athletic Association": {"abbr": "UCAA", "color": "#0F6E7A", "altColor": "#F2C14E", "logo": "img/conf/ucaa.svg"},
  "University Athletic Association": {"abbr": "UAA", "color": "#003087", "altColor": "#F2B33D", "logo": CONF_LOGO_LINKS.uaa},
};

// [school, conference, abbr, mascot, color, altColor, OVR, home field, city, head coach]
export const SOFTBALL_TEAMS = [
  ["Texas", "Southwest Conference", "TEX", "Longhorns", "#BF5700", "#FFFFFF", 93, "Red and Charline McCombs Field", "Austin, Texas", "Mike White"],
  ["Texas A&M", "Southwest Conference", "TAMU", "Aggies", "#500000", "#FFFFFF", 83, "Davis Diamond", "College Station, Texas", "Trisha Ford"],
  ["Kansas", "Southwest Conference", "KU", "Jayhawks", "#0051BA", "#E8000D", 74, "Arrocha Ballpark", "Lawrence, Kan.", "Jennifer McFalls"],
  ["Missouri", "Southwest Conference", "MIZ", "Tigers", "#000000", "#F1B82D", 73, "Mizzou Softball Stadium", "Columbia, Mo.", "Larissa Anderson"],
  ["UAB", "Southwest Conference", "UAB", "Blazers", "#1E6B52", "#F4C300", 66, "UAB Softball Field", "Birmingham, Ala.", "Megan Curry"],
  ["UCLA", "Pacific-10 Conference", "UCLA", "Bruins", "#2D68C4", "#F2A900", 90, "Easton Stadium", "Los Angeles, Calif.", "Kelly Inouye-Perez"],
  ["Arizona State", "Pacific-10 Conference", "ASU", "Sun Devils", "#8C1D40", "#FFC627", 85, "Alberta B. Farrington Softball Stadium", "Tempe, Ariz.", "Megan Bartlett"],
  ["Stanford", "Pacific-10 Conference", "STAN", "Cardinal", "#8C1515", "#FFFFFF", 83, "Boyd & Jill Smith Family Stadium", "Stanford, Calif.", "Jessica Allister"],
  ["Oregon", "Pacific-10 Conference", "ORE", "Ducks", "#154733", "#FEE123", 82, "Jane Sanders Stadium", "Eugene, Ore.", "Melyssa Lombardi"],
  ["Arizona", "Pacific-10 Conference", "ARIZ", "Wildcats", "#0C234B", "#AB0520", 82, "Rita Hillenbrand Memorial Stadium", "Tucson, Ariz.", "Caitlin Lowe"],
  ["Washington", "Pacific-10 Conference", "UW", "Huskies", "#4B2E83", "#B7A57A", 79, "Husky Softball Stadium", "Seattle, Wash.", "Heather Tarr"],
  ["Utah", "Pacific-10 Conference", "UTAH", "Utes", "#CC0000", "#000000", 72, "Dumke Family Softball Stadium", "Salt Lake City, Utah", "Amy Hogue"],
  ["California", "Pacific-10 Conference", "CAL", "Golden Bears", "#003262", "#FDB515", 70, "Levine-Fricke Field", "Berkeley, Calif.", "Steve Singleton"],
  ["Florida", "Coastal Atlantic Conference", "FLA", "Gators", "#0021A5", "#FA4616", 88, "Katie Seashole Pressly Softball Stadium", "Gainesville, Fla.", "Tim Walton"],
  ["Duke", "Coastal Atlantic Conference", "DUKE", "Blue Devils", "#00539B", "#FFFFFF", 85, "Duke Softball Stadium", "Durham, N.C.", "Marissa Young"],
  ["Virginia", "Coastal Atlantic Conference", "UVA", "Cavaliers", "#232D4B", "#E57200", 81, "Palmer Park", "Charlottesville, Va.", "Joanna Hardin"],
  ["Georgia Tech", "Coastal Atlantic Conference", "GT", "Yellow Jackets", "#003057", "#B3A369", 78, "Shirley Clements Mewborn Field", "Atlanta, Ga.", "Aileen Morales"],
  ["South Florida", "Coastal Atlantic Conference", "USF", "Bulls", "#006747", "#CFC493", 75, "USF Softball Stadium", "Tampa, Fla.", "Ken Eriksen"],
  ["North Carolina", "Coastal Atlantic Conference", "UNC", "Tar Heels", "#7BAFD4", "#13294B", 72, "Anderson Softball Stadium", "Chapel Hill, N.C.", "Megan Smith"],
  ["Notre Dame", "Coastal Atlantic Conference", "ND", "Fighting Irish", "#0C2340", "#C99700", 71, "Melissa Cook Stadium", "Notre Dame, Ind.", "Kris Ganeff"],
  ["Maryland", "Coastal Atlantic Conference", "MD", "Terrapins", "#E21833", "#FFD200", 67, "Robert E. Taylor Stadium", "College Park, Md.", "Lauren Karn"],
  ["Michigan", "Big Ten", "MICH", "Wolverines", "#00274C", "#FFCB05", 77, "Carol Hutchins Stadium", "Ann Arbor, Mich.", "Bonnie Tholl"],
  ["Indiana", "Big Ten", "IND", "Hoosiers", "#990000", "#EEEDEB", 74, "Andy Mohr Field", "Bloomington, Ind.", "Shonda Stanton"],
  ["Northwestern", "Big Ten", "NU", "Wildcats", "#4E2A84", "#FFFFFF", 74, "Sharon J. Drysdale Field", "Evanston, Ill.", "Kate Drohan"],
  ["Wisconsin", "Big Ten", "WIS", "Badgers", "#C5050C", "#FFFFFF", 72, "Goodman Softball Complex", "Madison, Wis.", "Yvette Healy"],
  ["Ohio State", "Big Ten", "OSU", "Buckeyes", "#BB0000", "#666666", 71, "Buckeye Field", "Columbus, Ohio", "Kirin Kumar"],
  ["Minnesota", "Big Ten", "MINN", "Golden Gophers", "#7A0019", "#FFCC33", 70, "Jane Sage Cowles Stadium", "Minneapolis, Minn.", "Gretta Melsted"],
  ["Illinois", "Big Ten", "ILL", "Fighting Illini", "#13294B", "#E84A27", 69, "Eichelberger Field", "Champaign, Ill.", "Jenna Hall"],
  ["Penn State", "Big Ten", "PSU", "Nittany Lions", "#041E42", "#FFFFFF", 68, "Beard Field", "University Park, Pa.", "Clarisa Crowell"],
  ["Iowa", "Big Ten", "IOWA", "Hawkeyes", "#000000", "#FFCD00", 66, "Bob Pearl Softball Field", "Coralville, Iowa", "Stacy May-Johnson"],
  ["Michigan State", "Big Ten", "MSU", "Spartans", "#18453B", "#FFFFFF", 64, "Secchia Stadium", "East Lansing, Mich.", "Sharonda McDonald-Kelley"],
  ["Purdue", "Big Ten", "PUR", "Boilermakers", "#000000", "#CFB991", 63, "Bittinger Stadium", "West Lafayette, Ind.", "Magali Frezzotti"],
  ["Rutgers", "Metro Conference", "RUTG", "Scarlet Knights", "#CC0033", "#5F6A72", 64, "Rutgers Softball Complex", "New Brunswick, N.J.", "Kristen Butler"],
  ["Pittsburgh", "Metro Conference", "PITT", "Panthers", "#003594", "#FFB81C", 63, "Vartabedian Field", "Pittsburgh, Pa.", "Jenny Allard"],
  ["Boston University", "Metro Conference", "BU", "Terriers", "#CC0000", "#FFFFFF", 63, "BU Softball Field", "Boston, Mass.", "Ashley Waters"],
  ["Stony Brook", "Metro Conference", "SBU", "Seawolves", "#990000", "#16243E", 62, "University Field", "Stony Brook, N.Y.", "Megan Bryant"],
  ["Buffalo", "Metro Conference", "BUFF", "Bulls", "#005BBB", "#FFFFFF", 56, "Nan Harvey Field", "Amherst, N.Y.", "Chelsea Plimpton"],
  ["George Washington", "Metro Conference", "GW", "Revolutionaries", "#033C5A", "#AA9868", 55, "Mount Vernon Athletic Complex", "Washington, D.C.", "Matt Klampert"],
  ["Georgetown", "Metro Conference", "GTWN", "Hoyas", "#041E42", "#63666A", 52, "Guy Mason Field", "Washington, D.C.", "Karla Ross"],
  ["Princeton", "Ivy League", "PRIN", "Tigers", "#E77500", "#000000", 64, "Cynthia Lynn Paul '94 Field", "Princeton, N.J.", "Lisa Van Ackeren"],
  ["Harvard", "Ivy League", "HARV", "Crimson", "#A51C30", "#1E1E1E", 58, "Soldiers Softball Field", "Cambridge, Mass.", "Jenny Rohn"],
  ["Columbia", "Ivy League", "CLMB", "Lions", "#1D4F91", "#9BCBEB", 57, "Columbia Softball Field", "New York, N.Y.", "Jen Teague"],
  ["Yale", "Ivy League", "YALE", "Bulldogs", "#00356B", "#FFFFFF", 56, "DeWitt Family Field", "New Haven, Conn.", "Laura Ricciardone"],
  ["Cornell", "Ivy League", "COR", "Big Red", "#B31B1B", "#FFFFFF", 55, "Niemand–Robison Softball Field", "Ithaca, N.Y.", "Tara Smith"],
  ["Penn", "Ivy League", "PENN", "Quakers", "#011F5B", "#990000", 55, "Penn Park", "Philadelphia, Pa.", "Christie Novatin"],
  ["Dartmouth", "Ivy League", "DART", "Big Green", "#00693E", "#FFFFFF", 54, "Dartmouth Softball Park", "Hanover, N.H.", "Hillary Smith"],
  ["Brown", "Ivy League", "BRWN", "Bears", "#4E3629", "#C00404", 52, "Brown Softball Field", "Providence, R.I.", "Mary Holt-Kelsch"],
  ["UC San Diego", "UC Athletic Association", "UCSD", "Tritons", "#182B49", "#C69214", 61, "Triton Softball Field", "La Jolla, Calif.", "Nikki Palmer"],
  ["UC Davis", "UC Athletic Association", "UCD", "Aggies", "#022851", "#FFBF00", 60, "La Rue Field", "Davis, Calif.", "Amy Klyse"],
  ["UC Santa Barbara", "UC Athletic Association", "UCSB", "Gauchos", "#003660", "#FEBC11", 60, "UCSB Campus Diamond", "Santa Barbara, Calif.", "Jo Evans"],
  ["UC Riverside", "UC Athletic Association", "UCR", "Highlanders", "#003DA5", "#FFB81C", 58, "Amy S. Harrison Field", "Riverside, Calif.", "Brittany Matta"],
  ["WashU", "University Athletic Association", "WUSTL", "Bears", "#A51417", "#007360", 52, "WashU Softball Field", "St. Louis, Mo.", "Casey Cromwell"],
  ["Rochester", "University Athletic Association", "ROCH", "Yellowjackets", "#001E5F", "#FFD100", 51, "Southside Field", "Rochester, N.Y.", "Abby Hurley-Martin"],
  ["Emory", "University Athletic Association", "EMRY", "Eagles", "#012169", "#F2A900", 50, "Cooper Field", "Atlanta, Ga.", "India Chiles"],
  ["Tufts", "University Athletic Association", "TUFT", "Jumbos", "#3E8EDE", "#002E6D", 50, "Spicer Field", "Medford, Mass.", "Heather Ross"],
  ["Case Western", "University Athletic Association", "CWRU", "Spartans", "#0A304E", "#FFFFFF", 49, "Nobby's Ballpark", "Cleveland, Ohio", "Josie Henry"],
  ["MIT", "University Athletic Association", "MIT", "Engineers", "#A31F34", "#8A8B8C", 48, "Briggs Field", "Cambridge, Mass.", "Madison Trotman"],
  ["Chicago", "University Athletic Association", "UCHI", "Maroons", "#800000", "#FFFFFF", 46, "Stagg Field", "Chicago, Ill.", "Ruth Kmak"],
  ["NYU", "University Athletic Association", "NYU", "Violets", "#57068C", "#FFFFFF", 46, "NYU Softball Field", "New York, N.Y.", "Nicole Bellini"],
  ["Brandeis", "University Athletic Association", "BRAN", "Judges", "#003478", "#FFFFFF", 45, "Brandeis Softball Field", "Waltham, Mass.", "Dani Bishop"],
  ["Carnegie Mellon", "University Athletic Association", "CMU", "Tartans", "#C41230", "#6D6E71", 44, "CMU Softball Field", "Pittsburgh, Pa.", "Monica Harrison"],
];
export const BASEBALL_TEAMS = [
  ["North Carolina", "Coastal Atlantic Conference", "UNC", "Tar Heels", "#7BAFD4", "#13294B", 91, "Boshamer Stadium", "Chapel Hill, N.C.", "Scott Forbes"],
  ["Georgia Tech", "Coastal Atlantic Conference", "GT", "Yellow Jackets", "#003057", "#B3A369", 87, "Russ Chandler Stadium", "Atlanta, Ga.", "James Ramsey"],
  ["Florida", "Coastal Atlantic Conference", "FLA", "Gators", "#0021A5", "#FA4616", 84, "Condron Ballpark", "Gainesville, Fla.", "Kevin O'Sullivan"],
  ["Miami", "Coastal Atlantic Conference", "MIA", "Hurricanes", "#005030", "#F47321", 80, "Alex Rodriguez Park at Mark Light Field", "Coral Gables, Fla.", "J. D. Arteaga"],
  ["Virginia", "Coastal Atlantic Conference", "UVA", "Cavaliers", "#232D4B", "#E57200", 80, "Davenport Field at Disharoon Park", "Charlottesville, Va.", "Chris Pollard"],
  ["Duke", "Coastal Atlantic Conference", "DUKE", "Blue Devils", "#00539B", "#FFFFFF", 74, "Jack Coombs Field", "Durham, N.C.", "Corey Muscara"],
  ["Notre Dame", "Coastal Atlantic Conference", "ND", "Fighting Irish", "#0C2340", "#C99700", 72, "Frank Eck Stadium", "Notre Dame, Ind.", "Shawn Stiffler"],
  ["South Florida", "Coastal Atlantic Conference", "USF", "Bulls", "#006747", "#CFC493", 72, "USF Baseball Stadium", "Tampa, Fla.", "Mitch Hannahs"],
  ["Maryland", "Coastal Atlantic Conference", "MD", "Terrapins", "#E21833", "#FFD200", 70, "Shipley Field", "College Park, Md.", "Matt Swope"],
  ["UCLA", "Pacific-10 Conference", "UCLA", "Bruins", "#2D68C4", "#F2A900", 90, "Jackie Robinson Stadium", "Los Angeles, Calif.", "John Savage"],
  ["Oregon", "Pacific-10 Conference", "ORE", "Ducks", "#154733", "#FEE123", 85, "PK Park", "Eugene, Ore.", "Mark Wasikowski"],
  ["USC", "Pacific-10 Conference", "USC", "Trojans", "#990000", "#FFC72C", 84, "Dedeaux Field", "Los Angeles, Calif.", "Andy Stankiewicz"],
  ["Arizona State", "Pacific-10 Conference", "ASU", "Sun Devils", "#8C1D40", "#FFC627", 79, "Phoenix Municipal Stadium", "Phoenix, Ariz.", "Willie Bloomquist"],
  ["Arizona", "Pacific-10 Conference", "ARIZ", "Wildcats", "#0C234B", "#AB0520", 76, "Hi Corbett Field", "Tucson, Ariz.", "Chip Hale"],
  ["Stanford", "Pacific-10 Conference", "STAN", "Cardinal", "#8C1515", "#FFFFFF", 72, "Klein Field at Sunken Diamond", "Stanford, Calif.", "David Esquer"],
  ["Washington", "Pacific-10 Conference", "UW", "Huskies", "#4B2E83", "#B7A57A", 70, "Husky Ballpark", "Seattle, Wash.", "Eddie Smith"],
  ["California", "Pacific-10 Conference", "CAL", "Golden Bears", "#003262", "#FDB515", 68, "Evans Diamond", "Berkeley, Calif.", "Mike Neu"],
  ["Utah", "Pacific-10 Conference", "UTAH", "Utes", "#CC0000", "#000000", 66, "America First Ballpark", "Salt Lake City, Utah", "Gary Henderson"],
  ["Texas", "Southwest Conference", "TEX", "Longhorns", "#BF5700", "#FFFFFF", 89, "UFCU Disch–Falk Field", "Austin, Texas", "Jim Schlossnagle"],
  ["Kansas", "Southwest Conference", "KU", "Jayhawks", "#0051BA", "#E8000D", 84, "Hoglund Ballpark", "Lawrence, Kan.", "Dan Fitzgerald"],
  ["Texas A&M", "Southwest Conference", "TAMU", "Aggies", "#500000", "#FFFFFF", 83, "Olsen Field at Blue Bell Park", "College Station, Texas", "Michael Earley"],
  ["Vanderbilt", "Southwest Conference", "VAN", "Commodores", "#000000", "#CFAE70", 76, "Hawkins Field", "Nashville, Tenn.", "Tim Corbin"],
  ["Tulane", "Southwest Conference", "TULN", "Green Wave", "#006747", "#418FDE", 72, "Greer Field at Turchin Stadium", "New Orleans, La.", "Jay Uhlman"],
  ["Missouri", "Southwest Conference", "MIZ", "Tigers", "#000000", "#F1B82D", 66, "Taylor Stadium", "Columbia, Mo.", "Kerrick Jackson"],
  ["UAB", "Southwest Conference", "UAB", "Blazers", "#1E6B52", "#F4C300", 64, "Jerry D. Young Memorial Field", "Birmingham, Ala.", "Casey Dunn"],
  ["Rice", "Southwest Conference", "RICE", "Owls", "#00205B", "#7C7E7F", 64, "Reckling Park", "Houston, Texas", "David Pierce"],
  ["Indiana", "Big Ten", "IND", "Hoosiers", "#990000", "#EEEDEB", 72, "Bart Kaufman Field", "Bloomington, Ind.", "Jeff Mercer"],
  ["Iowa", "Big Ten", "IOWA", "Hawkeyes", "#000000", "#FFCD00", 72, "Duane Banks Field", "Coralville, Iowa", "Rick Heller"],
  ["Michigan", "Big Ten", "MICH", "Wolverines", "#00274C", "#FFCB05", 70, "Ray Fisher Stadium", "Ann Arbor, Mich.", "Tracy Smith"],
  ["Illinois", "Big Ten", "ILL", "Fighting Illini", "#13294B", "#E84A27", 70, "Illinois Field", "Champaign, Ill.", "Dan Hartleb"],
  ["Purdue", "Big Ten", "PUR", "Boilermakers", "#000000", "#CFB991", 69, "Alexander Field", "West Lafayette, Ind.", "Greg Goff"],
  ["Penn State", "Big Ten", "PSU", "Nittany Lions", "#041E42", "#FFFFFF", 68, "Medlar Field at Lubrano Park", "University Park, Pa.", "Mike Gambino"],
  ["Michigan State", "Big Ten", "MSU", "Spartans", "#18453B", "#FFFFFF", 66, "Drayton McLane Baseball Stadium at John H. Kobs Field", "East Lansing, Mich.", "Jake Boss"],
  ["Ohio State", "Big Ten", "OSU", "Buckeyes", "#BB0000", "#666666", 66, "Bill Davis Stadium", "Columbus, Ohio", "Justin Haire"],
  ["Minnesota", "Big Ten", "MINN", "Golden Gophers", "#7A0019", "#FFCC33", 64, "Siebert Field", "Minneapolis, Minn.", "Ty McDevitt"],
  ["Northwestern", "Big Ten", "NU", "Wildcats", "#4E2A84", "#FFFFFF", 63, "Rocky Miller Park", "Evanston, Ill.", "Ben Greenspan"],
  ["Rutgers", "Metro Conference", "RUTG", "Scarlet Knights", "#CC0033", "#5F6A72", 70, "Bainton Field", "Piscataway, N.J.", "Steve Owens"],
  ["Pittsburgh", "Metro Conference", "PITT", "Panthers", "#003594", "#FFB81C", 66, "Charles L. Cost Field", "Pittsburgh, Pa.", "Mike Bell"],
  ["Stony Brook", "Metro Conference", "SBU", "Seawolves", "#990000", "#16243E", 64, "Joe Nathan Field", "Stony Brook, N.Y.", "Jim Martin"],
  ["George Washington", "Metro Conference", "GW", "Revolutionaries", "#033C5A", "#AA9868", 60, "Barcroft Park", "Arlington, Va.", "Gregg Ritchie"],
  ["Georgetown", "Metro Conference", "GTWN", "Hoyas", "#041E42", "#63666A", 60, "Capital One Park", "Tysons, Va.", "Edwin Thompson"],
  ["Yale", "Ivy League", "YALE", "Bulldogs", "#00356B", "#FFFFFF", 66, "Bush Field", "West Haven, Conn.", "Brian Hamm"],
  ["Columbia", "Ivy League", "CLMB", "Lions", "#1D4F91", "#9BCBEB", 62, "Robertson Field at Satow Stadium", "New York, N.Y.", "Brett Boretti"],
  ["Penn", "Ivy League", "PENN", "Quakers", "#011F5B", "#990000", 62, "Meiklejohn Stadium", "Philadelphia, Pa.", "John Yurkow"],
  ["Princeton", "Ivy League", "PRIN", "Tigers", "#E77500", "#000000", 58, "Bill Clarke Field", "Princeton, N.J.", "Ryan Forrest"],
  ["Harvard", "Ivy League", "HARV", "Crimson", "#A51C30", "#1E1E1E", 57, "Joseph J. O'Donnell Field", "Allston, Mass.", "Bill Decker"],
  ["Cornell", "Ivy League", "COR", "Big Red", "#B31B1B", "#FFFFFF", 56, "Booth Field", "Ithaca, N.Y.", "Dan Pepicelli"],
  ["Dartmouth", "Ivy League", "DART", "Big Green", "#00693E", "#FFFFFF", 56, "Red Rolfe Field at Biondi Park", "Hanover, N.H.", "Blake McFadden"],
  ["Brown", "Ivy League", "BRWN", "Bears", "#4E3629", "#C00404", 55, "Murray Stadium", "Providence, R.I.", "Frank Holbrook"],
  ["UC Santa Barbara", "UC Athletic Association", "UCSB", "Gauchos", "#003660", "#FEBC11", 78, "Caesar Uyesaka Stadium", "Santa Barbara, Calif.", "Andrew Checketts"],
  ["UC Irvine", "UC Athletic Association", "UCI", "Anteaters", "#0064A4", "#FFD200", 75, "Cicerone Field at Anteater Ballpark", "Irvine, Calif.", "Ben Orloff"],
  ["UC San Diego", "UC Athletic Association", "UCSD", "Tritons", "#182B49", "#C69214", 66, "Triton Ballpark", "La Jolla, Calif.", "Eric Newman"],
  ["UC Davis", "UC Athletic Association", "UCD", "Aggies", "#022851", "#FFBF00", 62, "Dobbins Stadium", "Davis, Calif.", "Tommy Nicholson"],
  ["UC Riverside", "UC Athletic Association", "UCR", "Highlanders", "#003DA5", "#FFB81C", 60, "Riverside Sports Complex", "Riverside, Calif.", "Gregg Wallis"],
  ["Caltech", "UC Athletic Association", "CIT", "Beavers", "#FF6C0C", "#333333", 40, "Caltech Baseball Field", "Pasadena, Calif.", "Frank Craska"],
  ["Johns Hopkins", "University Athletic Association", "JHU", "Blue Jays", "#002D72", "#68ACE5", 54, "Babb Field at Stadium", "Baltimore, Md.", "Nate Mulberg"],
  ["Chicago", "University Athletic Association", "UCHI", "Maroons", "#800000", "#FFFFFF", 52, "J. Kyle Anderson Stadium", "Chicago, Ill.", "Kevin Tyrrell"],
  ["WashU", "University Athletic Association", "WUSTL", "Bears", "#A51417", "#007360", 50, "Kelly Field", "St. Louis, Mo.", "Pat Bloom"],
  ["Tufts", "University Athletic Association", "TUFT", "Jumbos", "#3E8EDE", "#002E6D", 49, "Huskins Field", "Medford, Mass.", "Bryan Stark"],
  ["Case Western", "University Athletic Association", "CWRU", "Spartans", "#0A304E", "#FFFFFF", 48, "Mather Park", "Cleveland, Ohio", "Matt Englander"],
  ["Emory", "University Athletic Association", "EMRY", "Eagles", "#012169", "#F2A900", 47, "Chappell Park", "Atlanta, Ga.", "Bobby Perez"],
  ["Brandeis", "University Athletic Association", "BRAN", "Judges", "#003478", "#FFFFFF", 46, "Stein Diamond", "Waltham, Mass.", "Derek Carlson"],
  ["MIT", "University Athletic Association", "MIT", "Engineers", "#A31F34", "#8A8B8C", 45, "Briggs Field", "Cambridge, Mass.", "Chris Morris"],
  ["Rochester", "University Athletic Association", "ROCH", "Yellowjackets", "#001E5F", "#FFD100", 44, "Towers Field", "Rochester, N.Y.", "Joe Reina"],
];

// Home fields for older saves without one (softball's; baseball teams
// always start with their own).
export const SITES = Object.fromEntries(SOFTBALL_TEAMS.map(r => [r[0], [r[7], r[8]]]));
export const COACHES = Object.fromEntries(SOFTBALL_TEAMS.map(r => [r[0], r[9]]));

// Names the logo lists may know a school by.
export const LOGO_ALIASES = { Penn: 'Pennsylvania', 'Boston University': 'Boston University', 'George Washington': 'George Washington' };

function hashName(s) { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0; return h; }

export function makeTeam({ school, conference, abbr, mascot = '', coach = '', coachId = null, color = '#555555', altColor = '#dddddd', off = 65, pit = 65, def = 65, stadium, city }) {
  const known = SITES[school] || [];
  return {
    school, conference, abbr: abbr || school.replace(/[^A-Za-z ]/g, '').split(/\s+/).map(w => w[0]).join('').slice(0, 4).toUpperCase(),
    mascot, coach, coachId, color, altColor, off, pit, def, base: { off, pit, def }, logoOverride: null,
    stadium: stadium || known[0] || '', city: city || known[1] || '',
  };
}

// Gives a team its home field from SITES if it has none yet (older saves).
export function fillSite(t) {
  if (t.stadium !== undefined && t.city !== undefined) return;
  const known = SITES[t.school] || [];
  t.stadium ??= known[0] || '';
  t.city ??= known[1] || '';
}

// OVR -> OFF / PIT / DEF: each team leans a little one way (hitting,
// pitching or defense), keeping the same OVR (40% OFF, 40% PIT, 20% DEF).
export function splitOvr(school, ovr) {
  const h = hashName(school);
  const a = (h % 7) - 3, b = ((h >>> 4) % 7) - 3;
  const off = ovr + a, pit = ovr + b, def = Math.round(ovr - (0.4 * a + 0.4 * b) / 0.2);
  const c = x => Math.max(40, Math.min(99, x));
  return { off: c(off), pit: c(pit), def: c(def) };
}

export function seedTeams(side = 'softball') {
  const teams = {};
  for (const [school, conference, abbr, mascot, color, altColor, ovr, stadium, city, coach] of side === 'baseball' ? BASEBALL_TEAMS : SOFTBALL_TEAMS) {
    teams[school] = makeTeam({ school, conference, abbr, mascot, coach, color, altColor, stadium, city, ...splitOvr(school, ovr) });
    // The AAU Dynasty's logos win over the automatic logo lists.
    teams[school].logoOverride = DEFAULT_LOGOS[school] || null;
  }
  return teams;
}
export const conferencesFor = () => CONFERENCES;
