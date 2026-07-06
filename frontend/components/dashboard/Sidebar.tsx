"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Map,
  Wallet,
  Route,
  BookOpen,
  Settings,
  PlaneTakeoff,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Trip Planner",
    href: "/dashboard/planner",
    icon: PlaneTakeoff,
  },
  {
    title: "Budget",
    href: "/dashboard/budget",
    icon: Wallet,
  },
  {
    title: "Routes",
    href: "/dashboard/routes",
    icon: Route,
  },
  {
    title: "Travel Guide",
    href: "/dashboard/guide",
    icon: BookOpen,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-[#09111f] border-r border-white/10 flex flex-col">

      {/* Logo */}

      <div className="px-8 py-8 border-b border-white/10">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">

            <PlaneTakeoff className="w-6 h-6 text-white" />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">
              VentureOut
            </h1>

            <p className="text-sm text-slate-400">
              AI Travel Companion
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-8">

        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 px-4 mb-5">
          Navigation
        </p>

        <div className="space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300
                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-6 w-6 ${
                    active
                      ? "text-white"
                      : "text-slate-400 group-hover:text-blue-400"
                  }`}
                />

                <span className="font-medium text-[16px]">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}

      <div className="border-t border-white/10 p-5">

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-4 rounded-2xl px-5 py-4 text-slate-300 hover:bg-white/5 hover:text-white transition"
        >
          <Settings className="h-6 w-6" />

          <span className="font-medium">
            Settings
          </span>
        </Link>

      </div>

    </aside>
  );
}