/* ═══════════════════════════════════════════
   homestays — Main App JavaScript
   Data, UI logic, routing, modals
═══════════════════════════════════════════ */

/* ══ DATA ══ */
const STAYS = [
  {
    id: "s1",
    name: "Samode Haveli Heritage",
    type: "Heritage Haveli",
    loc: "Jaipur, Rajasthan",
    state: "Rajasthan",
    price: 6500,
    rating: 4.97,
    reviews: 312,
    guests: 6,
    rooms: 3,
    amenities: ["WiFi", "AC", "Pool", "Heritage Tour", "Breakfast"],
    desc: "A stunning 250-year-old haveli with frescoed walls, inner courtyards, and royal hospitality. Traditional Rajasthani breakfast and cultural performance included.",
    host: "Vikram Singh",
    host_since: "2020",
    discount: null,
    badge: "Guest Favourite",
    emoji: "🏰",
    photos: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80",
    ],
  },
  {
    id: "s2",
    name: "Havelock Beach Cottage",
    type: "Beach Cottage",
    loc: "Havelock Island, Andaman",
    state: "Andaman",
    price: 4200,
    rating: 4.89,
    reviews: 187,
    guests: 4,
    rooms: 2,
    amenities: ["AC", "Snorkeling", "Sea View", "Kayak", "WiFi"],
    desc: "Wake up to the sound of waves on Radhanagar beach. Steps from one of Asia's best beaches with snorkeling gear included.",
    host: "Priya Nair",
    host_since: "2021",
    discount: 15,
    badge: "New",
    emoji: "🏖️",
    photos: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
    ],
  },
  {
    id: "s3",
    name: "Himalayan Pine Retreat",
    type: "Mountain Retreat",
    loc: "Manali, Himachal Pradesh",
    state: "Himachal",
    price: 3800,
    rating: 4.94,
    reviews: 428,
    guests: 5,
    rooms: 2,
    amenities: ["Bonfire", "Mountain View", "Trekking", "Yoga", "WiFi"],
    desc: "Nestled among pine forests at 2,400m. Panoramic Himalayan views, cozy fireplace, home-cooked Himachali meals and trekking guides.",
    host: "Arun Thakur",
    host_since: "2019",
    discount: null,
    badge: "Guest Favourite",
    emoji: "🏔️",
    photos: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
      "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=400&q=80",
    ],
  },
  {
    id: "s4",
    name: "Kerala Backwater Houseboat",
    type: "Houseboat",
    loc: "Alleppey, Kerala",
    state: "Kerala",
    price: 8900,
    rating: 4.96,
    reviews: 543,
    guests: 6,
    rooms: 3,
    amenities: ["Full Board", "Chef", "AC", "Fishing", "Kayak"],
    desc: "Drift through Kerala's magical backwaters on a private luxury houseboat. Full-board with traditional Kerala cuisine and sunset views over Vembanad Lake.",
    host: "Thomas Mathew",
    host_since: "2018",
    discount: 10,
    badge: "Superhost",
    emoji: "⛵",
    photos: [
      "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&q=80",
      "https://images.unsplash.com/photo-1547481887-a26e2cacb5b2?w=400&q=80",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=400&q=80",
    ],
  },
  {
    id: "s5",
    name: "Ranthambore Jungle Lodge",
    type: "Jungle Lodge",
    loc: "Sawai Madhopur, Rajasthan",
    state: "Rajasthan",
    price: 12000,
    rating: 4.92,
    reviews: 234,
    guests: 4,
    rooms: 2,
    amenities: ["Safari", "Pool", "WiFi", "Nature Walk", "Bonfire"],
    desc: "Luxury tented lodge on the edge of Ranthambore Tiger Reserve. Morning and evening tiger safaris included with naturalist guide.",
    host: "Rajendra Meena",
    host_since: "2020",
    discount: null,
    badge: "Rare Find",
    emoji: "🐯",
    photos: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80",
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&q=80",
    ],
  },
  {
    id: "s6",
    name: "Varanasi Ghat Guesthouse",
    type: "Heritage Haveli",
    loc: "Varanasi, Uttar Pradesh",
    state: "UP",
    price: 2800,
    rating: 4.88,
    reviews: 612,
    guests: 3,
    rooms: 2,
    amenities: ["Ganga View", "Yoga", "WiFi", "Boat Ride", "Breakfast"],
    desc: "A 200-year-old haveli overlooking the holy Ganges. Watch morning Ganga Aarti from your private balcony. Yoga at sunrise, boat rides at dusk.",
    host: "Pandit Ramesh",
    host_since: "2019",
    discount: null,
    badge: "Guest Favourite",
    emoji: "🕌",
    photos: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
      "https://images.unsplash.com/photo-1609017909889-d7b582c072f7?w=400&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
    ],
  },
  {
    id: "s7",
    name: "Coorg Coffee Estate Stay",
    type: "Eco Stay",
    loc: "Coorg, Karnataka",
    state: "Karnataka",
    price: 5500,
    rating: 4.95,
    reviews: 289,
    guests: 8,
    rooms: 4,
    amenities: ["Coffee Tour", "Pool", "WiFi", "Bird Watching", "Breakfast"],
    desc: "Stay on a working 200-acre coffee and spice estate. Morning estate walks, home-cooked Kodava meals, bird watching with 200+ species.",
    host: "Kavitha Thimmaiah",
    host_since: "2021",
    discount: 20,
    badge: "Eco Certified",
    emoji: "☕",
    photos: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
      "https://images.unsplash.com/photo-1511525098513-f2e99f2d1b04?w=400&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    ],
  },
  {
    id: "s8",
    name: "Goa Luxury Pool Villa",
    type: "Beach Cottage",
    loc: "North Goa, Goa",
    state: "Goa",
    price: 15000,
    rating: 4.91,
    reviews: 178,
    guests: 10,
    rooms: 5,
    amenities: ["Private Pool", "AC", "Beach Access", "Chef", "Butler"],
    desc: "Portuguese-era villa with private pool, lush gardens and 2-minute walk to Anjuna beach. Private chef and butler service included.",
    host: "Fernandez Family",
    host_since: "2020",
    discount: null,
    badge: "Luxury",
    emoji: "🌴",
    photos: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
    ],
  },
  {
    id: "s9",
    name: "Rajasthan Desert Camp",
    type: "Village Home",
    loc: "Jaisalmer, Rajasthan",
    state: "Rajasthan",
    price: 4500,
    rating: 4.93,
    reviews: 456,
    guests: 4,
    rooms: 2,
    amenities: ["Camel Safari", "Bonfire", "Folk Music", "Stargazing", "WiFi"],
    desc: "Luxury desert camp in the Thar Desert with Swiss tents, camel safaris and folk performances under a million stars.",
    host: "Devi Singh",
    host_since: "2019",
    discount: null,
    badge: "Guest Favourite",
    emoji: "🐪",
    photos: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&q=80",
    ],
  },
  {
    id: "s10",
    name: "Darjeeling Tea Garden Villa",
    type: "Mountain Retreat",
    loc: "Darjeeling, West Bengal",
    state: "WB",
    price: 7200,
    rating: 4.97,
    reviews: 134,
    guests: 6,
    rooms: 3,
    amenities: [
      "Tea Tour",
      "Kanchenjunga View",
      "WiFi",
      "Bonfire",
      "Breakfast",
    ],
    desc: "Colonial bungalow on a working tea garden with views of Kanchenjunga. Morning tea walks and personal tea sommelier.",
    host: "Subir Banerjee",
    host_since: "2020",
    discount: null,
    badge: "Rare Find",
    emoji: "🍵",
    photos: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    ],
  },
  {
    id: "s11",
    name: "Munnar Treehouse",
    type: "Tree House",
    loc: "Munnar, Kerala",
    state: "Kerala",
    price: 3600,
    rating: 4.85,
    reviews: 221,
    guests: 2,
    rooms: 1,
    amenities: ["AC", "Forest View", "WiFi", "Breakfast"],
    desc: "Perched 20 feet up in a jackfruit tree surrounded by tea estates. Wake up to misty mountains and breakfast by rope pulley.",
    host: "Joseph Alex",
    host_since: "2022",
    discount: null,
    badge: "Unique Stay",
    emoji: "🌳",
    photos: [
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&q=80",
    ],
  },
  {
    id: "s12",
    name: "Mysore Palace View Suite",
    type: "Heritage Haveli",
    loc: "Mysore, Karnataka",
    state: "Karnataka",
    price: 9800,
    rating: 4.98,
    reviews: 89,
    guests: 4,
    rooms: 2,
    amenities: ["Palace View", "Pool", "Spa", "Heritage Tour", "AC"],
    desc: "Royal suite with direct views of the illuminated Mysore Palace. Opulent décor, private plunge pool and palace heritage tour.",
    host: "Rani Wadiyar",
    host_since: "2021",
    discount: null,
    badge: "Luxury",
    emoji: "👑",
    photos: [
      "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
    ],
  },
];

const EXPS = [
  {
    id: "e1",
    name: "Sunrise Yoga at Ganges",
    cat: "Wellness",
    loc: "Rishikesh",
    price: 800,
    dur: "2.5 hrs",
    rating: 4.98,
    photo:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
  },
  {
    id: "e2",
    name: "Rajasthani Cooking Class",
    cat: "Food",
    loc: "Jaipur",
    price: 1500,
    dur: "3 hrs",
    rating: 4.95,
    photo:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
  },
  {
    id: "e3",
    name: "Kathak Dance Workshop",
    cat: "Culture",
    loc: "Varanasi",
    price: 1200,
    dur: "2 hrs",
    rating: 4.92,
    photo:
      "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?w=400&q=80",
  },
  {
    id: "e4",
    name: "Tiger Safari Ranthambore",
    cat: "Adventure",
    loc: "Ranthambore",
    price: 3500,
    dur: "4 hrs",
    rating: 4.97,
    photo:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&q=80",
  },
  {
    id: "e5",
    name: "Backwater Canoe Sunrise",
    cat: "Nature",
    loc: "Alleppey",
    price: 950,
    dur: "3 hrs",
    rating: 4.93,
    photo:
      "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=400&q=80",
  },
  {
    id: "e6",
    name: "Blue Pottery Workshop",
    cat: "Art",
    loc: "Jaipur",
    price: 1800,
    dur: "2 hrs",
    rating: 4.89,
    photo:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
  },
  {
    id: "e7",
    name: "Ganga Aarti Ceremony",
    cat: "Spiritual",
    loc: "Varanasi",
    price: 500,
    dur: "1.5 hrs",
    rating: 5.0,
    photo:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&q=80",
  },
  {
    id: "e8",
    name: "Tea Estate Tasting Tour",
    cat: "Food",
    loc: "Darjeeling",
    price: 1200,
    dur: "2 hrs",
    rating: 4.96,
    photo:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
];

const VIBES = [
  {
    label: "Royal Rajasthan",
    sub: "Heritage & Palaces",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80",
    filter: "Rajasthan",
  },
  {
    label: "Beach Escapes",
    sub: "Sun, Sand & Sea",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80",
    filter: "Goa",
  },
  {
    label: "Hill Stations",
    sub: "Mountains & Mist",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
    filter: "Himachal",
  },
  {
    label: "Sacred India",
    sub: "Spirituality & Culture",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&q=80",
    filter: "UP",
  },
  {
    label: "Backwaters",
    sub: "Lush & Serene Kerala",
    img: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=500&q=80",
    filter: "Kerala",
  },
];

const CATS = [
  { ico: "🏡", lbl: "All", val: "all" },
  { ico: "🏰", lbl: "Haveli", val: "Heritage Haveli" },
  { ico: "🏖️", lbl: "Beach", val: "Beach Cottage" },
  { ico: "🏔️", lbl: "Mountain", val: "Mountain Retreat" },
  { ico: "🌿", lbl: "Eco Stay", val: "Eco Stay" },
  { ico: "⛵", lbl: "Houseboat", val: "Houseboat" },
  { ico: "🌳", lbl: "Treehouse", val: "Tree House" },
  { ico: "🐯", lbl: "Jungle", val: "Jungle Lodge" },
  { ico: "🏡", lbl: "Village", val: "Village Home" },
];

const POPULAR = [
  { name: "Goa", sub: "Beaches & Nightlife", ico: "🌴" },
  { name: "Jaipur", sub: "Heritage & Culture", ico: "🏰" },
  { name: "Manali", sub: "Adventure & Snow", ico: "🏔️" },
  { name: "Rishikesh", sub: "Yoga & Spirituality", ico: "🧘" },
  { name: "Kerala", sub: "Backwaters & Ayurveda", ico: "⛵" },
  { name: "Coorg", sub: "Coffee & Nature", ico: "☕" },
  { name: "Darjeeling", sub: "Tea & Mountains", ico: "🍵" },
  { name: "Goa", sub: "Beaches & Nightlife", ico: "🌴" },
];

/* ══ STATE ══ */
// window.S is pre-initialized in index.html before firebase loads
// Merge any missing fields safely
if (!window.S) window.S = {};
var S = window.S;
if (!S.wishlist) S.wishlist = new Set();
if (!S.bookings) S.bookings = [];
if (!S.listings) S.listings = [];
if (!S.tripBookings) S.tripBookings = [];
if (!S.guests) S.guests = { adults: 2, children: 0, infants: 0 };
if (!S.dates) S.dates = { in: "", out: "" };
if (S.activeCat === undefined) S.activeCat = "all";
if (S.destFilter === undefined) S.destFilter = "";
if (!S.filters) S.filters = { maxPrice: 30000, types: [], ams: [] };
let _upiT = null,
  _otpVal = "",
  _photoUrls = ["", "", ""];
const UPI_ID = "homestays@upi";

/* ══ STORAGE ══ */
function lsGet(k) {
  try {
    return JSON.parse(localStorage.getItem(k));
  } catch {
    return null;
  }
}
function lsSet(k, v) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
}
function lsDel(k) {
  try {
    localStorage.removeItem(k);
  } catch {}
}

function loadState() {
  const u = lsGet("fs_user");
  if (u) S.user = u;
  if (S.user) {
    const w = lsGet("fs_wish_" + S.user.id);
    if (w) S.wishlist = new Set(w);
    const b = lsGet("fs_bks_" + S.user.id);
    if (b) S.bookings = b;
    const tb = JSON.parse(
      localStorage.getItem("ct_bookings_" + S.user.id) || "[]",
    );
    S.tripBookings = tb;
  }
  const l = lsGet("fs_listings");
  if (l) S.listings = l;
  if (!S.tripBookings) S.tripBookings = [];
}

/* ══ NAV ══ */
function goto_legacy(page) {
  document.querySelectorAll(".pg").forEach((p) => p.classList.remove("on"));
  const pg = document.getElementById("pg-" + page);
  if (pg) pg.classList.add("on");
  const ft = document.getElementById("footer");
  ft.style.display = ["home", "stays", "experiences"].includes(page)
    ? "block"
    : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
  hideDD();
  if (page === "stays") renderAllStays();
  if (page === "experiences") renderAllExp();
  if (page === "profile") {
    if (!S.user) {
      openLoginModal();
      return;
    }
    renderProfile();
  }
  if (page === "host") {
    if (!S.user) {
      openLoginModal();
      return;
    }
    renderHostDash();
  }
  if (page === "admin") {
    // Firebase module loads async — wait up to 3s before giving up
    function _tryShowAdmin(attempts) {
      if (window._FS_IS_ADMIN === true) {
        showAdminDash();
      } else if (window._FS_AUTH_READY === true) {
        document.getElementById("adm-login").style.display = "block";
        document.getElementById("adm-dashboard").style.display = "none";
      } else if (attempts > 0) {
        setTimeout(function () {
          _tryShowAdmin(attempts - 1);
        }, 300);
      } else {
        document.getElementById("adm-login").style.display = "block";
        document.getElementById("adm-dashboard").style.display = "none";
      }
    }
    _tryShowAdmin(10);
  }
}

/* ══ AUTH ══ */
function openLoginModal() {
  openModal("modal-login");
}
function openRegModal() {
  openModal("modal-register");
}
function openPhoneModal() {
  showOTPStep(1);
  openModal("modal-phone");
}

function doLogin_legacy() {
  const email = v("li-email"),
    pass = v("li-pass");
  if (!email || !pass) {
    toast("⚠️ Fill all fields", "warning");
    return;
  }
  const users = lsGet("fs_users") || [];
  const u = users.find((x) => x.email === email && x.pass === pass);
  if (!u) {
    toast("❌ Wrong email or password", "error");
    return;
  }
  S.user = u;
  lsSet("fs_user", u);
  const w = lsGet("fs_wish_" + u.id);
  if (w) S.wishlist = new Set(w);
  const b = lsGet("fs_bks_" + u.id);
  if (b) S.bookings = b;
  updateAuthUI();
  closeModal("modal-login");
  toast("🎉 Welcome back, " + u.name.split(" ")[0] + "!", "success");
}

function doRegister_legacy() {
  const fn = v("reg-fn"),
    ln = v("reg-ln"),
    email = v("reg-email"),
    phone = v("reg-phone"),
    pass = v("reg-pass");
  if (!fn || !email || !pass) {
    toast("⚠️ Name, email & password required", "warning");
    return;
  }
  if (pass.length < 6) {
    toast("⚠️ Password min 6 characters", "warning");
    return;
  }
  const users = lsGet("fs_users") || [];
  if (users.find((x) => x.email === email)) {
    toast("❌ Email already registered", "error");
    return;
  }
  const u = {
    id: "u" + Date.now(),
    name: fn + (ln ? " " + ln : ""),
    email,
    phone,
    pass,
    joined: new Date().toISOString(),
    trips: 0,
  };
  users.push(u);
  lsSet("fs_users", users);
  S.user = u;
  lsSet("fs_user", u);
  S.wishlist = new Set();
  S.bookings = [];
  updateAuthUI();
  closeModal("modal-register");
  toast("🎉 Welcome to homestays, " + fn + "!", "success");
}

function doLogout_legacy() {
  if (S.user) {
    lsSet("fs_wish_" + S.user.id, [...S.wishlist]);
    lsSet("fs_bks_" + S.user.id, S.bookings);
  }
  S.user = null;
  S.wishlist = new Set();
  S.bookings = [];
  lsDel("fs_user");
  updateAuthUI();
  goto("home");
  toast("👋 Logged out successfully", "success");
}

function updateAuthUI() {
  const u = S.user;
  document.getElementById("dd-out").style.display = u ? "none" : "block";
  document.getElementById("dd-in").style.display = u ? "block" : "none";

  // Update mobile nav sections
  document.getElementById("mobile-auth-section").style.display = u
    ? "none"
    : "block";
  document.getElementById("mobile-user-section").style.display = u
    ? "block"
    : "none";

  const ico = document.getElementById("nav-u-ico");
  const init = document.getElementById("nav-u-init");
  if (u) {
    document.getElementById("dd-uname").textContent = "👤 " + u.name;
    ico.style.display = "none";
    init.style.display = "block";
    init.textContent = u.name[0].toUpperCase();
  } else {
    ico.style.display = "block";
    init.style.display = "none";
  }
}

/* OTP */
function showOTPStep(n) {
  document.getElementById("otp-s1").style.display = n === 1 ? "block" : "none";
  document.getElementById("otp-s2").style.display = n === 2 ? "block" : "none";
}
function sendOTP() {
  const ph = v("otp-phone");
  if (!ph) {
    toast("⚠️ Enter phone number", "warning");
    return;
  }
  _otpVal = String(Math.floor(1000 + Math.random() * 9000));
  document.getElementById("otp-msg").textContent =
    "OTP sent to +91 " + ph + " (Demo OTP: " + _otpVal + ")";
  showOTPStep(2);
  toast("📱 Demo OTP: " + _otpVal, "info");
}
function mvOtp(el, nxt) {
  if (el.value && nxt) document.getElementById(nxt)?.focus();
}
function verifyOTP() {
  const otp = ["o1", "o2", "o3", "o4"]
    .map((id) => document.getElementById(id).value || "")
    .join("");
  if (otp === _otpVal) {
    const ph = v("otp-phone");
    const u = {
      id: "u" + Date.now(),
      name: "User " + ph.slice(-4),
      email: ph + "@phone.in",
      phone: ph,
      joined: new Date().toISOString(),
      trips: 0,
    };
    const users = lsGet("fs_users") || [];
    users.push(u);
    lsSet("fs_users", users);
    S.user = u;
    lsSet("fs_user", u);
    S.wishlist = new Set();
    S.bookings = [];
    updateAuthUI();
    closeModal("modal-phone");
    toast("🎉 Phone verified! Welcome!", "success");
  } else toast("❌ Wrong OTP. Try again.", "error");
}

/* DROPDOWN */
let _ddOpen = false;
function toggleDD() {
  _ddOpen = !_ddOpen;
  document.getElementById("user-dd").style.display = _ddOpen ? "block" : "none";
}
function hideDD() {
  _ddOpen = false;
  document.getElementById("user-dd").style.display = "none";
}
document.addEventListener("click", (e) => {
  if (!e.target.closest("#nav")) hideDD();
});

/* ══ MOBILE NAVIGATION ══ */
let _mobileNavOpen = false;
function toggleMobileNav() {
  _mobileNavOpen = !_mobileNavOpen;
  const mobileNav = document.getElementById("mobile-nav");
  const hamburgerBtn = document.getElementById("hamburger-btn");

  if (_mobileNavOpen) {
    mobileNav.classList.add("active");
    hamburgerBtn.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    mobileNav.classList.remove("active");
    hamburgerBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
}
// Close mobile nav when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest("#nav") && !e.target.closest(".mobile-nav")) {
    if (_mobileNavOpen) toggleMobileNav();
  }
});

/* ══ MODALS ══ */
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}
function v(id) {
  return (document.getElementById(id)?.value || "").trim();
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    document.querySelectorAll(".modal-bg.open").forEach((m) => {
      m.classList.remove("open");
      document.body.style.overflow = "";
    });
});
document.querySelectorAll(".modal-bg").forEach((bg) =>
  bg.addEventListener("click", (e) => {
    if (e.target === bg) {
      bg.classList.remove("open");
      document.body.style.overflow = "";
    }
  }),
);

/* ══ SEARCH ══ */
function openSearchModal() {
  renderPopular();
  document.getElementById("search-q").value = "";
  document.getElementById("search-popular").style.display = "block";
  document.getElementById("search-results").style.display = "none";
  openModal("modal-search");
  setTimeout(() => document.getElementById("search-q")?.focus(), 150);
}
function renderPopular() {
  document.getElementById("pop-list").innerHTML = POPULAR.map(
    (p) => `
    <div class="sd-item" onclick="selectDest('${p.name}')">
      <div class="sd-ico">${p.ico}</div>
      <div><div class="sd-main">${p.name}</div><div class="sd-sub">${p.sub}</div></div>
    </div>`,
  ).join("");
}
function selectDest(d) {
  document.getElementById("sb-where").textContent = d;
  document.getElementById("sb-where").classList.remove("ph");
  S.destFilter = d;
  closeModal("modal-search");
  goto("stays");
}
function liveSearch(q) {
  const pop = document.getElementById("search-popular");
  const res = document.getElementById("search-results");
  if (!q.trim()) {
    pop.style.display = "block";
    res.style.display = "none";
    return;
  }
  pop.style.display = "none";
  res.style.display = "block";
  const all = [...STAYS, ...S.listings.filter((l) => l.status === "approved")];
  const r = all.filter(
    (s) =>
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.loc.toLowerCase().includes(q.toLowerCase()) ||
      (s.state || "").toLowerCase().includes(q.toLowerCase()),
  );
  res.innerHTML = r.length
    ? r
        .map(
          (s) => `
    <div class="sd-item" onclick="openListing('${s.id}');closeModal('modal-search')">
      <div class="sd-ico">${s.emoji || "🏡"}</div>
      <div><div class="sd-main">${s.name}</div><div class="sd-sub">📍 ${s.loc} · ₹${(s.price || 0).toLocaleString()}/night</div></div>
    </div>`,
        )
        .join("")
    : '<div style="padding:24px;text-align:center;color:var(--ink3)">No results found</div>';
}

/* ══ DATES & GUESTS ══ */
function openDatesModal() {
  const t = new Date(),
    fmt = (d) => d.toISOString().split("T")[0];
  document.getElementById("dt-in").value =
    S.dates.in || fmt(new Date(t.getTime() + 2 * 864e5));
  document.getElementById("dt-out").value =
    S.dates.out || fmt(new Date(t.getTime() + 5 * 864e5));
  openModal("modal-dates");
}
function qDate(type, el) {
  document
    .querySelectorAll("#modal-dates .chip")
    .forEach((c) => c.classList.remove("on"));
  el.classList.add("on");
  const t = new Date(),
    fmt = (d) => d.toISOString().split("T")[0];
  let ci, co;
  if (type === "weekend") {
    const dow = t.getDay();
    ci = new Date(t.getTime() + ((5 - dow + 7) % 7 || 7) * 864e5);
    co = new Date(ci.getTime() + 2 * 864e5);
  } else if (type === "week") {
    ci = new Date(t.getTime() + 7 * 864e5);
    co = new Date(ci.getTime() + 7 * 864e5);
  } else {
    ci = new Date(t.getTime() + 30 * 864e5);
    co = new Date(ci.getTime() + 7 * 864e5);
  }
  document.getElementById("dt-in").value = fmt(ci);
  document.getElementById("dt-out").value = fmt(co);
}
function saveDates() {
  const i = document.getElementById("dt-in").value,
    o = document.getElementById("dt-out").value;
  if (!i || !o) {
    toast("⚠️ Select both dates", "warning");
    return;
  }
  if (new Date(o) <= new Date(i)) {
    toast("⚠️ Checkout must be after check-in", "warning");
    return;
  }
  S.dates = { in: i, out: o };
  const nights = Math.round((new Date(o) - new Date(i)) / 864e5);
  const fmt = (d) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  const ci = document.getElementById("sb-checkin"),
    co = document.getElementById("sb-checkout");
  ci.textContent = fmt(i);
  ci.classList.remove("ph");
  co.textContent = fmt(o);
  co.classList.remove("ph");
  closeModal("modal-dates");
  toast(
    "📅 " + nights + " night" + (nights > 1 ? "s" : "") + " selected",
    "success",
  );
}
function openGuestsModal() {
  openModal("modal-guests");
}
function adj(type, d) {
  S.guests[type] = Math.max(0, S.guests[type] + d);
  if (type === "adults" && S.guests.adults < 1) S.guests.adults = 1;
  document.getElementById("g-" + type).textContent = S.guests[type];
}
function saveGuests() {
  const tot = S.guests.adults + S.guests.children;
  const el = document.getElementById("sb-guests");
  el.textContent =
    tot +
    " guest" +
    (tot > 1 ? "s" : "") +
    (S.guests.infants
      ? " · " + S.guests.infants + " infant" + (S.guests.infants > 1 ? "s" : "")
      : "");
  el.classList.remove("ph");
  closeModal("modal-guests");
}
function getNights() {
  if (S.dates.in && S.dates.out)
    return Math.max(
      1,
      Math.round((new Date(S.dates.out) - new Date(S.dates.in)) / 864e5),
    );
  return 3;
}

/* ══ RENDER ══ */
function renderCats(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = CATS.map(
    (c) => `
    <div class="cat-pill ${c.val === S.activeCat ? "on" : ""}" onclick="setCat('${c.val}')">
      <div class="cat-ico">${c.ico}</div>
      <div class="cat-lbl">${c.lbl}</div>
    </div>`,
  ).join("");
}
function setCat(v) {
  S.activeCat = v;
  document
    .querySelectorAll(".cat-pill")
    .forEach((p) =>
      p.classList.toggle(
        "on",
        p.querySelector(".cat-lbl")?.textContent ===
          CATS.find((c) => c.val === v)?.lbl,
      ),
    );
  filterStays();
}

// ── Plan cache — avoid repeated localStorage reads per card ──
var _planCache = {};
function getPlanForHostCached(hostId) {
  if (!hostId) return "free";
  if (_planCache[hostId] !== undefined) return _planCache[hostId];
  _planCache[hostId] = getPlanForHost(hostId);
  return _planCache[hostId];
}

function stayCard(s) {
  const wished = S.wishlist.has(s.id);
  const hostPlan = s.host_id
    ? getPlanDetails(getPlanForHostCached(s.host_id))
    : null;
  const isGold = hostPlan && hostPlan.id === "gold";
  const isPro = hostPlan && hostPlan.id === "pro";
  const price = (s.price || 0).toLocaleString();
  const img =
    s.photos?.[0] ||
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=70";
  return (
    '<div class="stay-card" onclick="openListingPage(\'' +
    s.id +
    "')\">" +
    '<div class="sc-img">' +
    (isGold
      ? '<div class="sc-premium-ribbon"></div>'
      : isPro
        ? '<div class="sc-premium-ribbon blue"></div>'
        : "") +
    '<img src="' +
    img +
    '" alt="' +
    s.name +
    '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=70\'">' +
    (s.badge
      ? '<div class="sc-badge' +
        (s.badge === "New" ? " nb" : "") +
        '">' +
        s.badge +
        "</div>"
      : "") +
    '<button class="sc-wish' +
    (wished ? " on" : "") +
    '" id="w-' +
    s.id +
    '" onclick="toggleWish(event,\'' +
    s.id +
    "')\">" +
    (wished ? "❤️" : "🤍") +
    "</button>" +
    (s.discount ? '<div class="sc-disc">-' + s.discount + "% OFF</div>" : "") +
    "</div>" +
    '<div class="sc-body"><div class="sc-r1">' +
    '<div class="sc-name" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">' +
    s.name +
    (isGold
      ? '<span class="verified-badge gold" style="font-size:.52rem">👑 GOLD</span>'
      : isPro
        ? '<span class="verified-badge" style="font-size:.52rem">✅ VERIFIED</span>'
        : "") +
    "</div>" +
    '<div class="sc-rat">★ ' +
    (s.rating || "New") +
    "</div></div>" +
    '<div class="sc-loc">📍 ' +
    s.loc +
    " · " +
    (s.reviews || 0) +
    " reviews</div>" +
    '<div class="sc-tags">' +
    (s.amenities || [])
      .slice(0, 3)
      .map(function (a) {
        return '<span class="sc-tag">' + a + "</span>";
      })
      .join("") +
    "</div>" +
    '<div class="sc-foot"><div>' +
    (s.discount
      ? '<div class="sc-old">₹' +
        Math.round((s.price || 0) / (1 - s.discount / 100)).toLocaleString() +
        "</div>"
      : "") +
    '<div class="sc-price">₹' +
    price +
    " <span>/ night</span></div>" +
    "</div>" +
    '<button class="sc-bk" onclick="event.stopPropagation();openBooking(\'' +
    s.id +
    "')\">Book Now</button>" +
    "</div></div></div>"
  );
}

