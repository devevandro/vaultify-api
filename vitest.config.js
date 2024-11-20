import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.spec.ts'],
    coverage: {
      all: true,
      include: ['src/domain/**/useCases/**/*.ts'],
    },
  },
});
