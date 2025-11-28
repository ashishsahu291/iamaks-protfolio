import * as React from "react";

import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import ChatWrapper from "./chat/ChatWrapper";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ChatWrapper />
        </React.Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
