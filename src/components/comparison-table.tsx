"use client";

import { useLocaleContext } from "@/components/locale-provider";
import {
  getComparison,
  type ComparisonCell,
  type ComparisonStatus,
} from "@/lib/comparison";

const statusLabel: Record<"es" | "en", Record<ComparisonStatus, string>> = {
  es: { yes: "Sí", partial: "Parcial", no: "No" },
  en: { yes: "Yes", partial: "Partial", no: "No" },
};

const statusClass: Record<ComparisonStatus, string> = {
  yes: "bg-forge-blue/25 text-forge-text",
  partial: "bg-forge-gold/20 text-forge-gold",
  no: "bg-white/5 text-forge-muted",
};

function CellBody({
  cell,
  labels,
}: {
  cell: ComparisonCell;
  labels: Record<ComparisonStatus, string>;
}) {
  return (
    <div className="flex flex-col gap-2">
      {cell.status ? (
        <span
          className={`w-fit rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${statusClass[cell.status]}`}
        >
          {labels[cell.status]}
        </span>
      ) : null}
      <span className="text-[13px] leading-snug text-forge-muted">{cell.note}</span>
    </div>
  );
}

export function ComparisonTable() {
  const { locale } = useLocaleContext();
  const copy = getComparison(locale);
  const labels = statusLabel[locale];

  return (
    <section className="border-t border-forge-border bg-forge-surface px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[90rem]">
        <h2 className="text-center text-2xl font-bold md:text-3xl">{copy.title}</h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-relaxed text-forge-muted">
          {copy.intro}
        </p>
        <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-forge-muted">
          <li>
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-forge-blue" />
            {copy.legendYes}
          </li>
          <li>
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-forge-gold" />
            {copy.legendPartial}
          </li>
          <li>
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-forge-grey" />
            {copy.legendNo}
          </li>
        </ul>
        <p className="mt-3 text-center text-xs text-forge-muted">{copy.legendNote}</p>
        <p className="mt-6 text-center text-xs text-forge-muted md:hidden">{copy.scrollHint}</p>

        <div className="mt-4 overflow-x-auto rounded-2xl border border-forge-border">
          <table className="w-max min-w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="sticky left-0 z-30 min-w-[12.5rem] border-b border-r border-forge-border bg-forge-black px-4 py-4 text-xs font-semibold uppercase tracking-wide text-forge-muted">
                  {locale === "es" ? "Función" : "Feature"}
                </th>
                {copy.apps.map((app, index) => (
                  <th
                    key={app.name}
                    className={`min-w-[13.5rem] border-b border-forge-border px-4 py-4 ${
                      index === 0 ? "bg-forge-blue/20" : "bg-forge-black"
                    }`}
                  >
                    <span className="block text-sm font-bold text-forge-text">{app.name}</span>
                    <span className="mt-1 block text-xs font-medium text-forge-muted">{app.tag}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.groups.flatMap((group) => [
                <tr key={group.title}>
                  <th className="sticky left-0 z-20 border-b border-r border-forge-border bg-forge-navy px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-forge-blue">
                    {group.title}
                  </th>
                  {copy.apps.map((app) => (
                    <td
                      key={`${group.title}-${app.name}`}
                      className="border-b border-forge-border bg-forge-navy/70"
                    />
                  ))}
                </tr>,
                ...group.rows.map((item) => (
                  <tr key={`${group.title}-${item.feature}`} className="align-top">
                    <th className="sticky left-0 z-20 border-b border-r border-forge-border bg-forge-surface px-4 py-4 text-sm font-semibold text-forge-text">
                      {item.feature}
                    </th>
                    {item.cells.map((cell, index) => (
                      <td
                        key={`${item.feature}-${index}`}
                        className={`border-b border-forge-border px-4 py-4 ${
                          index === 0 ? "bg-forge-blue/10" : "bg-forge-card/40"
                        }`}
                      >
                        <CellBody cell={cell} labels={labels} />
                      </td>
                    ))}
                  </tr>
                )),
              ])}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
