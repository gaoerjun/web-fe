"use client";

import { Star, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockTokens = Array(10).fill({
  name: "FIGMABCD",
  address: "AbCd...405w",
  price: "123.45M",
  value: "$234.56K",
  holders: "123.45K",
  holdersChange: "12.34%",
  change1m: "123.45%",
  change5m: "234.56%",
  change11h: "567.8K%",
  age: "5h",
  verified: true,
  score: 0.8,
  currentPrice: "$0.0,3456"
});

export default function TokenList() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-[auto_1fr_repeat(7,auto)] gap-4 px-4 py-2 text-gray-400 text-sm">
        <div>Token</div>
        <div></div>
        <div className="flex items-center gap-1">
          Liq. $/MC <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1">
          Holders $/BC <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1">
          1m% <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1">
          5m% <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1">
          11h% <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1">
          Age <ChevronDown className="w-4 h-4" />
        </div>
        <div>Price</div>
      </div>

      {mockTokens.map((token, index) => (
        <div 
          key={index}
          className="grid grid-cols-[auto_1fr_repeat(7,auto)] gap-4 px-4 py-3 hover:bg-[#1A1A1A] rounded-lg items-center"
        >
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Star className="w-4 h-4" />
          </Button>

          <div className="flex items-center gap-2">
            <img 
              src={`https://picsum.photos/32?random=${index}`}
              alt={token.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-medium">{token.name}</div>
              <div className="text-sm text-gray-400">{token.address}</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1">
              {token.price} <ArrowUpRight className="w-4 h-4 text-red-500" />
            </div>
            <div className="text-sm text-gray-400">{token.value}</div>
          </div>

          <div>
            <div className="flex items-center gap-1">
              {token.holders} <ArrowUpRight className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-sm text-gray-400">{token.holdersChange}</div>
          </div>

          <div className="text-green-500">{token.change1m}</div>
          <div className="text-green-500">{token.change5m}</div>
          <div className="text-green-500">{token.change11h}</div>
          <div>{token.age}</div>

          <div className="flex items-center gap-4">
            <div>{token.currentPrice}</div>
            <Button className="bg-[#9945FF] hover:bg-[#8935EF]">
              Buy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}