function expCard(e) {
  return `<div class="exp-card" onclick="toast('🎭 Experience booking coming soon!','info')">
    <div class="ec-img"><img src="${e.photo}" alt="${e.name}" loading="lazy"><div class="ec-tag">${e.cat}</div></div>
    <div class="ec-body">
      <div class="ec-name">${e.name}</div>
      <div class="ec-meta">📍 ${e.loc} · ⏱ ${e.dur} · ★ ${e.rating}</div>
      <div class="ec-price">₹${e.price.toLocaleString()}/person</div>
    </div>
  </div>`;
}

// ── Cached stays array — avoid rebuilding on every card render ──
var _allStaysCache = null;
var _allStaysCacheKey = 0;
function getAllStays() {
  var key = S.listings.length;
  if (_allStaysCache && _allStaysCacheKey === key) return _allStaysCache;
  _allStaysCache = STAYS.concat(
    S.listings.filter(function (l) {
      return l.status === "approved";
    }),
  );
  _allStaysCacheKey = key;
  return _allStaysCache;
}
function invalidateStaysCache() {
  _allStaysCache = null;
  _planCache = {};
}

function renderHome() {
  renderCats("home-cats");
  var all = getAllStays();
  // Render cards in chunks so UI isn't blocked
  var cards8 = all.slice(0, 8).map(stayCard).join("");
  document.getElementById("home-stays-grid").innerHTML = cards8;

  // Vibes - build once as plain string (no template literals overhead)
  var vibesHtml = "";
  for (var i = 0; i < VIBES.length; i++) {
    var vb = VIBES[i];
    vibesHtml +=
      '<div class="vibe-card" onclick="S.destFilter=\'' +
      vb.filter +
      "';goto('stays')\">" +
      '<img src="' +
      vb.img +
      '" alt="' +
      vb.label +
      '" loading="lazy">' +
      '<div class="vibe-ov"></div>' +
      '<div class="vibe-lbl"><div class="vibe-main">' +
      vb.label +
      '</div><div class="vibe-sub">' +
      vb.sub +
      "</div></div>" +
      "</div>";
  }
  document.getElementById("vibes-grid").innerHTML = vibesHtml;

  // Experiences — defer slightly so cards render first
  setTimeout(function () {
    var expEl = document.getElementById("home-exp-grid");
    if (expEl) expEl.innerHTML = EXPS.slice(0, 4).map(expCard).join("");
  }, 0);
}

function renderAllStays() {
  renderCats("home-cats");
  renderCats("stays-cats");
  filterStays();
}

function getPlanForHost(hostId) {
  if (!hostId) return "free";
  const users = lsGet("fs_users") || [];
  const u = users.find((x) => x.id === hostId);
  return u?.plan || "free";
}

function planRank(s) {
  if (!s.host_id) return 0; // built-in stays rank 0 (show normally)
  const p = getPlanForHost(s.host_id);
  if (p === "gold") return 3;
  if (p === "pro") return 2;
  if (p === "basic") return 1;
  return 0;
}

function filterStays() {
  var all = getAllStays();
  var q = (v("stays-q") || "").toLowerCase();
  var sort = document.getElementById("stays-sort")?.value || "";
  var maxP = S.filters.maxPrice || 30000;
  var types = S.filters.types || [];
  var ams = S.filters.ams || [];
  var destLow = S.destFilter ? S.destFilter.toLowerCase() : "";
  var r = all.filter(function (s) {
    if (S.activeCat !== "all" && s.type !== S.activeCat) return false;
    if (
      destLow &&
      !s.loc.toLowerCase().includes(destLow) &&
      !(s.state || "").toLowerCase().includes(destLow)
    )
      return false;
    if (
      q &&
      !s.name.toLowerCase().includes(q) &&
      !s.loc.toLowerCase().includes(q)
    )
      return false;
    if ((s.price || 0) > maxP) return false;
    if (types.length && !types.includes(s.type)) return false;
    if (
      ams.length &&
      !ams.every(function (a) {
        return (s.amenities || []).includes(a);
      })
    )
      return false;
    return true;
  });
  if (sort === "price-asc")
    r.sort(function (a, b) {
      return (a.price || 0) - (b.price || 0);
    });
  else if (sort === "price-desc")
    r.sort(function (a, b) {
      return (b.price || 0) - (a.price || 0);
    });
  else if (sort === "rating")
    r.sort(function (a, b) {
      return (b.rating || 0) - (a.rating || 0);
    });
  r.sort(function (a, b) {
    return planRank(b) - planRank(a);
  });
  var grid = document.getElementById("all-stays-grid");
  var empty = document.getElementById("all-stays-empty");
  // Render in one shot
  grid.innerHTML = r.map(stayCard).join("");
  empty.style.display = r.length ? "none" : "block";
  var head = document.getElementById("stays-heading");
  if (head)
    head.textContent =
      r.length +
      " stay" +
      (r.length !== 1 ? "s" : "") +
      (S.destFilter ? " in " + S.destFilter : "");
}

function renderAllExp() {
  document.getElementById("all-exp-grid").innerHTML =
    EXPS.map(expCard).join("");
}

function doSearch() {
  S.destFilter = "";
  goto("stays");
}

/* FILTERS */
function toggleChip(el) {
  el.classList.toggle("on");
}
function openFilterModal() {
  openModal("modal-filter");
}
function applyFilters() {
  S.filters.maxPrice =
    parseInt(document.getElementById("f-price").value) || 30000;
  S.filters.types = [
    ...document.querySelectorAll("#f-type-chips .chip.on"),
  ].map((c) => c.dataset.v);
  S.filters.ams = [...document.querySelectorAll("#f-am-chips .chip.on")].map(
    (c) => c.dataset.v,
  );
  closeModal("modal-filter");
  filterStays();
}
function clearFilters() {
  document.getElementById("f-price").value = 30000;
  document.getElementById("f-price-v").textContent = "₹30,000";
  document
    .querySelectorAll("#modal-filter .chip.on")
    .forEach((c) => c.classList.remove("on"));
  S.filters = { maxPrice: 30000, types: [], ams: [] };
}

/* ══ WISHLIST ══ */
function toggleWish(e, id) {
  e.stopPropagation();
  if (!S.user) {
    openLoginModal();
    toast("💡 Sign in to save stays", "info");
    return;
  }
  const btn = document.getElementById("w-" + id);
  if (S.wishlist.has(id)) {
    S.wishlist.delete(id);
    if (btn) {
      btn.textContent = "🤍";
      btn.classList.remove("on");
    }
    toast("🤍 Removed from wishlist");
  } else {
    S.wishlist.add(id);
    if (btn) {
      btn.textContent = "❤️";
      btn.classList.add("on");
    }
    toast("❤️ Saved to wishlist!", "success");
  }
  if (S.user) lsSet("fs_wish_" + S.user.id, [...S.wishlist]);
}

/* ══ LISTING DETAIL ══ */
/* ══ TRAVEL LOADER — shown instantly on Book Now / Reserve click ══ */
/* ══ PAGE LOADER — full screen overlay on Book Now / Reserve click ══ */
var _loaderEmojis = [
  "✈️",
  "🏖️",
  "🏔️",
  "🗺️",
  "🧳",
  "🛕",
  "⛵",
  "🌴",
  "🏕️",
  "🚂",
];
var _loaderMsgs = [
  "Finding best price…",
  "Loading property…",
  "Almost there…",
  "Getting details…",
  "Preparing your stay…",
];
var _loaderShownAt = 0;
function showPageLoader() {
  var el = document.getElementById("page-loader");
  if (!el) return;
  var emoji = _loaderEmojis[Math.floor(Math.random() * _loaderEmojis.length)];
  var msg = _loaderMsgs[Math.floor(Math.random() * _loaderMsgs.length)];
  document.getElementById("page-loader-emoji").textContent = emoji;
  document.getElementById("page-loader-msg").textContent = msg;
  el.style.display = "flex";
  _loaderShownAt = Date.now();
}
function hidePageLoader() {
  var el = document.getElementById("page-loader");
  if (!el) return;
  // Minimum 600ms so loader is visible even on localhost / fast connections
  var elapsed = Date.now() - _loaderShownAt;
  var delay = Math.max(0, 600 - elapsed);
  if (delay > 0) {
    setTimeout(function () {
      el.style.display = "none";
    }, delay);
  } else {
    el.style.display = "none";
  }
}
// Keep _travelLoader for any legacy calls (returns empty string now)
function _travelLoader() {
  return "";
}

function openListing(id) {
  showPageLoader();
  var all = getAllStays();
  const s = all.find((x) => x.id === id);
  if (!s) {
    hidePageLoader();
    return;
  }

  // Show travel loader instantly
  document.getElementById("listing-inner").innerHTML = _travelLoader();
  document.getElementById("modal-listing").classList.add("open");
  document.body.style.overflow = "hidden";

  // Double rAF ensures browser PAINTS loader first, then builds content
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      const nights = getNights(),
        total = (s.price || 0) * nights,
        fee = Math.round(total * 0.12),
        gst = Math.round((total + fee) * 0.05);
      const grand = total + fee + gst;

      // Use smaller image sizes for faster load
      const img0 =
        s.photos?.[0] ||
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=60";
      const img1 = (s.photos?.[1] || img0)
        .replace(/w=\d+/, "w=300")
        .replace(/q=\d+/, "q=60");
      const img2 = (s.photos?.[2] || img0)
        .replace(/w=\d+/, "w=300")
        .replace(/q=\d+/, "q=60");

      const hostPlanHtml = (() => {
        const p = s.host_id ? getPlanDetails(getPlanForHost(s.host_id)) : null;
        return p && p.id !== "free"
          ? '<span class="verified-badge ' +
              (p.id === "gold" ? "gold" : "") +
              '">' +
              (p.id === "gold" ? "👑 GOLD HOST" : "✅ VERIFIED HOST") +
              "</span>"
          : "";
      })();

      var listingHtml =
        '<button class="modal-close" onclick="closeModal(\'modal-listing\')"><i class="fas fa-times"></i></button>' +
        '<div class="ld-gal">' +
        '<div class="ld-main"><img src="' +
        img0 +
        '" alt="' +
        s.name +
        '" loading="eager" decoding="async"></div>' +
        '<div class="ld-sub"><img src="' +
        img1 +
        '" alt="" loading="lazy" decoding="async"></div>' +
        '<div class="ld-sub"><img src="' +
        img2 +
        '" alt="" loading="lazy" decoding="async"></div>' +
        "</div>" +
        '<div class="ld-body"><div>' +
        '<div class="ld-title">' +
        s.name +
        "</div>" +
        '<div class="ld-meta"><span style="font-weight:700">★ ' +
        (s.rating || "New") +
        '</span><span style="color:var(--border)">·</span><span>' +
        (s.reviews || 0) +
        ' reviews</span><span style="color:var(--border)">·</span><span>📍 ' +
        s.loc +
        "</span></div>" +
        '<div style="display:flex;gap:20px;padding:14px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin-bottom:16px;flex-wrap:wrap">' +
        '<div><div style="font-weight:700;font-size:.86rem">' +
        (s.guests || 2) +
        ' guests</div><div style="font-size:.72rem;color:var(--ink3)">Max guests</div></div>' +
        '<div><div style="font-weight:700;font-size:.86rem">' +
        (s.rooms || 1) +
        " bedroom" +
        ((s.rooms || 1) > 1 ? "s" : "") +
        '</div><div style="font-size:.72rem;color:var(--ink3)">Bedrooms</div></div>' +
        '<div><div style="font-weight:700;font-size:.86rem">' +
        (s.amenities || []).length +
        '+ amenities</div><div style="font-size:.72rem;color:var(--ink3)">Included</div></div>' +
        "</div>" +
        '<p class="ld-desc">' +
        (s.desc || "A beautiful property awaiting you.") +
        "</p>" +
        '<div style="font-weight:700;font-size:.88rem;margin-bottom:10px">What\'s included</div>' +
        '<div class="ld-ams">' +
        (s.amenities || [])
          .map((a) => '<div class="ld-am">✓ ' + a + "</div>")
          .join("") +
        "</div>" +
        '<div class="ld-host">' +
        '<div class="ld-hav">' +
        (s.host || "H")[0].toUpperCase() +
        "</div>" +
        '<div><div class="ld-hn" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">Hosted by ' +
        (s.host || "Host") +
        " " +
        hostPlanHtml +
        "</div>" +
        '<div class="ld-hs">Host since ' +
        (s.host_since || "2024") +
        " · Speaks Hindi & English</div></div>" +
        '<button onclick="toast(\'💬 Chat on WhatsApp: +91-9999-XXXXX\',\'info\')" style="margin-left:auto;background:#25D366;color:white;border:none;border-radius:8px;padding:8px 12px;font-size:.76rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px;flex-shrink:0;font-family:inherit"><i class="fab fa-whatsapp"></i> Chat</button>' +
        "</div></div>" +
        '<div><div class="bk-box">' +
        '<div class="bk-price">₹' +
        (s.price || 0).toLocaleString() +
        " <span>/ night</span></div>" +
        '<div style="font-size:.74rem;color:var(--ink3);margin-bottom:12px">★ ' +
        (s.rating || "New") +
        " · " +
        (s.reviews || 0) +
        " reviews</div>" +
        '<div class="bk-dates" onclick="openDatesModal()">' +
        '<div class="bk-dfield"><div class="bk-dlbl">Check In</div><div class="bk-dval">' +
        (S.dates.in || "Add date") +
        "</div></div>" +
        '<div class="bk-dfield"><div class="bk-dlbl">Check Out</div><div class="bk-dval">' +
        (S.dates.out || "Add date") +
        "</div></div>" +
        "</div>" +
        '<div class="bk-guests" onclick="openGuestsModal()">' +
        '<div><div class="bk-dlbl">Guests</div><div class="bk-dval">' +
        (S.guests.adults + S.guests.children) +
        " guest" +
        (S.guests.adults + S.guests.children > 1 ? "s" : "") +
        "</div></div>" +
        '<i class="fas fa-chevron-down" style="color:var(--ink3);font-size:.8rem"></i>' +
        "</div>" +
        '<button class="btn-p" onclick="openBooking(\'' +
        s.id +
        "')\">Reserve →</button>" +
        '<div style="text-align:center;font-size:.72rem;color:var(--ink3);margin-top:8px">You won\'t be charged yet</div>' +
        '<div class="bk-bd">' +
        '<div class="bk-row"><span>₹' +
        (s.price || 0).toLocaleString() +
        " × " +
        nights +
        " nights</span><span>₹" +
        total.toLocaleString() +
        "</span></div>" +
        '<div class="bk-row"><span>Service fee (12%)</span><span>₹' +
        fee.toLocaleString() +
        "</span></div>" +
        '<div class="bk-row"><span>GST (5%)</span><span>₹' +
        gst.toLocaleString() +
        "</span></div>" +
        '<div class="bk-row tot"><span>Total</span><span>₹' +
        grand.toLocaleString() +
        "</span></div>" +
        "</div></div></div></div>";

      document.getElementById("listing-inner").innerHTML = listingHtml;
      hidePageLoader();
    }); // end inner rAF
  }); // end outer rAF
}

/* ══ DEDICATED LISTING PAGE (URL-based) ══ */
function openListingPage(id) {
  showPageLoader();
  // Update URL hash — enables sharing + back button
  window.location.hash = "listing/" + id;
  _renderListingPage(id);
}

function _renderListingPage(id) {
  var all = getAllStays();
  var s = all.find(function (x) {
    return x.id === id;
  });
  if (!s) {
    hidePageLoader();
    goto("stays");
    return;
  }

  // Show the page
  document.querySelectorAll(".pg").forEach(function (p) {
    p.classList.remove("on");
  });
  document.getElementById("pg-listing-detail").classList.add("on");
  document.getElementById("footer").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.title = s.name + " — homestays";

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      var nights = getNights();
      var total = (s.price || 0) * nights;
      var fee = Math.round(total * 0.12);
      var gst = Math.round((total + fee) * 0.05);
      var grand = total + fee + gst;

      // Sub-ratings (generated from main rating)
      var r = s.rating || 4.8;
      var subRatings = [
        {
          label: "Cleanliness",
          val: Math.min(5, (r - 0.05 + Math.random() * 0.1).toFixed(1)),
        },
        {
          label: "Accuracy",
          val: Math.min(5, (r - 0.1 + Math.random() * 0.15).toFixed(1)),
        },
        {
          label: "Check-in",
          val: Math.min(5, (r + Math.random() * 0.05).toFixed(1)),
        },
        {
          label: "Communication",
          val: Math.min(5, (r + 0.02 + Math.random() * 0.05).toFixed(1)),
        },
        {
          label: "Location",
          val: Math.min(5, (r - 0.15 + Math.random() * 0.1).toFixed(1)),
        },
        {
          label: "Value",
          val: Math.min(5, (r - 0.08 + Math.random() * 0.1).toFixed(1)),
        },
      ];

      // Mock reviews
      var mockReviews = [
        {
          name: "Priya S.",
          date: "2 weeks ago",
          stars: 5,
          text: "Absolutely loved this place! The host was so welcoming and the property was exactly as described. Will definitely come back.",
        },
        {
          name: "Rahul M.",
          date: "1 month ago",
          stars: 5,
          text: "Perfect getaway. Clean, spacious and the views were breathtaking. Highly recommend for families.",
        },
        {
          name: "Ananya K.",
          date: "3 weeks ago",
          stars: 4,
          text: "Great stay overall. Very clean and well-maintained. The host responded quickly to all queries.",
        },
        {
          name: "Vikash T.",
          date: "2 months ago",
          stars: 5,
          text: "One of the best homestays we've stayed at. Everything was top notch — food, hospitality and comfort.",
        },
      ];

      // Photos
      var photos = s.photos || [];
      while (photos.length < 5)
        photos.push(
          photos[0] ||
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=70",
        );

      // Map embed (OpenStreetMap — free, no API key needed)
      var mapQuery = encodeURIComponent(s.loc || s.city || "India");
      var mapSrc =
        "https://maps.google.com/maps?q=" + mapQuery + "&output=embed&zoom=13";

      var html =
        // Back button
        '<button class="ldp-back" onclick="history.back()"><i class="fas fa-arrow-left"></i> Back to Stays</button>' +
        '<h1 class="ldp-title">' +
        s.name +
        "</h1>" +
        '<div class="ldp-meta-row">' +
        "<span>★ " +
        (s.rating || "New") +
        "</span>" +
        '<span style="color:var(--border)">·</span>' +
        '<span style="text-decoration:underline;cursor:pointer">' +
        (s.reviews || 0) +
        " reviews</span>" +
        '<span style="color:var(--border)">·</span>' +
        "<span>" +
        (s.badge || s.type) +
        "</span>" +
        '<span style="color:var(--border)">·</span>' +
        "<span>📍 " +
        s.loc +
        "</span>" +
        "</div>" +
        // 5-photo grid
        '<div class="ldp-photos">' +
        '<div class="ldp-photo-main"><img src="' +
        photos[0] +
        '" alt="' +
        s.name +
        '" loading="eager"></div>' +
        '<div class="ldp-photo-sub-grid">' +
        '<div class="ldp-photo-sub"><img src="' +
        photos[1] +
        '" alt="" loading="lazy"></div>' +
        '<div class="ldp-photo-sub"><img src="' +
        photos[2] +
        '" alt="" loading="lazy"></div>' +
        '<div class="ldp-photo-sub"><img src="' +
        photos[3] +
        '" alt="" loading="lazy"></div>' +
        '<div class="ldp-photo-sub" style="position:relative"><img src="' +
        photos[4] +
        '" alt="" loading="lazy">' +
        '<button class="ldp-show-all" onclick="toast(\'📸 All photos coming soon!\',\'info\')"><i class="fas fa-th"></i> Show all photos</button>' +
        "</div></div></div>" +
        // Body
        '<div class="ldp-body">' +
        // LEFT COLUMN
        '<div class="ldp-left">' +
        '<div class="ldp-type-line">' +
        s.type +
        " · Hosted by " +
        (s.host || "Host") +
        "</div>" +
        '<div class="ldp-stats">' +
        "<span>" +
        (s.guests || 2) +
        " guests</span>" +
        '<span style="color:var(--border)">·</span>' +
        "<span>" +
        (s.rooms || 1) +
        " bedroom" +
        ((s.rooms || 1) > 1 ? "s" : "") +
        "</span>" +
        '<span style="color:var(--border)">·</span>' +
        "<span>" +
        (s.amenities || []).length +
        " amenities</span>" +
        "</div>" +
        '<p class="ldp-desc">' +
        (s.desc || "A beautiful property awaiting you.") +
        "</p>" +
        // Amenities
        '<div style="border-top:1px solid var(--border);padding-top:20px;margin-bottom:24px">' +
        '<div style="font-family:Fraunces,serif;font-size:1.1rem;font-weight:700;margin-bottom:14px">What this place offers</div>' +
        '<div class="ldp-ams-grid">' +
        (s.amenities || [])
          .map(function (a) {
            var icons = {
              WiFi: "fas fa-wifi",
              AC: "fas fa-snowflake",
              Pool: "fas fa-swimming-pool",
              Breakfast: "fas fa-coffee",
              Kitchen: "fas fa-utensils",
              Parking: "fas fa-car",
              TV: "fas fa-tv",
              Gym: "fas fa-dumbbell",
              Yoga: "fas fa-leaf",
            };
            var ico = icons[a] || "fas fa-check-circle";
            return (
              '<div class="ldp-am-item"><i class="' +
              ico +
              '" style="color:var(--coral);width:16px"></i> ' +
              a +
              "</div>"
            );
          })
          .join("") +
        "</div></div>" +
        // Ratings breakdown
        '<div class="ldp-ratings">' +
        '<div class="ldp-ratings-title">★ ' +
        r +
        ' · <span style="font-size:1rem;font-family:Sora,sans-serif;font-weight:400;color:var(--ink3)">' +
        (s.reviews || 0) +
        " reviews</span></div>" +
        // Rating bars (5 star distribution)
        '<div style="display:flex;gap:24px;margin-bottom:20px">' +
        '<div style="flex:1">' +
        [5, 4, 3, 2, 1]
          .map(function (n) {
            var w = n === 5 ? 85 : n === 4 ? 10 : n === 3 ? 3 : 1;
            return (
              '<div class="ldp-rating-bar-wrap"><span style="min-width:8px">' +
              n +
              '</span><div class="ldp-rating-bar"><div class="ldp-rating-bar-fill" style="width:' +
              w +
              '%"></div></div></div>'
            );
          })
          .join("") +
        "</div></div>" +
        // Sub-ratings grid
        '<div class="ldp-rating-grid">' +
        subRatings
          .map(function (sr) {
            return (
              '<div class="ldp-rating-item"><span>' +
              sr.label +
              "</span><span>" +
              sr.val +
              "</span></div>"
            );
          })
          .join("") +
        "</div></div>" +
        // Reviews
        '<div style="border-top:1px solid var(--border);padding-top:24px;margin-bottom:24px">' +
        '<div style="font-family:Fraunces,serif;font-size:1.1rem;font-weight:700;margin-bottom:16px">' +
        (s.reviews || 0) +
        " Reviews</div>" +
        '<div class="ldp-reviews-grid">' +
        mockReviews
          .map(function (rv) {
            var colors = ["#ff5a5f", "#00a699", "#ffb400", "#7c3aed"];
            var color = colors[Math.floor(Math.random() * colors.length)];
            return (
              '<div class="ldp-review-card">' +
              '<div class="ldp-review-head">' +
              '<div class="ldp-review-av" style="background:' +
              color +
              '">' +
              rv.name[0] +
              "</div>" +
              '<div><div class="ldp-review-name">' +
              rv.name +
              '</div><div class="ldp-review-date">' +
              rv.date +
              "</div></div>" +
              "</div>" +
              '<div class="ldp-review-stars">' +
              "★".repeat(rv.stars) +
              "☆".repeat(5 - rv.stars) +
              "</div>" +
              '<div class="ldp-review-text">' +
              rv.text +
              "</div>" +
              "</div>"
            );
          })
          .join("") +
        "</div></div>" +
        // Map
        '<div class="ldp-map-section">' +
        '<div class="ldp-map-title">📍 Where you\'ll be</div>' +
        '<div style="font-size:.84rem;color:var(--ink2);margin-bottom:10px">' +
        s.loc +
        "</div>" +
        '<div class="ldp-map-frame"><iframe src="' +
        mapSrc +
        '" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>' +
        '<div class="ldp-map-note">Exact location will be shared after booking confirmation.</div>' +
        "</div>" +
        "</div>" + // end ldp-left
        // RIGHT COLUMN — Booking box
        '<div class="ldp-right">' +
        '<div class="ldp-book-box">' +
        '<div class="ldp-book-price">₹' +
        (s.price || 0).toLocaleString() +
        " <span>/ night</span></div>" +
        '<div style="font-size:.76rem;color:var(--ink3);margin-bottom:14px">★ ' +
        (s.rating || "New") +
        " · " +
        (s.reviews || 0) +
        " reviews</div>" +
        '<div class="bk-dates" onclick="openDatesModal()" style="margin-bottom:10px">' +
        '<div class="bk-dfield"><div class="bk-dlbl">Check In</div><div class="bk-dval">' +
        (S.dates.in || "Add date") +
        "</div></div>" +
        '<div class="bk-dfield"><div class="bk-dlbl">Check Out</div><div class="bk-dval">' +
        (S.dates.out || "Add date") +
        "</div></div>" +
        "</div>" +
        '<div class="bk-guests" onclick="openGuestsModal()" style="margin-bottom:14px">' +
        '<div><div class="bk-dlbl">Guests</div><div class="bk-dval">' +
        (S.guests.adults + S.guests.children) +
        " guest" +
        (S.guests.adults + S.guests.children > 1 ? "s" : "") +
        "</div></div>" +
        '<i class="fas fa-chevron-down" style="color:var(--ink3);font-size:.8rem"></i>' +
        "</div>" +
        '<button class="btn-p" style="width:100%;margin-bottom:10px" onclick="openBooking(\'' +
        s.id +
        "')\">Reserve →</button>" +
        '<div style="text-align:center;font-size:.72rem;color:var(--ink3);margin-bottom:14px">You won\'t be charged yet</div>' +
        '<div class="bk-bd">' +
        '<div class="bk-row"><span>₹' +
        (s.price || 0).toLocaleString() +
        " × " +
        nights +
        " nights</span><span>₹" +
        total.toLocaleString() +
        "</span></div>" +
        '<div class="bk-row"><span>Service fee (12%)</span><span>₹' +
        fee.toLocaleString() +
        "</span></div>" +
        '<div class="bk-row"><span>GST (5%)</span><span>₹' +
        gst.toLocaleString() +
        "</span></div>" +
        '<div class="bk-row tot"><span>Total</span><span>₹' +
        grand.toLocaleString() +
        "</span></div>" +
        "</div>" +
        "</div>" + // end ldp-book-box
        // Host card
        '<div style="background:white;border:1px solid var(--border);border-radius:var(--r-xl);padding:18px;margin-top:16px">' +
        '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">' +
        '<div style="width:48px;height:48px;border-radius:50%;background:var(--coral);display:flex;align-items:center;justify-content:center;font-size:1.2rem;font-weight:700;color:white">' +
        (s.host || "H")[0] +
        "</div>" +
        '<div><div style="font-weight:700;font-size:.9rem">Hosted by ' +
        (s.host || "Host") +
        '</div><div style="font-size:.74rem;color:var(--ink3)">Host since ' +
        (s.host_since || "2024") +
        "</div></div>" +
        "</div>" +
        "<button onclick=\"window.open('https://wa.me/919999000000?text=Hi%2C+I+have+a+query+about+" +
        encodeURIComponent(s.name) +
        '\',\'_blank\')" style="width:100%;padding:9px;background:#25D366;color:white;border:none;border-radius:8px;font-size:.82rem;font-weight:700;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px"><i class="fab fa-whatsapp"></i> Message Host on WhatsApp</button>' +
        "</div>" +
        "</div>" + // end ldp-right
        "</div>"; // end ldp-body

      document.getElementById("listing-detail-content").innerHTML = html;
      hidePageLoader();
    });
  });
}

// Hash-based routing — handles back/forward + direct URL
function _handleHashRouting() {
  var hash = window.location.hash.slice(1); // remove #
  if (hash.startsWith("listing/")) {
    var id = hash.split("/")[1];
    if (id) {
      _renderListingPage(id);
      return;
    }
  }
  // No listing hash — go to home if on listing page
  var ldp = document.getElementById("pg-listing-detail");
  if (ldp && ldp.classList.contains("on")) {
    goto("home");
  }
}

// Listen for back/forward
window.addEventListener("hashchange", _handleHashRouting);

// On page load check hash
(function () {
  if (window.location.hash.startsWith("#listing/")) {
    setTimeout(_handleHashRouting, 300);
  }
})();

