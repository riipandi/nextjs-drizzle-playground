## Next.js Drizzle ORM

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`next-start`](https://github.com/riipandi/next-start).

## Getting Started

First, run the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(home)/about/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `app/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Database Migration

```sh
pnpm db:generate    # Generate migrations files
pnpm db:migrate     # Run the database migration
```

Introspect existing database and generate typescript schema:

```sh
pnpm drizzle-kit introspect:pg --out database/migration --connectionString $(dotenv -p DATABASE_URL)
```

Rad more about database introspect [here](https://github.com/drizzle-team/drizzle-kit-mirror#introspect-existing-database-and-generate-typescript-schema).
