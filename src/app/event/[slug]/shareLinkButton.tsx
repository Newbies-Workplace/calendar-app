"use client"

import {Button} from "@/components/ui/button";
import {Share2} from "lucide-react";
import React from "react";
import {toast} from "sonner";

export const ShareLinkButton = () => {
  return (
    <Button variant="outline" size="icon" onClick={() => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast.success("Link skopiowany do schowka")
      })
    }}>
      <Share2/>
    </Button>
  );
}

