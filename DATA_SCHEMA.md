# A2Z Problem JSON Schema

Each problem uses a stable ID so Firestore progress survives catalogue updates.

Required problem fields: `id`, `title`, `difficulty`, `articleUrl`, `videoUrl`, `practiceUrl`, `tags`, `stepId`, `topic`.

Difficulty is one of `Easy`, `Medium`, `Hard`.

Stable IDs are important because they become Firestore document IDs and let you replace or expand the dataset without losing user progress.