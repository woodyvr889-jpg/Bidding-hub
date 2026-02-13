/* ===============================
   EDIT FAMILY DATA HERE
================================= */

const familyData = {

  "Uncle Paul": {
    passcode: null,
    subscriptions: [
      {
        name: "V.I.M. LORD",
        status: "£5/month",
        perks: [
          { name: "Top Priority", desc: "Absolute top priority in all Gorilla Tag events" },
          { name: "All VIM Features", desc: "All VIM features unlocked (no limits)" },
          { name: "Elite Recognition", desc: "VIM-only recognition — everyone knows you’re elite" },
          { name: "Protection", desc: "Protection from negative effects" },
          { name: "Bonus Advantages", desc: "Bonus advantages in key moments" },
          { name: "Chaos Influence", desc: "Extra influence during chaos rounds" },
          { name: "Exclusive Perks", desc: "Exclusive perks for the entire event" },
          { name: "All Past Perks", desc: "Access to all past perks" },
          { name: "Monthly Rewards", desc: "x2 £2 vouchers + x10 lucky blocks every month" },
          { name: "Mod Team Access", desc: "Send announcements about updates to the new website" },
          { name: "Bonus Bundle", desc: "x1 £2 voucher, x5 lucky blocks, x10,500 points included" }
        ]
      }
    ],
    points: {
      place: 1,
      score: 153650,
      lastUpdated: "Friday 13th Feb 2026 at 21:00"
    },
    vouchers: [
      { name: "£2 Voucher", status: "Active", expires: "01/05/2026", quantity: 4 },
      { name: "£3 Voucher", status: "Active", expires: "01/04/2026", quantity: 1 },
      { name: "£3 Voucher", status: "Used on 13/02/2026", expires: null, quantity: 1 }
    ]
  },

  "Grandad Steve": {
    passcode: null,
    subscriptions: [],
    points: { place: 2, score: 128550, lastUpdated: "Friday 13th Feb 2026 at 21:00" },
    vouchers: []
  },

  "Mum": {
    passcode: null,
    subscriptions: [],
    points: { place: 3, score: 10950, lastUpdated: "Friday 13th Feb 2026 at 21:00" },
    vouchers: []
  },

  "Dad": {
    passcode: null,
    subscriptions: [],
    points: { place: 4, score: 9050, lastUpdated: "Friday 13th Feb 2026 at 21:00" },
    vouchers: []
  },

  "Nannan": {
    passcode: null,
    subscriptions: [],
    points: { place: 5, score: 6050, lastUpdated: "Friday 13th Feb 2026 at 21:00" },
    vouchers: []
  },

  "Grandma Jean": {
    passcode: null,
    subscriptions: [],
    points: { place: 6, score: 6000, lastUpdated: "Friday 13th Feb 2026 at 21:00" },
    vouchers: []
  },

  "Grandad Darren": {
    passcode: null,
    subscriptions: [],
    points: { place: 7, score: 5050, lastUpdated: "Friday 13th Feb 2026 at 21:00" },
    vouchers: []
  },

  "James": {
    passcode: "7777",
    subscriptions: [],
    points: { place: "-", score: 0, lastUpdated: "Friday 13th Feb 2026 at 21:00" },
    vouchers: []
  }

};

/* ===============================
   LOGIN LOGIC
================================= */

let selectedUser = null;

function selectUser(name) {
  selectedUser = name;

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
