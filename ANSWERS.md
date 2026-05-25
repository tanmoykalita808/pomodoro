# ANSWERS

## 1. How to run

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:5173
```

## 2. Stack & design choices

I used React with Vite because it provides fast development, component-based structure, and simple state management for interactive UI features like timers.

One visual decision was using a circular progress ring around the timer. This gives users immediate visual feedback about session progress instead of relying only on numbers.

Another interaction decision was disabling the duration inputs while the timer is running. This prevents accidental state inconsistencies and improves usability during active sessions.

## 3. Responsive & accessibility

On smaller screens like a 360px phone, the layout stacks vertically and the timer size scales down to avoid overflow. Buttons become vertically aligned for easier tapping.

On larger screens like a 1440px laptop, the content remains centered with controlled width for readability.

For accessibility, I ensured buttons remain keyboard accessible and maintained sufficient color contrast between text and backgrounds.

One thing I did not fully implement was screen reader announcements for timer completion events. With more time, I would add ARIA live regions for better accessibility support.

## 4. AI usage

I used ChatGPT for guidance during development, including component structuring, CSS improvements, and debugging timer state issues.

One example where I modified AI-generated output was the timer layout sizing. The original implementation caused the timer text to overflow outside the circular progress ring, so I adjusted the ring dimensions and reduced the timer font size to improve responsiveness and visual balance.

## 5. Honest gap

One area that could be improved is the session completion experience. With more time, I would add smoother animations, optional sound settings, and a more advanced progress transition system to make the interaction feel more polished.
