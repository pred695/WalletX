import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20">
      <HeroSection />
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((x, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {x.value}
                </div>
                <div className="text-gray-600">{x.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cold-3 gap-8">
            {featuresData.map((x, idx) => (
              <Card key={idx} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {x.icon}
                  <h3 className="text-xl font-semibold">{x.title}</h3>
                  <p className="text-gray-600">{x.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How it Works?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((x, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {" "}
                  {x.icon}{" "}
                </div>
                <h3 className="text-xl font-semibold mb-4">{x.title}</h3>
                <p className="text-gray-600">{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cold-3 gap-8">
            {testimonialsData.map((x, idx) => (
              <Card key={idx} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4 ">
                    <Image
                      src={x.image}
                      alt={x.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{x.name}</div>
                      <div className="text-sm text-gray-600">{x.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{x.quote}</p>
                  <h3 className="text-xl font-semibold">{x.title}</h3>
                  <p className="text-gray-600">{x.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            Ready to take control of your finances
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            {" "}
            Join thousands of users who are already managing their finances
            smarter with WalletX
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
