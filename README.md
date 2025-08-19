# Life in Weeks

An open source visualization of your life in weeks, inspired by [Wait But Why's Life in Weeks](https://waitbutwhy.com/2014/05/life-weeks.html).

## Features

- Interactive life timeline visualization
- Customizable life events and milestones
- Color-coded life stages and locations
- Responsive design with hover tooltips
- Optional authentication middleware
- Built with modern web technologies

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Optional JWT authentication with jose

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Customization

### Adding Your Life Events

Edit `src/data/life-events.json` to add your own life events:

```json
{
  "YYYY-MM-DD": [
    {
      "headline": "Event title",
      "description": "Event description",
      "based": "Location",
      "doing": "Life stage"
    }
  ]
}
```

### Life Stages

The visualization supports different life stages with unique colors:
- `I was tiny` - Early childhood
- `Kindergartner` - Kindergarten years
- `Student` - Elementary school
- `High school student` - High school years
- `College student` - University/college
- `Graduate` - Post-graduation period
- `Working` - Professional career
- `Freelancing` - Independent work
- `Funemployed` - Between jobs

### Locations

Different locations are represented by border colors:
- `Hometown` - Where you grew up
- `College Town` - University location
- `Big City` - Major metropolitan area
- `Small Town` - Smaller community
- `Metro Area` - Suburban/metropolitan region

### Enabling Authentication (Optional)

1. Add protected routes to `middleware.ts`:
```typescript
const protectedRoutes = ["/admin"];
```

2. Set environment variable:
```
AUTH_SECRET=your-secret-key
```

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Fix ESLint issues
- `pnpm run type-check` - Run TypeScript checking
- `pnpm run test` - Run unit tests

## Project Structure

```
src/
├── app/                           # Next.js App Router
├── components/
│   └── life-in-weeks/            # Life visualization components
├── data/
│   └── life-events.json          # Your life events data
└── lib/                          # Utility functions

middleware.ts                      # Optional authentication
```

## Customizing Colors and Locations

### Adding New Locations

Want to use specific cities like "New York", "Paris", or "Tokyo" instead of generic terms? Here's how:

**Step 1: Add the location to your Tailwind config**

Edit `tailwind.config.ts` and add your new location to the `locations` section:

```typescript
// tailwind.config.ts
extend: {
  colors: {
    "life-in-weeks": {
      "locations": {
        "hometown": "#8eb2d6",
        "college-town": "#FCC737", 
        "new-york": "#FF6B6B",        // ← Add your new location
        "paris": "#9B59B6",           // ← Add another location
        "tokyo": "#3498DB",           // ← And another
        "london": "#E67E22",          // ← As many as you need
      },
      "stages": {
        // ... existing stages
      },
    },
  },
}
```

**Step 2: Use the new location in your life events**

Update `src/data/life-events.json` to use your new location names:

```json
{
  "2020-03-15": [
    {
      "headline": "🗽 Moved to NYC",
      "description": "Started new job in the big apple",
      "based": "New York",           // ← Use the display name
      "doing": "Working"
    }
  ],
  "2022-06-01": [
    {
      "headline": "🥖 Studying abroad",
      "description": "Semester in Paris",
      "based": "Paris",              // ← Use the display name
      "doing": "College student"
    }
  ]
}
```

**Step 3: Restart your dev server**

After updating the Tailwind config, restart your development server:

```bash
pnpm run dev
```

### Changing Life Stage Colors

You can also customize the colors for different life stages:

```typescript
// tailwind.config.ts
"stages": {
  "i-was-tiny": "#FFF8DC",          // Light cream
  "kindergartner": "#FFE4B5",       // Moccasin  
  "student": "#E0F6FF",             // Light blue
  "high-school-student": "#D4F1D4", // Light green
  "college-student": "#FFE4E1",     // Misty rose
  "working": "#E6E6FA",             // Lavender
  "freelancing": "#F0E68C",         // Khaki
  "retired": "#DDA0DD",             // Plum
}
```

### Color Tips

- **Use hex colors** (#FF6B6B) for precise control
- **Keep contrast in mind** - borders should be visible against the cream background
- **Test your colors** by hovering over week boxes to see how they look
- **Consider color meaning** - maybe use blue for coastal cities, green for nature locations
- **Use online color pickers** like [Coolors.co](https://coolors.co) to find great palettes

### Location Name Format

- **In Tailwind config**: Use lowercase with hyphens (`"new-york"`, `"san-francisco"`)
- **In life-events.json**: Use the display name (`"New York"`, `"San Francisco"`)
- The app automatically converts display names to CSS class names

### Example: Complete Location Setup

Here's a complete example of adding "San Francisco":

1. **Add to tailwind.config.ts:**
```typescript
"locations": {
  "san-francisco": "#FF4500",  // Orange red
}
```

2. **Use in life-events.json:**
```json
{
  "2023-01-01": [
    {
      "headline": "🌉 West Coast move",
      "description": "New adventure in SF",
      "based": "San Francisco",
      "doing": "Working"
    }
  ]
}
```

3. **Restart dev server and enjoy your personalized timeline!**

## Inspiration

This project is inspired by Tim Urban's brilliant [Life in Weeks](https://waitbutwhy.com/2014/05/life-weeks.html) post at Wait But Why, which visualizes a human life as a grid of weeks to provide perspective on time and mortality.

## License

MIT License - feel free to use this for your own life visualization!
