"use client"

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Mail, Phone } from "lucide-react"

export default function AboutSidebar({ children }) {
  return (
    <SidebarProvider>

      <Sidebar>

        {/* Header */}
        <SidebarHeader>
          <div className="flex items-center gap-3 px-2">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>BD</AvatarFallback>
            </Avatar>

            <div className="text-sm">
              <div className="font-semibold">Bhoomika</div>
              <div className="text-muted-foreground text-xs">
                AI • IoT • Systems
              </div>
            </div>
          </div>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent>
          <div className="px-3 space-y-4 text-sm">

            <p className="text-muted-foreground">
              I build intelligent systems bridging hardware and software —
              from embedded automation to scalable AI platforms focused on
              real-world deployment.
            </p>

            <div className="space-y-2">

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>yourmail@example.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>

            </div>

          </div>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter>
          <div className="px-3 text-xs text-muted-foreground">
            Portfolio v1
          </div>
        </SidebarFooter>

      </Sidebar>

      {/* Main content */}
      <SidebarInset>
        {children}
      </SidebarInset>

    </SidebarProvider>
  )
}