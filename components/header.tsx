"use client";

import { Search, Settings, HelpCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo">
            <img 
              src="https://spicygun.com/favicon.ico" 
              alt="SpicyGun" 
            />
            <span>SpicyGun</span>
          </div>
          
          <div className="header__scope">
            <span>8x Scope</span>
          </div>

          <button className="p-2 text-on-surface-variant">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="header__right">
          <ThemeToggle />
          <LanguageToggle />
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ExternalLink className="w-5 h-5" />
          </Button>
          <Button className="bg-primary text-on-primary hover:bg-primary/90">
            {t("header.connect")}
          </Button>
        </div>
      </div>
    </header>
  );
}