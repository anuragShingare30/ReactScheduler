let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Event 2', 
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Event 1',
    start: todayStr
  }
]


export function createEventId() {
  return String(eventGuid++)
} 