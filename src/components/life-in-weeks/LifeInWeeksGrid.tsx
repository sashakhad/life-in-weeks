"use client";

import { useMemo } from "react";
import WeekBox from "./WeekBox";
import { EventsData, LifeInWeeksConfig } from "./types";

interface LifeInWeeksGridProps {
  eventsData: EventsData;
  config: LifeInWeeksConfig;
}

export default function LifeInWeeksGrid({
  eventsData,
  config,
}: LifeInWeeksGridProps) {
  const { startDate, endYear } = config;

  const [startYear, startMonth, startDay] = startDate.split("-").map(Number);

  const getClassFromValue = (value: string) => {
    return value.toLowerCase().replace(/\s+/g, "-");
  };

  const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0]!;
  };

  const gridElements = useMemo(() => {
    const elements: React.ReactElement[] = [];
    let currentBased = "Hometown";
    let currentDoing = "I was tiny";
    let currentAssociation = "";

    for (let year = startYear!; year <= endYear; year++) {
      const age = year - startYear!;
      const thisYearDate = new Date(year, startMonth! - 1, startDay!);
      const nextYearDate = new Date(year + 1, startMonth! - 1, startDay!);

      if (age > 0) {
        const birthdayLabel = `🎂 ${age} in ${year}`;
        const birthdayTooltip = `Turned ${age} year${age !== 1 ? "s" : ""} old`;

        elements.push(
          <WeekBox
            key={`birthday-${year}`}
            type="birthday"
            date={formatDate(thisYearDate)}
            label={birthdayLabel}
            tooltip={birthdayTooltip}
            basedClass={getClassFromValue(currentBased)}
            doingClass={getClassFromValue(currentDoing)}
          />,
        );
      }

      for (let week = 1; week <= 52; week++) {
        const thisWeekDate = addDays(thisYearDate, week * 7);
        if (thisWeekDate >= nextYearDate) {break;}

        let weekProcessed = false;

        for (let day = 0; day < 7; day++) {
          const specificDate = addDays(thisWeekDate, day);
          if (specificDate >= nextYearDate) {break;}

          const dateStr = formatDate(specificDate);
          const events = eventsData[dateStr as keyof EventsData];

          if (events && events.length > 0 && !weekProcessed) {
            const event = events[0];

            if (event?.based) {currentBased = event.based;}
            if (event?.doing) {currentDoing = event.doing;}
            if (event?.association !== undefined)
              {currentAssociation = event.association;}

            const eventTooltip = event?.description || event?.headline || "";

            elements.push(
              <WeekBox
                key={`event-${dateStr}`}
                type="event"
                date={dateStr}
                label={event?.headline || ""}
                tooltip={eventTooltip}
                basedClass={getClassFromValue(currentBased)}
                doingClass={getClassFromValue(currentDoing)}
              />,
            );
            weekProcessed = true;
          }
        }

        if (!weekProcessed) {
          const emptyTooltip = `${currentDoing}${currentAssociation ? ` at ${currentAssociation}` : ""}, based in ${currentBased}`;

          elements.push(
            <WeekBox
              key={`empty-${formatDate(thisWeekDate)}`}
              type="empty"
              date={formatDate(thisWeekDate)}
              tooltip={emptyTooltip}
              basedClass={getClassFromValue(currentBased)}
              doingClass={getClassFromValue(currentDoing)}
            />,
          );
        }
      }
    }

    return elements;
  }, [
    eventsData,
    startYear,
    startMonth,
    startDay,
    endYear,
  ]);

  return (
    <div className="life-in-weeks mt-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center">
          {gridElements}
        </div>
      </div>
    </div>
  );
}
