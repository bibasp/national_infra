
import { ArrowLeftRight, Globe, Home, BarChart3, Newspaper, Database, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Global Projects", href: "/projects", icon: Database },
  { name: "Map View", href: "/map", icon: Globe },
  { name: "News Feed", href: "/news", icon: Newspaper },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "About", href: "/about", icon: Info },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border/50 flex items-center h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="rounded bg-infra-teal p-1">
            <div className="h-6 w-6 text-white font-bold flex items-center justify-center">II</div>
          </div>
          <span className="text-lg font-semibold tracking-tight text-sidebar-foreground">
            Infrastructure Insight
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {navigation.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild tooltip={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn("flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors", 
                      isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent/50")
                    }
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border/50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-sidebar-foreground/70">Global Infrastructure Insight Hub</span>
          <ArrowLeftRight className="h-4 w-4 text-sidebar-foreground/70" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
