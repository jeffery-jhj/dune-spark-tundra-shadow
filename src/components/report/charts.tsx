import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import type { Respondent } from "@/data/study";
import { countCodes, countTaste } from "@/data/study";

const MATCHA = "var(--color-matcha)";
const MATCHA_SOFT = "var(--color-matcha-soft)";
const INK = "var(--color-ink)";
const MUTED = "var(--color-muted)";
const LINE = "var(--color-line)";

type TipProps = {
  active?: boolean;
  payload?: Array<{ name?: string; value?: number | string; payload?: Record<string, unknown> }>;
  label?: string | number;
};

function Tip({ active, payload, label }: TipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md bg-ink px-3 py-2 text-xs text-cream shadow-[var(--shadow-border)]">
      {label != null ? <p className="mb-1 font-medium">{String(label)}</p> : null}
      {payload.map((p, i) => (
        <p key={i} className="text-cream/80">
          {p.name ? `${p.name}: ` : ""}
          {String(p.value)}
        </p>
      ))}
    </div>
  );
}

export function MotivationBars({ list }: { list: Respondent[] }) {
  const data = countCodes(list).map((d) => ({ name: d.label, n: d.n }));
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 12, top: 8, bottom: 0 }}>
          <CartesianGrid stroke={LINE} horizontal={false} />
          <XAxis type="number" allowDecimals={false} tick={{ fill: MUTED, fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="name"
            width={148}
            tick={{ fill: INK, fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<Tip />} cursor={{ fill: "var(--color-matcha-wash)" }} />
          <Bar dataKey="n" name="Mentions" radius={[0, 4, 4, 0]} barSize={16} fill={MATCHA} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TasteBars({ list }: { list: Respondent[] }) {
  const data = countTaste(list).slice(0, 8);
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 12, top: 8, bottom: 0 }}>
          <CartesianGrid stroke={LINE} horizontal={false} />
          <XAxis type="number" allowDecimals={false} tick={{ fill: MUTED, fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="tag"
            width={148}
            tick={{ fill: INK, fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<Tip />} cursor={{ fill: "var(--color-matcha-wash)" }} />
          <Bar dataKey="n" name="Tags" radius={[0, 4, 4, 0]} barSize={14} fill={MATCHA_SOFT} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PriceScatter({ list }: { list: Respondent[] }) {
  const data = list.map((r) => ({
    id: r.id,
    x: r.usualBev,
    y: r.perServing,
    z: r.camp === "home" ? 140 : 90,
    camp: r.camp,
    name: r.id,
  }));
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ left: 8, right: 16, top: 16, bottom: 8 }}>
          <CartesianGrid stroke={LINE} />
          <XAxis
            type="number"
            dataKey="x"
            name="Usual beverage"
            domain={[5.5, 9]}
            tick={{ fill: MUTED, fontSize: 12 }}
            tickMargin={8}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Powder / serving"
            domain={[0.4, 1.4]}
            tick={{ fill: MUTED, fontSize: 12 }}
            tickMargin={8}
            width={48}
            axisLine={false}
            tickLine={false}
          />
          <ZAxis type="number" dataKey="z" range={[60, 160]} />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.[0]) return null;
              const d = payload[0].payload as (typeof data)[number];
              return (
                <div className="rounded-md bg-ink px-3 py-2 text-xs text-cream">
                  <p className="font-medium">{d.id}</p>
                  <p className="text-cream/80">Cafe ${d.x.toFixed(2)}</p>
                  <p className="text-cream/80">Powder ${d.y.toFixed(2)} / serving</p>
                </div>
              );
            }}
          />
          <Scatter data={data} name="Respondents">
            {data.map((d) => (
              <Cell key={d.id} fill={d.camp === "home" ? INK : MATCHA} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export function FrequencyBars({ list }: { list: Respondent[] }) {
  const order = [
    { key: "daily", label: "Daily" },
    { key: "3-5", label: "3–5× / week" },
    { key: "2-3", label: "2–3× / week" },
    { key: "1-2", label: "1–2× / week" },
  ] as const;
  const data = order.map((o) => ({
    name: o.label,
    n: list.filter((r) => r.frequencyBucket === o.key).length,
  }));
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
          <CartesianGrid stroke={LINE} vertical={false} />
          <XAxis dataKey="name" tick={{ fill: MUTED, fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis allowDecimals={false} tick={{ fill: MUTED, fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<Tip />} cursor={{ fill: "var(--color-matcha-wash)" }} />
          <Bar dataKey="n" name="People" radius={[4, 4, 0, 0]} barSize={36} fill={MATCHA} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
