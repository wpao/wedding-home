import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Instagram, Facebook } from "lucide-react";

const SocialCards: React.FC = () => {
  const links = [
    {
      name: "Gold",
      url: "https://gold.albaeud.cyou",
      icon: <Globe className="w-10 h-10 text-blue-500" />,
    },
    {
      name: "Roxy",
      url: "https://roxy.albaeud.cyou",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
    },
    {
      name: "Gold",
      url: "https://gold.albaeud.cyou",
      icon: <Facebook className="w-10 h-10 text-blue-700" />,
    },
    {
      name: "Roxy",
      url: "https://roxy.albaeud.cyou",
      icon: <Instagram className="w-10 h-10 text-pink-500" />,
    },
  ];

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {links.map((link) => (
        <Card
          key={link.name}
          className="hover:shadow-xl transition cursor-pointer"
          onClick={() => openLink(link.url)}
        >
          <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
            {link.icon}
            <h2 className="text-xl font-bold">{link.name}</h2>
            <Button
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                openLink(link.url);
              }}
            >
              Visit {link.name}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SocialCards;
