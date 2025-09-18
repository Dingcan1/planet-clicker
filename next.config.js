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
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/planet-clicker/index.html',
      },
      {
        source: '/bubble-shoot-merge-box-2048.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/bubble-shoot-merge-box-2048/index.html',
      },
      {
        source: '/crazy-cattle-3d.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/crazycattle3d/index.html',
      },
      {
        source: '/crazy-cow-3d.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/crazycow3d/index.html',
      },
      {
        source: '/cheese-chompers-3d.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/cheesechompers3d/index.html',
      },
      {
        source: '/brainrot-clicker.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/brainrot-clicker/index.html',
      },
      {
        source: '/basketball-bros-unblocked.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/basketball-bros-unblocked/index.html',
      },
      {
        source: '/pokemon-gamma-emerald.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/pokemon-gamma-emerald/index.html',
      },
      {
        source: '/crazy-chicken-3d.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/crazy-chicken-3d/index.html',
      },
      {
        source: '/sprunki-incredibox.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/sprunki-incredibox/index.html',
      },
      {
        source: '/futbol-libre.embed',
        destination: 'https://planetclickerbucket.dingcanhn.workers.dev/game/futbol-libre/index.html',
      },
    ]
  }
};

module.exports = nextConfig;


