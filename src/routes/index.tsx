import { createFileRoute } from "@tanstack/react-router";
import { Camps, Shops } from "@/components/report/camps-shops";
import { Hero } from "@/components/report/hero";
import { Jobs, Taste } from "@/components/report/jobs";
import { ReportNav } from "@/components/report/nav";
import { Powder, Price } from "@/components/report/powder-price";
import { Findings, Quotes } from "@/components/report/quotes-findings";
import { Sample } from "@/components/report/sample";
import { Method, Trends } from "@/components/report/trends";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-paper">
      <ReportNav />
      <main className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <Hero />
        <Sample />
        <Jobs />
        <Taste />
        <Camps />
        <Shops />
        <Powder />
        <Price />
        <Quotes />
        <Findings />
        <Trends />
        <Method />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="font-display text-lg font-medium tracking-tight text-ink">Matcha Field Study</p>
          <p className="text-sm text-subtle">NYC working file · n=10 · street intercept + analogues</p>
        </div>
      </footer>
    </div>
  );
}
