"use client";

import { Search, Settings, HelpCircle, ExternalLink, Flame, TrendingUp, ChevronDown, ArrowUpRight } from "lucide-react";
import TokenList from "@/components/token-list";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Header />
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center gap-4 py-4">
          <div className="flex items-center gap-2 bg-[#1A1A1A] rounded-lg p-2">
            <img 
              src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png" 
              alt="Solana"
              className="w-6 h-6 rounded-full"
            />
            <span>Solana</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          
          <div className="flex-1 flex items-center gap-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Top
            </Button>
            <Button variant="ghost">DCA</Button>
            <Button variant="ghost">Pro</Button>
            <Button variant="ghost">Pump</Button>
            <Button variant="ghost">Migrated</Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>Liquidity ≥</span>
              <span className="text-[#9945FF]">500 SOL</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Holders ≥</span>
              <span className="text-[#9945FF]">5K</span>
            </div>
            <Button variant="ghost">Filter</Button>
            <Button className="bg-[#9945FF] hover:bg-[#8935EF]">
              Quick Buy 0.01 SOL
            </Button>
          </div>
        </div>

        <TokenList />
      </div>
    </main>
  );
}