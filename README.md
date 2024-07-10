## Install Dependencies

```bash
npm install
```

## Set Up Environment Variables

```bash
cp .env.example .env
```

## Initialize SQLite Database

- Generate Prisma Client

```bash
npx prisma generate
```

- Run database migrations

```bash
npx prisma migrate dev --name init
```

## Run the Development Server

```bash
npm run dev
```
