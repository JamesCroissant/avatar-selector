import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { WebRTCProvider } from "@/contexts/WebRTCContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScenarioProvider } from "@/contexts/ScenarioContext";
import { AvatarProvider } from "@/contexts/AvatarContext";

 
export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html>
      <body>
        <AvatarProvider>
          <LanguageProvider>
            <ScenarioProvider>
              <WebRTCProvider>
                <Toaster />
                {children}
              </WebRTCProvider>
            </ScenarioProvider>
          </LanguageProvider>
        </AvatarProvider>
      </body>
    </html>
  );
}