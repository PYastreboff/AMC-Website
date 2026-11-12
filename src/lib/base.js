export const b = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

// Large media is kept in the repo on `main` and referenced over HTTPS instead
// of being bundled into the deploy artifact — Pages rejects files over 25 MiB.
// Keep `public/videos/` in sync on `main` when replacing these files.
export const ghVideo = (file) =>
  `https://raw.githubusercontent.com/PYastreboff/AMC-Website/main/public/videos/${file.replace(/^\//, '')}`
