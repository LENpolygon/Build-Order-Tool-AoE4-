import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
export const createFirebaseApp = () => {
  const clientCredentials = {
    apiKey: "AIzaSyBXNvJDHRVB7mcBbG5kvtDDTRqQgUBBnbI",
    authDomain: "aoe4-build-order.firebaseapp.com",
    projectId: "aoe4-build-order",
    storageBucket: "aoe4-build-order.appspot.com",
    messagingSenderId: "463565673438",
    appId: "1:463565673438:web:27fc685b2e8edfd925834f"
  }

  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials)
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== 'undefined') {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ('measurementId' in clientCredentials) {
        getAnalytics()
      }
    }
    return app
  }
}
