/* ===============================
   EDIT FAMILY DATA HERE
================================= */

const familyData = {

  "Uncle Paul": {
    passcode: null,
    subscriptions: [
      {
        name: "V.I.M. LORD. To activate your perks, please tell James what perks you want active. Whichever ones are active, shall renew every month at payment.",
        status: "£5/month",
        perks: [
          { name: "Top Priority", desc: "Absolute top priority in all Gorilla Tag events" },
          { name: "All VIM Features", desc: "All VIM features unlocked (no limits)" },
          { name: "Elite Recognition", desc: "VIM-only recognition — everyone knows you’re elite. Your name gets put in Group description & group admin role given." },
          { name: "Protection", desc: "Protection from negative effects" },
          { name: "Bonus Advantages", desc: "Bonus advantages in key moments" },
          { name: "Chaos Influence", desc: "Extra influence during chaos rounds" },
          { name: "Exclusive Perks", desc: "Exclusive perks for the entire event" },
          { name: "All Past Perks", desc: "Access to all past perks" },
          { name: "Monthly Rewards", desc: "x2 £2 vouchers + x10 lucky blocks every month" },
          { name: "Mod Team Access", desc: "Send announcements about updates to the new website" },
          { name: "Bonus Bundle", desc: "x1 £2 voucher, x5 lucky blocks, x10,500 points included" },
          { name: "Bonus Bundle 2", desc: "5 lucky blocks" }
        ]
      }
    ],
    points: {
      place: 2,
      score: 164650 + 150000, // Added 150,000 points
      lastUpdated: "Saturday 28th February 2026, 13:00"
    },
    vouchers: [
      { name: "£2 Voucher", status: "Active", expires: "01/05/2026", quantity: 4 },
      { name: "£3 Voucher", status: "Active", expires: "01/04/2026", quantity: 1 },
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

   "Uncle Lee": {
    passcode: null,
    subscriptions: [],
    points: {
      place: 9,
      score: 150000,
      lastUpdated: "Saturday 28th February 2026, 14:43"
    },
    vouchers: [
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

  "Grandad Steve": {
    passcode: null,
    subscriptions: [
      {
        name: "👑 GOLDEN OWNER TIER (v2)",
        status: "£10",
        perks: [
          { name: "Golden Owner Title", desc: "Official Golden Owner (v2) title" },
          { name: "Priority Callouts", desc: "Priority callouts at ANY moment — no waiting" },
          { name: "Power Advantage", desc: "Guaranteed power advantage during a critical event phase" },
          { name: "Classified Bonus", desc: "Exclusive classified bonus (revealed when activated)" },
          { name: "Limited Protection", desc: "Limited protection from select negative effects" },
          { name: "Public Recognition", desc: "Public recognition as the event’s Golden Owner (v2)" }
        ]
      }
    ],
    points: {
      place: 1,
      score: 229050 + 150000, // Added 150,000 points
      lastUpdated: "Saturday 28th February 2026, 13:00"
    },
    vouchers: [
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

  "Mum": {
    passcode: null,
    subscriptions: [],
    points: {
      place: 3,
      score: 11450 + 150000,
      lastUpdated: "Saturday 28th February 2026, 13:00"
    },
    vouchers: [
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

   "Auntie Emily": {
    passcode: null,
    subscriptions: [],
    points: {
      place: 8,
      score: 150000,
      lastUpdated: "Saturday 28th February 2026, 14:41"
    },
    vouchers: [
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

  "Dad": {
    passcode: null,
    subscriptions: [],
    points: {
      place: 4,
      score: 9550 + 150000,
      lastUpdated: "Saturday 28th February 2026, 13:00"
    },
    vouchers: [
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

  "Nannan": {
    passcode: null,
    subscriptions: [],
    points: {
      place: 5,
      score: 6550 + 150000,
      lastUpdated: "Saturday 28th February 2026, 13:00"
    },
    vouchers: [
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

  "Grandma Jean": {
    passcode: null,
    subscriptions: [],
    points: {
      place: 6,
      score: 6500 + 150000,
      lastUpdated: "Saturday 28th February 2026, 13:00"
    },
    vouchers: [
      { name: "£2 Voucher", status: "Active", expires: "Does not expire, unlimited quantity.", quantity: 0 },
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

  "Grandad Darren": {
    passcode: null,
    subscriptions: [],
    points: {
      place: 7,
      score: 5550 + 150000,
      lastUpdated: "Saturday 28th February 2026, 13:00"
    },
    vouchers: [
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  },

  "James": {
    passcode: "7777",
    subscriptions: [],
    points: {
      place: 0,
      score: 0,
      lastUpdated: "-"
    },
    vouchers: [
      { name: "£1.50 Voucher", status: "Active", expires: "01/06/2026", quantity: 1 }
    ]
  }

};

/* AUTO FIX LEADERBOARD BASED ON POINTS */
const sortedUsers = Object.entries(familyData)
  .sort((a, b) => b[1].points.score - a[1].points.score);

sortedUsers.forEach((user, index) => {
  familyData[user[0]].points.place = index + 1;
});


/* ===============================
   LOGIN LOGIC
================================= */

let selectedUser = null;

function selectUser(name) {

  selectedUser = name;

  if (!familyData[name]) {
    alert("User not found.");
    return;
  }

  if (familyData[name].passcode) {
    document.getElementById("passcodeBox").style.display = "block";
  } else {
    localStorage.setItem("loggedInUser", name);
    window.location.href = "hub.html";
  }

}

function verifyPasscode() {

  const input = document.getElementById("passcodeInput").value;

  if (input === familyData[selectedUser].passcode) {
    localStorage.setItem("loggedInUser", selectedUser);
    window.location.href = "hub.html";
  } else {
    alert("Wrong passcode");
  }

}

/* ===============================
   SCROLL ANIMATIONS
================================= */

const cards = document.querySelectorAll(".card");

function revealCards() {

  const trigger = window.innerHeight * 0.9;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < trigger) {
      card.classList.add("visible");
    }

  });

}

window.addEventListener("scroll", revealCards);

window.addEventListener("load", revealCards);


/* ===============================
   HUB RENDERING
================================= */

if (window.location.pathname.includes("hub.html")) {

  const user = localStorage.getItem("loggedInUser");

  if (!user) {
    window.location.href = "index.html";
  } else {
    loadHub(user);
  }

}


function loadHub(user) {

  const data = familyData[user];

  document.getElementById("welcomeText").innerText =
    `Welcome, ${user}`;


  /* SUBSCRIPTIONS */

  const subs = document.getElementById("subscriptionsSection");

  subs.innerHTML = "<h2>Your Subscriptions</h2>";

  if (data.subscriptions.length === 0) {

    subs.innerHTML += "<p>No active subscriptions.</p>";

  }

  data.subscriptions.forEach(sub => {

    subs.innerHTML += `
      <div style="margin-top:15px;">
        <strong>${sub.name}</strong> - ${sub.status}
        <div style="margin-top:10px;">
          ${sub.perks.map(perk =>
            `<p>• <strong>${perk.name}</strong>: ${perk.desc}</p>`
          ).join("")}
        </div>
      </div>
    `;

  });


  /* POINTS */

  const points = document.getElementById("pointsSection");

  points.innerHTML = `
    <h2>Your Points</h2>
    <p><strong>Leaderboard Place:</strong> ${data.points.place}</p>
    <p><strong>Total Points:</strong> ${data.points.score.toLocaleString()}</p>
    <p><strong>Last Updated:</strong> ${data.points.lastUpdated}</p>
    <p style="margin-top:10px;">🏅 50 points are added weekly to everyone.</p>
  `;


  /* VOUCHERS */

  const vouchers = document.getElementById("voucherSection");

  vouchers.innerHTML = "<h2>Your Vouchers</h2>";

  if (data.vouchers.length === 0) {

    vouchers.innerHTML += "<p>No vouchers available.</p>";

  }

  data.vouchers.forEach(v => {

    vouchers.innerHTML += `
      <div style="margin-top:10px;">
        <p>
          <strong>${v.quantity}x ${v.name}</strong> -
          ${v.status}
          ${v.expires ? `- Expires ${v.expires}` : ""}
        </p>
      </div>
    `;

  });

}


function logout() {

  localStorage.removeItem("loggedInUser");

  window.location.href = "index.html";

}