/* ══ BOOKING ══ */
function openBooking(id) {
  if (!S.user) {
    openLoginModal();
    toast("💡 Sign in to book", "info");
    return;
  }
  // Close listing modal immediately if open
  var lm = document.getElementById("modal-listing");
  if (lm) lm.classList.remove("open");

  // Show travel loader INSTANTLY
  var inner = document.getElementById("booking-inner");
  inner.innerHTML = _travelLoader();
  document.getElementById("modal-booking").classList.add("open");
  document.body.style.overflow = "hidden";

  // Double rAF — browser paints loader FIRST, then builds content
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      var all = getAllStays();
      var s = all.find(function (x) {
        return x.id === id;
      });
      if (!s) {
        closeModal("modal-booking");
        return;
      }
      var nights = getNights(),
        total = (s.price || 0) * nights,
        fee = Math.round(total * 0.12),
        gst = Math.round((total + fee) * 0.05),
        grand = total + fee + gst;
      var thumb = s.photos?.[0]
        ? s.photos[0].replace(/w=\d+/, "w=140").replace(/q=\d+/, "q=50")
        : "";
      var html =
        '<button class="modal-close" onclick="closeModal(\'modal-booking\')"><i class="fas fa-times"></i></button>' +
        '<div class="modal-body">' +
        '<div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:18px;padding-bottom:16px;border-bottom:1px solid var(--border)">' +
        '<div style="width:70px;height:70px;border-radius:var(--r);background:var(--border);flex-shrink:0;overflow:hidden">' +
        (thumb
          ? '<img src="' +
            thumb +
            '" style="width:100%;height:100%;object-fit:cover" alt="" loading="eager" decoding="async">'
          : "") +
        "</div>" +
        '<div><div style="font-weight:700;font-size:.9rem;color:var(--ink)">' +
        s.name +
        "</div>" +
        '<div style="font-size:.75rem;color:var(--ink3);margin-top:2px">📍 ' +
        s.loc +
        "</div>" +
        '<div style="font-size:.75rem;color:var(--ink3);margin-top:2px">★ ' +
        (s.rating || "New") +
        " · " +
        (s.reviews || 0) +
        " reviews</div></div></div>" +
        '<h2 style="font-size:1.2rem;margin-bottom:14px">Confirm & Pay</h2>' +
        '<div style="margin-bottom:14px">' +
        '<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;color:var(--ink);margin-bottom:8px;letter-spacing:.5px">👤 Guest Details</div>' +
        '<input class="f-inp" id="bk-guest-name" placeholder="Full Name *" style="margin-bottom:8px" value="' +
        (S.user ? S.user.name : "") +
        '">' +
        '<input class="f-inp" id="bk-guest-phone" placeholder="Phone Number * (10 digits)" maxlength="10" type="tel" value="' +
        (S.user && S.user.phone ? S.user.phone : "") +
        '">' +
        "</div>" +
        '<div style="background:var(--bg);border-radius:var(--r);padding:12px 14px;margin-bottom:16px;font-size:.82rem">' +
        '<div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="color:var(--ink3)">📅 Check-in</span><strong>' +
        (S.dates.in || "—") +
        "</strong></div>" +
        '<div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="color:var(--ink3)">📅 Check-out</span><strong>' +
        (S.dates.out || "—") +
        "</strong></div>" +
        '<div style="display:flex;justify-content:space-between"><span style="color:var(--ink3)">👥 Guests</span><strong>' +
        (S.guests.adults + S.guests.children) +
        " guest" +
        (S.guests.adults + S.guests.children > 1 ? "s" : "") +
        "</strong></div>" +
        "</div>" +
        '<div style="margin-bottom:16px;font-size:.83rem">' +
        '<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>₹' +
        (s.price || 0).toLocaleString() +
        " × " +
        nights +
        " nights</span><span>₹" +
        total.toLocaleString() +
        "</span></div>" +
        '<div style="display:flex;justify-content:space-between;margin-bottom:6px;color:var(--ink3)"><span>Service fee (12%)</span><span>₹' +
        fee.toLocaleString() +
        "</span></div>" +
        '<div style="display:flex;justify-content:space-between;margin-bottom:12px;color:var(--ink3)"><span>GST (5%)</span><span>₹' +
        gst.toLocaleString() +
        "</span></div>" +
        '<div style="display:flex;justify-content:space-between;font-weight:800;font-size:.9rem;border-top:1px solid var(--border);padding-top:10px"><span>Total</span><span style="color:var(--coral)">₹' +
        grand.toLocaleString() +
        "</span></div>" +
        "</div>" +
        '<div style="margin-bottom:14px">' +
        '<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;color:var(--ink);margin-bottom:8px;letter-spacing:.5px">Payment Method</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap" id="pay-methods">' +
        '<div class="chip on" onclick="selPay(this,\'upi\')">💚 UPI</div>' +
        "</div></div>" +
        '<div id="upi-field" style="margin-bottom:14px">' +
        '<input class="f-inp" id="upi-inp" placeholder="Enter UPI ID  e.g. name@paytm" style="margin-bottom:8px">' +
        "<button onclick=\"openUPIModal('" +
        s.id +
        "'," +
        grand +
        ')" style="width:100%;padding:11px;border:2px dashed #22c55e;border-radius:var(--r);background:#f0fdf4;color:#15803d;font-weight:700;font-size:.84rem;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px">📲 Scan QR & Pay via UPI App</button>' +
        "</div>" +
        '<button class="btn-p" onclick="confirmBooking(\'' +
        s.id +
        "'," +
        grand +
        ')">Pay & Confirm ₹' +
        grand.toLocaleString() +
        " →</button>" +
        '<div style="text-align:center;font-size:.7rem;color:var(--ink3);margin-top:10px">🔒 Secured payment · Free cancellation before check-in</div>' +
        "</div>";
      inner.innerHTML = html;
      hidePageLoader();
    }); // end inner rAF
  }); // end outer rAF
}

function selPay(el, type) {
  document
    .querySelectorAll("#pay-methods .chip")
    .forEach((c) => c.classList.remove("on"));
  el.classList.add("on");
  ["upi-field"].forEach((id) => {
    const el2 = document.getElementById(id);
    if (el2) el2.style.display = "block";
  });
}

/* ══ SECURE BOOKING & PAYMENT SYSTEM ══ */

function confirmBooking(id, total) {
  if (!S.user) {
    openLoginModal();
    return;
  }
  var all = getAllStays();
  var s = all.find(function (x) {
    return x.id === id;
  });
  if (!s) return;
  if (!window.FS_VALIDATE || !window.FS_VALIDATE(total, "amount")) {
    toast("Invalid amount", "error");
    return;
  }
  var guestName = (
    document.getElementById("bk-guest-name")?.value || ""
  ).trim();
  var guestPhone = (
    document.getElementById("bk-guest-phone")?.value || ""
  ).replace(/\s/g, "");
  if (!guestName || guestName.length < 2) {
    toast("⚠️ Please enter your full name", "warning");
    document.getElementById("bk-guest-name")?.focus();
    return;
  }
  if (!/^[6-9]\d{9}$/.test(guestPhone)) {
    toast("⚠️ Enter valid 10-digit Indian mobile number", "warning");
    document.getElementById("bk-guest-phone")?.focus();
    return;
  }
  window._pendingGuestName = guestName;
  window._pendingGuestPhone = guestPhone;
  openUPIModal(id, total);
}

function showBookingSuccess(s, bkId, total, payMethod, status) {
  var payStatus = status || "pending_verification";
  var isVerified = payStatus === "confirmed";
  var inner = document.getElementById("booking-inner");
  if (!inner) return;
  inner.innerHTML =
    '<div class="modal-body"><div style="text-align:center;padding:10px 0">' +
    '<div style="font-size:3.2rem;margin-bottom:12px">' +
    (isVerified ? "🎉" : "⏳") +
    "</div>" +
    '<div style="font-family:Fraunces,serif;font-size:1.35rem;font-weight:700;margin-bottom:8px">' +
    (isVerified ? "Booking Confirmed!" : "Booking Received!") +
    "</div>" +
    '<p style="color:var(--ink3);font-size:.84rem;margin-bottom:16px">You\'re going to <strong>' +
    (window.FS_SANITIZE ? window.FS_SANITIZE(s.name) : s.name) +
    "</strong>.<br>Updates will be sent to " +
    (S.user ? S.user.email : "your email") +
    "</p>" +
    '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:10px 16px;font-size:.83rem;margin-bottom:10px;text-align:left">' +
    'Booking ID: <strong style="color:var(--coral)">' +
    bkId +
    "</strong></div>" +
    '<div style="background:' +
    (isVerified
      ? "#dcfce7;border:1px solid #16a34a"
      : "#fff7ed;border:1px solid #fed7aa") +
    ";border-radius:var(--r);padding:10px 14px;font-size:.8rem;color:" +
    (isVerified ? "#15803d" : "#92400e") +
    ';margin-bottom:8px">' +
    (isVerified
      ? "✅ Payment of Rs." + total.toLocaleString() + " confirmed"
      : "⏳ Payment pending admin verification. We will confirm within 30 minutes.") +
    "</div>" +
    (payMethod === "UPI"
      ? '<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:var(--r);padding:8px 12px;font-size:.74rem;color:#166534;margin-bottom:14px">UTR recorded and saved securely in Firebase</div>'
      : "") +
    '<div style="display:flex;gap:10px">' +
    '<button class="btn-s" onclick="closeModal(\'modal-booking\')" style="flex:1">Close</button>' +
    "<button class=\"btn-p\" onclick=\"closeModal('modal-booking');closeModal('modal-listing');goto('profile');showPTab('bookings')\" style=\"flex:2\">View Booking</button>" +
    "</div></div></div>";
  toast(
    isVerified
      ? "Booking confirmed!"
      : "Booking received! Pending verification.",
    isVerified ? "success" : "info",
  );
}

/* ══ UPI PAYMENT FLOW ══ */
function openUPIModal(stayId, grand) {
  if (!S.user) {
    openLoginModal();
    return;
  }
  if (!window.FS_VALIDATE || !window.FS_VALIDATE(grand, "amount")) {
    toast("Invalid amount", "error");
    return;
  }
  var bkId = "FS" + Date.now().toString().slice(-8);
  S.upiPending = { id: stayId, total: grand, bkId: bkId };

  var upiLink =
    "upi://pay?pa=" +
    UPI_ID +
    "&pn=" +
    encodeURIComponent("homestays") +
    "&am=" +
    grand +
    "&cu=INR" +
    "&tn=" +
    encodeURIComponent("homestays-" + bkId);

  var amtEl = document.getElementById("upi-amt");
  var refEl = document.getElementById("upi-bk-ref");
  var idEl = document.getElementById("upi-id-txt");
  if (amtEl) amtEl.textContent = "Rs." + grand.toLocaleString();
  if (refEl) refEl.textContent = "Booking Ref: " + bkId;
  if (idEl) idEl.textContent = UPI_ID;

  var qrDiv = document.getElementById("upi-qr");
  if (qrDiv) {
    qrDiv.innerHTML = "";
    if (typeof QRCode !== "undefined") {
      new QRCode(qrDiv, {
        text: upiLink,
        width: 190,
        height: 190,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M,
      });
    } else {
      qrDiv.innerHTML =
        '<div style="width:190px;height:190px;display:flex;align-items:center;justify-content:center;font-size:.76rem;color:var(--ink3);text-align:center;border:1px dashed var(--border);border-radius:8px;padding:16px">Open UPI app and pay to<br><strong>' +
        UPI_ID +
        "</strong></div>";
    }
  }

  // Reset to step 1
  var s1 = document.getElementById("upi-step-1");
  var s2 = document.getElementById("upi-step-2");
  if (s1) s1.style.display = "block";
  if (s2) s2.style.display = "none";
  var errEl = document.getElementById("upi-utr-error");
  if (errEl) errEl.style.display = "none";
  var utrInp = document.getElementById("upi-utr-inp");
  if (utrInp) utrInp.value = "";

  clearInterval(_upiT);
  var secs = 600;
  _upiT = setInterval(function () {
    secs--;
    var m = Math.floor(secs / 60);
    var sc = secs % 60;
    var cd = document.getElementById("upi-cd");
    var bar = document.getElementById("upi-bar");
    if (cd) cd.textContent = m + ":" + (sc < 10 ? "0" : "") + sc;
    if (bar) bar.style.width = (secs / 600) * 100 + "%";
    if (secs <= 0) {
      clearInterval(_upiT);
      toast("Payment window expired. Please try again.", "error");
      closeModal("modal-upi");
    }
  }, 1000);

  openModal("modal-upi");
}

function upiShowStep2() {
  if (!S.upiPending) {
    closeModal("modal-upi");
    return;
  }
  var s1 = document.getElementById("upi-step-1");
  var s2 = document.getElementById("upi-step-2");
  if (s1) s1.style.display = "none";
  if (s2) s2.style.display = "block";
  clearInterval(_upiT);
}

function upiBackToStep1() {
  var s1 = document.getElementById("upi-step-1");
  var s2 = document.getElementById("upi-step-2");
  if (s1) s1.style.display = "block";
  if (s2) s2.style.display = "none";
  // restart timer
  if (S.upiPending) {
    var grand = S.upiPending.total;
    var secs = 300;
    _upiT = setInterval(function () {
      secs--;
      var cd = document.getElementById("upi-cd");
      var bar = document.getElementById("upi-bar");
      var m = Math.floor(secs / 60);
      var sc = secs % 60;
      if (cd) cd.textContent = m + ":" + (sc < 10 ? "0" : "") + sc;
      if (bar) bar.style.width = (secs / 300) * 100 + "%";
      if (secs <= 0) {
        clearInterval(_upiT);
        closeModal("modal-upi");
        toast("Session expired", "error");
      }
    }, 1000);
  }
}

async function verifyAndConfirmUTR() {
  if (!S.upiPending) {
    closeModal("modal-upi");
    return;
  }
  if (!S.user) {
    closeModal("modal-upi");
    openLoginModal();
    return;
  }

  var utrInp = document.getElementById("upi-utr-inp");
  var errEl = document.getElementById("upi-utr-error");
  var btn = document.getElementById("upi-verify-btn");
  var utr = utrInp ? utrInp.value.trim().toUpperCase() : "";

  if (errEl) errEl.style.display = "none";

  if (!utr || utr.length < 12) {
    if (errEl) {
      errEl.textContent =
        "Please enter a valid UTR number (minimum 12 characters)";
      errEl.style.display = "block";
    }
    return;
  }
  if (!/^[A-Z0-9]{12,22}$/.test(utr)) {
    if (errEl) {
      errEl.textContent = "UTR must be 12-22 alphanumeric characters only";
      errEl.style.display = "block";
    }
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Verifying...";
  }

  try {
    // Check duplicate UTR
    var utrCheck = { valid: true };
    if (window.fsVerifyUTR) {
      utrCheck = await window.fsVerifyUTR(utr);
    }

    if (!utrCheck.valid) {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-shield-alt"></i> Verify and Confirm';
      }
      var reason =
        utrCheck.reason === "already_used"
          ? "This UTR has already been used for another booking"
          : utrCheck.reason === "rate_limited"
            ? "Too many attempts. Please wait."
            : "Invalid UTR format";
      if (errEl) {
        errEl.textContent = reason;
        errEl.style.display = "block";
      }
      return;
    }

    var pend = S.upiPending;
    var all = getAllStays();
    var stay = all.find(function (x) {
      return x.id === pend.id;
    });
    if (!stay) {
      closeModal("modal-upi");
      return;
    }

    var bkData = {
      id: pend.bkId,
      stayId: pend.id,
      stayName: stay.name,
      stayPhoto: stay.photos && stay.photos[0] ? stay.photos[0] : "",
      loc: stay.loc,
      checkin: S.dates.in || "TBD",
      checkout: S.dates.out || "TBD",
      guests: S.guests.adults + S.guests.children,
      total: pend.total,
      status: "pending_verification",
      payMethod: "UPI",
      utr: utr,
      date: new Date().toISOString(),
      guestName: window._pendingGuestName || (S.user ? S.user.name : ""),
      guestPhone: window._pendingGuestPhone || (S.user ? S.user.phone : ""),
    };

    // Save to Firestore
    var firestoreId = null;
    if (window.fsSaveBooking) {
      firestoreId = await window.fsSaveBooking(bkData);
    }

    // Save payment record
    if (window.fsSavePayment) {
      await window.fsSavePayment({
        bookingId: pend.bkId,
        stayId: pend.id,
        amount: pend.total,
        utr: utr,
        payMethod: "UPI",
        upiId: UPI_ID,
      });
    }

    // Update local state
    S.bookings.push(bkData);
    if (S.user) {
      lsSet("fs_bks_" + S.user.id, S.bookings);
      S.user.trips = (S.user.trips || 0) + 1;
      lsSet("fs_user", S.user);
    }

    S.upiPending = null;
    clearInterval(_upiT);
    closeModal("modal-upi");
    showBookingSuccess(
      stay,
      pend.bkId,
      pend.total,
      "UPI",
      "pending_verification",
    );
  } catch (e) {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = "Verify and Confirm";
    }
    if (errEl) {
      errEl.textContent = "Verification failed. Please try again.";
      errEl.style.display = "block";
    }
    console.warn("UTR verify error:", e.message);
  }
}

function launchUPI(app) {
  if (!S.upiPending) return;
  var pa = encodeURIComponent(UPI_ID);
  var pn = encodeURIComponent("homestays");
  var am = S.upiPending.total;
  var tn = encodeURIComponent("homestays-" + S.upiPending.bkId);

  // App-specific deep links — pre-fill UPI ID + amount
  var links = {
    gpay:
      "gpay://upi/pay?pa=" +
      pa +
      "&pn=" +
      pn +
      "&am=" +
      am +
      "&cu=INR&tn=" +
      tn,
    phonepe:
      "phonepe://pay?pa=" + pa + "&pn=" + pn + "&am=" + am + "&cu=INR&tn=" + tn,
    paytm:
      "paytmmp://pay?pa=" + pa + "&pn=" + pn + "&am=" + am + "&cu=INR&tn=" + tn,
    bhim: "upi://pay?pa=" + pa + "&pn=" + pn + "&am=" + am + "&cu=INR&tn=" + tn,
  };

  var appNames = {
    gpay: "Google Pay",
    phonepe: "PhonePe",
    paytm: "Paytm",
    bhim: "BHIM",
  };
  var link = links[app] || links.bhim;

  var _a = document.createElement("a");
  _a.href = link;
  _a.style.display = "none";
  document.body.appendChild(_a);
  _a.click();
  setTimeout(function () {
    document.body.removeChild(_a);
  }, 500);

  // Show step 2 (UTR entry) after a short delay so user can complete payment
  setTimeout(function () {
    toast(
      "📲 Opening " +
        (appNames[app] || app) +
        "… After payment, enter UTR below.",
      "info",
    );
  }, 800);
}

function cpyUPI() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(UPI_ID).then(function () {
      toast("UPI ID copied!", "success");
    });
  } else {
    toast("UPI ID: " + UPI_ID, "info");
  }
}

function confirmUPI() {
  // Legacy fallback — redirects to UTR flow
  upiShowStep2();
}

/* ══ PROFILE ══ */
function renderProfile() {
  const u = S.user;
  if (!u) return;
  document.getElementById("pf-av").textContent = u.name[0].toUpperCase();
  document.getElementById("pf-name").textContent = u.name;
  document.getElementById("pf-email").textContent = u.email;
  document.getElementById("set-name").value = u.name || "";
  document.getElementById("set-email").value = u.email || "";
  document.getElementById("set-phone").value = u.phone || "";
  renderBookings();
  renderWishlist();
}
function showPTab_legacy(tab) {
  document.querySelectorAll(".ptab").forEach((t) => t.classList.remove("on"));
  document
    .querySelectorAll(".pnav-item")
    .forEach((t) => t.classList.remove("on"));
  document.getElementById("ptab-" + tab)?.classList.add("on");
  document.getElementById("pn-" + tab)?.classList.add("on");
}
function renderBookings() {
  const el = document.getElementById("bookings-list");
  if (!S.bookings.length) {
    el.innerHTML =
      '<div class="empty"><div class="empty-ico">📋</div><h3>No bookings yet</h3><p>Your upcoming trips will appear here</p><button class="btn-p" style="width:auto;padding:10px 24px;margin-top:16px" onclick="goto(\'stays\')">Explore Stays →</button></div>';
    return;
  }
  el.innerHTML = S.bookings
    .slice()
    .reverse()
    .map(function (b) {
      var isCancelled = b.status === "cancelled";
      var statusColor = isCancelled
        ? "background:#fee2e2;color:#dc2626"
        : b.status === "confirmed"
          ? "background:#dcfce7;color:#16a34a"
          : "background:#fef9c3;color:#ca8a04";
      return (
        '<div class="bk-card">' +
        '<div class="bk-card-img"><img src="' +
        (b.stayPhoto || "") +
        '" alt="' +
        b.stayName +
        '" onerror="this.parentElement.innerHTML=\'<div style=height:80px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;background:var(--coral-bg)>🏡</div>\'"></div>' +
        '<div class="bk-card-info" style="flex:1">' +
        '<div class="bk-card-name">' +
        b.stayName +
        "</div>" +
        '<div class="bk-card-meta">📍 ' +
        b.loc +
        "</div>" +
        '<div class="bk-card-meta">📅 ' +
        b.checkin +
        " → " +
        b.checkout +
        " · 👥 " +
        b.guests +
        " guest" +
        (b.guests > 1 ? "s" : "") +
        "</div>" +
        '<div class="bk-card-meta" style="margin-bottom:8px">💰 Total: <strong>₹' +
        (b.total || 0).toLocaleString() +
        "</strong>" +
        (b.payMethod ? " · via " + b.payMethod : "") +
        "</div>" +
        '<span class="bk-card-status" style="' +
        statusColor +
        ';padding:2px 10px;border-radius:50px;font-size:.66rem;font-weight:700">' +
        (isCancelled
          ? "❌ Cancelled"
          : b.status === "confirmed"
            ? "✅ Confirmed"
            : "⏳ " + b.status) +
        "</span>" +
        '<span style="font-size:.66rem;color:var(--ink3);margin-left:8px">#' +
        b.id +
        "</span>" +
        '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">' +
        "<button onclick=\"downloadItinerary('" +
        b.id +
        '\')" style="display:flex;align-items:center;gap:5px;padding:6px 12px;border:1px solid var(--border);border-radius:8px;background:white;font-size:.74rem;font-weight:600;cursor:pointer;font-family:inherit;color:var(--ink2)"><i class="fas fa-download" style="color:var(--coral)"></i> Download Itinerary</button>' +
        (!isCancelled
          ? "<button onclick=\"openCancelModal('" +
            b.id +
            '\')" style="display:flex;align-items:center;gap:5px;padding:6px 12px;border:1px solid #fca5a5;border-radius:8px;background:#fff5f5;font-size:.74rem;font-weight:600;cursor:pointer;font-family:inherit;color:#dc2626"><i class="fas fa-times-circle"></i> Cancel</button>'
          : "") +
        "</div>" +
        "</div></div>"
      );
    })
    .join("");
}
function downloadItinerary(bookingId) {
  var b = S.bookings.find(function (x) {
    return x.id === bookingId;
  });
  if (!b) return;
  var lines = [];
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("         🏡 HOMESTAYS — BOOKING ITINERARY");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("");
  lines.push("Booking ID     : " + b.id);
  lines.push("Property       : " + b.stayName);
  lines.push("Location       : " + b.loc);
  lines.push("Check-In       : " + b.checkin);
  lines.push("Check-Out      : " + b.checkout);
  lines.push("Guests         : " + b.guests);
  lines.push("Guest Name     : " + (b.guestName || S.user?.name || "—"));
  lines.push("Guest Phone    : " + (b.guestPhone || S.user?.phone || "—"));
  lines.push("Payment Method : " + (b.payMethod || "—"));
  lines.push("Status         : " + b.status);
  lines.push("Total Paid     : ₹" + (b.total || 0).toLocaleString());
  lines.push("");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("WHAT TO CARRY");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("• Government ID (Aadhaar / Passport)");
  lines.push("• This booking confirmation");
  lines.push("• Payment receipt / UTR: " + (b.utr || "—"));
  lines.push("");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("IMPORTANT NOTES");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("• Check-in time: 2:00 PM");
  lines.push("• Check-out time: 11:00 AM");
  lines.push("• Free cancellation before check-in");
  lines.push("• Contact support: support@homestays.in");
  lines.push("");
  lines.push("Generated on: " + new Date().toLocaleString("en-IN"));
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  var text = lines.join("\n");
  var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "itinerary-" + b.id + ".txt";
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
  toast("📄 Itinerary downloaded!", "success");
}

function renderWishlist() {
  const grid = document.getElementById("wishlist-grid");
  const empty = document.getElementById("wishlist-empty");
  const all = [...STAYS, ...S.listings.filter((l) => l.status === "approved")];
  const items = all.filter((s) => S.wishlist.has(s.id));
  if (!items.length) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  grid.innerHTML = items.map(stayCard).join("");
}
function saveSettings() {
  if (!S.user) return;
  S.user.name = v("set-name") || S.user.name;
  S.user.email = v("set-email") || S.user.email;
  S.user.phone = v("set-phone") || S.user.phone;
  lsSet("fs_user", S.user);
  const users = lsGet("fs_users") || [];
  const idx = users.findIndex((u) => u.id === S.user.id);
  if (idx > -1) {
    users[idx] = { ...users[idx], ...S.user };
    lsSet("fs_users", users);
  }
  document.getElementById("pf-name").textContent = S.user.name;
  toast("✅ Settings saved", "success");
}

/* ══ HOST DASHBOARD ══ */
function openHostModal() {
  openModal("modal-host");
}
function openAddListingModal() {
  if (!S.user) {
    openLoginModal();
    toast("💡 Sign in to list your property", "info");
    return;
  }
  _photoUrls = ["", "", ""];
  renderPhotoSlots();
  // clear fields
  [
    "al-name",
    "al-price",
    "al-guests",
    "al-rooms",
    "al-ams",
    "al-desc",
    "al-city",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  openModal("modal-add-listing");
}
function addPhoto(idx) {
  // Create hidden file input and trigger it
  var inp = document.createElement("input");
  inp.type = "file";
  inp.accept = "image/*";
  inp.style.display = "none";
  document.body.appendChild(inp);
  inp.onchange = function () {
    var file = inp.files[0];
    if (!file) {
      document.body.removeChild(inp);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast("⚠️ Image too large. Max 5MB allowed.", "warning");
      document.body.removeChild(inp);
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      _photoUrls[idx] = e.target.result; // base64 data URL
      renderPhotoSlots();
      document.body.removeChild(inp);
    };
    reader.onerror = function () {
      toast("❌ Could not read file. Try again.", "error");
      document.body.removeChild(inp);
    };
    reader.readAsDataURL(file);
  };
  inp.click();
}
function renderPhotoSlots() {
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById("ps-" + i);
    if (!slot) continue;
    if (_photoUrls[i]) {
      slot.innerHTML = `<img src="${_photoUrls[i]}" alt="Photo" onerror="this.parentElement.innerHTML='<div style=padding:12px;font-size:.72rem;color:var(--ink3);text-align:center>⚠️ Invalid URL</div>'">
        <div onclick="event.stopPropagation();_photoUrls[${i}]='';renderPhotoSlots()" style="position:absolute;top:5px;right:5px;background:rgba(0,0,0,.6);color:white;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.7rem;cursor:pointer">✕</div>`;
    } else {
      slot.innerHTML = `<i class="${i === 0 ? "fas fa-camera" : "fas fa-plus"}" style="font-size:${i === 0 ? "1.4" : "1.1"}rem;color:var(--ink4)"></i><div class="photo-slot-lbl">${i === 0 ? "Main Photo" : "Photo " + (i + 1)}</div>`;
    }
  }
}
function submitListing() {
  const name = v("al-name"),
    city = v("al-city");
  if (!name) {
    toast("⚠️ Property name required", "warning");
    return;
  }
  if (!city) {
    toast("⚠️ City required", "warning");
    return;
  }
  const listing = {
    id: "l" + Date.now(),
    name,
    type: document.getElementById("al-type").value,
    city,
    state: document.getElementById("al-state").value,
    loc: city + ", " + document.getElementById("al-state").value,
    price: parseInt(v("al-price")) || 3000,
    guests: parseInt(v("al-guests")) || 4,
    rooms: parseInt(v("al-rooms")) || 2,
    amenities: v("al-ams")
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean),
    desc: v("al-desc"),
    photos: _photoUrls.filter(Boolean),
    host: S.user.name,
    host_id: S.user.id,
    host_since: new Date().getFullYear(),
    emoji: "🏡",
    status: "pending",
    badge: null,
    submitted: new Date().toISOString(),
    rating: null,
    reviews: 0,
    discount: null,
  };
  S.listings.push(listing);
  lsSet("fs_listings", S.listings);
  closeModal("modal-add-listing");
  toast("🎉 Listing submitted! Pending admin review.", "success");
  renderHostDash();
}
function renderHostDash() {
  const myListings = S.listings.filter((l) => l.host_id === S.user?.id);
  const el = document.getElementById("host-listings");
  const banner = document.getElementById("host-plan-banner");
  // Plan banner
  const plan = getPlanDetails(S.user?.plan || "free");
  if (banner) {
    banner.innerHTML = `
      <div style="background:white;border:1.5px solid ${plan.id === "gold" ? "var(--gold)" : plan.id === "pro" ? "#2563eb" : plan.id === "basic" ? "var(--teal)" : "var(--border)"};border-radius:var(--r-lg);padding:18px 20px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <div style="font-size:2rem">${plan.ico}</div>
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:4px">
            <span style="font-family:'Fraunces',serif;font-weight:700;font-size:1rem">Active Plan: ${plan.name}</span>
            ${plan.id !== "free" ? `<span class="verified-badge ${plan.id === "gold" ? "gold" : ""}">${plan.id === "gold" ? "👑 GOLD HOST" : "✅ VERIFIED"}</span>` : ""}
          </div>
          <div style="font-size:.78rem;color:var(--ink3)">
            ${plan.monthly === 0 ? "Free forever" : "₹" + plan.monthly.toLocaleString() + "/month"} &nbsp;·&nbsp;
            <strong style="color:var(--teal)">${plan.commission}% commission</strong> per booking &nbsp;·&nbsp;
            ${plan.id === "free" ? "Standard placement" : plan.id === "gold" ? "🥇 #1 search placement always" : "Top placement in search results"}
          </div>
        </div>
        <button onclick="openPlanModal()" class="btn-s" style="padding:8px 16px;font-size:.78rem;border-color:${plan.id === "gold" ? "var(--gold)" : plan.id === "pro" ? "#2563eb" : "var(--border)"};color:${plan.id === "gold" ? "#b45309" : plan.id === "pro" ? "#2563eb" : "var(--ink)"}">
          ${plan.id === "gold" ? "Manage Plan" : "⬆️ Upgrade Plan"}
        </button>
      </div>`;
  }
  if (!myListings.length) {
    el.innerHTML =
      '<div class="empty"><div class="empty-ico">🏘️</div><h3>No listings yet</h3><p>Add your first property and start earning</p><button class="btn-p" style="width:auto;padding:10px 24px;margin-top:16px" onclick="openAddListingModal()">+ Add Listing</button></div>';
    return;
  }
  el.innerHTML = myListings
    .slice()
    .reverse()
    .map(
      (l) => `
    <div class="adm-card">
      <div class="adm-card-head">
        <div>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px">
            <strong style="font-size:.95rem">${l.name}</strong>
            <span class="st-badge ${l.status}">${l.status.toUpperCase()}</span>
            ${plan.id !== "free" ? `<span class="verified-badge ${plan.id === "gold" ? "gold" : ""}">${plan.id === "gold" ? "👑 GOLD" : "✅ VERIFIED"}</span>` : ""}
          </div>
          <div style="font-size:.78rem;color:var(--ink3)">📍 ${l.loc} · 🏠 ${l.type} · ₹${l.price?.toLocaleString()}/night · 👥 ${l.guests} guests</div>
          <div style="font-size:.74rem;color:var(--teal);margin-top:4px">💰 Commission on bookings: <strong>${plan.commission}%</strong> (saves you ${18 - plan.commission}% vs Free plan)</div>
        </div>
        ${l.photos?.[0] ? `<img src="${l.photos[0]}" style="width:72px;height:56px;border-radius:var(--r);object-fit:cover;flex-shrink:0" alt="" onerror="this.style.display='none'">` : ""}
      </div>
      ${l.status === "pending" ? '<div style="font-size:.76rem;color:var(--gold);background:#fefce8;padding:6px 10px;border-radius:8px;display:inline-block">⏳ Under review — you\'ll be notified once approved</div>' : ""}
      ${l.status === "approved" ? '<div style="font-size:.76rem;color:#16a34a;background:#dcfce7;padding:6px 10px;border-radius:8px;display:inline-block">✅ Live on homestays</div>' : ""}
      ${l.status === "rejected" ? '<div style="font-size:.76rem;color:#dc2626;background:#fee2e2;padding:6px 10px;border-radius:8px;display:inline-block">❌ Not approved — please resubmit with better details</div>' : ""}
    </div>`,
    )
    .join("");
}

