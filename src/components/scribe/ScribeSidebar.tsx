import React from "react";
import clsx from "clsx";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Settings,
  CalendarDays,
  Mic,
  ClipboardList,
  Send,
  Wand2,
  Bot,
  BarChart3,
} from "lucide-react";

const items = [
  { id: "setup", label: "Setup", icon: Settings },
  { id: "schedule", label: "Schedule", icon: CalendarDays },
  { id: "capture", label: "Capture", icon: Mic },
  { id: "coding", label: "Coding", icon: ClipboardList },
  { id: "send", label: "Send to EHR", icon: Send },
  { id: "automations", label: "Automations", icon: Wand2 },
  { id: "agent", label: "AI Agent", icon: Bot },
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
] as const;

export function ScribeSidebar({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (id: string) => void;
}) {
  const getBtnCls = (isActive: boolean) =>
    clsx(
      "w-full text-left",
      isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/60"
    );

  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon" className="w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ScribeAI</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild className={getBtnCls(isActive)} aria-current={isActive ? "step" : undefined}>
                      <button type="button" onClick={() => onNavigate(item.id)}>
                        <Icon className="mr-2 h-4 w-4" aria-hidden />
                        <span>{item.label}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
