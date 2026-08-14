import { AppIdentity } from "@/components/app-identity";
import {
  APP_NAME,
  APP_PURPOSE_EN,
  GOOGLE_SIGNIN_PURPOSE_EN,
  PRIVACY_URL,
  SITE_URL,
  TERMS_URL,
} from "@/lib/brand";

export const dynamic = "force-static";

export const metadata = {
  title: APP_NAME,
  description: APP_PURPOSE_EN,
  alternates: { canonical: `${SITE_URL}/about-forgen` },
};

export default function AboutForgenPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-forge-blue">
        Official application homepage
      </p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{APP_NAME}</h1>
      <p className="mt-6 text-base leading-relaxed text-forge-muted">{APP_PURPOSE_EN}</p>
      <p className="mt-4 text-base leading-relaxed text-forge-muted">
        {GOOGLE_SIGNIN_PURPOSE_EN}
      </p>
      <p className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
        <a href={PRIVACY_URL} className="text-forge-blue hover:underline">
          Privacy Policy
        </a>
        <a href={TERMS_URL} className="text-forge-blue hover:underline">
          Terms of Service
        </a>
        <a href={SITE_URL} className="text-forge-blue hover:underline">
          FORGEN website
        </a>
      </p>
      <div className="mt-12">
        <AppIdentity />
      </div>
    </article>
  );
}
