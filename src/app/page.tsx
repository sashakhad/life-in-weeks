import LifeInWeeksGrid from '@/components/life-in-weeks/LifeInWeeksGrid';
import { EventsData, LifeInWeeksConfig } from '@/components/life-in-weeks/types';
import eventsData from '@/data/life-events.json';

export default function Home() {
  const config: LifeInWeeksConfig = {
    startDate: "1990-01-01",
    endYear: 2075,
    maxBoxesInRow: 52,
    labelLenMultiplier: 0.1,
  };

  return (
    <div className="min-h-screen bg-life-in-weeks-cream p-4 text-life-in-weeks-blue">
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-life-in-weeks-blue md:text-7xl">
            Life in Weeks
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-life-in-weeks-blue">
            This is an interactive map of life, where each week is a little box. 
            The box&apos;s border color represents location, the fill color represents life stage. 
            Hover over a box to see details for that week.
          </p>
          <p className="mt-4 text-sm text-life-in-weeks-blue">
            Inspired by{" "}
            <a
              href="https://waitbutwhy.com/2014/05/life-weeks.html"
              className="border-b border-dotted border-life-in-weeks-blue text-life-in-weeks-blue hover:border-life-in-weeks-orange hover:text-life-in-weeks-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              Life in Weeks at Wait But Why
            </a>
          </p>
        </div>

        <LifeInWeeksGrid
          eventsData={eventsData as unknown as EventsData}
          config={config}
        />

        <div className="mt-12 text-center">
          <p className="text-sm text-life-in-weeks-blue">
            🍯 &quot;I always get to where I am going by walking away from where I have been.&quot; – Winnie the Pooh
          </p>
        </div>
      </div>
    </div>
  );
}
