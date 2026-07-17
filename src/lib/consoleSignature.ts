// A quiet greeting for the curious who open DevTools — the one hidden reward
// on this site. Printed once per page load, in the portfolio's control-room colors.
let printed = false;

export function printConsoleSignature(): void {
  if (printed || typeof window === 'undefined' || !window.console) {
    return;
  }
  printed = true;

  const title = 'John Castro Sanabria — Full-Stack Software Engineer';
  const subtitle = 'Fintech · .NET · Java · React · Azure';
  const invite =
    'Poking around the console? Good instinct. Let’s build something → castrosanabriajohn@gmail.com';

  // eslint-disable-next-line no-console
  console.log(
    `%c${title}%c\n%c${subtitle}%c\n\n%c${invite}`,
    'color:#38bdf8;font-size:14px;font-weight:700;',
    '',
    'color:#22c55e;font-weight:600;',
    '',
    'color:#94a3b8;',
  );
}
