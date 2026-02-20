# Calorie Counter
This web app tracks calories and gives macro calculations for your meals.

## Requirements
- Node.js 20+ (tested on modern Node)
- MongoDB running locally on `mongodb://127.0.0.1:27017/mean_project`
  - Or set `MONGODB_URI` to use another connection string

## Install
```bash
npm install
npm install --prefix public
```

## Run in development
Terminal 1 (API):
```bash
npm run dev
```

Terminal 2 (Angular app):
```bash
npm run start --prefix public
```

The API runs on `http://localhost:8000` and Angular dev server runs on `http://localhost:4200`.

## Build frontend for Express static hosting
```bash
npm run build --prefix public
```

After building, start the backend:
```bash
npm start
```
