# Production roadmap

The application separates the course catalogue from user progress.

## Before daily use

1. Replace the representative `problems` array in `src/data/course.ts` with the complete verified A2Z dataset.
2. Keep problem IDs stable forever.
3. Run the data validator.
4. Run `npm run build`.
5. Deploy to Vercel.

## Included

- 18-step roadmap target
- Dashboard progress metrics
- Problem search/filter/status controls
- Notes and direct resource links
- Configurable study plan generator
- Revision scheduling
- Firebase cloud sync and offline persistence
- Dark mode and JSON backup
- Installable PWA

The supplied roadmap identifies 474 catalogue problems. The repository does not fabricate missing official URLs; the seed catalogue is intentionally representative until the full verified list is added.