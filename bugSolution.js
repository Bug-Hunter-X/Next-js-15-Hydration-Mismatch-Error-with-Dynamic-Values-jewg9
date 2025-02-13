```javascript
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setCurrentTime(Date.now());
  }, []);

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>The time is {currentTime ? new Date(currentTime).toLocaleString() : 'Loading...'}</p>
    </div>
  );
}
```