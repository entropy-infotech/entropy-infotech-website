import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-analytics-dashboards',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-slate-50 min-h-screen">
      <!-- Header -->
      <header class="bg-indigo-600 py-24 text-white text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgMGgxMHYxMEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div class="container mx-auto px-6 relative z-10 text-left md:text-center">
          <div class="inline-block bg-indigo-500/50 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-indigo-400/50">
            <span class="text-indigo-50 font-semibold tracking-wider text-sm">SERVICE</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Analytics Dashboards</h1>
          <p class="text-indigo-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Stop guessing. Start knowing. We build interactive data platforms that transform raw numbers into actionable business intelligence.
          </p>
        </div>
      </header>

      <!-- Main Content Block -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row gap-16 items-center">
            
            <!-- Left Visual / Mockup -->
            <div class="lg:w-1/2 w-full order-2 lg:order-1">
              <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 overflow-hidden">
                <!-- Mac-like Header -->
                <div class="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2 rounded-t-xl">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <!-- Mock Dashboard Body -->
                <div class="p-6 bg-slate-50">
                  <div class="flex justify-between items-end mb-8">
                    <div>
                      <h4 class="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Total Revenue</h4>
                      <p class="text-3xl font-black text-slate-900">$124,563.00</p>
                    </div>
                    <div class="text-emerald-500 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      +14.5%
                    </div>
                  </div>
                  
                  <!-- Fake Chart -->
                  <div class="w-full h-48 flex items-end gap-2 px-2">
                    <div class="w-full bg-indigo-100 rounded-t-sm h-[30%] relative group"><div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$12k</div></div>
                    <div class="w-full bg-indigo-200 rounded-t-sm h-[45%] relative group"><div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$18k</div></div>
                    <div class="w-full bg-indigo-300 rounded-t-sm h-[40%] relative group"><div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$16k</div></div>
                    <div class="w-full bg-indigo-400 rounded-t-sm h-[60%] relative group"><div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$24k</div></div>
                    <div class="w-full bg-indigo-500 rounded-t-sm h-[85%] relative group"><div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$34k</div></div>
                    <div class="w-full bg-indigo-600 rounded-t-sm h-[70%] relative group"><div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$28k</div></div>
                    <div class="w-full bg-indigo-600 rounded-t-sm h-[100%] relative group"><div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$40k</div></div>
                  </div>
                  
                  <div class="mt-6 grid grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <p class="text-xs text-slate-500 mb-1">Active Users</p>
                      <p class="text-lg font-bold">1,204</p>
                    </div>
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <p class="text-xs text-slate-500 mb-1">Conversion</p>
                      <p class="text-lg font-bold">4.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right text -->
            <div class="lg:w-1/2 order-1 lg:order-2">
              <h2 class="text-4xl font-bold text-slate-900 mb-6">See the Big Picture, Instantly</h2>
              <p class="text-slate-600 text-lg leading-relaxed mb-6">
                Your business generates massive amounts of data every day. Without the right visualization tools, that data is just noise. We build bespoke analytics dashboards that consolidate your metrics into intuitive, beautiful interfaces.
              </p>
              
              <div class="space-y-6 mt-8">
                <!-- Feature 1 -->
                <div class="flex gap-4">
                  <div class="mt-1 bg-indigo-100 text-indigo-600 p-2 rounded-lg h-min"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                  <div>
                    <h4 class="text-xl font-bold text-slate-900 mb-2">Real-Time Data Integration</h4>
                    <p class="text-slate-600">Connect to your databases, CRMs, marketing platforms, and third-party APIs for up-to-the-second reporting.</p>
                  </div>
                </div>
                
                <!-- Feature 2 -->
                <div class="flex gap-4">
                  <div class="mt-1 bg-indigo-100 text-indigo-600 p-2 rounded-lg h-min"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
                  <div>
                    <h4 class="text-xl font-bold text-slate-900 mb-2">Interactive Visualizations</h4>
                    <p class="text-slate-600">Drill down into charts, filter by date ranges, and export reports instantly. We build with modern charting libraries like D3.js and Chart.js.</p>
                  </div>
                </div>
                
                <!-- Feature 3 -->
                <div class="flex gap-4">
                  <div class="mt-1 bg-indigo-100 text-indigo-600 p-2 rounded-lg h-min"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
                  <div>
                    <h4 class="text-xl font-bold text-slate-900 mb-2">Role-Based Access</h4>
                    <p class="text-slate-600">Give executives the high-level metrics they need, while ensuring managers only see data relevant to their specific departments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 bg-slate-900 text-white mt-12">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Unlock Your Data's Potential</h2>
          <p class="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">Stop relying on messy spreadsheets. Let's design a dashboard that gives you total clarity over your business metrics.</p>
          <a routerLink="/contact" class="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-indigo-600/30">Get a Demo</a>
        </div>
      </section>
    </div>
  `,
})
export class AnalyticsDashboardsComponent {
}
