"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState("English")

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
    // In a real implementation, this would trigger language change in an i18n system
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-amber-900 hover:text-amber-600">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("English")}
          className={currentLanguage === "English" ? "bg-amber-100 text-amber-900" : ""}
        >
          <span className="mr-2">🇬🇧</span> English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("Nederlands")}
          className={currentLanguage === "Nederlands" ? "bg-amber-100 text-amber-900" : ""}
        >
          <span className="mr-2">🇳🇱</span> Nederlands
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
