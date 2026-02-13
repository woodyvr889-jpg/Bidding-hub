/* ===============================
   EDIT FAMILY DATA HERE
================================= */

const familyData = {

  James: {
    passcode: "7777",
    subscriptions: [
      { name: "Netflix", status: "£5/month", perks: [
        { name: "HD Streaming", desc: "Watch in high quality" },
        { name: "2 Screens", desc: "Watch on two devices" }
      ]},
      { name: "Spotify", status: "Cancelled", perks: [
        { name: "No Ads", desc: "Ad-free listening" }
      ]}
    ],
    points: {
      place: 1,
      score: 1200,
      lastUpdated: "13 Feb 2026"
    },
    vouchers: [
      { name: "Voucher 1", value: "£2", expires: "01/01/2027" }
    ]
  },

  Mum: {
    passcode: null,
    subscriptions: [],
    points: { place: 2, score: 850, lastUpdated: "13 Feb 2026" },
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

  const subs = document.getElementById("subscriptionsSection");
  subs.innerHTML = "<h2>Your Subscriptions</h2>";

  data.subscriptions.forEach(sub => {
    subs.innerHTML += `
      <p><strong>${sub.name}</strong> - ${sub.status}</p>
    `;
  });

  const points = document.getElementById("pointsSection");
  points.innerHTML = `
    <h2>Your Points</h2>
    <p>Place: ${data.points.place}</p>
    <p>Score: ${data.points.score}</p>
    <p>Last updated: ${data.points.lastUpdated}</p>
  `;

  const vouchers = document.getElementById("voucherSection");
  vouchers.innerHTML = "<h2>Your Vouchers</h2>";

  data.vouchers.forEach(v => {
    vouchers.innerHTML += `
      <p>${v.name} - ${v.value} - Expires ${v.expires}</p>
    `;
  });
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
