import { SiteHeader } from "@/components/site-header"
import { LandingHero } from "@/components/landing-hero"
import { NavigationCards } from "@/components/navigation-cards"
import { SiteFooter } from "@/components/site-footer"
import { ClientBackgroundPaths } from "@/components/ui/client-background-paths"

export default function Home() {
  return (
    <ClientBackgroundPaths className="min-h-screen">
      <div className="flex min-h-screen flex-col relative z-10">
        <SiteHeader />
        <main className="flex-1 relative z-10 pt-16">
          <div className="max-w-screen-xl mx-auto px-8 md:px-10 lg:px-16 relative z-10">
            <LandingHero />
            <NavigationCards />
          </div>
        </main>
        <SiteFooter />
      </div>
    </ClientBackgroundPaths>
  )
}
