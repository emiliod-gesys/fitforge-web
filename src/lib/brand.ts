/** Exact OAuth consent-screen application name. Keep in sync with Google Cloud. */
export const APP_NAME = "FORGEN";

export const SITE_URL = "https://www.forgen.app";
export const PRIVACY_URL = `${SITE_URL}/privacy`;
export const TERMS_URL = `${SITE_URL}/terms`;

/** Always present in homepage HTML so Google’s OAuth crawler (often English, no JS) can read it. */
export const APP_PURPOSE_EN =
  "FORGEN is a mobile fitness application for Android and iOS. The FORGEN app is used to create and follow workouts (gym, running, and HYROX), log nutrition and hydration, track progress, connect with friends, and use an AI Coach. You can create a FORGEN account and sign in with Google, Apple, or email. This website is the official homepage of the FORGEN app.";

export const GOOGLE_SIGNIN_PURPOSE_EN =
  "FORGEN uses Google Sign-In so you can create and access your FORGEN account. When you sign in with Google, FORGEN receives your email address and, if you allow it, your name and profile photo, only to authenticate you and manage your account. FORGEN does not sell Google user data or use it for ads.";
