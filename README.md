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

## Customizing Colors

Edit the Tailwind config to change the color scheme:

```typescript
// tailwind.config.ts
colors: {
  "life-in-weeks": {
    "locations": {
      "your-location": "#your-color",
    },
    "stages": {
      "your-stage": "#your-color",
    },
  },
}
```

## Inspiration

This project is inspired by Tim Urban's brilliant [Life in Weeks](https://waitbutwhy.com/2014/05/life-weeks.html) post at Wait But Why, which visualizes a human life as a grid of weeks to provide perspective on time and mortality.

## License

MIT License - feel free to use this for your own life visualization!