/* ══ PREMIUM PLANS ══ */
const PLANS = [
  {
    id: "free",
    name: "Free",
    ico: "🆓",
    price: 0,
    commission: 18,
    monthly: 0,
    feats: [
      "List 1 property",
      "18% commission per booking",
      "Basic listing page",
      "Email support",
    ],
    nope: [
      "Top placement",
      "Verified badge",
      "Analytics",
      "Priority support",
      "Unlimited listings",
    ],
  },
  {
    id: "basic",
    name: "Basic",
    ico: "⭐",
    price: 499,
    commission: 12,
    monthly: 499,
    recommended: false,
    feats: [
      "List up to 3 properties",
      "12% commission",
      "Verified badge",
      "Priority email support",
      "Basic analytics",
    ],
    nope: [
      "Top placement",
      "Gold badge",
      "Dedicated manager",
      "Unlimited listings",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    ico: "🚀",
    price: 999,
    commission: 8,
    monthly: 999,
    recommended: true,
    feats: [
      "List up to 10 properties",
      "8% commission",
      "✅ Verified badge",
      "Top search placement",
      "Full analytics dashboard",
      "Priority support 24/7",
    ],
    nope: ["Unlimited listings", "Gold badge"],
  },
  {
    id: "gold",
    name: "Gold",
    ico: "👑",
    price: 1999,
    commission: 4,
    monthly: 1999,
    gold: true,
    feats: [
      "Unlimited listings",
      "4% commission — lowest ever",
      "👑 Gold verified badge",
      "#1 search placement always",
      "Dedicated account manager",
      "Revenue analytics + insights",
      "Free professional photography",
      "homestays homepage feature",
    ],
  },
];

let _selectedPlan = "free";

function openPlanModal() {
  if (!S.user) {
    openLoginModal();
    toast("💡 Sign in to manage your plan", "info");
    return;
  }
  _selectedPlan = S.user.plan || "free";
  renderPlanCards();
  openModal("modal-plans");
}

function renderPlanCards() {
  const grid = document.getElementById("plan-cards-grid");
  if (!grid) return;
  grid.innerHTML = PLANS.map(
    (p) => `
    <div class="plan-card ${p.recommended ? "recommended" : ""} ${p.gold ? "gold-plan" : ""} ${_selectedPlan === p.id ? "selected" : ""}"
         onclick="selectPlan('${p.id}',this)">
      <div class="plan-ico">${p.ico}</div>
      <div class="plan-name">${p.name}</div>
      <div class="plan-price ${p.gold ? "gold" : ""}">
        ${p.monthly === 0 ? "Free" : "₹" + p.monthly.toLocaleString()} <span>${p.monthly === 0 ? "forever" : "/month"}</span>
      </div>
      <div class="plan-commission">${p.commission}% commission</div>
      <ul class="plan-feat">
        ${p.feats.map((f) => `<li>${f}</li>`).join("")}
        ${(p.nope || []).map((f) => `<li class="no">${f}</li>`).join("")}
      </ul>
    </div>`,
  ).join("");
  updatePlanBtn();
}

function selectPlan(id, el) {
  _selectedPlan = id;
  document
    .querySelectorAll(".plan-card")
    .forEach((c) => c.classList.remove("selected"));
  el.classList.add("selected");
  updatePlanBtn();
}

function updatePlanBtn() {
  const btn = document.getElementById("plan-confirm-btn");
  if (!btn) return;
  const p = PLANS.find((x) => x.id === _selectedPlan);
  if (!p) return;
  const current = S.user?.plan || "free";
  if (_selectedPlan === current) {
    btn.textContent = "Current Plan";
    btn.disabled = true;
    btn.style.opacity = ".6";
    return;
  }
  btn.disabled = false;
  btn.style.opacity = "1";
  btn.textContent =
    p.monthly === 0
      ? "Switch to Free"
      : "Pay ₹" + p.monthly.toLocaleString() + " & Activate →";
}

function confirmPlan() {
  const p = PLANS.find((x) => x.id === _selectedPlan);
  if (!p || !S.user) return;
  const old = S.user.plan || "free";
  if (_selectedPlan === old) return;

  // Free plan — no payment needed
  if (p.monthly === 0) {
    _activatePlan(p);
    return;
  }

  // Paid plan — show UPI payment modal
  _openPlanUPIModal(p);
}

function _activatePlan(p) {
  S.user.plan = p.id;
  S.user.planName = p.name;
  S.user.planActivated = new Date().toISOString();
  lsSet("fs_user", S.user);
  const users = lsGet("fs_users") || [];
  const idx = users.findIndex((u) => u.id === S.user.id);
  if (idx > -1) {
    users[idx].plan = p.id;
    users[idx].planName = p.name;
    lsSet("fs_users", users);
  }
  if (window.fsUpdateDoc && S.user.id) {
    window.fsUpdateDoc("users", S.user.id, {
      plan: p.id,
      planName: p.name,
      planActivated: S.user.planActivated,
    });
  }
  closeModal("modal-plans");
  closeModal("modal-plan-upi");
  toast(
    "🎉 " + p.name + " Plan activated! Commission: " + p.commission + "%",
    "success",
  );
  renderHostDash();
  renderHome();
}

var _planUpiTimer = null;

function _openPlanUPIModal(p) {
  var bkId = "PLAN" + Date.now().toString().slice(-8);
  var amount = p.monthly;
  var pa = encodeURIComponent(UPI_ID);
  var pn = encodeURIComponent("homestays");
  var am = amount;
  var tn = encodeURIComponent("plan-" + p.id + "-" + bkId);

  var upiBase =
    "upi://pay?pa=" + pa + "&pn=" + pn + "&am=" + am + "&cu=INR&tn=" + tn;
  var gpayLink =
    "gpay://upi/pay?pa=" + pa + "&pn=" + pn + "&am=" + am + "&cu=INR&tn=" + tn;
  var phonepeLink =
    "phonepe://pay?pa=" + pa + "&pn=" + pn + "&am=" + am + "&cu=INR&tn=" + tn;
  var paytmLink =
    "paytmmp://pay?pa=" + pa + "&pn=" + pn + "&am=" + am + "&cu=INR&tn=" + tn;

  // Build modal HTML
  var html =
    '<button class="modal-close" onclick="closeModal(\'modal-plan-upi\')"><i class="fas fa-times"></i></button>' +
    '<div class="modal-body" style="padding:22px">' +
    // Amount header
    '<div style="text-align:center;margin-bottom:16px">' +
    "<div style=\"font-family:'Fraunces',serif;font-size:1.2rem;font-weight:700;margin-bottom:4px\">Activate " +
    p.name +
    " Plan</div>" +
    '<div style="font-size:.8rem;color:var(--ink3)">Pay via UPI to activate instantly</div>' +
    "</div>" +
    '<div style="background:linear-gradient(135deg,var(--teal),#0d8a7d);border-radius:var(--r-lg);padding:14px;text-align:center;margin-bottom:16px;color:white">' +
    '<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;opacity:.8">Amount to Pay</div>' +
    "<div style=\"font-family:'Fraunces',serif;font-size:2rem;font-weight:700\">₹" +
    amount.toLocaleString() +
    "</div>" +
    '<div style="font-size:.68rem;opacity:.7;margin-top:2px">Ref: ' +
    bkId +
    " · " +
    p.name +
    " Plan</div>" +
    "</div>" +
    // QR Code
    '<div style="text-align:center;margin-bottom:14px">' +
    '<div style="display:inline-block;padding:10px;background:white;border:2px solid var(--border);border-radius:var(--r-lg);box-shadow:var(--shadow)">' +
    '<div id="plan-upi-qr" style="width:180px;height:180px;display:flex;align-items:center;justify-content:center"></div>' +
    "</div>" +
    '<div style="font-size:.7rem;color:var(--ink3);margin-top:6px">Scan with any UPI app</div>' +
    "</div>" +
    // UPI App buttons — highlighted
    '<div style="margin-bottom:14px">' +
    '<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;color:var(--ink);margin-bottom:8px;letter-spacing:.5px;text-align:center">Or pay directly via app</div>' +
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">' +
    '<a href="' +
    gpayLink +
    '" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:linear-gradient(135deg,#e8f5e9,#c8e6c9);border:2px solid #4caf50;border-radius:var(--r);cursor:pointer;transition:transform .15s" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'\'">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.1rem;color:#1a73e8;box-shadow:0 2px 8px rgba(0,0,0,.1)">G</div>' +
    '<span style="font-size:.62rem;font-weight:700;color:#1b5e20">GPay</span>' +
    "</a>" +
    '<a href="' +
    phonepeLink +
    '" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:linear-gradient(135deg,#ede9fe,#ddd6fe);border:2px solid #7c3aed;border-radius:var(--r);cursor:pointer;transition:transform .15s" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'\'">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.75rem;color:#5f259f;box-shadow:0 2px 8px rgba(0,0,0,.1)">Pe</div>' +
    '<span style="font-size:.62rem;font-weight:700;color:#4c1d95">PhonePe</span>' +
    "</a>" +
    '<a href="' +
    paytmLink +
    '" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);border:2px solid #2563eb;border-radius:var(--r);cursor:pointer;transition:transform .15s" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'\'">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.7rem;color:#1d4ed8;box-shadow:0 2px 8px rgba(0,0,0,.1)">Pay</div>' +
    '<span style="font-size:.62rem;font-weight:700;color:#1e3a8a">Paytm</span>' +
    "</a>" +
    '<a href="' +
    upiBase +
    '" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:linear-gradient(135deg,#fef9c3,#fef08a);border:2px solid #ca8a04;border-radius:var(--r);cursor:pointer;transition:transform .15s" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'\'">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.7rem;color:#854d0e;box-shadow:0 2px 8px rgba(0,0,0,.1)">BHIM</div>' +
    '<span style="font-size:.62rem;font-weight:700;color:#713f12">BHIM</span>' +
    "</a>" +
    "</div></div>" +
    // UPI ID copy
    '<div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:10px 14px;margin-bottom:14px">' +
    '<div><div style="font-size:.62rem;font-weight:700;text-transform:uppercase;color:var(--ink3);letter-spacing:.5px">UPI ID</div>' +
    '<div style="font-weight:700;font-size:.9rem">' +
    UPI_ID +
    "</div></div>" +
    "<button onclick=\"navigator.clipboard.writeText('" +
    UPI_ID +
    "').then(()=>toast('✅ UPI ID copied!','success'))\" style=\"padding:6px 12px;border:1px solid var(--border);border-radius:8px;background:white;font-size:.76rem;font-weight:600;cursor:pointer;font-family:inherit\">Copy</button>" +
    "</div>" +
    // UTR entry
    '<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:var(--r);padding:10px 13px;font-size:.76rem;color:#92400e;margin-bottom:10px">' +
    "⚠️ After payment, enter UTR / Transaction ID to activate plan instantly." +
    "</div>" +
    '<input class="f-inp" id="plan-utr-inp" placeholder="Enter UTR / Transaction ID" style="margin-bottom:6px;letter-spacing:1px;font-weight:600">' +
    '<div id="plan-utr-error" style="display:none;color:#dc2626;font-size:.74rem;margin-bottom:8px"></div>' +
    '<button class="btn-p" style="width:100%" onclick="verifyPlanUTR(\'' +
    p.id +
    "'," +
    amount +
    ')">' +
    '<i class="fas fa-check-circle"></i> Verify & Activate ' +
    p.name +
    " Plan" +
    "</button>" +
    '<div style="text-align:center;font-size:.7rem;color:var(--ink3);margin-top:8px">🔒 Secure payment · Instant activation after verification</div>' +
    "</div>";

  var modalEl = document.getElementById("modal-plan-upi");
  if (modalEl) {
    document.getElementById("plan-upi-inner").innerHTML = html;
    // Generate QR
    setTimeout(function () {
      var qrDiv = document.getElementById("plan-upi-qr");
      if (qrDiv && typeof QRCode !== "undefined") {
        new QRCode(qrDiv, {
          text: upiBase,
          width: 180,
          height: 180,
          colorDark: "#000",
          colorLight: "#fff",
          correctLevel: QRCode.CorrectLevel.M,
        });
      } else if (qrDiv) {
        qrDiv.innerHTML =
          '<div style="font-size:.74rem;color:var(--ink3);text-align:center;padding:16px">Pay to<br><strong>' +
          UPI_ID +
          "</strong></div>";
      }
    }, 50);
    openModal("modal-plan-upi");
  }
}

async function verifyPlanUTR(planId, amount) {
  var utr = (document.getElementById("plan-utr-inp")?.value || "")
    .trim()
    .toUpperCase();
  var errEl = document.getElementById("plan-utr-error");
  if (!utr || utr.length < 12) {
    if (errEl) {
      errEl.textContent = "Enter a valid UTR (min 12 characters)";
      errEl.style.display = "block";
    }
    return;
  }
  var btn = document.querySelector("#plan-upi-inner .btn-p");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
  }

  // Save payment record
  if (window.fsSavePayment) {
    await window.fsSavePayment({
      planId: planId,
      amount: amount,
      utr: utr,
      payMethod: "UPI",
      upiId: UPI_ID,
    });
  }

  var p = PLANS.find(function (x) {
    return x.id === planId;
  });
  if (p) _activatePlan(p);
}

function getPlanDetails(planId) {
  return PLANS.find((x) => x.id === planId) || PLANS[0];
}

/* ══ ADMIN — Firebase Role-Based ══ */
function adminLogin() {
  var email = v("adm-email"),
    pass = v("adm-pass");
  if (!email || !pass) {
    toast("⚠️ Enter email and password", "warning");
    return;
  }


  // ── FIREBASE CHECK ──
  if (!window.FS_AUTH || !window.FS_FIREBASE) {
    var _retries = 0;
    var _retryInt = setInterval(function () {
      _retries++;
      if (window.FS_AUTH && window.FS_FIREBASE) {
        clearInterval(_retryInt);
        adminLogin();
      } else if (_retries > 25) {
        clearInterval(_retryInt);
        toast("❌ Firebase not loaded. Check internet connection.", "error");
      }
    }, 200);
    toast("⏳ Connecting to Firebase...", "info");
    return;
  }

  var btn = document.querySelector("#adm-login .btn-p");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Verifying…";
  }

  window.FS_FIREBASE.signInWithEmailAndPassword(window.FS_AUTH, email, pass)
    .then(async function (cred) {
      var uid = cred.user.uid;
      var isAdmin = await window.FS_CHECK_ADMIN(uid);
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Login to Admin";
      }
      if (isAdmin) {
        window._FS_IS_ADMIN = true;
        showAdminDash();
        toast("✅ Admin access granted", "success");
      } else {
        window.FS_FIREBASE.signOut(window.FS_AUTH);
        window._FS_IS_ADMIN = false;
        toast("🚫 Not in admins list. UID: " + uid, "error");
      }
    })
    .catch(function (e) {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Login to Admin";
      }
      var msg =
        e.code === "auth/invalid-credential"
          ? "Wrong email or password."
          : e.code === "auth/user-not-found"
            ? "No account with this email."
            : e.code === "auth/wrong-password"
              ? "Wrong password."
              : e.code === "auth/too-many-requests"
                ? "Too many attempts. Wait 5 min."
                : "Login failed: " + e.message;
      toast("❌ " + msg, "error");
    });
}
function adminLogout() {
  window._FS_IS_ADMIN = false;
  if (window.FS_AUTH && window.FS_FIREBASE) {
    window.FS_FIREBASE.signOut(window.FS_AUTH).catch(function () {});
  }
  document.getElementById("adm-login").style.display = "block";
  document.getElementById("adm-dashboard").style.display = "none";
  goto("home");
  toast("👋 Admin logged out", "info");
}
function showAdminDash() {
  if (!window._FS_IS_ADMIN) {
    toast("🚫 Admin access required", "error");
    return;
  }
  document.getElementById("adm-login").style.display = "none";
  document.getElementById("adm-dashboard").style.display = "block";
  updateAdminStats();
  adminTab("pending");
}
function updateAdminStats() {
  const all = S.listings;
  document.getElementById("adm-n0").textContent = all.filter(
    (l) => l.status === "pending",
  ).length;
  document.getElementById("adm-n1").textContent = all.filter(
    (l) => l.status === "approved",
  ).length;
  document.getElementById("adm-n2").textContent = all.filter(
    (l) => l.status === "rejected",
  ).length;
  const users = lsGet("fs_users") || [];
  document.getElementById("adm-n3").textContent = users.length;
}
function adminTab_legacy(tab) {
  ["pending", "approved", "rejected", "users"].forEach((t) => {
    const el = document.getElementById("at-" + t);
    if (el) el.classList.toggle("on", t === tab);
  });
  const lp = document.getElementById("adm-listings-panel");
  const up = document.getElementById("adm-users-panel");
  lp.style.display = tab !== "users" ? "block" : "none";
  up.style.display = tab === "users" ? "block" : "none";
  if (tab === "users") {
    renderAdminUsers();
    return;
  }
  const items = S.listings.filter((l) => l.status === tab);
  if (!items.length) {
    lp.innerHTML = `<div class="empty"><div class="empty-ico">${tab === "pending" ? "⏳" : tab === "approved" ? "✅" : "❌"}</div><h3>No ${tab} listings</h3></div>`;
    return;
  }
  lp.innerHTML = items
    .slice()
    .reverse()
    .map(
      (l) => `
    <div class="adm-card">
      <div class="adm-card-head">
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px">
            <strong>${l.name}</strong>
            <span class="st-badge ${l.status}">${l.status}</span>
            ${(() => {
              const p = getPlanDetails(getPlanForHost(l.host_id));
              return p && p.id !== "free"
                ? `<span class="verified-badge ${p.id === "gold" ? "gold" : ""}">${p.id === "gold" ? "👑 GOLD" : p.name.toUpperCase()}</span>`
                : "";
            })()}
          </div>
          <div style="font-size:.78rem;color:var(--ink3);margin-bottom:4px">📍 ${l.loc} · 🏠 ${l.type} · ₹${l.price?.toLocaleString()}/night · 👥 ${l.guests} guests</div>
          <div style="font-size:.76rem;color:var(--ink3)">Host: <strong>${l.host || "Unknown"}</strong> · Submitted: ${new Date(l.submitted || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</div>
          ${l.desc ? `<div style="font-size:.76rem;color:var(--ink3);margin-top:6px;line-height:1.5">${l.desc.slice(0, 120)}${l.desc.length > 120 ? "…" : ""}</div>` : ""}
        </div>
        ${l.photos?.[0] ? `<img src="${l.photos[0]}" style="width:80px;height:64px;border-radius:var(--r);object-fit:cover;flex-shrink:0" alt="" onerror="this.style.display='none'">` : ""}
      </div>
      <div class="adm-actions">
        ${l.status !== "approved" ? `<button class="btn-approve" onclick="adminAction('${l.id}','approved')">✅ Approve</button>` : ""}
        ${l.status !== "rejected" ? `<button class="btn-reject" onclick="adminAction('${l.id}','rejected')">❌ Reject</button>` : ""}
        <button class="btn-del" onclick="adminDelete('${l.id}')">🗑️ Delete</button>
      </div>
    </div>`,
    )
    .join("");
}
function adminAction(id, status) {
  const idx = S.listings.findIndex((l) => l.id === id);
  if (idx > -1) {
    S.listings[idx].status = status;
    lsSet("fs_listings", S.listings);
  }
  updateAdminStats();
  adminTab(status);
  toast(
    status === "approved" ? "✅ Listing approved!" : "❌ Listing rejected!",
    status === "approved" ? "success" : "error",
  );
  renderHome();
}
function adminDelete(id) {
  if (!confirm("Delete this listing permanently?")) return;
  S.listings = S.listings.filter((l) => l.id !== id);
  lsSet("fs_listings", S.listings);
  updateAdminStats();
  adminTab("pending");
  toast("🗑️ Listing deleted", "info");
}
function renderAdminUsers() {
  const users = lsGet("fs_users") || [];
  const el = document.getElementById("adm-users-panel");
  if (!users.length) {
    el.innerHTML =
      '<div class="empty"><div class="empty-ico">👥</div><h3>No users yet</h3></div>';
    return;
  }
  el.innerHTML = users
    .slice()
    .reverse()
    .map(
      (u) => `
    <div class="adm-card" style="display:flex;align-items:center;gap:14px">
      <div style="width:44px;height:44px;border-radius:50%;background:var(--coral);display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;color:white;flex-shrink:0">${u.name[0].toUpperCase()}</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:.88rem">${u.name}</div>
        <div style="font-size:.74rem;color:var(--ink3)">${u.email} · ${u.phone || "No phone"}</div>
        <div style="font-size:.72rem;color:var(--ink3)">Joined: ${new Date(u.joined || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · Trips: ${u.trips || 0}</div>
      </div>
    </div>`,
    )
    .join("");
}

/* ══ TOAST ══ */
let _toastT;
function toast(msg, type = "default") {
  const t = document.getElementById("toast");
  const colors = {
    success: "#16a34a",
    error: "#dc2626",
    warning: "#d97706",
    info: "#2563eb",
    default: "#1A1A2E",
  };
  t.style.background = colors[type] || colors.default;
  t.innerHTML = msg;
  t.classList.add("on");
  clearTimeout(_toastT);
  _toastT = setTimeout(() => t.classList.remove("on"), 3200);
}

/* ══ INIT ══ */
function init() {
  loadState();
  // Set default dates
  const t = new Date(),
    fmt = (d) => d.toISOString().split("T")[0];
  const ci = new Date(t.getTime() + 2 * 864e5),
    co = new Date(t.getTime() + 5 * 864e5);
  S.dates = { in: fmt(ci), out: fmt(co) };
  const dfmt = (d) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  const sb_ci = document.getElementById("sb-checkin"),
    sb_co = document.getElementById("sb-checkout");
  if (sb_ci) {
    sb_ci.textContent = dfmt(ci);
    sb_ci.classList.remove("ph");
  }
  if (sb_co) {
    sb_co.textContent = dfmt(co);
    sb_co.classList.remove("ph");
  }
  const sb_g = document.getElementById("sb-guests");
  if (sb_g) {
    sb_g.textContent = "2 guests";
    sb_g.classList.remove("ph");
  }
  updateAuthUI();
  renderHome();
  document.getElementById("footer").style.display = "block";
  // goto('home') will be called which handles footer properly
}

init();

/* ════════════════════════════════════════════════════
   CREATOR TRIPS + FIREBASE PRODUCTION JS
════════════════════════════════════════════════════ */

/* ── CREATOR TRIPS DATA (fallback / demo data) ── */
const CT_COLORS = [
  "#e85d04",
  "#7c3aed",
  "#0891b2",
  "#059669",
  "#dc2626",
  "#b45309",
  "#4f46e5",
  "#be185d",
];

