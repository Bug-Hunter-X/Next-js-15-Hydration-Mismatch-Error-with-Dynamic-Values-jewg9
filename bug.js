```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      {/* This will cause the error: Hydration mismatch error */}
      <p>The time is {Date.now()}</p>
    </div>
  );
}
```