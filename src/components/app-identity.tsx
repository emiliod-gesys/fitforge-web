import { APP_NAME, APP_PURPOSE_EN, GOOGLE_SIGNIN_PURPOSE_EN, PRIVACY_URL, TERMS_URL } from "@/lib/brand";

/** Visible, server-rendered identity block for Google OAuth brand review. */
export function AppIdentity() {
  return (
    <section
      id="about-forgen"
      lang="en"
      className="border-t border-forge-border bg-forge-surface px-6 py-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-forge-blue">
          Application name
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-forge-text">{APP_NAME}</h2>
        <p className="mt-4 text-base leading-relaxed text-forge-muted">{APP_PURPOSE_EN}</p>
        <p className="mt-4 text-base leading-relaxed text-forge-muted">
          {GOOGLE_SIGNIN_PURPOSE_EN}
        </p>
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
          <a href={PRIVACY_URL} className="text-forge-blue hover:underline">
            Privacy Policy
          </a>
          <a href={TERMS_URL} className="text-forge-blue hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </section>
  );
}