const CT_DEFAULT_TRIPS = [
  {
    id: "ct1",
    title: "Goa Summer Escape",
    creator: "Arjun Travels",
    creatorHandle: "@arjuntravels",
    creatorFollowers: "420K",
    creatorColor: "#e85d04",
    dest: "Goa, India",
    category: "beach",
    emoji: "🏖️",
    dates: "Jun 14–18, 2025",
    duration: "5 days",
    totalSeats: 20,
    bookedSeats: 17,
    pricePerPerson: 12999,
    rating: 4.9,
    reviews: 38,
    status: "open",
    desc: "A curated beach getaway to North Goa featuring private villa stays, sunset boat parties, secret beach spots, and a full day of watersports. Arjun will be documenting the entire trip — expect amazing content and lifelong connections.",
    highlights: [
      "Private villa with pool",
      "Sunset boat party",
      "Secret beach spots",
      "Watersports day",
      "Creator meet & greet dinner",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Beach Welcome",
        desc: "Check-in to private villa, welcome drinks, sunset walk at Vagator Beach",
      },
      {
        day: "Day 2",
        title: "Boat Party & Dolphins",
        desc: "Morning dolphin spotting cruise, afternoon boat party, Anjuna night out",
      },
      {
        day: "Day 3",
        title: "Secret Beaches & Watersports",
        desc: "Arjun's secret Goa spots, kayaking, parasailing and jet skiing",
      },
      {
        day: "Day 4",
        title: "Heritage & Food Tour",
        desc: "Old Goa churches, spice plantation, Goan seafood feast",
      },
      {
        day: "Day 5",
        title: "Sunrise & Departure",
        desc: "Final sunrise at Morjim, farewell brunch, check-out by 12pm",
      },
    ],
    inclusions: [
      "Accommodation (twin sharing)",
      "All meals",
      "Boat party entry",
      "Watersports (Day 3)",
      "Airport transfers",
    ],
    exclusions: ["Flights", "Personal expenses", "Travel insurance", "Alcohol"],
    participants: ["R", "K", "S", "A", "M"],
    reviews: [],
  },
  {
    id: "ct2",
    title: "Spiti Valley Trek",
    creator: "Priya Wanderlust",
    creatorHandle: "@priyawanders",
    creatorFollowers: "285K",
    creatorColor: "#7c3aed",
    dest: "Himachal Pradesh",
    category: "mountains",
    emoji: "🏔️",
    dates: "Jul 2–8, 2025",
    duration: "7 days",
    totalSeats: 16,
    bookedSeats: 8,
    pricePerPerson: 18500,
    rating: 4.8,
    reviews: 24,
    status: "open",
    desc: "An epic journey through the remote Spiti Valley — one of India's last cold deserts. Priya will take you to monasteries, ancient villages and stunning mountain passes most tourists never reach.",
    highlights: [
      "Key Monastery visit",
      "Chandratal Lake camp",
      "Kaza market tour",
      "Stargazing night",
      "Langza fossil hunt",
    ],
    itinerary: [
      {
        day: "Day 1-2",
        title: "Shimla to Kaza",
        desc: "Drive through Kinnaur, stay at Kalpa, panoramic Kinner Kailash views",
      },
      {
        day: "Day 3",
        title: "Monastery Circuit",
        desc: "Key, Kibber, Langza monasteries — ancient Buddhist art and fossils",
      },
      {
        day: "Day 4",
        title: "Chandratal Camp",
        desc: "Trek to the stunning crescent moon lake, overnight camping under stars",
      },
      {
        day: "Day 5-6",
        title: "Villages & Culture",
        desc: "Dhankar lake, Pin Valley, Hikkim world's highest post office",
      },
      {
        day: "Day 7",
        title: "Return & Farewell",
        desc: "Drive back, group dinner, memories and photos exchange",
      },
    ],
    inclusions: [
      "Accommodation (camps + guesthouses)",
      "All meals",
      "Permits",
      "Local guide",
      "Transport from Shimla",
    ],
    exclusions: ["Flights to Shimla", "Personal gear", "Travel insurance"],
    participants: ["V", "D", "N", "A", "K", "R", "S", "P"],
    reviews: [],
  },
  {
    id: "ct3",
    title: "Rajasthan Royal Trail",
    creator: "Nomad Nikhil",
    creatorHandle: "@nomadnikhil",
    creatorFollowers: "512K",
    creatorColor: "#b45309",
    dest: "Rajasthan, India",
    category: "heritage",
    emoji: "🏛️",
    dates: "Aug 10–16, 2025",
    duration: "7 days",
    totalSeats: 24,
    bookedSeats: 24,
    pricePerPerson: 22000,
    rating: 5.0,
    reviews: 52,
    status: "full",
    desc: "A regal journey through Rajasthan's most iconic forts, palaces and havelis. Stay in heritage hotels, attend private cultural performances and experience the grandeur of royal India.",
    highlights: [
      "Amer Fort private tour",
      "Jaisalmer desert camp",
      "Pushkar fair visit",
      "Heritage hotel stays",
      "Puppet show dinner",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Jaipur Arrival",
        desc: "Pink City heritage walk, Hawa Mahal, City Palace tour",
      },
      {
        day: "Day 2-3",
        title: "Jodhpur Blue City",
        desc: "Mehrangarh Fort, Umaid Bhawan, zip-lining, royal dinner",
      },
      {
        day: "Day 4-5",
        title: "Jaisalmer Desert",
        desc: "Golden Fort, camel safari, luxury tent camp, bonfire night",
      },
      {
        day: "Day 6",
        title: "Pushkar Sacred",
        desc: "Brahma Temple, lake ghats, local bazaar shopping",
      },
      {
        day: "Day 7",
        title: "Departure",
        desc: "Morning heritage breakfast, farewell, transfers",
      },
    ],
    inclusions: [
      "Heritage hotel (twin sharing)",
      "All meals",
      "Camel safari",
      "Entry fees",
      "Private AC vehicle",
    ],
    exclusions: ["Flights", "Personal shopping", "Tips"],
    participants: ["A", "B", "C", "D", "E", "F", "G", "H"],
    reviews: [],
  },
  {
    id: "ct4",
    title: "Bali Creator Collab",
    creator: "TravelTales Sia",
    creatorHandle: "@traveltalessia",
    creatorFollowers: "178K",
    creatorColor: "#0891b2",
    dest: "Bali, Indonesia",
    category: "international",
    emoji: "🌴",
    dates: "Sep 5–12, 2025",
    duration: "8 days",
    totalSeats: 18,
    bookedSeats: 12,
    pricePerPerson: 35000,
    rating: 4.9,
    reviews: 19,
    status: "open",
    desc: "Bali with a small group of like-minded creators. Sia has curated the perfect blend of temple visits, rice terrace hikes, beach clubs, cooking classes and villa days.",
    highlights: [
      "Tegallalang rice terraces",
      "Uluwatu sunset puja",
      "Cooking class",
      "Canggu beach day",
      "Private villa stay",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Ubud Arrival",
        desc: "Ubud palace, monkey forest, rooftop welcome dinner",
      },
      {
        day: "Day 2",
        title: "Spiritual Bali",
        desc: "Tirta Empul temple, rice terrace trek, coffee plantation",
      },
      {
        day: "Day 3",
        title: "Cooking & Culture",
        desc: "Morning market, Balinese cooking class, traditional dance show",
      },
      {
        day: "Day 4",
        title: "South Bali",
        desc: "Uluwatu, beach clubs, Kecak fire dance at sunset",
      },
      {
        day: "Day 5-6",
        title: "Canggu & Seminyak",
        desc: "Surf lessons, beach clubs, café hopping, shopping",
      },
      {
        day: "Day 7",
        title: "Hidden Waterfalls",
        desc: "Secret waterfall trek, jungle pool, farewell dinner",
      },
      {
        day: "Day 8",
        title: "Departure",
        desc: "Sunrise at Tanah Lot, airport transfers",
      },
    ],
    inclusions: [
      "Private villa (twin)",
      "Breakfast daily",
      "Cooking class",
      "Temple tours",
      "Transfers",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Lunches & dinners",
      "Personal expenses",
    ],
    participants: ["S", "K", "A", "V", "N", "R"],
    reviews: [],
  },
  {
    id: "ct5",
    title: "Kerala Backwaters Retreat",
    creator: "Wellness Wanderer",
    creatorHandle: "@wellnesswanderer",
    creatorFollowers: "95K",
    creatorColor: "#059669",
    dest: "Kerala, India",
    category: "wellness",
    emoji: "🧘",
    dates: "Oct 1–6, 2025",
    duration: "6 days",
    totalSeats: 12,
    bookedSeats: 5,
    pricePerPerson: 16500,
    rating: 4.7,
    reviews: 14,
    status: "open",
    desc: "A mindful journey through God's Own Country. Sunrise yoga on houseboats, Ayurvedic treatments, backwater kayaking and authentic Kerala cuisine — a complete reset for mind and body.",
    highlights: [
      "Houseboat yoga session",
      "Ayurvedic treatment",
      "Backwater kayaking",
      "Spice garden walk",
      "Silent sunrise ritual",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kochi Arrival",
        desc: "Fort Kochi heritage walk, Chinese fishing nets, Kathakali show",
      },
      {
        day: "Day 2",
        title: "Alleppey Houseboat",
        desc: "Board the houseboat, backwater cruise, sunset meditation",
      },
      {
        day: "Day 3",
        title: "Wellness Day",
        desc: "Sunrise yoga, Ayurvedic panchakarma, nature walk",
      },
      {
        day: "Day 4",
        title: "Munnar Hills",
        desc: "Tea plantation trek, waterfall visit, mountain air retreat",
      },
      {
        day: "Day 5",
        title: "Thekkady",
        desc: "Periyar lake, spice garden, tribal culture experience",
      },
      {
        day: "Day 6",
        title: "Departure",
        desc: "Final Ayurvedic breakfast, farewell circle, transfers",
      },
    ],
    inclusions: [
      "Houseboat + resorts",
      "All meals (vegetarian)",
      "Yoga sessions",
      "Ayurvedic treatment",
      "All transport",
    ],
    exclusions: ["Flights", "Non-veg meals", "Alcohol"],
    participants: ["L", "M", "N", "A"],
    reviews: [],
  },
  {
    id: "ct6",
    title: "Northeast Meghalaya",
    creator: "Hidden India",
    creatorHandle: "@hiddenindia",
    creatorFollowers: "340K",
    creatorColor: "#4f46e5",
    dest: "Meghalaya & Assam",
    category: "adventure",
    emoji: "🌅",
    dates: "Nov 8–14, 2025",
    duration: "7 days",
    totalSeats: 20,
    bookedSeats: 11,
    pricePerPerson: 19000,
    rating: 4.8,
    reviews: 9,
    status: "open",
    desc: "Explore India's most beautiful lesser-known state — Meghalaya. Living root bridges, the world's wettest village, stunning waterfalls and the cleanest river in Asia await.",
    highlights: [
      "Living root bridges",
      "Dawki crystal river",
      "Nohkalikai falls",
      "Khasi village stay",
      "Mawsynram wettest place",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Guwahati to Shillong",
        desc: "Road trip, Assam tea estates, Don Bosco Museum",
      },
      {
        day: "Day 2",
        title: "Cherrapunji",
        desc: "Nohkalikai falls, Seven Sisters falls, local lunch",
      },
      {
        day: "Day 3",
        title: "Living Root Bridge Trek",
        desc: "Double Decker root bridge, Nongriat village stay",
      },
      {
        day: "Day 4",
        title: "Mawlynnong & Dawki",
        desc: "Asia's cleanest village, bamboo viewpoint, Dawki river boating",
      },
      {
        day: "Day 5",
        title: "Mawsynram",
        desc: "World's wettest place, cave exploration, tea with locals",
      },
      {
        day: "Day 6",
        title: "Shillong City",
        desc: "Ward's Lake, Police Bazar, Mawphlang sacred grove",
      },
      {
        day: "Day 7",
        title: "Return",
        desc: "Morning drive to Guwahati, farewell brunch, airport",
      },
    ],
    inclusions: [
      "All accommodation",
      "All meals",
      "Trek guides",
      "Vehicle",
      "Entry fees",
    ],
    exclusions: ["Flights", "Personal gear", "Tips"],
    participants: ["H", "R", "S", "K", "A", "D"],
    reviews: [],
  },
];

const CT_DEFAULT_CREATORS = [
  {
    id: "cr1",
    name: "Arjun Travels",
    handle: "@arjuntravels",
    followers: "420K",
    trips: 8,
    color: "#e85d04",
    tags: ["Beach", "Goa", "Parties"],
    rating: 4.9,
    bio: "Goa specialist & beach lover. 8 years documenting coastal India.",
  },
  {
    id: "cr2",
    name: "Priya Wanderlust",
    handle: "@priyawanders",
    followers: "285K",
    trips: 5,
    color: "#7c3aed",
    tags: ["Mountains", "Treks", "Himalayas"],
    rating: 4.8,
    bio: "High-altitude trekker. Himachal & Uttarakhand expert.",
  },
  {
    id: "cr3",
    name: "Nomad Nikhil",
    handle: "@nomadnikhil",
    followers: "512K",
    trips: 12,
    color: "#b45309",
    tags: ["Heritage", "Culture", "Rajasthan"],
    rating: 5.0,
    bio: "Royal India storyteller. Heritage & culture specialist.",
  },
  {
    id: "cr4",
    name: "TravelTales Sia",
    handle: "@traveltalessia",
    followers: "178K",
    trips: 4,
    color: "#0891b2",
    tags: ["International", "Bali", "Luxury"],
    rating: 4.9,
    bio: "Luxury solo traveller. Bali & Southeast Asia expert.",
  },
  {
    id: "cr5",
    name: "Wellness Wanderer",
    handle: "@wellnesswanderer",
    followers: "95K",
    trips: 3,
    color: "#059669",
    tags: ["Wellness", "Kerala", "Yoga"],
    rating: 4.7,
    bio: "Certified yoga instructor & Ayurveda enthusiast.",
  },
  {
    id: "cr6",
    name: "Hidden India",
    handle: "@hiddenindia",
    followers: "340K",
    trips: 7,
    color: "#4f46e5",
    tags: ["Adventure", "Northeast", "Offbeat"],
    rating: 4.8,
    bio: "Northeast India explorer. Offbeat destinations only.",
  },
  {
    id: "cr7",
    name: "Coastal Diaries",
    handle: "@coastaldiaries",
    followers: "220K",
    trips: 6,
    color: "#be185d",
    tags: ["Coastal", "Beaches", "Road trips"],
    rating: 4.8,
    bio: "Road trip queen. India coastline in a van.",
  },
  {
    id: "cr8",
    name: "Desi Backpacker",
    handle: "@desibackpacker",
    followers: "155K",
    trips: 9,
    color: "#dc2626",
    tags: ["Budget", "Solo", "Backpacking"],
    rating: 4.6,
    bio: "Solo budget travel. Making India accessible for everyone.",
  },
];

/* ── CT STATE ── */
let CT = {
  trips: [],
  creators: CT_DEFAULT_CREATORS,
  savedTrips: new Set(JSON.parse(localStorage.getItem("ct_saved") || "[]")),
  following: new Set(JSON.parse(localStorage.getItem("ct_following") || "[]")),
  tripBookings: [],
  currentFilter: "all",
  searchQuery: "",
  initialized: false,
  unsubscribeTrips: null,
};

function ctSaveMisc() {
  localStorage.setItem("ct_saved", JSON.stringify([...CT.savedTrips]));
  localStorage.setItem("ct_following", JSON.stringify([...CT.following]));
}

/* ── INIT CREATOR TRIPS ── */
async function ctInit() {
  if (CT.initialized) return;
  CT.initialized = true;
  // Try to load from Firestore, fallback to demo data
  try {
    if (window.FS_DB && window.fsOnSnapshot) {
      CT.unsubscribeTrips = window.fsOnSnapshot(
        "creator_trips",
        null,
        (docs) => {
          if (docs && docs.length > 0) {
            CT.trips = docs;
          } else {
            // Seed demo data if empty
            CT.trips = CT_DEFAULT_TRIPS;
            CT_DEFAULT_TRIPS.forEach((t) => {
              window.fsSetDoc && window.fsSetDoc("creator_trips", t.id, t);
            });
          }
          ctRenderTrips();
          ctUpdateStats();
        },
      );
      // Load creators
      const crDocs = await (window.fsGetCollection
        ? window.fsGetCollection("creators")
        : Promise.resolve([]));
      if (crDocs && crDocs.length > 0) CT.creators = crDocs;
      else {
        CT.creators = CT_DEFAULT_CREATORS;
        CT_DEFAULT_CREATORS.forEach(
          (c) => window.fsSetDoc && window.fsSetDoc("creators", c.id, c),
        );
      }
    } else {
      CT.trips =
        JSON.parse(localStorage.getItem("ct_trips") || "null") ||
        CT_DEFAULT_TRIPS;
    }
  } catch (e) {
    console.warn("CT init Firebase error, using local:", e.message);
    CT.trips =
      JSON.parse(localStorage.getItem("ct_trips") || "null") ||
      CT_DEFAULT_TRIPS;
  }
  // Load saved trip bookings
  if (S.tripBookings) CT.tripBookings = S.tripBookings;
  ctRenderTrips();
  ctRenderCreators();
  ctUpdateStats();
}

function ctSaveLocal() {
  localStorage.setItem("ct_trips", JSON.stringify(CT.trips));
}

/* ── STATS UPDATE ── */
function ctUpdateStats() {
  const total = CT.trips.length;
  const travelers = CT.trips.reduce((a, t) => a + (t.bookedSeats || 0), 0);
  const el1 = document.getElementById("ct-stat-trips");
  const el2 = document.getElementById("ct-stat-travelers");
  if (el1) el1.textContent = total + "+";
  if (el2) el2.textContent = travelers.toLocaleString() + "+";
}

/* ── FILTER ── */
function ctSetFilter(el) {
  document
    .querySelectorAll(".ct-chip")
    .forEach((c) => c.classList.remove("on"));
  el.classList.add("on");
  CT.currentFilter = el.dataset.cat;
  ctRenderTrips();
}

function ctFilterTrips() {
  CT.searchQuery = (
    document.getElementById("ct-search-input")?.value || ""
  ).toLowerCase();
  CT.currentFilter = "__search__";
  document
    .querySelectorAll(".ct-chip")
    .forEach((c) => c.classList.remove("on"));
  ctRenderTrips();
}

/* ── RENDER TRIPS ── */
function ctRenderTrips() {
  const grid = document.getElementById("ct-trips-grid");
  const empty = document.getElementById("ct-trips-empty");
  if (!grid) return;
  let filtered = [...CT.trips];
  if (CT.currentFilter !== "all" && CT.currentFilter !== "__search__") {
    filtered = filtered.filter((t) => t.category === CT.currentFilter);
  }
  if (CT.searchQuery) {
    filtered = CT.trips.filter(
      (t) =>
        t.title?.toLowerCase().includes(CT.searchQuery) ||
        t.creator?.toLowerCase().includes(CT.searchQuery) ||
        t.dest?.toLowerCase().includes(CT.searchQuery),
    );
  }
  const countEl = document.getElementById("ct-trip-count");
  if (countEl)
    countEl.textContent = `Showing ${filtered.length} trip${filtered.length !== 1 ? "s" : ""}`;
  if (!filtered.length) {
    grid.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }
  if (empty) empty.style.display = "none";
  grid.innerHTML = filtered.map((t) => ctTripCard(t)).join("");
}

function ctTripCard(t) {
  const total = t.totalSeats || 1;
  const booked = t.bookedSeats || 0;
  const pct = Math.round((booked / total) * 100);
  const left = total - booked;
  const fillColor = pct >= 90 ? "#ef4444" : pct >= 60 ? "#f59e0b" : "#22c55e";
  const saved = CT.savedTrips.has(t.id);
  return `<div class="ct-trip-card" onclick="ctOpenTrip('${t.id}')">
    <div class="ct-tc-img" style="background:linear-gradient(135deg,${t.creatorColor}55,${t.creatorColor}22)">
      <span style="position:relative;z-index:1">${t.emoji}</span>
      <div class="ct-tc-overlay"></div>
      <div class="ct-tc-status ${t.status}">${t.status === "open" ? "Open" : t.status === "filling" ? "Filling Fast" : "Full"}</div>
      <div class="ct-tc-seats">
        <div class="ct-seat-bar"><div class="ct-seat-fill" style="width:${pct}%;background:${fillColor}"></div></div>
        <span style="font-size:.64rem;color:rgba(255,255,255,.9);font-weight:600">${t.status === "full" ? "Sold Out" : `${left} left`}</span>
      </div>
      <button class="ct-tc-wish ${saved ? "on" : ""}" onclick="event.stopPropagation();ctToggleSave('${t.id}',this)">
        <i class="fa${saved ? "s" : "r"} fa-heart"></i>
      </button>
    </div>
    <div class="ct-tc-body">
      <div class="ct-tc-creator">
        <div class="ct-tc-av" style="background:${t.creatorColor}">${(t.creator || "?")[0]}</div>
        <div style="flex:1;min-width:0">
          <div class="ct-tc-cname">${t.creator}</div>
          <div class="ct-tc-chandle">${t.creatorHandle} · ${t.creatorFollowers}</div>
        </div>
        <div class="ct-verified-dot"><i class="fas fa-check"></i></div>
      </div>
      <div class="ct-tc-title">${t.title}</div>
      <div class="ct-tc-dest"><i class="fas fa-map-marker-alt" style="color:var(--coral)"></i>${t.dest}</div>
      <div class="ct-tc-tags">
        <span class="ct-tc-tag cat">${t.category}</span>
        <span class="ct-tc-tag"><i class="fas fa-clock" style="font-size:.58rem"></i> ${t.duration}</span>
        <span class="ct-tc-tag">★ ${t.rating || "New"}</span>
      </div>
      <div class="ct-tc-foot">
        <div>
          <div class="ct-tc-price">₹${(t.pricePerPerson || 0).toLocaleString()}<span>/person</span></div>
          <div class="ct-tc-dates"><i class="far fa-calendar"></i>${t.dates}</div>
        </div>
        <button class="ct-book-btn" onclick="event.stopPropagation();ctOpenBooking('${t.id}')" ${t.status === "full" ? "disabled" : ""}>${t.status === "full" ? "Full" : "Book Now"}</button>
      </div>
    </div>
  </div>`;
}

function ctToggleSave(id, btn) {
  if (CT.savedTrips.has(id)) {
    CT.savedTrips.delete(id);
    btn.innerHTML = '<i class="far fa-heart"></i>';
    btn.classList.remove("on");
  } else {
    CT.savedTrips.add(id);
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    btn.classList.add("on");
    toast("❤️ Trip saved!", "success");
  }
  ctSaveMisc();
}

/* ── RENDER CREATORS ── */
function ctRenderCreators() {
  const grid = document.getElementById("ct-creators-grid");
  if (!grid) return;
  grid.innerHTML = CT.creators
    .map(
      (c) => `
    <div class="ct-creator-card">
      <div class="ct-cr-av" style="background:${c.color}">
        ${(c.name || "?")[0]}
        <div class="ct-cr-badge"><i class="fas fa-check"></i></div>
      </div>
      <div class="ct-cr-name">${c.name}</div>
      <div class="ct-cr-handle">${c.handle}</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin-bottom:8px">
        ${(c.tags || []).map((t) => `<span style="background:var(--bg);color:var(--ink3);border-radius:20px;padding:2px 7px;font-size:.6rem">${t}</span>`).join("")}
      </div>
      <div class="ct-cr-stats">
        <div><div class="ct-cr-stat-n">${c.followers}</div><div class="ct-cr-stat-l">Followers</div></div>
        <div><div class="ct-cr-stat-n">${c.trips}</div><div class="ct-cr-stat-l">Trips</div></div>
        <div><div class="ct-cr-stat-n">${c.rating}★</div><div class="ct-cr-stat-l">Rating</div></div>
      </div>
      <button class="ct-cr-follow ${CT.following.has(c.handle) ? "following" : ""}" onclick="ctToggleFollow('${c.handle}',this)">${CT.following.has(c.handle) ? "✓ Following" : "+ Follow"}</button>
    </div>`,
    )
    .join("");
}

function ctToggleFollow(handle, btn) {
  if (CT.following.has(handle)) {
    CT.following.delete(handle);
    btn.textContent = "+ Follow";
    btn.classList.remove("following");
  } else {
    CT.following.add(handle);
    btn.textContent = "✓ Following";
    btn.classList.add("following");
    toast("✅ Now following " + handle, "success");
    ctAddNotif(
      "🔔 You are now following " + handle + "! New trips will notify you.",
    );
  }
  ctSaveMisc();
}

/* ── TRIP DETAIL MODAL ── */
function ctOpenTrip(id) {
  const t = CT.trips.find((x) => x.id === id);
  if (!t) return;

  window._ctCurrentTripId = id;
  const pct = Math.round(((t.bookedSeats || 0) / (t.totalSeats || 1)) * 100);
  const left = (t.totalSeats || 0) - (t.bookedSeats || 0);
  const reviews = t.reviews_data || [];
  const modal = document.getElementById("ct-trip-inner");

  modal.innerHTML = `
    <button class="modal-close" onclick="closeModal('modal-ct-trip')"><i class="fas fa-times"></i></button>
    <div class="ct-td-gallery" style="background:linear-gradient(135deg,${t.creatorColor}66,${t.creatorColor}22)">
      <span style="position:relative;z-index:1">${t.emoji}</span>
      <div class="ct-td-gallery-ov"></div>
      <div class="ct-td-hero-info">
        <div style="display:inline-block;padding:4px 12px;border-radius:8px;font-size:.62rem;font-weight:800;text-transform:uppercase;margin-bottom:8px;background:${t.status === "open" ? "#dcfce7" : t.status === "full" ? "#fee2e2" : "#fef3c7"};color:${t.status === "open" ? "#16a34a" : t.status === "full" ? "#dc2626" : "#d97706"}">${t.status === "open" ? "✅ Booking Open" : t.status === "full" ? "🔴 Fully Booked" : "🟡 Filling Fast"}</div>
        <div style="font-family:'Fraunces',serif;font-size:1.5rem;font-weight:700;color:white;line-height:1.2;margin-bottom:6px">${t.title}</div>
        <div style="font-size:.82rem;color:rgba(255,255,255,.7);display:flex;gap:12px;flex-wrap:wrap">
          <span><i class="fas fa-map-marker-alt"></i> ${t.dest}</span>
          <span><i class="far fa-calendar"></i> ${t.dates}</span>
          <span><i class="fas fa-clock"></i> ${t.duration}</span>
        </div>
      </div>
    </div>
    <div class="ct-td-body">
      <div class="ct-td-left">
        <div class="ct-td-section">
          <h3>🎬 About the Creator</h3>
          <div style="display:flex;align-items:center;gap:12px;background:var(--bg);padding:12px;border-radius:var(--r-lg)">
            <div style="width:46px;height:46px;border-radius:50%;background:${t.creatorColor};display:flex;align-items:center;justify-content:center;font-size:.96rem;font-weight:700;color:white;flex-shrink:0">${(t.creator || "?")[0]}</div>
            <div>
              <div style="font-weight:700;font-size:.88rem;margin-bottom:2px">${t.creator} <span style="font-size:.6rem;background:var(--coral);color:white;padding:2px 6px;border-radius:4px;font-weight:800;margin-left:4px">VERIFIED</span></div>
              <div style="font-size:.72rem;color:var(--ink3)">${t.creatorHandle} · ${t.creatorFollowers} followers</div>
              <div style="font-size:.7rem;color:var(--ink3);margin-top:2px">★ ${t.rating} avg rating · ${t.reviews || 0} reviews</div>
            </div>
          </div>
        </div>
        <div class="ct-td-section">
          <h3>📖 About the Trip</h3>
          <p style="font-size:.84rem;line-height:1.8;color:var(--ink2)">${t.desc}</p>
        </div>
        <div class="ct-td-section">
          <h3>✨ Trip Highlights</h3>
          <div style="display:flex;flex-direction:column;gap:7px">
            ${(t.highlights || []).map((h) => `<div style="display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--ink2);padding:8px 10px;background:white;border-radius:var(--r);border:1px solid var(--border)"><i class="fas fa-star" style="color:var(--gold);flex-shrink:0"></i>${h}</div>`).join("")}
          </div>
        </div>
        <div class="ct-td-section">
          <h3>🗺️ Day-by-Day Itinerary</h3>
          ${(t.itinerary || []).map((d, i) => `<div style="display:flex;gap:12px;margin-bottom:14px"><div style="width:30px;height:30px;border-radius:50%;background:var(--coral-bg);border:2px solid var(--coral);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;color:var(--coral);flex-shrink:0">${i + 1}</div><div><div style="font-weight:700;font-size:.82rem;margin-bottom:2px">${d.day} · ${d.title}</div><div style="font-size:.75rem;color:var(--ink3);line-height:1.6">${d.desc}</div></div></div>`).join("")}
        </div>
      </div>
      <div class="ct-td-right">
        <div style="position:sticky;top:100px;background:white;border:1px solid var(--border);border-radius:var(--r-lg);padding:20px">
          <div style="margin-bottom:16px">
            <div style="font-size:.7rem;color:var(--ink3);text-transform:uppercase;font-weight:800;margin-bottom:4px">Price per person</div>
            <div style="font-size:1.8rem;font-weight:700;color:var(--coral)">₹${(t.pricePerPerson || 0).toLocaleString()}</div>
          </div>
          <div style="margin-bottom:16px;padding:12px;background:var(--bg);border-radius:var(--r)">
            <div style="font-size:.7rem;color:var(--ink3);margin-bottom:8px;font-weight:700;text-transform:uppercase">Seats available</div>
            <div style="width:100%;height:5px;background:var(--border);border-radius:3px;margin-bottom:6px"><div style="height:100%;background:${pct >= 90 ? "#ef4444" : pct >= 60 ? "#f59e0b" : "#22c55e"};width:${pct}%"></div></div>
            <div style="font-size:.8rem;font-weight:700;color:var(--ink)">${left} of ${t.totalSeats} left</div>
          </div>
          <div style="margin-bottom:16px;text-align:center;padding:8px;border-radius:var(--r);font-size:.8rem;font-weight:700;background:${t.status === "open" ? "#dcfce7" : t.status === "full" ? "#fee2e2" : "#fef3c7"};color:${t.status === "open" ? "#16a34a" : t.status === "full" ? "#dc2626" : "#d97706"}">${t.status === "open" ? "✅ Booking Open" : t.status === "full" ? "🔴 Fully Booked" : "🟡 Filling Fast"}</div>
          <button class="ct-btn-join" onclick="ctOpenBooking('${t.id}')" ${t.status === "full" ? "disabled" : ""} style="margin-bottom:10px;width:100%">
            ${t.status === "full" ? "Fully Booked" : "Book Now"}
          </button>
          <div style="margin-bottom:16px;padding:12px;background:var(--bg);border-radius:var(--r);text-align:center">
            <div style="font-size:.75rem;color:var(--ink3);margin-bottom:6px">All taxes & fees included</div>
            <div style="border-top:1px solid var(--border);padding-top:10px">
              <div style="display:flex;justify-content:space-between;font-size:.76rem;margin-bottom:5px;color:var(--ink2)"><span>Trip cost</span><span>₹${Math.round((t.pricePerPerson || 0) * 0.85).toLocaleString()}</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.76rem;margin-bottom:5px;color:var(--ink2)"><span>Taxes & fees</span><span>₹${Math.round((t.pricePerPerson || 0) * 0.15).toLocaleString()}</span></div>
              <div style="display:flex;justify-content:space-between;font-size:.82rem;font-weight:700;border-top:1px solid var(--border);padding-top:8px;margin-top:4px"><span>Total</span><span>₹${(t.pricePerPerson || 0).toLocaleString()}</span></div>
            </div>
          </div>
          <button class="ct-btn-join" onclick="ctOpenBooking('${t.id}')" ${t.status === "full" ? "disabled" : ""}>
            ${t.status === "full" ? "Fully Booked" : "Book Now"}
          </button>
        </div>
      </div>
    </div>`;
  openModal("modal-ct-trip");
}

/* ── BOOKING FLOW ── */
let _ctBookingQty = 1;
function ctOpenBooking(id) {
  const t = CT.trips.find((x) => x.id === id);
  if (!t || t.status === "full") {
    toast("❌ This trip is fully booked", "error");
    return;
  }
  if (!S.user) {
    openLoginModal();
    toast("💡 Sign in to book a trip", "info");
    return;
  }
  _ctBookingQty = 1;
  ctRenderBookingModal(t);
  openModal("modal-ct-booking");
}

