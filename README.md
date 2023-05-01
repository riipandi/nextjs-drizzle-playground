## Next.js Drizzle ORM

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`next-start`](https://github.com/riipandi/next-start).

## Getting Started

First, run the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Go to [http://localhost:3000/api/users](http://localhost:3000/api/users) to see the Drizzle implementation.

The `app/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

Take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Drizzle ORM Documentation](https://github.com/drizzle-team/drizzle-orm) - learn about Drizzle ORM.
-   [Drizzle - An ORM that lets you just write SQL](https://www.propelauth.com/post/drizzle-an-orm-that-lets-you-just-write-sql)

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
