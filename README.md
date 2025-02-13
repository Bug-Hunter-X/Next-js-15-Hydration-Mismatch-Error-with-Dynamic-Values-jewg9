# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a common hydration mismatch error in Next.js 15 applications.  The error occurs when a value rendered on the server differs from the value rendered on the client. This example uses `Date.now()`, but any dynamically generated content that changes between server-side and client-side rendering can trigger this issue.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open your browser and observe the hydration mismatch error in the console.

## Solution

The solution involves ensuring that dynamic values are computed and rendered consistently on both the server and client. This often requires using techniques like React's `useEffect` hook to perform data fetching and rendering after the component has mounted on the client.