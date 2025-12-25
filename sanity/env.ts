export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-11-25";

export const dataset = assertValue(
  process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET,
  "SANITY_PROJECT_DATASET or NEXT_PUBLIC_SANITY_PROJECT_DATASET"
);

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, name: string): T {
  if (v === undefined) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return v;
}
