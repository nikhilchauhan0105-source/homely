# homestays — Project File Structure

## Files

| File | Size | Description |
|------|------|-------------|
| `index.html` | ~2,150 lines | Main HTML — clean, just markup + head meta |
| `styles.css` | ~2,850 lines | All CSS styles |
| `firebase.js` | ~425 lines | Firebase config, auth, Firestore helpers |
| `app.js` | ~5,370 lines | All app logic — data, routing, UI, modals |

## How to Deploy on Vercel

1. Upload all 4 files to your Vercel project root
2. They must ALL be in the same folder

## Fixes Applied

1. ✅ **CSP fixed** — removed `ws://127.0.0.1:5500` (was causing errors in production)
2. ✅ **Performance** — added `preconnect` links for Google Fonts and Firebase CDN
3. ✅ **QRCode.js** — now loads with `defer` (no longer render-blocking)
4. ✅ **CSS** — moved to external file (browser can cache it)
5. ✅ **Firebase** — moved to external module file (browser can cache it)
6. ✅ **App JS** — moved to external file with `defer`

## Admin Panel Fix

To access the admin panel, add your user to Firestore:
1. Go to Firebase Console → Firestore Database
2. Create collection: `admins`
3. Create document with ID = your Firebase UID
4. Add field: `role` = `"admin"` (string)

Your Firebase UID is in: Firebase Console → Authentication → Users
