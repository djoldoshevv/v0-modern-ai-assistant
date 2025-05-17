import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Star, ArrowRight, Plus, Search, Send } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-lime-400"></div>
          <span className="text-xl font-bold">TeamAssist</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Product
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Solutions
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Resources
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
            Sign in
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">Get started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-30"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Work AI for all.</h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              The Work AI platform connected to all your data. Find, create, and automate anything.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base px-6 py-6 h-auto shadow-lg">
                Get a demo
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                Watch video
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 fill-opacity-50" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold">4.5 stars</span>
                  <div className="text-gray-500">130+ reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 fill-opacity-80" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold">4.8 stars</span>
                  <div className="text-gray-500">130+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant Demo */}
          <div className="relative">
            <Card className="p-6 shadow-xl rounded-xl border border-gray-200 bg-white overflow-hidden">
              {/* Yellow diamond accent */}
              <div className="absolute -top-6 right-1/2 transform translate-x-1/2 w-12 h-12 bg-yellow-300 rotate-45"></div>

              {/* Example prompt */}
              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <p className="text-gray-800 font-medium mb-1">
                    Prep me for my meeting with Acme Corp, include Salesforce notes, Jira tickets, kickoff doc, and
                    notes from #project-channel
                  </p>
                  <div className="flex items-center">
                    <Search className="h-4 w-4 text-gray-400 mr-2" />
                    <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  </div>
                </div>

                {/* Tags row */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></div>
                    Company
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-3 py-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-1.5"></div>
                    Document
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                    Slack channel
                  </Badge>
                  <div className="text-xs text-gray-500 flex items-center">+14</div>
                </div>

                {/* AI Response */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-xs font-medium text-white">AI</span>
                    </div>
                    <span className="text-sm font-medium">Sales Agent</span>
                  </div>
                  <div className="space-y-2 pl-9">
                    <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-[90%]"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-[40%]"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-[75%]"></div>
                  </div>
                </div>

                {/* Separator with connected sources */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-gray-500">Connected sources:</div>
                    <div className="flex -space-x-2">
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-[#36C5F0] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        S
                      </div>
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-[#EA4335] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        G
                      </div>
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-[#00A1E0] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        S
                      </div>
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-[#009688] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        Z
                      </div>
                      <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-bold shadow-sm">
                        +14
                      </div>
                    </div>
                  </div>

                  {/* Input field */}
                  <div className="relative">
                    <Input
                      placeholder="Ask anything about TeamAssist..."
                      className="pr-12 py-6 bg-gray-50 border-gray-200 focus-visible:ring-blue-500 text-sm"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <Button size="icon" className="h-8 w-8 rounded-full" variant="ghost">
                        <Plus className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button size="icon" className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700">
                        <Send className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Integration logos - improved with better positioning and styling */}
            <div className="absolute -right-6 top-1/3 flex flex-col gap-4">
              <div className="h-12 w-12 rounded-lg bg-[#009688] flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform">
                <span className="font-bold">Z</span>
              </div>
              <div className="h-12 w-12 rounded-lg bg-[#6264A7] flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform">
                <span className="font-bold">T</span>
              </div>
            </div>
            <div className="absolute -left-6 bottom-1/3 flex flex-col gap-4">
              <div className="h-12 w-12 rounded-lg bg-[#00A1E0] flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform">
                <span className="font-bold">S</span>
              </div>
              <div className="h-12 w-12 rounded-lg bg-[#EA4335] flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform">
                <span className="font-bold">G</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="container mx-auto py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[#f9f7f2] opacity-80"></div>
        <div className="relative grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 px-4">
          {/* First row */}
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <div className="flex items-center">
              <span className="font-bold text-gray-800">LaunchDarkly</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-800">Gainsight</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-gray-800">Samsara</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-600">Citi</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-gray-800">Zapier</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-600">Webflow</span>
          </div>

          {/* Second row */}
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-gray-800">Plaid</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-800">Ericsson</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-red-500">SeatGeek</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <div className="flex items-center">
              <span className="font-bold text-green-500">Duolingo</span>
              <div className="ml-1 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Center text - spans 4 columns */}
          <div className="col-span-4 row-span-4 flex items-center justify-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                The world's
                <br />
                leading
                <br />
                enterprises
                <br />
                put AI to
                <br />
                work with
                <br />
                TeamAssist.
              </h2>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-green-600">Grammarly</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-600">Databricks</span>
          </div>

          {/* Third row */}
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-red-500">Redis</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-orange-500">Bill</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-purple-600">Super.com</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-600">Intercom</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-500">Intuit</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-400">Canva</span>
          </div>

          {/* Fourth row */}
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-gray-800">BetterUp</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-green-500">Greenhouse</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-purple-800">Vanta</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <div className="flex items-center">
              <span className="font-bold text-red-500">Crunchyroll</span>
              <div className="ml-1 w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-800">Booking.com</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-red-500">Redis</span>
          </div>

          {/* Fifth row */}
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-gray-800">Handshake</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-red-600">Pinterest</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-600">Zscaler</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-gray-800">Abnormal</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-500">Rubrik</span>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-700">Zillow</span>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            TeamAssist saves up to <span className="text-blue-600">110</span> hours per user/year
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-100 pt-8">
            <div className="text-center md:text-left md:border-r border-gray-100 pr-4">
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">93%</div>
              <p className="text-gray-700">TeamAssist adoption reached 93% in just 2 years.</p>
            </div>

            <div className="text-center md:text-left md:border-r border-gray-100 pr-4">
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">36</div>
              <p className="text-gray-700">TeamAssist saves 36 hours per employee on onboarding</p>
            </div>

            <div className="text-center md:text-left md:border-r border-gray-100 pr-4">
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">20%</div>
              <p className="text-gray-700">TeamAssist Chat reduces internal support requests by 20% (IT, HR, etc.).</p>
            </div>

            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">6 months</div>
              <p className="text-gray-700">Companies recover their TeamAssist investment in under 6 months.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors"
            >
              See the Forrester Report
              <div className="ml-2 w-8 h-8 rounded-full bg-green-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-blue-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-0">
              See what our <span className="text-lime-300">customers say</span>
            </h2>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="bg-white/20 h-10 w-32 rounded flex items-center justify-center">
                <span className="text-white font-bold">Deutsche Telekom</span>
              </div>
              <div className="bg-white/20 h-10 w-20 rounded flex items-center justify-center">
                <span className="text-white font-bold">Bill</span>
              </div>
              <div className="bg-white/20 h-10 w-28 rounded flex items-center justify-center">
                <span className="text-white font-bold">Webflow</span>
              </div>
              <div className="bg-white/20 h-10 w-28 rounded flex items-center justify-center">
                <span className="text-white font-bold">Workato</span>
              </div>
              <div className="bg-white/20 h-10 w-28 rounded flex items-center justify-center">
                <span className="text-white font-bold">Confluent</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-blue-500/50 rounded-3xl p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 h-10 w-32 rounded flex items-center justify-center">
                  <span className="text-white font-bold">Deutsche Telekom</span>
                </div>
              </div>
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                We built 'askT' as an employee concierge for all our employees in Germany. AskT combines the world
                knowledge of a LLM with thousands of knowledge bases — from finance, HR, and legal — all in one tool.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-400 mr-4"></div>
                <div>
                  <h4 className="text-white font-bold">Jonathan Abrahamson</h4>
                  <p className="text-blue-100">Chief Product & Digital Officer at Deutsche Telekom</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center text-white font-medium hover:text-blue-100 transition-colors"
                >
                  View case study
                  <div className="ml-2 w-8 h-8 rounded-full bg-lime-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-blue-500/50 rounded-3xl p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 h-10 w-20 rounded flex items-center justify-center">
                  <span className="text-white font-bold">Bill</span>
                </div>
              </div>
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                Calibrations, email, presentations, content creation are all easier. I've seen stats that say TeamAssist
                saves people 110 hours per year. I know it's saving me a lot more time than that, and you really should
                be using it too.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-400 mr-4"></div>
                <div>
                  <h4 className="text-white font-bold">Steve Januario</h4>
                  <p className="text-blue-100">VP of Technology at BILL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful AI for your entire team</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            TeamAssist helps everyone in your organization work smarter and faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Find information instantly",
              description: "Search across all your connected tools and get instant answers to your questions.",
            },
            {
              title: "Automate repetitive tasks",
              description: "Let AI handle your routine tasks so you can focus on what matters most.",
            },
            {
              title: "Collaborate seamlessly",
              description: "Share insights and information with your team without switching between apps.",
            },
          ].map((feature, i) => (
            <Card key={i} className="p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                {i === 0 ? (
                  <Search className="h-6 w-6" />
                ) : i === 1 ? (
                  <ArrowRight className="h-6 w-6" />
                ) : (
                  <Plus className="h-6 w-6" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to transform how your team works?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Join thousands of teams using TeamAssist to work smarter and faster.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get started for free
            </Button>
            <Button size="lg" variant="outline">
              Schedule a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Integrations", "Pricing", "Security"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Customers", "Blog", "Careers"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Guides", "API", "Community"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                {["Privacy", "Terms", "Security", "Compliance"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-md bg-lime-400"></div>
              <span className="text-xl font-bold">TeamAssist</span>
            </div>
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} TeamAssist. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