function ctRenderBookingModal(t) {
  const total = _ctBookingQty * (t.pricePerPerson || 0);
  const left = (t.totalSeats || 0) - (t.bookedSeats || 0);
  document.getElementById("ct-booking-inner").innerHTML = `
    <div style="padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
      <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:700">Book Your Seat</div>
      <button class="modal-close" style="position:static;float:none;margin:0" onclick="closeModal('modal-ct-booking')"><i class="fas fa-times"></i></button>
    </div>
    <div style="padding:20px 24px">
      <div style="display:flex;gap:12px;background:var(--bg);border-radius:var(--r-lg);padding:12px;margin-bottom:18px">
        <div style="width:60px;height:60px;border-radius:var(--r);background:linear-gradient(135deg,${t.creatorColor}55,${t.creatorColor}22);display:flex;align-items:center;justify-content:center;font-size:1.8rem;flex-shrink:0">${t.emoji}</div>
        <div>
          <div style="font-weight:700;font-size:.86rem;margin-bottom:2px">${t.title}</div>
          <div style="font-size:.72rem;color:var(--ink3)">${t.creator} · ${t.dest}</div>
          <div style="font-size:.7rem;color:var(--ink3)">${t.dates} · ${t.duration}</div>
        </div>
      </div>
      <div style="margin-bottom:14px">
        <label class="f-lbl">Number of Travelers</label>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border:1.5px solid var(--border);border-radius:var(--r)">
          <button onclick="if(_ctBookingQty>1){_ctBookingQty--;ctRenderBookingModal(CT.trips.find(x=>x.id==='${t.id}'))}" style="width:30px;height:30px;border-radius:8px;border:1px solid var(--border);background:white;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;font-family:inherit;touch-action:manipulation" ${_ctBookingQty <= 1 ? "disabled" : ""}>−</button>
          <span style="font-weight:700;font-size:.9rem">${_ctBookingQty}</span>
          <button onclick="if(_ctBookingQty<${left}){_ctBookingQty++;ctRenderBookingModal(CT.trips.find(x=>x.id==='${t.id}'))}" style="width:30px;height:30px;border-radius:8px;border:1px solid var(--border);background:white;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;font-family:inherit;touch-action:manipulation" ${_ctBookingQty >= left ? "disabled" : ""}>+</button>
        </div>
      </div>
      <div class="f-group" style="margin-bottom:14px">
        <label class="f-lbl">Full Name</label>
        <input class="f-inp" id="ct-bk-name" type="text" value="${S.user?.name || ""}" placeholder="As on Aadhaar / Passport">
      </div>
      <div class="f-group" style="margin-bottom:16px">
        <label class="f-lbl">Phone Number</label>
        <input class="f-inp" id="ct-bk-phone" type="tel" value="${S.user?.phone || ""}" placeholder="+91 XXXXX XXXXX">
      </div>
      <div style="border:1px solid var(--border);border-radius:var(--r-lg);padding:14px;margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:5px;color:var(--ink2)"><span>₹${(t.pricePerPerson || 0).toLocaleString()} × ${_ctBookingQty} traveler${_ctBookingQty > 1 ? "s" : ""}</span><span>₹${total.toLocaleString()}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:5px;color:var(--ink2)"><span>Taxes & fees</span><span>Included</span></div>
        <div style="display:flex;justify-content:space-between;font-size:.88rem;font-weight:700;border-top:1px solid var(--border);padding-top:8px;margin-top:4px"><span>Total Amount</span><span>₹${total.toLocaleString()}</span></div>
      </div>

      <!-- Payment Method -->
      <div style="margin-bottom:14px">
        <div id="ct-upi-field" style="margin-bottom:14px">
          <button onclick="ctOpenUPIPayment('${t.id}',${_ctBookingQty},${total})" style="width:100%;padding:11px;border:2px dashed #22c55e;border-radius:var(--r);background:#f0fdf4;color:#15803d;font-weight:700;font-size:.84rem;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px">📲 Scan QR & Pay ₹${total.toLocaleString()} via UPI</button>
        </div>
      </div>
      <div style="text-align:center;font-size:.7rem;color:var(--ink3);margin-top:8px"><i class="fas fa-shield-alt" style="color:var(--teal)"></i> Secure payment · Free cancellation up to 30 days</div>
    </div>`;
}

function ctSelPay(el, type) {
  // Only UPI available now — kept for compatibility
  document.querySelectorAll("#ct-pay-methods .chip").forEach(function (c) {
    c.classList.remove("on");
  });
  el.classList.add("on");
}

function ctOpenUPIPayment(tripId, qty, total) {
  var name = (document.getElementById("ct-bk-name")?.value || "").trim();
  var phone = (document.getElementById("ct-bk-phone")?.value || "").trim();
  if (!name) {
    toast("⚠️ Please enter your name", "warning");
    return;
  }
  if (!phone || !/^[6-9]\d{9}$/.test(phone.replace(/[\s+]/g, ""))) {
    toast("⚠️ Enter valid 10-digit mobile number", "warning");
    return;
  }
  // Store details for after payment
  window._ctPendingName = name;
  window._ctPendingPhone = phone;
  window._ctPendingTripId = tripId;
  window._ctPendingQty = qty;
  window._ctPendingTotal = total;

  var bkId = "CT" + Date.now().toString().slice(-8);
  window._ctPendingBkId = bkId;

  var _ctPa = encodeURIComponent(UPI_ID);
  var _ctPn = encodeURIComponent("homestays");
  var _ctTn = encodeURIComponent("trip-" + bkId);
  var upiLink =
    "upi://pay?pa=" +
    _ctPa +
    "&pn=" +
    _ctPn +
    "&am=" +
    total +
    "&cu=INR&tn=" +
    _ctTn;
  var ctGpayLink =
    "gpay://upi/pay?pa=" +
    _ctPa +
    "&pn=" +
    _ctPn +
    "&am=" +
    total +
    "&cu=INR&tn=" +
    _ctTn;
  var ctPeLink =
    "phonepe://pay?pa=" +
    _ctPa +
    "&pn=" +
    _ctPn +
    "&am=" +
    total +
    "&cu=INR&tn=" +
    _ctTn;
  var ctPaytmLink =
    "paytmmp://pay?pa=" +
    _ctPa +
    "&pn=" +
    _ctPn +
    "&am=" +
    total +
    "&cu=INR&tn=" +
    _ctTn;

  // Build inline UPI modal inside ct-booking-inner
  document.getElementById("ct-booking-inner").innerHTML =
    '<div style="padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px">' +
    "<button onclick=\"ctRenderBookingModal(CT.trips.find(x=>x.id==='" +
    tripId +
    '\'))" style="background:none;border:none;cursor:pointer;color:var(--ink3);font-size:1rem;padding:4px"><i class="fas fa-arrow-left"></i></button>' +
    "<div style=\"font-family:'Fraunces',serif;font-size:1.1rem;font-weight:700\">UPI Payment</div>" +
    "</div>" +
    '<div style="padding:20px 24px">' +
    // Amount box
    '<div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #bbf7d0;border-radius:var(--r-lg);padding:16px;text-align:center;margin-bottom:18px">' +
    '<div style="font-size:.76rem;color:#15803d;font-weight:600;margin-bottom:4px">Amount to Pay</div>' +
    "<div style=\"font-family:'Fraunces',serif;font-size:1.8rem;font-weight:700;color:#15803d\">₹" +
    total.toLocaleString() +
    "</div>" +
    '<div style="font-size:.7rem;color:#16a34a;margin-top:2px">Ref: ' +
    bkId +
    "</div>" +
    "</div>" +
    // QR Code
    '<div style="text-align:center;margin-bottom:16px">' +
    '<div style="display:inline-block;padding:12px;background:white;border:2px solid var(--border);border-radius:var(--r-lg);box-shadow:var(--shadow)">' +
    '<div id="ct-upi-qr" style="width:180px;height:180px;display:flex;align-items:center;justify-content:center"></div>' +
    "</div>" +
    '<div style="margin-top:8px;font-size:.72rem;color:var(--ink3)">Scan with any UPI app</div>' +
    "</div>" +
    // UPI ID copy row
    '<div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:10px 14px;margin-bottom:14px">' +
    '<div><div style="font-size:.62rem;font-weight:700;text-transform:uppercase;color:var(--ink3);letter-spacing:.5px">UPI ID</div>' +
    '<div style="font-weight:700;font-size:.9rem" id="ct-upi-id-txt">' +
    UPI_ID +
    "</div></div>" +
    "<button onclick=\"navigator.clipboard.writeText('" +
    UPI_ID +
    "').then(()=>toast('✅ UPI ID copied!','success'))\" style=\"padding:6px 12px;border:1px solid var(--border);border-radius:8px;background:white;font-size:.76rem;font-weight:600;cursor:pointer;font-family:inherit\">Copy</button>" +
    "</div>" +
    // UPI App buttons — highlighted
    '<div style="margin-bottom:14px">' +
    '<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;color:var(--ink);margin-bottom:8px;letter-spacing:.5px;text-align:center">Tap to pay directly via app</div>' +
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">' +
    '<a href="' +
    ctGpayLink +
    '" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:linear-gradient(135deg,#e8f5e9,#c8e6c9);border:2px solid #4caf50;border-radius:var(--r);cursor:pointer;transition:transform .15s" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'\'">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.1rem;color:#1a73e8;box-shadow:0 2px 8px rgba(0,0,0,.12)">G</div>' +
    '<span style="font-size:.62rem;font-weight:700;color:#1b5e20">GPay</span></a>' +
    '<a href="' +
    ctPeLink +
    '" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:linear-gradient(135deg,#ede9fe,#ddd6fe);border:2px solid #7c3aed;border-radius:var(--r);cursor:pointer;transition:transform .15s" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'\'">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.75rem;color:#5f259f;box-shadow:0 2px 8px rgba(0,0,0,.12)">Pe</div>' +
    '<span style="font-size:.62rem;font-weight:700;color:#4c1d95">PhonePe</span></a>' +
    '<a href="' +
    ctPaytmLink +
    '" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);border:2px solid #2563eb;border-radius:var(--r);cursor:pointer;transition:transform .15s" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'\'">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.7rem;color:#1d4ed8;box-shadow:0 2px 8px rgba(0,0,0,.12)">Pay</div>' +
    '<span style="font-size:.62rem;font-weight:700;color:#1e3a8a">Paytm</span></a>' +
    '<a href="' +
    upiLink +
    '" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:linear-gradient(135deg,#fef9c3,#fef08a);border:2px solid #ca8a04;border-radius:var(--r);cursor:pointer;transition:transform .15s" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'\'">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.7rem;color:#854d0e;box-shadow:0 2px 8px rgba(0,0,0,.12)">BHIM</div>' +
    '<span style="font-size:.62rem;font-weight:700;color:#713f12">BHIM</span></a>' +
    "</div>" +
    '<div style="text-align:center;font-size:.7rem;color:var(--ink3);margin-top:8px">📱 Tap app to pay · Scan QR if app doesn\'t open</div>' +
    "</div>" +
    // UTR step
    '<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:var(--r);padding:12px 14px;margin-bottom:14px;font-size:.78rem;color:#92400e">' +
    "⚠️ After payment, enter the <strong>UTR / Transaction ID</strong> from your UPI app to confirm booking." +
    "</div>" +
    '<input class="f-inp" id="ct-utr-inp" placeholder="Enter UTR / Transaction ID (12-22 chars)" style="margin-bottom:6px;letter-spacing:1px;font-weight:600">' +
    '<div id="ct-utr-error" style="display:none;color:#dc2626;font-size:.74rem;margin-bottom:8px"></div>' +
    '<button class="ct-btn-join" onclick="ctVerifyAndConfirm()">' +
    '<i class="fas fa-check-circle"></i> Verify & Confirm Booking' +
    "</button>" +
    '<div style="text-align:center;font-size:.7rem;color:var(--ink3);margin-top:8px">🔒 Secured · Free cancellation up to 30 days</div>' +
    "</div>";

  // Generate QR
  setTimeout(function () {
    var qrDiv = document.getElementById("ct-upi-qr");
    if (qrDiv) {
      if (typeof QRCode !== "undefined") {
        new QRCode(qrDiv, {
          text: upiLink,
          width: 180,
          height: 180,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M,
        });
      } else {
        qrDiv.innerHTML =
          '<div style="font-size:.76rem;color:var(--ink3);text-align:center;padding:16px">Pay to<br><strong>' +
          UPI_ID +
          "</strong></div>";
      }
    }
  }, 50);
}

async function ctVerifyAndConfirm() {
  var utr = (document.getElementById("ct-utr-inp")?.value || "")
    .trim()
    .toUpperCase();
  var errEl = document.getElementById("ct-utr-error");
  if (!utr || utr.length < 12) {
    if (errEl) {
      errEl.textContent = "Enter a valid UTR number (min 12 characters)";
      errEl.style.display = "block";
    }
    return;
  }
  var btn = document.querySelector("#ct-booking-inner .ct-btn-join");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
  }

  // Check if UTR already used
  if (window.fsVerifyUTR) {
    var result = await window.fsVerifyUTR(utr);
    if (!result.valid && result.reason === "already_used") {
      if (errEl) {
        errEl.textContent =
          "This UTR has already been used. Please check again.";
        errEl.style.display = "block";
      }
      if (btn) {
        btn.disabled = false;
        btn.innerHTML =
          '<i class="fas fa-check-circle"></i> Verify & Confirm Booking';
      }
      return;
    }
  }

  // Proceed with booking
  await ctConfirmBooking(
    window._ctPendingTripId,
    window._ctPendingQty,
    window._ctPendingTotal,
    utr,
  );
}

async function ctConfirmBooking(tripId, qty, total, utr) {
  const name =
    window._ctPendingName ||
    (document.getElementById("ct-bk-name")?.value || "").trim();
  const phone =
    window._ctPendingPhone ||
    (document.getElementById("ct-bk-phone")?.value || "").trim();
  if (!name) {
    toast("⚠️ Please enter your name", "warning");
    return;
  }
  if (!phone) {
    toast("⚠️ Please enter your phone number", "warning");
    return;
  }

  const t = CT.trips.find((x) => x.id === tripId);
  if (!t) return;

  const bkId = window._ctPendingBkId || "CT" + Date.now().toString().slice(-8);
  const booking = {
    id: bkId,
    tripId,
    tripTitle: t.title,
    tripEmoji: t.emoji,
    creator: t.creator,
    dest: t.dest,
    dates: t.dates,
    duration: t.duration,
    qty,
    total,
    name,
    phone,
    utr: utr || "",
    userId: S.user?.id || "guest",
    userEmail: S.user?.email || "",
    status: utr ? "pending_verification" : "confirmed",
    payMethod: "UPI",
    date: new Date().toISOString(),
  };

  // Update seats
  const idx = CT.trips.findIndex((x) => x.id === tripId);
  if (idx > -1) {
    CT.trips[idx].bookedSeats = Math.min(
      (CT.trips[idx].bookedSeats || 0) + qty,
      CT.trips[idx].totalSeats || 0,
    );
    if (CT.trips[idx].bookedSeats >= CT.trips[idx].totalSeats)
      CT.trips[idx].status = "full";
    if (name)
      CT.trips[idx].participants = [
        ...(CT.trips[idx].participants || []),
        name[0].toUpperCase(),
      ];
    ctSaveLocal();
    try {
      if (window.fsUpdateDoc) {
        await window.fsUpdateDoc("creator_trips", tripId, {
          bookedSeats: CT.trips[idx].bookedSeats,
          status: CT.trips[idx].status,
          participants: CT.trips[idx].participants,
        });
      }
      if (window.fsSetDoc && S.user) {
        await window.fsSetDoc("trip_bookings", bkId, booking);
      }
      if (utr && window.fsSavePayment) {
        await window.fsSavePayment({
          bookingId: bkId,
          tripId,
          amount: total,
          utr,
          payMethod: "UPI",
          upiId: UPI_ID,
        });
      }
      if (window.fsUpdateDoc && S.user) {
        await window.fsUpdateDoc("users", S.user.id, {
          trips: (S.user.trips || 0) + 1,
        });
        S.user.trips = (S.user.trips || 0) + 1;
        lsSet("fs_user", S.user);
      }
    } catch (e) {
      console.warn("CT booking Firebase error:", e.message);
    }
  }

  CT.tripBookings.unshift(booking);
  if (S.user) S.tripBookings = CT.tripBookings;
  localStorage.setItem(
    "ct_bookings_" + (S.user?.id || "guest"),
    JSON.stringify(CT.tripBookings),
  );
  ctAddNotif(
    `🎉 Booking received for "${t.title}"! Pending payment verification.`,
  );

  // Clear pending vars
  window._ctPendingName = null;
  window._ctPendingPhone = null;
  window._ctPendingTripId = null;
  window._ctPendingQty = null;
  window._ctPendingTotal = null;
  window._ctPendingBkId = null;

  // Show success
  document.getElementById("ct-booking-inner").innerHTML =
    '<div style="text-align:center;padding:32px 24px">' +
    '<div style="width:64px;height:64px;border-radius:50%;background:#dcfce7;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:1.8rem">🎉</div>' +
    "<div style=\"font-family:'Fraunces',serif;font-size:1.2rem;font-weight:700;margin-bottom:6px\">" +
    (utr ? "Booking Received!" : "Booking Confirmed!") +
    "</div>" +
    '<p style="font-size:.82rem;color:var(--ink3);line-height:1.6;margin-bottom:12px"><strong>' +
    name +
    "</strong>, your " +
    qty +
    " seat" +
    (qty > 1 ? "s" : "") +
    " for <strong>" +
    t.title +
    "</strong> " +
    (utr ? "are under verification." : "are confirmed!") +
    "</p>" +
    (utr
      ? '<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:var(--r);padding:10px 14px;font-size:.78rem;color:#92400e;margin-bottom:12px">⏳ Payment of ₹' +
        total.toLocaleString() +
        " pending admin verification. Confirmation within 30 minutes.</div>"
      : "") +
    '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:10px 14px;font-size:.8rem;margin-bottom:16px;text-align:left">Booking ID: <strong style="color:var(--coral)">' +
    bkId +
    "</strong></div>" +
    '<div style="display:flex;gap:10px">' +
    '<button class="btn-s" onclick="closeModal(\'modal-ct-booking\')" style="flex:1">Close</button>' +
    "<button class=\"btn-p\" onclick=\"closeModal('modal-ct-booking');goto('profile');showPTab('mytrips')\" style=\"flex:2;width:auto;margin-top:0\">View Booking →</button>" +
    "</div></div>";

  toast(
    utr ? "⏳ Booking received! Pending verification." : "🎉 Trip booked!",
    utr ? "info" : "success",
  );
  ctRenderTrips();
}

/* ── NOTIFICATIONS ── */
let CT_NOTIFS = JSON.parse(localStorage.getItem("ct_notifs") || "[]");
function ctAddNotif(msg) {
  CT_NOTIFS.unshift({
    msg,
    time: new Date().toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }),
    read: false,
  });
  if (CT_NOTIFS.length > 20) CT_NOTIFS = CT_NOTIFS.slice(0, 20);
  localStorage.setItem("ct_notifs", JSON.stringify(CT_NOTIFS));
  ctUpdateNotifBell();
}
function ctUpdateNotifBell() {
  const dot = document.querySelector(".notif-dot");
  const unread = CT_NOTIFS.filter((n) => !n.read).length;
  if (dot) dot.classList.toggle("show", unread > 0);
}
function ctToggleNotifs() {
  const dd = document.getElementById("ct-notif-dd");
  if (!dd) return;
  const isOpen = dd.classList.contains("open");
  dd.classList.toggle("open", !isOpen);
  if (!isOpen) {
    CT_NOTIFS.forEach((n) => (n.read = true));
    localStorage.setItem("ct_notifs", JSON.stringify(CT_NOTIFS));
    ctUpdateNotifBell();
    dd.innerHTML = CT_NOTIFS.length
      ? CT_NOTIFS.map(
          (n) =>
            `<div class="notif-item">${n.msg}<div style="font-size:.68rem;color:var(--ink4);margin-top:3px">${n.time}</div></div>`,
        ).join("")
      : '<div style="padding:20px;text-align:center;font-size:.82rem;color:var(--ink3)">No notifications yet</div>';
  }
}
document.addEventListener("click", (e) => {
  if (!e.target.closest(".notif-bell") && !e.target.closest("#ct-notif-dd")) {
    document.getElementById("ct-notif-dd")?.classList.remove("open");
  }
});

/* ── MY TRIPS PROFILE TAB ── */
function renderMyTrips() {
  const el = document.getElementById("mytrips-list");
  if (!el) return;
  const bookings = JSON.parse(
    localStorage.getItem("ct_bookings_" + (S.user?.id || "guest")) || "[]",
  );
  if (!bookings.length) {
    el.innerHTML = `<div class="empty"><div class="empty-ico">🎒</div><h3>No trip bookings yet</h3><p>Explore creator trips and book your first group adventure!</p><button class="btn-p" style="width:auto;padding:10px 24px;margin-top:16px" onclick="goto('creator-trips')">Explore Creator Trips →</button></div>`;
    return;
  }
  el.innerHTML = bookings
    .map(
      (b) => `
    <div class="bk-card">
      <div class="bk-card-img" style="display:flex;align-items:center;justify-content:center;font-size:2rem;background:var(--coral-bg)">${b.tripEmoji || "🗺️"}</div>
      <div class="bk-card-info">
        <div class="bk-card-name">${b.tripTitle}</div>
        <div class="bk-card-meta">👤 ${b.creator} · 📍 ${b.dest}</div>
        <div class="bk-card-meta">📅 ${b.dates} · 🧳 ${b.qty} traveler${b.qty > 1 ? "s" : ""}</div>
        <div class="bk-card-meta" style="margin-bottom:8px">💰 Total: <strong>₹${(b.total || 0).toLocaleString()}</strong></div>
        <span class="bk-card-status confirmed">✅ ${b.status}</span>
        <span style="font-size:.66rem;color:var(--ink3);margin-left:8px">#${b.id}</span>
      </div>
    </div>`,
    )
    .join("");
}

/* ── ADMIN CREATOR TRIPS TAB ── */
/* ══ ADMIN CREATOR TRIPS — FULL FEATURED ══ */

var _ctAdminEditId = null;
var _ctAdminFormMode = "create"; // 'create' or 'edit'
var _ctAdminSearchQ = "";
var _ctAdminFilterStatus = "all";

