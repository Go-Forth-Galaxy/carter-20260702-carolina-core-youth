"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <p>
        This website uses cookies. We use cookies to analyze website traffic and
        optimize your website experience. By accepting our use of cookies, your
        data will be aggregated with all other user data.
      </p>
      <button onClick={() => setVisible(false)}>Accept</button>
    </div>
  );
}
