import { NextResponse } from "next/server";
import { getAllUpcomingEvents, type CalendarEvent } from "@/lib/calendar";

// Serialize CalendarEvent dates to ISO strings for JSON response
function serializeEvents(events: CalendarEvent[]) {
  return events.map((event) => ({
    ...event,
    startTime: event.startTime.toISOString(),
  }));
}

export async function GET() {
  try {
    const events = await getAllUpcomingEvents();
    const serializedEvents = serializeEvents(events);
    return NextResponse.json({ events: serializedEvents });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return NextResponse.json(
      { error: "Failed to fetch calendar events" },
      { status: 500 }
    );
  }
}

