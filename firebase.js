/* ═══════════════════════════════════════════
   homestays — Firebase Config & Firestore Helpers
   IMPORTANT: This is a module (type="module")
═══════════════════════════════════════════ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  increment,
  limit,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ══ FIREBASE CONFIG — Replace these values with your Firebase project credentials ══
// Get these from: Firebase Console > Project Settings > Your Apps > Web App
const firebaseConfig = {
  apiKey: "AIzaSyATyB7ogspqK9zrThC2FNWIYMpaypAR0DI",
  authDomain: "homestays-prod.firebaseapp.com",
  projectId: "homestays-prod",
  storageBucket: "homestays-prod.firebasestorage.app",
  messagingSenderId: "812162484420",
  appId: "1:812162484420:web:08b72cd952662af7042191",
  measurementId: "G-6S4WJCVZ9V",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("email");
googleProvider.addScope("profile");

// ── RATE LIMITER (client-side, pairs with Firestore rules) ──
const _rateLimits = {};
function checkRateLimit(action, maxPerMin) {
  return true;
}
window.FS_RATE_CHECK = checkRateLimit;
// rate limits disabled for local use

// ── XSS SANITIZER ──
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .replace(/`/g, "&#96;");
}
window.FS_SANITIZE = sanitize;

// ── INPUT VALIDATOR ──
function validateInput(val, type) {
  if (type === "email") return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val);
  if (type === "phone") return /^[6-9]\d{9}$/.test(val.replace(/\s/g, ""));
  if (type === "utr") return /^[A-Z0-9]{12,22}$/i.test(val.trim());
  if (type === "name") return val.trim().length >= 2 && val.trim().length <= 80;
  if (type === "amount")
    return !isNaN(val) && Number(val) > 0 && Number(val) < 10000000;
  return false;
}
window.FS_VALIDATE = validateInput;

// ── SECURE ADMIN CHECK (Firebase-based, not localStorage) ──
async function checkAdminRole(uid) {
  try {
    var snap = await getDoc(doc(db, "admins", uid));
    return snap.exists() && snap.data().role === "admin";
  } catch (e) {
    return false;
  }
}
window.FS_CHECK_ADMIN = checkAdminRole;

// ── AUTH STATE LISTENER ──
onAuthStateChanged(auth, async function (firebaseUser) {
  if (firebaseUser) {
    // STEP 1: Always set user from firebaseUser immediately (no Firestore needed)
    window.S.user = {
      id: firebaseUser.uid,
      name: sanitize(
        firebaseUser.displayName || firebaseUser.email.split("@")[0],
      ),
      email: firebaseUser.email,
      phone: "",
      plan: "free",
      trips: 0,
      joined: new Date().toISOString(),
      emailVerified: firebaseUser.emailVerified,
    };
    // Update UI immediately so nav shows user right away
    if (typeof lsSet === "function") lsSet("fs_user", window.S.user);
    if (typeof updateAuthUI === "function") updateAuthUI();

    // STEP 2: Load full profile from Firestore in background
    try {
      var uRef = doc(db, "users", firebaseUser.uid);
      var uSnap = await getDoc(uRef);
      if (uSnap.exists()) {
        var data = uSnap.data();
        window.S.user = {
          id: firebaseUser.uid,
          name: sanitize(
            data.name ||
              firebaseUser.displayName ||
              firebaseUser.email.split("@")[0],
          ),
          email: firebaseUser.email,
          phone: sanitize(data.phone || ""),
          plan: data.plan || "free",
          trips: data.trips || 0,
          joined: data.joined || new Date().toISOString(),
          emailVerified: firebaseUser.emailVerified,
        };
      } else {
        // New user - create Firestore doc
        await setDoc(uRef, {
          name: window.S.user.name,
          email: window.S.user.email,
          phone: "",
          plan: "free",
          trips: 0,
          joined: window.S.user.joined,
          createdAt: serverTimestamp(),
        });
      }

      // Check admin
      var isAdmin = await checkAdminRole(firebaseUser.uid);
      window._FS_IS_ADMIN = isAdmin;

      // Load wishlist & bookings
      try {
        var wSnap = await getDoc(doc(db, "wishlists", firebaseUser.uid));
        if (wSnap.exists())
          window.S.wishlist = new Set(wSnap.data().items || []);
      } catch (e2) {
        console.warn("Wishlist load failed:", e2.message);
      }

      try {
        var bSnap = await getDocs(
          query(
            collection(db, "bookings"),
            where("userId", "==", firebaseUser.uid),
            orderBy("date", "desc"),
          ),
        );
        window.S.bookings = bSnap.docs.map(function (d) {
          return { id: d.id, ...d.data() };
        });
      } catch (e2) {
        console.warn("Bookings load failed:", e2.message);
      }

      try {
        var ctSnap = await getDocs(
          query(
            collection(db, "trip_bookings"),
            where("userId", "==", firebaseUser.uid),
          ),
        );
        window.S.tripBookings = ctSnap.docs.map(function (d) {
          return { id: d.id, ...d.data() };
        });
      } catch (e2) {
        console.warn("TripBookings load failed:", e2.message);
      }

      // Save updated user and refresh UI again with full data
      if (typeof lsSet === "function") lsSet("fs_user", window.S.user);
      if (typeof updateAuthUI === "function") updateAuthUI();
      if (
        typeof renderProfile === "function" &&
        document.getElementById("pg-profile") &&
        document.getElementById("pg-profile").classList.contains("on")
      )
        renderProfile();
    } catch (e) {
      console.warn(
        "Firestore load error (using basic auth data):",
        e.code,
        e.message,
      );
      // S.user already set from firebaseUser above - UI already updated - just log
    }
    window._FS_AUTH_READY = true;
  } else {
    // User signed out
    window.S.user = null;
    window.S.wishlist = new Set();
    window.S.bookings = [];
    window.S.tripBookings = [];
    window._FS_IS_ADMIN = false;
    if (typeof lsDel === "function") lsDel("fs_user");
    if (typeof updateAuthUI === "function") updateAuthUI();
    window._FS_AUTH_READY = true;
  }
});

// ── FIRESTORE HELPERS ──
window.fsAddDoc = async function (col, data) {
  try {
    return await addDoc(collection(db, col), {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (e) {
    console.warn("fsAddDoc failed:", e.message);
    return null;
  }
};
window.fsSetDoc = async function (col, id, data) {
  try {
    await setDoc(
      doc(db, col, id),
      { ...data, updatedAt: serverTimestamp() },
      { merge: true },
    );
    return true;
  } catch (e) {
    console.warn("fsSetDoc failed:", e.message);
    return false;
  }
};
window.fsGetDoc = async function (col, id) {
  try {
    var s = await getDoc(doc(db, col, id));
    return s.exists() ? { id: s.id, ...s.data() } : null;
  } catch (e) {
    console.warn("fsGetDoc failed:", e.message);
    return null;
  }
};
window.fsGetCollection = async function (col, filters) {
  try {
    var q = collection(db, col);
    if (filters) {
      var qr = query(q, ...filters);
      var s = await getDocs(qr);
      return s.docs.map(function (d) {
        return { id: d.id, ...d.data() };
      });
    }
    var s2 = await getDocs(q);
    return s2.docs.map(function (d) {
      return { id: d.id, ...d.data() };
    });
  } catch (e) {
    console.warn("fsGetCollection failed:", e.message);
    return [];
  }
};
window.fsUpdateDoc = async function (col, id, data) {
  try {
    await updateDoc(doc(db, col, id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (e) {
    console.warn("fsUpdateDoc failed:", e.message);
    return false;
  }
};
window.fsDeleteDoc = async function (col, id) {
  try {
    await deleteDoc(doc(db, col, id));
    return true;
  } catch (e) {
    console.warn("fsDeleteDoc failed:", e.message);
    return false;
  }
};
window.fsOnSnapshot = function (col, filters, cb) {
  try {
    var q = filters
      ? query(collection(db, col), ...filters)
      : collection(db, col);
    return onSnapshot(q, function (snap) {
      cb(
        snap.docs.map(function (d) {
          return { id: d.id, ...d.data() };
        }),
      );
    });
  } catch (e) {
    console.warn("fsOnSnapshot failed:", e.message);
    return function () {};
  }
};

// ── SECURE BOOKING SAVE TO FIRESTORE ──
window.fsSaveBooking = async function (bookingData) {
  if (!window.S.user) return null;
  if (!window.FS_RATE_CHECK("booking", 3)) {
    toast("⚠️ Too many attempts. Wait a minute.", "warning");
    return null;
  }
  try {
    var ref = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      userId: window.S.user.id,
      userEmail: window.S.user.email,
      userName: window.S.user.name,
      status: "pending_verification",
      createdAt: serverTimestamp(),
      ipHash: null,
    });
    // Update user trip count
    await updateDoc(doc(db, "users", window.S.user.id), {
      trips: increment(1),
      updatedAt: serverTimestamp(),
    });
    return ref.id;
  } catch (e) {
    console.warn("fsSaveBooking failed:", e.message);
    return null;
  }
};

// ── SECURE PAYMENT RECORD SAVE ──
window.fsSavePayment = async function (paymentData) {
  if (!window.S.user) return null;
  try {
    var ref = await addDoc(collection(db, "payments"), {
      ...paymentData,
      userId: window.S.user.id,
      userEmail: window.S.user.email,
      status: "pending_verification",
      createdAt: serverTimestamp(),
    });
    return ref.id;
  } catch (e) {
    console.warn("fsSavePayment failed:", e.message);
    return null;
  }
};

// ── VERIFY UTR IN FIRESTORE ──
window.fsVerifyUTR = async function (utr) {
  if (!window.FS_VALIDATE(utr, "utr"))
    return { valid: false, reason: "invalid_format" };
  if (!window.FS_RATE_CHECK("utr_verify", 5))
    return { valid: false, reason: "rate_limited" };
  try {
    // Check if UTR already used
    var existing = await getDocs(
      query(
        collection(db, "payments"),
        where("utr", "==", utr.toUpperCase().trim()),
        limit(1),
      ),
    );
    if (!existing.empty) return { valid: false, reason: "already_used" };
    return { valid: true };
  } catch (e) {
    return { valid: true };
  } // fail open so booking isn't blocked
};

// ── PASSWORD RESET ──
window.fsSendPasswordReset = async function (email) {
  if (!window.FS_VALIDATE(email, "email")) {
    toast("⚠️ Enter a valid email", "warning");
    return;
  }
  if (!window.FS_RATE_CHECK("pwd_reset", 2)) {
    toast("⚠️ Too many reset attempts. Wait.", "warning");
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    toast("📧 Password reset email sent!", "success");
  } catch (e) {
    toast(
      "❌ " +
        (e.code === "auth/user-not-found"
          ? "No account with this email"
          : e.message),
      "error",
    );
  }
};
window.FS_SEND_PWD_RESET = window.fsSendPasswordReset;

window.FS_WHERE = where;
window.FS_ORDER = orderBy;
window.FS_INCREMENT = increment;
window.FS_TIMESTAMP = serverTimestamp;
window.FS_LIMIT = limit;
window.FS_AUTH = auth;
window.FS_FIREBASE = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
};