function ctAdminRenderTrips() {
  var el = document.getElementById("adm-trips-panel");
  if (!el) return;
  var trips = CT.trips;
  var total = trips.length;
  var openCount = trips.filter(function (t) {
    return t.status === "open";
  }).length;
  var fullCount = trips.filter(function (t) {
    return t.status === "full";
  }).length;
  var travelers = trips.reduce(function (a, t) {
    return a + (t.bookedSeats || 0);
  }, 0);
  var totalRevenue = trips.reduce(function (a, t) {
    return a + (t.bookedSeats || 0) * (t.pricePerPerson || 0);
  }, 0);

  // filter trips for table
  var filtered = trips.filter(function (t) {
    var q = _ctAdminSearchQ.toLowerCase();
    var matchQ =
      !q ||
      (t.title || "").toLowerCase().indexOf(q) > -1 ||
      (t.creator || "").toLowerCase().indexOf(q) > -1 ||
      (t.dest || "").toLowerCase().indexOf(q) > -1;
    var matchS =
      _ctAdminFilterStatus === "all" || t.status === _ctAdminFilterStatus;
    return matchQ && matchS;
  });

  el.innerHTML =
    '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;margin-bottom:20px">' +
    '<div class="adm-stat"><div class="adm-stat-n" style="font-size:1.6rem;color:var(--coral)">' +
    total +
    '</div><div class="adm-stat-l">Total Trips</div></div>' +
    '<div class="adm-stat"><div class="adm-stat-n" style="font-size:1.6rem;color:var(--teal)">' +
    openCount +
    '</div><div class="adm-stat-l">Open</div></div>' +
    '<div class="adm-stat"><div class="adm-stat-n" style="font-size:1.6rem;color:var(--gold)">' +
    fullCount +
    '</div><div class="adm-stat-l">Full</div></div>' +
    '<div class="adm-stat"><div class="adm-stat-n" style="font-size:1.6rem">' +
    travelers +
    '</div><div class="adm-stat-l">Travelers</div></div>' +
    '<div class="adm-stat"><div class="adm-stat-n" style="font-size:1.2rem;color:var(--teal)">₹' +
    (totalRevenue / 100000).toFixed(1) +
    'L</div><div class="adm-stat-l">Revenue</div></div>' +
    "</div>" +
    // toolbar
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">' +
    "<div style=\"font-family:'Fraunces',serif;font-weight:700;flex:1\">Creator Trips (" +
    total +
    ")</div>" +
    '<input id="ct-adm-search-inp" class="f-inp" style="max-width:200px;padding:8px 12px;font-size:.8rem" placeholder="🔍 Search trips…" value="' +
    _ctAdminSearchQ +
    '" oninput="ctAdminSearchChange(this.value)">' +
    '<select id="ct-adm-filter-sel" class="f-inp" style="max-width:130px;padding:8px 10px;font-size:.8rem" onchange="ctAdminFilterChange(this.value)">' +
    '<option value="all"' +
    (_ctAdminFilterStatus === "all" ? " selected" : "") +
    ">All Status</option>" +
    '<option value="open"' +
    (_ctAdminFilterStatus === "open" ? " selected" : "") +
    ">🟢 Open</option>" +
    '<option value="full"' +
    (_ctAdminFilterStatus === "full" ? " selected" : "") +
    ">🔴 Full</option>" +
    "</select>" +
    '<button class="btn-p" style="font-size:.78rem;padding:8px 14px;width:auto;margin-top:0" onclick="ctAdminOpenForm(\'create\',null)"><i class="fas fa-plus"></i> New Trip</button>' +
    "</div>" +
    // create/edit form placeholder
    '<div id="adm-ct-trip-form" style="display:none"></div>' +
    // bookings viewer placeholder
    '<div id="adm-ct-bookings-view" style="display:none"></div>' +
    // trip cards
    (filtered.length === 0
      ? '<div class="empty"><div class="empty-ico">🗺️</div><h3>No trips found</h3></div>'
      : "") +
    filtered
      .map(function (t) {
        var booked = t.bookedSeats || 0;
        var total_s = t.totalSeats || 0;
        var pct = total_s > 0 ? Math.round((booked / total_s) * 100) : 0;
        var revenue = booked * (t.pricePerPerson || 0);
        var bkList = ctAdminGetTripBookings(t.id);
        return (
          '<div class="adm-card" id="adm-tc-' +
          t.id +
          '">' +
          '<div class="adm-card-head">' +
          '<div style="font-size:2rem;flex-shrink:0">' +
          (t.emoji || "🗺️") +
          "</div>" +
          '<div style="flex:1;min-width:0">' +
          '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px">' +
          '<strong style="font-size:.92rem">' +
          t.title +
          "</strong>" +
          '<span class="st-badge ' +
          (t.status === "open"
            ? "approved"
            : t.status === "full"
              ? "rejected"
              : "pending") +
          '">' +
          t.status +
          "</span>" +
          "</div>" +
          '<div style="font-size:.74rem;color:var(--ink3);margin-bottom:3px">👤 ' +
          t.creator +
          " · 📍 " +
          t.dest +
          " · 📅 " +
          (t.dates || "TBA") +
          "</div>" +
          '<div style="font-size:.72rem;color:var(--ink3);margin-bottom:6px">₹' +
          (t.pricePerPerson || 0).toLocaleString() +
          "/person · " +
          (t.duration || "TBA") +
          "</div>" +
          '<div style="display:flex;align-items:center;gap:8px">' +
          '<div style="flex:1;height:5px;background:var(--border);border-radius:3px;overflow:hidden"><div style="height:100%;width:' +
          pct +
          "%;background:" +
          (pct >= 100
            ? "var(--coral)"
            : pct >= 70
              ? "var(--gold)"
              : "var(--teal)") +
          ';border-radius:3px"></div></div>' +
          '<span style="font-size:.68rem;color:var(--ink3);white-space:nowrap">' +
          booked +
          "/" +
          total_s +
          " seats (" +
          pct +
          "%)</span>" +
          "</div>" +
          '<div style="font-size:.72rem;color:var(--teal);font-weight:700;margin-top:4px">Revenue: ₹' +
          revenue.toLocaleString() +
          (bkList.length > 0 ? " · " + bkList.length + " booking(s)" : "") +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="adm-actions" style="flex-wrap:wrap;gap:6px">' +
          '<button class="btn-approve" style="padding:6px 11px;font-size:.72rem" onclick="ctAdminOpenForm(\'edit\',\'' +
          t.id +
          "')\">" +
          '<i class="fas fa-edit"></i> Edit</button>' +
          '<button class="btn-s" style="padding:6px 11px;font-size:.72rem" onclick="ctAdminViewBookings(\'' +
          t.id +
          "')\">" +
          '<i class="fas fa-users"></i> Bookings (' +
          bkList.length +
          ")</button>" +
          '<button class="btn-s" style="padding:6px 11px;font-size:.72rem" onclick="ctAdminDuplicateTrip(\'' +
          t.id +
          "')\">" +
          '<i class="fas fa-copy"></i> Duplicate</button>' +
          '<button class="btn-approve" style="padding:6px 11px;font-size:.72rem;background:' +
          (t.status === "open" ? "#fef3c7" : "#dcfce7") +
          ";color:" +
          (t.status === "open" ? "#b45309" : "#15803d") +
          ";border:1px solid " +
          (t.status === "open" ? "#fcd34d" : "#86efac") +
          '" onclick="ctAdminToggleStatus(\'' +
          t.id +
          "')\">" +
          (t.status === "open" ? "🔴 Close" : "🟢 Open") +
          "</button>" +
          '<button class="btn-del" style="padding:6px 11px;font-size:.72rem" onclick="ctAdminDeleteTrip(\'' +
          t.id +
          "')\">" +
          '<i class="fas fa-trash"></i> Delete</button>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");
}

function ctAdminSearchChange(val) {
  _ctAdminSearchQ = val;
  ctAdminRenderTrips();
}

function ctAdminFilterChange(val) {
  _ctAdminFilterStatus = val;
  ctAdminRenderTrips();
}

function ctAdminGetTripBookings(tripId) {
  try {
    var allKeys = Object.keys(localStorage);
    var result = [];
    allKeys.forEach(function (k) {
      if (k.indexOf("ct_bookings_") === 0) {
        var bks = JSON.parse(localStorage.getItem(k) || "[]");
        bks.forEach(function (b) {
          if (b.tripId === tripId) result.push(b);
        });
      }
    });
    return result;
  } catch (e) {
    return [];
  }
}

function ctAdminViewBookings(tripId) {
  var el = document.getElementById("adm-ct-bookings-view");
  if (!el) return;
  var trip = CT.trips.find(function (t) {
    return t.id === tripId;
  });
  if (!trip) return;

  // hide form if open
  var formEl = document.getElementById("adm-ct-trip-form");
  if (formEl) formEl.style.display = "none";

  // scroll to bookings
  el.style.display = "block";
  var bkList = ctAdminGetTripBookings(tripId);

  el.innerHTML =
    '<div style="background:white;border:1px solid var(--border);border-radius:var(--r-lg);padding:20px;margin-bottom:16px">' +
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">' +
    "<div style=\"font-family:'Fraunces',serif;font-weight:700\">" +
    (trip.emoji || "🗺️") +
    " " +
    trip.title +
    " — Bookings</div>" +
    '<button class="btn-s" style="padding:6px 12px;font-size:.76rem" onclick="document.getElementById(\'adm-ct-bookings-view\').style.display=\'none\'">✕ Close</button>' +
    "</div>" +
    '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:14px;padding:12px;background:var(--bg);border-radius:var(--r)">' +
    '<div style="text-align:center"><div style="font-family:\'Fraunces\',serif;font-size:1.3rem;font-weight:700;color:var(--coral)">' +
    bkList.length +
    '</div><div style="font-size:.7rem;color:var(--ink3)">Bookings</div></div>' +
    '<div style="text-align:center"><div style="font-family:\'Fraunces\',serif;font-size:1.3rem;font-weight:700;color:var(--teal)">' +
    (trip.bookedSeats || 0) +
    "/" +
    (trip.totalSeats || 0) +
    '</div><div style="font-size:.7rem;color:var(--ink3)">Seats</div></div>' +
    '<div style="text-align:center"><div style="font-family:\'Fraunces\',serif;font-size:1.1rem;font-weight:700;color:var(--teal)">₹' +
    ((trip.bookedSeats || 0) * (trip.pricePerPerson || 0)).toLocaleString() +
    '</div><div style="font-size:.7rem;color:var(--ink3)">Revenue</div></div>' +
    "</div>" +
    '<div style="margin-bottom:10px;font-size:.8rem;font-weight:700;color:var(--ink)">Adjust Booked Seats:</div>' +
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">' +
    '<input id="ct-adm-manual-seats-' +
    tripId +
    '" type="number" class="f-inp" style="max-width:100px;padding:8px 10px" value="' +
    (trip.bookedSeats || 0) +
    '" min="0" max="' +
    (trip.totalSeats || 99) +
    '">' +
    '<button class="btn-p" style="width:auto;padding:8px 16px;font-size:.8rem;margin-top:0" onclick="ctAdminUpdateSeats(\'' +
    tripId +
    "')\">" +
    '<i class="fas fa-save"></i> Update Seats</button>' +
    "</div>" +
    (bkList.length === 0
      ? '<div style="text-align:center;padding:20px;color:var(--ink3);font-size:.84rem">No bookings yet for this trip</div>'
      : '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.78rem">' +
        '<thead><tr style="border-bottom:2px solid var(--border)">' +
        '<th style="text-align:left;padding:8px 10px;color:var(--ink3)">Traveler</th>' +
        '<th style="text-align:left;padding:8px 10px;color:var(--ink3)">Seats</th>' +
        '<th style="text-align:left;padding:8px 10px;color:var(--ink3)">Amount</th>' +
        '<th style="text-align:left;padding:8px 10px;color:var(--ink3)">Booked On</th>' +
        '<th style="text-align:left;padding:8px 10px;color:var(--ink3)">Status</th>' +
        "</tr></thead><tbody>" +
        bkList
          .map(function (b) {
            return (
              '<tr style="border-bottom:1px solid var(--border)">' +
              '<td style="padding:8px 10px"><div style="font-weight:700">' +
              (b.travelerName || b.userName || "Guest") +
              '</div><div style="color:var(--ink3);font-size:.7rem">' +
              (b.travelerEmail || b.userEmail || "") +
              "</div></td>" +
              '<td style="padding:8px 10px">' +
              (b.seats || b.qty || 1) +
              "</td>" +
              '<td style="padding:8px 10px;font-weight:700;color:var(--teal)">₹' +
              (b.totalAmount || b.amount || 0).toLocaleString() +
              "</td>" +
              '<td style="padding:8px 10px;color:var(--ink3)">' +
              (b.bookedAt
                ? new Date(b.bookedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "N/A") +
              "</td>" +
              '<td style="padding:8px 10px"><span style="background:#dcfce7;color:#15803d;padding:2px 8px;border-radius:20px;font-size:.68rem;font-weight:700">Confirmed</span></td>' +
              "</tr>"
            );
          })
          .join("") +
        "</tbody></table></div>") +
    "</div>";

  el.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function ctAdminUpdateSeats(tripId) {
  var inp = document.getElementById("ct-adm-manual-seats-" + tripId);
  if (!inp) return;
  var newSeats = parseInt(inp.value);
  if (isNaN(newSeats) || newSeats < 0) {
    toast("⚠️ Invalid seat number", "warning");
    return;
  }
  var idx = CT.trips.findIndex(function (t) {
    return t.id === tripId;
  });
  if (idx < 0) return;
  if (newSeats > CT.trips[idx].totalSeats) {
    toast(
      "⚠️ Cannot exceed total seats (" + CT.trips[idx].totalSeats + ")",
      "warning",
    );
    return;
  }
  CT.trips[idx].bookedSeats = newSeats;
  if (newSeats >= CT.trips[idx].totalSeats) CT.trips[idx].status = "full";
  else if (CT.trips[idx].status === "full") CT.trips[idx].status = "open";
  ctSaveLocal();
  try {
    if (window.fsUpdateDoc)
      window.fsUpdateDoc("creator_trips", tripId, {
        bookedSeats: newSeats,
        status: CT.trips[idx].status,
      });
  } catch (e) {}
  ctRenderTrips();
  ctAdminViewBookings(tripId);
  ctAdminRenderTrips();
  toast("✅ Seats updated to " + newSeats, "success");
}

function ctAdminOpenForm(mode, tripId) {
  _ctAdminFormMode = mode;
  _ctAdminEditId = tripId || null;
  var formEl = document.getElementById("adm-ct-trip-form");
  if (!formEl) return;

  // hide bookings if open
  var bkEl = document.getElementById("adm-ct-bookings-view");
  if (bkEl) bkEl.style.display = "none";

  var trip = null;
  if (mode === "edit" && tripId) {
    trip = CT.trips.find(function (t) {
      return t.id === tripId;
    });
    if (!trip) return;
  }

  var g = function (field) {
    return trip ? trip[field] || "" : "";
  };

  formEl.style.display = "block";
  formEl.innerHTML =
    '<div style="background:var(--bg);border:1.5px solid var(--coral);border-radius:var(--r-lg);padding:22px;margin-bottom:16px">' +
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">' +
    "<div style=\"font-family:'Fraunces',serif;font-weight:700;font-size:1rem\">" +
    (mode === "edit" ? "✏️ Edit Trip" : "➕ Create New Trip") +
    "</div>" +
    '<button class="btn-s" style="padding:6px 12px;font-size:.76rem" onclick="ctAdminCloseForm()">✕ Cancel</button>' +
    "</div>" +
    // Basic info
    '<div style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--ink3);margin-bottom:10px">Basic Info</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">' +
    '<div class="f-group"><label class="f-lbl">Trip Title *</label><input class="f-inp" id="ctf-title" placeholder="e.g. Goa Summer Escape" value="' +
    g("title") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Creator Name *</label><input class="f-inp" id="ctf-creator" placeholder="e.g. Arjun Travels" value="' +
    g("creator") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Handle (@handle)</label><input class="f-inp" id="ctf-handle" placeholder="@arjuntravels" value="' +
    g("creatorHandle") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Followers</label><input class="f-inp" id="ctf-followers" placeholder="420K" value="' +
    g("creatorFollowers") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Destination *</label><input class="f-inp" id="ctf-dest" placeholder="e.g. Goa, India" value="' +
    g("dest") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Category</label><select class="f-inp" id="ctf-cat">' +
    ["beach", "mountains", "heritage", "adventure", "international", "wellness"]
      .map(function (c) {
        var labels = {
          beach: "🏖️ Beach",
          mountains: "🏔️ Mountains",
          heritage: "🏛️ Heritage",
          adventure: "🧗 Adventure",
          international: "✈️ International",
          wellness: "🧘 Wellness",
        };
        return (
          '<option value="' +
          c +
          '"' +
          (g("category") === c ? " selected" : "") +
          ">" +
          labels[c] +
          "</option>"
        );
      })
      .join("") +
    "</select></div>" +
    '<div class="f-group"><label class="f-lbl">Emoji</label><input class="f-inp" id="ctf-emoji" placeholder="🏖️" value="' +
    g("emoji") +
    '" maxlength="4"></div>' +
    '<div class="f-group"><label class="f-lbl">Creator Color</label><input class="f-inp" id="ctf-color" type="color" value="' +
    (g("creatorColor") || "#e85d04") +
    '" style="height:44px;padding:6px"></div>' +
    '<div class="f-group"><label class="f-lbl">Photo URL (optional)</label><input class="f-inp" id="ctf-photo" placeholder="https://images.unsplash.com/…" value="' +
    (trip && trip.photos && trip.photos[0] ? trip.photos[0] : "") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Status</label><select class="f-inp" id="ctf-status">' +
    '<option value="open"' +
    (g("status") === "open" ? " selected" : "") +
    ">🟢 Open</option>" +
    '<option value="full"' +
    (g("status") === "full" ? " selected" : "") +
    ">🔴 Full</option>" +
    "</select></div>" +
    "</div>" +
    // Dates & pricing
    '<div style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--ink3);margin-bottom:10px">Dates & Pricing</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:12px;margin-bottom:12px">' +
    '<div class="f-group"><label class="f-lbl">Dates</label><input class="f-inp" id="ctf-dates" placeholder="Jun 14-18, 2025" value="' +
    g("dates") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Duration</label><input class="f-inp" id="ctf-dur" placeholder="5 days" value="' +
    g("duration") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Price/Person (₹)</label><input class="f-inp" id="ctf-price" type="number" placeholder="12999" value="' +
    (trip ? trip.pricePerPerson || "" : "") +
    '"></div>' +
    '<div class="f-group"><label class="f-lbl">Total Seats</label><input class="f-inp" id="ctf-seats" type="number" placeholder="20" value="' +
    (trip ? trip.totalSeats || "" : "") +
    '"></div>' +
    "</div>" +
    // Description
    '<div class="f-group" style="margin-bottom:12px"><label class="f-lbl">Description</label>' +
    '<textarea class="f-inp" id="ctf-desc" rows="2" placeholder="Trip description…">' +
    g("desc") +
    "</textarea></div>" +
    // Highlights
    '<div style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--ink3);margin-bottom:8px">Highlights (one per line)</div>' +
    '<div class="f-group" style="margin-bottom:12px">' +
    '<textarea class="f-inp" id="ctf-highlights" rows="3" placeholder="Private villa with pool&#10;Sunset boat party&#10;Watersports day">' +
    (trip && trip.highlights ? trip.highlights.join("\n") : "") +
    "</textarea></div>" +
    // Itinerary
    '<div style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--ink3);margin-bottom:8px">Itinerary (format: Day 1 | Title | Description, one per line)</div>' +
    '<div class="f-group" style="margin-bottom:12px">' +
    '<textarea class="f-inp" id="ctf-itinerary" rows="4" placeholder="Day 1 | Arrival | Check-in to villa, welcome drinks&#10;Day 2 | Beach Day | Watersports and boat party">' +
    (trip && trip.itinerary
      ? trip.itinerary
          .map(function (d) {
            return (
              (d.day || "") + " | " + (d.title || "") + " | " + (d.desc || "")
            );
          })
          .join("\n")
      : "") +
    "</textarea></div>" +
    // Inclusions & Exclusions
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">' +
    '<div class="f-group"><label class="f-lbl">Inclusions (one per line)</label>' +
    '<textarea class="f-inp" id="ctf-inclusions" rows="4" placeholder="Accommodation&#10;All meals&#10;Airport transfers">' +
    (trip && trip.inclusions ? trip.inclusions.join("\n") : "") +
    "</textarea></div>" +
    '<div class="f-group"><label class="f-lbl">Exclusions (one per line)</label>' +
    '<textarea class="f-inp" id="ctf-exclusions" rows="4" placeholder="Flights&#10;Personal expenses&#10;Travel insurance">' +
    (trip && trip.exclusions ? trip.exclusions.join("\n") : "") +
    "</textarea></div>" +
    "</div>" +
    '<div style="display:flex;gap:10px">' +
    '<button class="btn-s" style="padding:11px 20px;font-size:.86rem" onclick="ctAdminCloseForm()">Cancel</button>' +
    '<button class="btn-p" style="width:auto;margin-top:0;padding:11px 24px;font-size:.86rem" onclick="ctAdminSaveTrip()">' +
    '<i class="fas fa-save"></i> ' +
    (mode === "edit" ? "Save Changes" : "Publish Trip") +
    "</button>" +
    "</div>" +
    "</div>";

  formEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function ctAdminCloseForm() {
  var formEl = document.getElementById("adm-ct-trip-form");
  if (formEl) formEl.style.display = "none";
  _ctAdminEditId = null;
  _ctAdminFormMode = "create";
}

function ctAdminSaveTrip() {
  var vf = function (id) {
    return document.getElementById(id)
      ? document.getElementById(id).value.trim()
      : "";
  };

  var title = vf("ctf-title");
  var creator = vf("ctf-creator");
  var dest = vf("ctf-dest");
  if (!title || !creator || !dest) {
    toast("⚠️ Title, Creator and Destination are required", "warning");
    return;
  }

  var parseLines = function (str) {
    return str
      .split("\n")
      .map(function (s) {
        return s.trim();
      })
      .filter(function (s) {
        return s.length > 0;
      });
  };

  var rawItin = vf("ctf-itinerary");
  var itinerary = parseLines(rawItin).map(function (line) {
    var parts = line.split("|");
    return {
      day: (parts[0] || "").trim(),
      title: (parts[1] || "").trim(),
      desc: (parts[2] || "").trim(),
    };
  });
  if (itinerary.length === 0)
    itinerary = [
      { day: "Day 1", title: "TBA", desc: "Itinerary being finalized" },
    ];

  var highlights = parseLines(vf("ctf-highlights"));
  if (highlights.length === 0) highlights = ["Details TBA"];

  var inclusions = parseLines(vf("ctf-inclusions"));
  if (inclusions.length === 0) inclusions = ["Details TBA"];

  var exclusions = parseLines(vf("ctf-exclusions"));
  if (exclusions.length === 0) exclusions = ["Flights"];

  var photoUrl = vf("ctf-photo");

  if (_ctAdminFormMode === "edit" && _ctAdminEditId) {
    var idx = CT.trips.findIndex(function (t) {
      return t.id === _ctAdminEditId;
    });
    if (idx < 0) {
      toast("❌ Trip not found", "error");
      return;
    }
    CT.trips[idx].title = title;
    CT.trips[idx].creator = creator;
    CT.trips[idx].creatorHandle =
      vf("ctf-handle") || CT.trips[idx].creatorHandle;
    CT.trips[idx].creatorFollowers =
      vf("ctf-followers") || CT.trips[idx].creatorFollowers;
    CT.trips[idx].creatorColor = vf("ctf-color") || CT.trips[idx].creatorColor;
    CT.trips[idx].dest = dest;
    CT.trips[idx].category = vf("ctf-cat");
    CT.trips[idx].emoji = vf("ctf-emoji") || CT.trips[idx].emoji || "🗺️";
    CT.trips[idx].dates = vf("ctf-dates") || CT.trips[idx].dates;
    CT.trips[idx].duration = vf("ctf-dur") || CT.trips[idx].duration;
    CT.trips[idx].pricePerPerson =
      parseInt(vf("ctf-price")) || CT.trips[idx].pricePerPerson;
    CT.trips[idx].totalSeats =
      parseInt(vf("ctf-seats")) || CT.trips[idx].totalSeats;
    CT.trips[idx].status = vf("ctf-status") || CT.trips[idx].status;
    CT.trips[idx].desc = vf("ctf-desc") || CT.trips[idx].desc;
    CT.trips[idx].highlights = highlights;
    CT.trips[idx].itinerary = itinerary;
    CT.trips[idx].inclusions = inclusions;
    CT.trips[idx].exclusions = exclusions;
    if (photoUrl) CT.trips[idx].photos = [photoUrl];
    ctSaveLocal();
    try {
      if (window.fsUpdateDoc)
        window.fsUpdateDoc("creator_trips", _ctAdminEditId, CT.trips[idx]);
    } catch (e) {}
    toast("✅ Trip updated successfully!", "success");
  } else {
    var newTrip = {
      id: "ct" + Date.now(),
      title: title,
      creator: creator,
      creatorHandle: vf("ctf-handle") || "@creator",
      creatorFollowers: vf("ctf-followers") || "—",
      creatorColor: vf("ctf-color") || "#e85d04",
      dest: dest,
      category: vf("ctf-cat"),
      emoji: vf("ctf-emoji") || "🗺️",
      dates: vf("ctf-dates") || "TBA",
      duration: vf("ctf-dur") || "TBA",
      totalSeats: parseInt(vf("ctf-seats")) || 10,
      bookedSeats: 0,
      pricePerPerson: parseInt(vf("ctf-price")) || 0,
      rating: 0,
      reviews: 0,
      status: vf("ctf-status") || "open",
      desc: vf("ctf-desc") || "Details coming soon.",
      highlights: highlights,
      itinerary: itinerary,
      inclusions: inclusions,
      exclusions: exclusions,
      photos: photoUrl ? [photoUrl] : [],
      participants: [],
      reviews_data: [],
    };
    CT.trips.unshift(newTrip);
    ctSaveLocal();
    try {
      if (window.fsSetDoc)
        window.fsSetDoc("creator_trips", newTrip.id, newTrip);
    } catch (e) {}
    toast("🎉 Trip published!", "success");
  }

  ctAdminCloseForm();
  ctAdminRenderTrips();
  ctRenderTrips();
  ctUpdateStats();
}

async function ctAdminToggleStatus(id) {
  var idx = CT.trips.findIndex(function (t) {
    return t.id === id;
  });
  if (idx < 0) return;
  CT.trips[idx].status = CT.trips[idx].status === "open" ? "full" : "open";
  ctSaveLocal();
  try {
    if (window.fsUpdateDoc)
      await window.fsUpdateDoc("creator_trips", id, {
        status: CT.trips[idx].status,
      });
  } catch (e) {}
  ctAdminRenderTrips();
  ctRenderTrips();
  toast("✅ Trip status updated", "success");
}

async function ctAdminDeleteTrip(id) {
  if (!confirm("Delete this trip permanently? This cannot be undone.")) return;
  CT.trips = CT.trips.filter(function (t) {
    return t.id !== id;
  });
  ctSaveLocal();
  try {
    if (window.fsDeleteDoc) await window.fsDeleteDoc("creator_trips", id);
  } catch (e) {}
  ctAdminRenderTrips();
  ctRenderTrips();
  ctUpdateStats();
  toast("🗑️ Trip deleted", "info");
}

function ctAdminDuplicateTrip(id) {
  var trip = CT.trips.find(function (t) {
    return t.id === id;
  });
  if (!trip) return;
  var copy = JSON.parse(JSON.stringify(trip));
  copy.id = "ct" + Date.now();
  copy.title = "Copy of " + copy.title;
  copy.bookedSeats = 0;
  copy.status = "open";
  copy.participants = [];
  copy.reviews_data = [];
  copy.rating = 0;
  copy.reviews = 0;
  CT.trips.unshift(copy);
  ctSaveLocal();
  try {
    if (window.fsSetDoc) window.fsSetDoc("creator_trips", copy.id, copy);
  } catch (e) {}
  ctAdminRenderTrips();
  ctRenderTrips();
  ctUpdateStats();
  toast("📋 Trip duplicated! Edit it to update details.", "success");
}

/* ── PATCH EXISTING goto() ── */
const _origGoto = typeof goto !== "undefined" ? goto : null;
function goto(page) {
  // Clear listing hash when navigating to other pages
  if (window.location.hash.startsWith("#listing/")) {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search,
    );
  }
  var _pageTitles = {
    home: "homestays — India\'s Favourite Homestay Platform",
    stays: "All Stays — homestays",
    experiences: "Experiences — homestays",
    profile: "My Profile — homestays",
    host: "Host Dashboard — homestays",
    admin: "Admin Panel — homestays",
    "creator-trips": "Creator Trips — homestays",
    "trip-detail": "Trip Details — homestays",
  };
  if (_pageTitles[page]) document.title = _pageTitles[page];
  document.querySelectorAll(".pg").forEach((p) => p.classList.remove("on"));
  const pg = document.getElementById("pg-" + page);
  if (pg) pg.classList.add("on");
  const ft = document.getElementById("footer");
  if (ft)
    ft.style.display = ["home", "stays", "experiences"].includes(page)
      ? "block"
      : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (typeof hideDD === "function") hideDD();
  if (page === "stays") {
    if (typeof renderAllStays === "function") renderAllStays();
  }
  if (page === "experiences") {
    if (typeof renderAllExp === "function") renderAllExp();
  }
  if (page === "profile") {
    if (!S.user) {
      openLoginModal();
      return;
    }
    if (typeof renderProfile === "function") renderProfile();
  }
  if (page === "host") {
    if (!S.user) {
      openLoginModal();
      return;
    }
    if (typeof renderHostDash === "function") renderHostDash();
  }
  if (page === "admin") {
    if (window._FS_IS_ADMIN === true) {
      if (typeof showAdminDash === "function") showAdminDash();
    } else {
      document.getElementById("adm-login").style.display = "block";
      document.getElementById("adm-dashboard").style.display = "none";
    }
  }
  if (page === "creator-trips") {
    ctInit();
  }
}

/* ── PATCH showPTab to support mytrips ── */
const _origShowPTab = typeof showPTab !== "undefined" ? showPTab : null;
function showPTab(tab) {
  document.querySelectorAll(".ptab").forEach((t) => t.classList.remove("on"));
  document
    .querySelectorAll(".pnav-item")
    .forEach((t) => t.classList.remove("on"));
  document.getElementById("ptab-" + tab)?.classList.add("on");
  document.getElementById("pn-" + tab)?.classList.add("on");
  if (tab === "mytrips") renderMyTrips();
}

/* ── PATCH adminTab to support creator-trips ── */
const _origAdminTab = typeof adminTab !== "undefined" ? adminTab : null;
function adminTab(tab) {
  ["pending", "approved", "rejected", "users", "creator-trips"].forEach((t) => {
    const el = document.getElementById("at-" + t);
    if (el) el.classList.toggle("on", t === tab);
  });
  const lp = document.getElementById("adm-listings-panel");
  const up = document.getElementById("adm-users-panel");
  const tp = document.getElementById("adm-trips-panel");
  if (lp)
    lp.style.display =
      tab !== "users" && tab !== "creator-trips" ? "block" : "none";
  if (up) up.style.display = tab === "users" ? "block" : "none";
  if (tp) {
    tp.style.display = tab === "creator-trips" ? "block" : "none";
    if (tab === "creator-trips") ctAdminRenderTrips();
  }
  if (tab === "users") {
    if (typeof renderAdminUsers === "function") renderAdminUsers();
    return;
  }
  if (tab === "creator-trips") return;
  // Original admin tab logic for listings
  const items = S.listings.filter((l) => l.status === tab);
  if (!lp) return;
  if (!items.length) {
    lp.innerHTML = `<div class="empty"><div class="empty-ico">${tab === "pending" ? "⏳" : tab === "approved" ? "✅" : "❌"}</div><h3>No ${tab} listings</h3></div>`;
    return;
  }
  lp.innerHTML = items
    .slice()
    .reverse()
    .map(
      (l) => `
    <div class="adm-card">
      <div class="adm-card-head">
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px">
            <strong>${l.name}</strong>
            <span class="st-badge ${l.status}">${l.status}</span>
            ${(() => {
              if (
                typeof getPlanDetails !== "function" ||
                typeof getPlanForHost !== "function"
              )
                return "";
              const p = getPlanDetails(getPlanForHost(l.host_id));
              return p && p.id !== "free"
                ? `<span class="verified-badge ${p.id === "gold" ? "gold" : ""}">${p.id === "gold" ? "👑 GOLD" : p.name.toUpperCase()}</span>`
                : "";
            })()}
          </div>
          <div style="font-size:.78rem;color:var(--ink3);margin-bottom:4px">📍 ${l.loc} · 🏠 ${l.type} · ₹${l.price?.toLocaleString()}/night · 👥 ${l.guests} guests</div>
          <div style="font-size:.76rem;color:var(--ink3)">Host: <strong>${l.host || "Unknown"}</strong> · ${new Date(l.submitted || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</div>
        </div>
        ${l.photos?.[0] ? `<img src="${l.photos[0]}" style="width:80px;height:64px;border-radius:var(--r);object-fit:cover;flex-shrink:0" alt="" onerror="this.style.display='none'">` : ""}
      </div>
      <div class="adm-actions">
        ${l.status !== "approved" ? `<button class="btn-approve" onclick="adminAction('${l.id}','approved')">✅ Approve</button>` : ""}
        ${l.status !== "rejected" ? `<button class="btn-reject" onclick="adminAction('${l.id}','rejected')">❌ Reject</button>` : ""}
        <button class="btn-del" onclick="adminDelete('${l.id}')">🗑️ Delete</button>
      </div>
    </div>`,
    )
    .join("");
}

/* ── FIREBASE AUTH UPGRADES ── */
async function doLoginFirebase() {
  var email = v("li-email"),
    pass = v("li-pass");
  if (!email || !pass) {
    toast("⚠️ Fill all fields", "warning");
    return;
  }
  if (window.FS_VALIDATE && !window.FS_VALIDATE(email, "email")) {
    toast("⚠️ Enter a valid email", "warning");
    return;
  }
  // rate limit removed for login
  try {
    if (window.FS_AUTH && window.FS_FIREBASE) {
      await window.FS_FIREBASE.signInWithEmailAndPassword(
        window.FS_AUTH,
        email,
        pass,
      );
      closeModal("modal-login");
      toast("🎉 Welcome back!", "success");
      // onAuthStateChanged will set S.user — give it a moment then refresh UI
      setTimeout(function () {
        if (typeof updateAuthUI === "function") updateAuthUI();
        if (
          typeof renderProfile === "function" &&
          document.getElementById("pg-profile") &&
          document.getElementById("pg-profile").classList.contains("on")
        )
          renderProfile();
      }, 800);
    } else {
      doLogin();
    }
  } catch (e) {
    var msg =
      e.code === "auth/invalid-credential"
        ? "Wrong email or password. Please check and try again."
        : e.code === "auth/user-not-found"
          ? "No account with this email. Please register first."
          : e.code === "auth/wrong-password"
            ? "Wrong password. Try again or reset password."
            : e.code === "auth/too-many-requests"
              ? "Account temporarily blocked. Wait 5 min or reset password."
              : e.code === "auth/user-disabled"
                ? "This account has been disabled."
                : e.code === "auth/invalid-email"
                  ? "Invalid email address."
                  : "Login failed. " + e.message;
    toast("❌ " + msg, "error");
  }
}

async function doRegisterFirebase() {
  var fn = v("reg-fn"),
    ln = v("reg-ln"),
    email = v("reg-email"),
    phone = v("reg-phone"),
    pass = v("reg-pass");
  if (!fn || !email || !pass) {
    toast("⚠️ Name, email & password required", "warning");
    return;
  }
  if (window.FS_VALIDATE) {
    if (!window.FS_VALIDATE(fn, "name")) {
      toast("⚠️ Enter a valid name (2-80 chars)", "warning");
      return;
    }
    if (!window.FS_VALIDATE(email, "email")) {
      toast("⚠️ Enter a valid email address", "warning");
      return;
    }
    if (phone && !window.FS_VALIDATE(phone, "phone")) {
      toast("⚠️ Enter a valid 10-digit Indian mobile number", "warning");
      return;
    }
  }
  if (pass.length < 8) {
    toast("⚠️ Password must be at least 8 characters", "warning");
    return;
  }
  if (!/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) {
    toast("⚠️ Password must have uppercase + number", "warning");
    return;
  }
  // rate limit removed for register
  try {
    if (window.FS_AUTH && window.FS_FIREBASE) {
      var cleanName = fn.trim() + (ln ? " " + ln.trim() : "");
      var cred = await window.FS_FIREBASE.createUserWithEmailAndPassword(
        window.FS_AUTH,
        email,
        pass,
      );
      await window.FS_FIREBASE.updateProfile(cred.user, {
        displayName: cleanName,
      });
      if (window.fsSetDoc) {
        await window.fsSetDoc("users", cred.user.uid, {
          name: cleanName,
          email: email,
          phone: phone || "",
          joined: new Date().toISOString(),
          trips: 0,
          plan: "free",
        });
      }
      closeModal("modal-register");
      toast("🎉 Welcome to homestays, " + fn + "!", "success");
      setTimeout(function () {
        if (typeof updateAuthUI === "function") updateAuthUI();
      }, 800);
    } else {
      doRegister();
    }
  } catch (e) {
    if (e.code === "auth/email-already-in-use") {
      toast("📧 Email already registered — switching to login!", "warning");
      closeModal("modal-register");
      setTimeout(function () {
        openLoginModal();
        var le = document.getElementById("login-email");
        if (le) le.value = email;
      }, 300);
    } else {
      var msg =
        e.code === "auth/weak-password"
          ? "Password is too weak"
          : e.code === "auth/invalid-email"
            ? "Invalid email address"
            : "Registration failed. " + e.message;
      toast("❌ " + msg, "error");
    }
  }
}

async function doLogoutFirebase() {
  try {
    if (window.FS_AUTH && window.FS_FIREBASE) {
      await window.FS_FIREBASE.signOut(window.FS_AUTH);
    }
    if (S.user) {
      lsSet("fs_wish_" + S.user.id, [...S.wishlist]);
      lsSet("fs_bks_" + S.user.id, S.bookings);
    }
    S.user = null;
    S.wishlist = new Set();
    S.bookings = [];
    S.tripBookings = [];
    lsDel("fs_user");
    updateAuthUI();
    goto("home");
    toast("👋 Logged out successfully", "success");
  } catch (e) {
    doLogout();
  }
}

async function doGoogleLogin() {
  try {
    if (window.FS_AUTH && window.FS_FIREBASE && window.FS_GOOGLE_PROVIDER) {
      await window.FS_FIREBASE.signInWithPopup(
        window.FS_AUTH,
        window.FS_GOOGLE_PROVIDER,
      );
      closeModal("modal-login");
      closeModal("modal-register");
      toast("🎉 Signed in with Google!", "success");
    } else {
      toast("⚠️ Google sign-in not available in demo mode", "info");
    }
  } catch (e) {
    toast("❌ Google sign-in failed: " + e.message, "error");
  }
}

/* ── PATCH LOGIN BUTTONS ── */
// Patch the HTML login/register buttons to use Firebase versions
document.addEventListener("DOMContentLoaded", () => {
  // Add notification bell to nav
  const navRight = document.querySelector(".nav-right");
  if (navRight) {
    const bell = document.createElement("div");
    bell.style.cssText = "position:relative";
    bell.innerHTML = `
      <div class="notif-bell" onclick="ctToggleNotifs()" title="Notifications">
        <i class="fas fa-bell"></i>
        <div class="notif-dot" id="notif-dot-main"></div>
      </div>
      <div class="notif-dropdown" id="ct-notif-dd">
        <div style="padding:10px 14px;font-family:'Fraunces',serif;font-weight:700;font-size:.88rem;border-bottom:1px solid var(--border)">Notifications</div>
        <div style="padding:20px;text-align:center;font-size:.82rem;color:var(--ink3)">No notifications yet</div>
      </div>`;
    navRight.insertBefore(bell, navRight.firstChild);
    // Show Creator Trips nav btn
    const ctBtn = document.getElementById("nav-ct-btn");
    if (ctBtn) ctBtn.style.display = "inline-flex";
    const ctMobileBtn = document.getElementById("mobile-nav-ct");
    if (ctMobileBtn) ctMobileBtn.style.display = "flex";
  }

  // Add Google sign-in buttons to modals
  const liModal = document.getElementById("modal-login");
  if (liModal) {
    const body = liModal.querySelector(".modal-body");
    if (body) {
      const googleDiv = document.createElement("div");
      googleDiv.innerHTML = `<div class="divider">or continue with</div><button class="soc-btn" onclick="doGoogleLogin()"><svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.8-6.8C35.6 2.2 30.1 0 24 0 14.6 0 6.6 5.5 2.8 13.5l7.9 6.1C12.6 13 17.9 9.5 24 9.5z"/><path fill="#4285F4" d="M46.9 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.9c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4 6.9-10 6.9-17z"/><path fill="#FBBC05" d="M10.7 28.4c-.5-1.5-.8-3-.8-4.4s.3-2.9.8-4.4l-7.9-6.1C1 16.4 0 20.1 0 24s1 7.6 2.8 10.5l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.1 0 11.2-2 14.9-5.5l-7.5-5.8c-2 1.4-4.6 2.2-7.4 2.2-6.1 0-11.4-3.5-13.3-8.5l-7.9 6.1C6.6 42.5 14.6 48 24 48z"/></svg> Continue with Google</button>`;
      const divider = body.querySelector(".divider");
      if (divider) divider.after(googleDiv.firstChild);
      else body.appendChild(googleDiv);
    }
  }

  ctUpdateNotifBell();
});

/* ── INIT EXTENSION ── */
// Extend original init to also add tripBookings to S
const _origInit = typeof init !== "undefined" ? init : null;
if (_origInit) {
  const _initWrapper = function () {
    _origInit();
    S.tripBookings = S.tripBookings || [];
  };
  // Schedule after original init
  setTimeout(() => {
    S.tripBookings = S.tripBookings || [];
    ctUpdateNotifBell();
  }, 500);
}

/* ── FUNCTION WRAPPERS (route inline onclick to correct implementations) ── */
function doLogin() {
  doLoginFirebase();
}
function doRegister() {
  doRegisterFirebase();
}
function doLogout() {
  doLogoutFirebase();
}

/* ════════════════════════════════════════════════════
   MISSING FEATURES — ADDED WITHOUT BREAKING EXISTING CODE
════════════════════════════════════════════════════ */

/* ══ 1. AVAILABILITY CALENDAR SYSTEM ══
   Tracks booked dates per stay. Prevents double bookings.
   All date ranges stored in Firestore under 'availability/{stayId}'
*/
var _avail = {}; // local cache: { stayId: [{checkin, checkout, bookingId}] }

async function loadAvailability(stayId) {
  if (_avail[stayId]) return _avail[stayId];
  try {
    if (window.fsGetDoc) {
      var doc = await window.fsGetDoc("availability", stayId);
      _avail[stayId] = doc && doc.bookings ? doc.bookings : [];
    } else {
      var stored = lsGet("fs_avail_" + stayId);
      _avail[stayId] = stored || [];
    }
  } catch (e) {
    _avail[stayId] = [];
  }
  return _avail[stayId];
}

async function checkAvailability(stayId, checkin, checkout) {
  if (!checkin || !checkout) return { available: true };
  var bookings = await loadAvailability(stayId);
  var ci = new Date(checkin).getTime();
  var co = new Date(checkout).getTime();
  for (var i = 0; i < bookings.length; i++) {
    var b = bookings[i];
    var bci = new Date(b.checkin).getTime();
    var bco = new Date(b.checkout).getTime();
    if (ci < bco && co > bci) {
      return { available: false, conflict: b };
    }
  }
  return { available: true };
}

async function blockDates(stayId, checkin, checkout, bookingId) {
  var bookings = await loadAvailability(stayId);
  bookings.push({
    checkin: checkin,
    checkout: checkout,
    bookingId: bookingId,
  });
  _avail[stayId] = bookings;
  try {
    if (window.fsSetDoc) {
      await window.fsSetDoc("availability", stayId, {
        bookings: bookings,
      });
    } else {
      lsSet("fs_avail_" + stayId, bookings);
    }
  } catch (e) {}
}

async function unblockDates(stayId, bookingId) {
  var bookings = await loadAvailability(stayId);
  _avail[stayId] = bookings.filter(function (b) {
    return b.bookingId !== bookingId;
  });
  try {
    if (window.fsSetDoc) {
      await window.fsSetDoc("availability", stayId, {
        bookings: _avail[stayId],
      });
    } else {
      lsSet("fs_avail_" + stayId, _avail[stayId]);
    }
  } catch (e) {}
}

// Show calendar availability dots on listing detail
async function renderAvailabilityBadge(stayId, containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var avail = await checkAvailability(stayId, S.dates.in, S.dates.out);
  if (!avail.available) {
    el.innerHTML =
      '<div style="background:#fee2e2;border:1px solid #fecaca;border-radius:8px;padding:8px 12px;font-size:.76rem;color:#dc2626;margin-bottom:8px">⚠️ These dates are already booked. Please select different dates.</div>';
  } else {
    el.innerHTML =
      '<div style="background:#dcfce7;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;font-size:.76rem;color:#166534;margin-bottom:8px">✅ Available for selected dates</div>';
  }
}

// Patch openBooking to check availability before showing payment
var _origOpenBooking = openBooking;
openBooking = async function (id) {
  if (!S.user) {
    openLoginModal();
    toast("💡 Sign in to book", "info");
    return;
  }
  showPageLoader();
  if (S.dates.in && S.dates.out) {
    var avail = await checkAvailability(id, S.dates.in, S.dates.out);
    if (!avail.available) {
      hidePageLoader();
      toast(
        "❌ These dates are already booked. Please choose different dates.",
        "error",
      );
      openDatesModal();
      return;
    }
  }
  _origOpenBooking(id);
};

// Patch verifyAndConfirmUTR to block dates after booking
var _origVerifyUTR = verifyAndConfirmUTR;
verifyAndConfirmUTR = async function () {
  // Run original verification first
  await _origVerifyUTR.call(this);
  // If booking was created, block those dates
  if (S.bookings && S.bookings.length > 0) {
    var last = S.bookings[S.bookings.length - 1];
    if (last && last.checkin && last.checkout && last.checkin !== "TBD") {
      await blockDates(last.stayId, last.checkin, last.checkout, last.id);
    }
  }
};

/* ══ 2. BOOKING CANCELLATION & REFUND SYSTEM ══ */

function openCancelModal(bookingId) {
  var bk = S.bookings.find(function (b) {
    return b.id === bookingId;
  });
  if (!bk) return;
  var checkin = new Date(bk.checkin);
  var today = new Date();
  var daysLeft = Math.ceil((checkin - today) / (1000 * 60 * 60 * 24));
  var refundPct = daysLeft >= 7 ? 100 : daysLeft >= 3 ? 50 : 0;
  var refundAmt = Math.round(((bk.total || 0) * refundPct) / 100);

  var el = document.getElementById("cancel-modal-body");
  if (!el) return;
  el.innerHTML =
    '<div style="text-align:center;margin-bottom:16px"><div style="font-size:2.5rem;margin-bottom:8px">❓</div>' +
    '<div style="font-family:Fraunces,serif;font-size:1.2rem;font-weight:700;margin-bottom:6px">Cancel Booking?</div>' +
    '<div style="font-size:.84rem;color:var(--ink3)">Booking #' +
    bookingId +
    "</div></div>" +
    '<div style="background:var(--bg);border-radius:var(--r);padding:14px;margin-bottom:14px;font-size:.83rem">' +
    '<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>Stay</span><strong>' +
    (bk.stayName || "—") +
    "</strong></div>" +
    '<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>Check-in</span><strong>' +
    (bk.checkin || "—") +
    "</strong></div>" +
    '<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>Amount Paid</span><strong>₹' +
    (bk.total || 0).toLocaleString() +
    "</strong></div>" +
    '<div style="display:flex;justify-content:space-between"><span>Days until check-in</span><strong>' +
    (daysLeft > 0 ? daysLeft + " days" : "Already past") +
    "</strong></div>" +
    "</div>" +
    '<div style="background:' +
    (refundPct === 100
      ? "#dcfce7;border:1px solid #bbf7d0"
      : refundPct === 50
        ? "#fff7ed;border:1px solid #fed7aa"
        : "#fee2e2;border:1px solid #fecaca") +
    ';border-radius:var(--r);padding:12px 14px;margin-bottom:16px;font-size:.82rem">' +
    '<div style="font-weight:700;margin-bottom:4px">' +
    (refundPct === 100
      ? "✅ Full Refund Eligible"
      : refundPct === 50
        ? "⚠️ Partial Refund (50%)"
        : "❌ No Refund") +
    "</div>" +
    '<div style="color:var(--ink3)">' +
    (refundPct > 0
      ? "Refund of ₹" +
        refundAmt.toLocaleString() +
        " will be credited within 5-7 business days"
      : "Cancellation within 3 days of check-in is non-refundable") +
    "</div>" +
    "</div>" +
    '<div style="display:flex;gap:10px">' +
    '<button class="btn-s" onclick="closeModal(\'modal-cancel\')" style="flex:1">Keep Booking</button>' +
    '<button class="btn-p" onclick="confirmCancellation(\'' +
    bookingId +
    "'," +
    refundAmt +
    ')" style="flex:2;background:#dc2626">Cancel Booking</button>' +
    "</div>";
  openModal("modal-cancel");
}

async function confirmCancellation(bookingId, refundAmt) {
  var idx = S.bookings.findIndex(function (b) {
    return b.id === bookingId;
  });
  if (idx === -1) return;
  var bk = S.bookings[idx];
  S.bookings[idx].status = "cancelled";
  S.bookings[idx].cancelledAt = new Date().toISOString();
  S.bookings[idx].refundAmount = refundAmt;
  if (S.user) lsSet("fs_bks_" + S.user.id, S.bookings);
  try {
    if (window.fsUpdateDoc) {
      await window.fsUpdateDoc("bookings", bookingId, {
        status: "cancelled",
        cancelledAt: new Date().toISOString(),
        refundAmount: refundAmt,
      });
    }
    // Unblock dates
    if (bk.stayId && bk.checkin && bk.checkin !== "TBD") {
      await unblockDates(bk.stayId, bookingId);
    }
    // Save refund record
    if (window.fsAddDoc && refundAmt > 0) {
      await window.fsAddDoc("refunds", {
        bookingId: bookingId,
        userId: S.user ? S.user.id : "",
        amount: refundAmt,
        status: "pending",
        requestedAt: new Date().toISOString(),
      });
    }
  } catch (e) {}
  closeModal("modal-cancel");
  renderBookings();
  toast(
    refundAmt > 0
      ? "✅ Booking cancelled. Refund of ₹" +
          refundAmt.toLocaleString() +
          " will be processed in 5-7 days."
      : "✅ Booking cancelled.",
    "success",
  );
}

// Patch renderBookings to show cancel button
var _origRenderBookings = renderBookings;
renderBookings = function () {
  var el = document.getElementById("bookings-list");
  if (!S.bookings.length) {
    el.innerHTML =
      '<div class="empty"><div class="empty-ico">📋</div><h3>No bookings yet</h3><p>Your upcoming trips will appear here</p><button class="btn-p" style="width:auto;padding:10px 24px;margin-top:16px" onclick="goto(\'stays\')">Explore Stays →</button></div>';
    return;
  }
  el.innerHTML = S.bookings
    .slice()
    .reverse()
    .map(function (b) {
      var isCancelled = b.status === "cancelled";
      var checkin =
        b.checkin && b.checkin !== "TBD" ? new Date(b.checkin) : null;
      var canCancel = !isCancelled && checkin && checkin > new Date();
      return (
        '<div class="bk-card">' +
        '<div class="bk-card-img"><img src="' +
        (b.stayPhoto || "") +
        '" alt="' +
        b.stayName +
        '" onerror="this.parentElement.innerHTML=\'<div style=height:80px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;background:var(--coral-bg)>🏡</div>\'"></div>' +
        '<div class="bk-card-info">' +
        '<div class="bk-card-name">' +
        b.stayName +
        "</div>" +
        '<div class="bk-card-meta">📍 ' +
        b.loc +
        "</div>" +
        '<div class="bk-card-meta">📅 ' +
        b.checkin +
        " → " +
        b.checkout +
        " · 👥 " +
        b.guests +
        " guest" +
        (b.guests > 1 ? "s" : "") +
        "</div>" +
        '<div class="bk-card-meta" style="margin-bottom:8px">💰 Total: <strong>₹' +
        (b.total || 0).toLocaleString() +
        "</strong>" +
        (b.payMethod ? " · via " + b.payMethod : "") +
        (b.refundAmount
          ? " · Refund: ₹" + b.refundAmount.toLocaleString()
          : "") +
        "</div>" +
        '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">' +
        '<span class="bk-card-status ' +
        (isCancelled ? "pending" : "confirmed") +
        '">' +
        (isCancelled ? "❌ Cancelled" : "✅ " + b.status) +
        "</span>" +
        '<span style="font-size:.66rem;color:var(--ink3)">#' +
        b.id +
        "</span>" +
        (canCancel
          ? "<button onclick=\"openCancelModal('" +
            b.id +
            '\')" style="margin-left:auto;background:none;border:1px solid #fecaca;color:#dc2626;border-radius:6px;padding:3px 10px;font-size:.68rem;font-weight:600;cursor:pointer;font-family:inherit">Cancel</button>'
          : "") +
        "</div></div></div>"
      );
    })
    .join("");
};

/* ══ 3. BOOKING CONFIRMATION EMAIL SIMULATION ══
   In production: connect Firebase Functions + SendGrid/Nodemailer.
   This sends a simulated in-app "email receipt" that can be copy-pasted.
   Replace sendConfirmationEmail() body with actual API call in production.
*/
function sendConfirmationEmail(booking, stayName, userEmail) {
  var subject =
    "✅ Booking Confirmed — " + stayName + " | homestays #" + booking.id;
  var body =
    "Dear " +
    (S.user ? S.user.name : "Guest") +
    ",\n\n" +
    "Your booking has been received at homestays!\n\n" +
    "📋 BOOKING DETAILS\n" +
    "─────────────────────────\n" +
    "Booking ID   : " +
    booking.id +
    "\n" +
    "Property     : " +
    stayName +
    "\n" +
    "Location     : " +
    (booking.loc || "") +
    "\n" +
    "Check-in     : " +
    booking.checkin +
    "\n" +
    "Check-out    : " +
    booking.checkout +
    "\n" +
    "Guests       : " +
    booking.guests +
    "\n" +
    "Total Paid   : ₹" +
    (booking.total || 0).toLocaleString() +
    "\n" +
    "Payment via  : " +
    (booking.payMethod || "UPI") +
    "\n" +
    "Status       : Pending verification\n" +
    "─────────────────────────\n\n" +
    "We will confirm your booking within 30 minutes.\n" +
    "Questions? Reply to this email or WhatsApp us.\n\n" +
    "— homestays Team 🏡\n" +
    "support@homestays.in | +91-9999-000000";

  // Show email receipt modal
  showEmailReceipt(subject, body, userEmail);

  // In production, replace with: fetch('/api/send-email', { method:'POST', body: JSON.stringify({to: userEmail, subject, body}) })
  // Or use Firebase Functions: firebase.functions().httpsCallable('sendBookingEmail')({ booking, to: userEmail })
}

function showEmailReceipt(subject, body, toEmail) {
  var el = document.getElementById("email-receipt-body");
  if (!el) return;
  el.innerHTML =
    '<div style="margin-bottom:12px">' +
    '<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:3px">To</div>' +
    '<div style="font-size:.84rem;font-weight:600">' +
    (toEmail || "your email") +
    "</div>" +
    "</div>" +
    '<div style="margin-bottom:12px">' +
    '<div style="font-size:.68rem;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:3px">Subject</div>' +
    '<div style="font-size:.84rem;font-weight:600">' +
    subject +
    "</div>" +
    "</div>" +
    '<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:14px;font-size:.78rem;line-height:1.8;white-space:pre-wrap;font-family:monospace;max-height:220px;overflow-y:auto">' +
    body +
    "</div>" +
    '<div style="margin-top:12px;display:flex;gap:8px">' +
    "<button class=\"btn-s\" style=\"flex:1;font-size:.78rem\" onclick=\"if(navigator.clipboard)navigator.clipboard.writeText(document.querySelector('#email-receipt-body .body-txt')?.textContent||'').then(()=>toast('📋 Copied!','success'))\">📋 Copy</button>" +
    '<button class="btn-p" onclick="closeModal(\'modal-email-receipt\')" style="flex:1;font-size:.78rem">Done</button>' +
    "</div>";
  openModal("modal-email-receipt");
}

// Patch showBookingSuccess to trigger email
var _origShowBookingSuccess = showBookingSuccess;
showBookingSuccess = function (s, bkId, total, payMethod, status) {
  _origShowBookingSuccess(s, bkId, total, payMethod, status);
  // Send confirmation email
  var bk = {
    id: bkId,
    stayId: s.id,
    loc: s.loc,
    checkin: S.dates.in || "TBD",
    checkout: S.dates.out || "TBD",
    guests: S.guests.adults + S.guests.children,
    total: total,
    payMethod: payMethod,
  };
  setTimeout(function () {
    sendConfirmationEmail(bk, s.name, S.user ? S.user.email : "");
  }, 1200);
};

/* ══ 4. EXPERIENCE BOOKING ══ */
function openExpBooking(exp) {
  if (!S.user) {
    openLoginModal();
    toast("💡 Sign in to book experiences", "info");
    return;
  }
  var el = document.getElementById("exp-booking-body");
  if (!el) return;
  var nights = getNights();
  var subtotal = (exp.price || 0) * (S.guests.adults + S.guests.children || 1);
  var gst = Math.round(subtotal * 0.18);
  var grand = subtotal + gst;
  el.innerHTML =
    '<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--border)">' +
    '<div style="width:56px;height:56px;border-radius:var(--r);background:var(--teal-bg);display:flex;align-items:center;justify-content:center;font-size:1.8rem;flex-shrink:0">' +
    (exp.emoji || "🎭") +
    "</div>" +
    '<div><div style="font-weight:700;font-size:.9rem">' +
    exp.name +
    "</div>" +
    '<div style="font-size:.75rem;color:var(--ink3);margin-top:2px">📍 ' +
    exp.loc +
    " · ⏱ " +
    exp.dur +
    " · ★ " +
    exp.rating +
    "</div>" +
    "</div></div>" +
    '<h2 style="font-family:Fraunces,serif;font-size:1.1rem;margin-bottom:12px">Book Experience</h2>' +
    '<div style="background:var(--bg);border-radius:var(--r);padding:12px 14px;margin-bottom:14px;font-size:.82rem">' +
    '<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="color:var(--ink3)">📅 Date</span><strong>' +
    (S.dates.in || "Select date") +
    "</strong></div>" +
    '<div style="display:flex;justify-content:space-between"><span style="color:var(--ink3)">👥 Guests</span><strong>' +
    (S.guests.adults + S.guests.children) +
    " person(s)</strong></div>" +
    "</div>" +
    '<div style="margin-bottom:14px;font-size:.83rem">' +
    '<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>₹' +
    (exp.price || 0).toLocaleString() +
    " × " +
    (S.guests.adults + S.guests.children) +
    " persons</span><span>₹" +
    subtotal.toLocaleString() +
    "</span></div>" +
    '<div style="display:flex;justify-content:space-between;margin-bottom:10px;color:var(--ink3)"><span>GST (18%)</span><span>₹' +
    gst.toLocaleString() +
    "</span></div>" +
    '<div style="display:flex;justify-content:space-between;font-weight:800;font-size:.9rem;border-top:1px solid var(--border);padding-top:10px"><span>Total</span><span style="color:var(--coral)">₹' +
    grand.toLocaleString() +
    "</span></div>" +
    "</div>" +
    '<button class="btn-p" onclick="confirmExpBooking(\'' +
    exp.id +
    "','" +
    exp.name.replace(/'/g, "") +
    "'," +
    grand +
    ',this)">Pay ₹' +
    grand.toLocaleString() +
    " →</button>" +
    '<div style="text-align:center;font-size:.7rem;color:var(--ink3);margin-top:8px">🔒 Secured · Free cancellation 48h before</div>';
  openModal("modal-exp-booking");
}

async function confirmExpBooking(expId, expName, total, btn) {
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Processing…";
  }
  var bkId = "EXP" + Date.now().toString().slice(-8);
  var bk = {
    id: bkId,
    type: "experience",
    stayId: expId,
    stayName: expName,
    stayPhoto: "",
    loc: "",
    checkin: S.dates.in || "TBD",
    checkout: S.dates.in || "TBD",
    guests: S.guests.adults + S.guests.children,
    total: total,
    status: "confirmed",
    payMethod: "UPI",
    date: new Date().toISOString(),
  };
  S.bookings.push(bk);
  if (S.user) lsSet("fs_bks_" + S.user.id, S.bookings);
  try {
    if (window.fsSaveBooking) await window.fsSaveBooking(bk);
  } catch (e) {}
  closeModal("modal-exp-booking");
  toast("🎉 Experience booked! Booking #" + bkId, "success");
  sendConfirmationEmail(bk, expName, S.user ? S.user.email : "");
}

// Patch expCard to open real booking instead of toast
var _origExpCard = expCard;
expCard = function (e) {
  return (
    '<div class="exp-card" onclick="openExpBooking(' +
    JSON.stringify(e).replace(/"/g, "&quot;") +
    ')">' +
    '<div class="ec-img"><img src="' +
    e.photo +
    '" alt="' +
    e.name +
    '" loading="lazy"><div class="ec-tag">' +
    e.cat +
    "</div></div>" +
    '<div class="ec-body">' +
    '<div class="ec-name">' +
    e.name +
    "</div>" +
    '<div class="ec-meta">📍 ' +
    e.loc +
    " · ⏱ " +
    e.dur +
    " · ★ " +
    e.rating +
    "</div>" +
    '<div style="display:flex;align-items:center;justify-content:space-between">' +
    '<div class="ec-price">₹' +
    e.price.toLocaleString() +
    "/person</div>" +
    '<button class="sc-bk" style="font-size:.72rem;padding:5px 12px">Book</button>' +
    "</div></div></div>"
  );
};

/* ══ 5. ADMIN PANEL PROTECTION ══
   Already handled inside the main goto() function (admin case at line ~3625).
   The existing goto() already checks _FS_IS_ADMIN and shows login screen.
   No extra wrapper needed here.
*/

/* ══ 6. SEO META TAGS (injected dynamically) ══ */
(function addSEOMeta() {
  var metas = [
    {
      name: "description",
      content:
        "homestays — India's favourite homestay platform. Discover 10,000+ handpicked stays, heritage havelis, beach cottages, mountain retreats across India.",
    },
    {
      name: "keywords",
      content:
        "homestay india, heritage stay, beach cottage, mountain retreat, eco stay, book homestay, homestays",
    },
    {
      property: "og:title",
      content: "homestays — India's Favourite Homestay Platform",
    },
    {
      property: "og:description",
      content:
        "Discover 10,000+ handpicked homestays across incredible India. Book beach cottages, mountain retreats, heritage havelis and more.",
    },
    {
      property: "og:image",
      content:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "homestays — India's Favourite Homestay Platform",
    },
    {
      name: "twitter:image",
      content:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    },
  ];
  metas.forEach(function (m) {
    var existing = document.querySelector(
      '[name="' + (m.name || "") + '"][property="' + (m.property || "") + '"]',
    );
    if (existing) return;
    var tag = document.createElement("meta");
    if (m.name) tag.setAttribute("name", m.name);
    if (m.property) tag.setAttribute("property", m.property);
    tag.setAttribute("content", m.content);
    document.head.appendChild(tag);
  });
  // Canonical
  if (!document.querySelector('link[rel="canonical"]')) {
    var link = document.createElement("link");
    link.rel = "canonical";
    link.href = window.location.href.split("?")[0];
    document.head.appendChild(link);
  }
})();

/* ══ 7. 404 / INVALID PAGE FALLBACK ══
   show404() is called from inside the existing goto() — see patch below.
   We patch goto here safely using a unique variable name.
*/
(function patch404IntoGoto() {
  var _gotoOrig404 = goto;
  var _validPages = [
    "home",
    "stays",
    "experiences",
    "profile",
    "host",
    "admin",
    "creator-trips",
  ];
  goto = function (page) {
    if (!_validPages.includes(page)) {
      show404();
      return;
    }
    _gotoOrig404(page);
  };
})();

function show404() {
  document.querySelectorAll(".pg").forEach(function (p) {
    p.classList.remove("on");
  });
  var el = document.getElementById("pg-404");
  if (el) {
    el.classList.add("on");
    return;
  }
  // Create 404 page inline if doesn't exist
  var div = document.createElement("div");
  div.id = "pg-404";
  div.className = "pg on";
  div.innerHTML =
    '<div style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 5%">' +
    '<div style="font-size:5rem;margin-bottom:16px">🏚️</div>' +
    '<div style="font-family:Fraunces,serif;font-size:2.2rem;font-weight:700;margin-bottom:10px">Page Not Found</div>' +
    "<div style=\"color:var(--ink3);font-size:1rem;margin-bottom:28px;max-width:400px\">This page doesn't exist or may have been removed. Let's get you back home!</div>" +
    '<button class="btn-p" onclick="goto(\'home\')" style="width:auto;padding:12px 32px;font-size:.94rem">← Back to Home</button>' +
    "</div>";
  document.body.insertBefore(div, document.getElementById("footer"));
}

/* ══ 8. FIRESTORE SECURITY RULES ══
   IMPORTANT: Copy the following rules to Firebase Console → Firestore → Rules
   ─────────────────────────────────────────────────
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users: only owner can read/write their own doc
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       // Bookings: only owner can read; authenticated users can create
       match /bookings/{bookingId} {
         allow read: if request.auth != null && request.auth.uid == resource.data.userId;
         allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
         allow update: if request.auth != null && request.auth.uid == resource.data.userId;
       }
       // Wishlists: only owner
       match /wishlists/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       // Availability: any authenticated user can read, only owner/backend can write
       match /availability/{stayId} {
         allow read: if request.auth != null;
         allow write: if request.auth != null;
       }
       // Admins: only backend/admin SDK can write; authenticated users can read their own
       match /admins/{userId} {
         allow read: if request.auth != null && request.auth.uid == userId;
         allow write: if false;
       }
       // Payments: only owner can read; authenticated users can create
       match /payments/{paymentId} {
         allow read: if request.auth != null && request.auth.uid == resource.data.userId;
         allow create: if request.auth != null;
       }
       // Refunds: only owner can read; authenticated users can create
       match /refunds/{refundId} {
         allow read: if request.auth != null && request.auth.uid == resource.data.userId;
         allow create: if request.auth != null;
       }
       // Listings: public read; authenticated users can create; only owner can update
       match /listings/{listingId} {
         allow read: if true;
         allow create: if request.auth != null;
         allow update, delete: if request.auth != null && request.auth.uid == resource.data.host_id;
       }
       // Trip bookings: only owner
       match /trip_bookings/{bookingId} {
         allow read: if request.auth != null && request.auth.uid == resource.data.userId;
         allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
       }
     }
   }
   ─────────────────────────────────────────────────
*/

/* ══ INIT ALL NEW FEATURES ══ */
document.addEventListener("DOMContentLoaded", function () {
  // Re-render bookings with cancel button
  if (S.user && typeof renderBookings === "function") {
    setTimeout(renderBookings, 600);
  }
  // Re-render experiences with booking
  if (typeof renderAllExp === "function") {
    setTimeout(renderAllExp, 100);
  }
  if (typeof renderHome === "function") {
    setTimeout(renderHome, 200);
  }
});
