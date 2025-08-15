/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/planet-clicker.embed',
        destination: '/game/planet-clicker/index.html',
      },
      {
        source: '/bubble-shoot-merge-box-2048.embed',
        destination: '/game/bubble-shoot-merge-box-2048/index.html',
      },
      {
        source: '/crazy-cattle-3d.embed',
        destination: '/game/crazycattle3d/index.html',
      },
      {
        source: '/crazy-cow-3d.embed',
        destination: '/game/crazycow3d/index.html',
      },
      {
        source: '/cheese-chompers-3d.embed',
        destination: '/game/cheesechompers3d/index.html',
      },
      {
        source: '/brainrot-clicker.embed',
        destination: '/game/brainrot-clicker/index.html',
      },
      {
        source: '/basketball-bros-unblocked.embed',
        destination: '/game/basketball-bros-unblocked/index.html',
      },
      {
        source: '/pokemon-gamma-emerald.embed',
        destination: '/game/pokemon-gamma-emerald/index.html',
      },
      {
        source: '/crazy-chicken-3d.embed',
        destination: '/game/crazy-chicken-3d/index.html',
      },
      {
        source: '/sprunki-incredibox.embed',
        destination: '/game/sprunki-incredibox/index.html',
      },
      {
        source: '/futbol-libre.embed',
        destination: '/game/futbol-libre/index.html',
      },
    ]
  }
};

module.exports = nextConfig;


