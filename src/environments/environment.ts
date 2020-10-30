// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  walletUrl: 'https://walleteos.com',
  votingUrl: 'https://eosportal.io',
  appName: 'EOS Tracker',
  logoUrl: '/assets/logo.png',
  blockchainUrl: 'http://128.199.192.37:8890',
  chainId: '0000000000000000000000000000000000000000000000000000000000000000',
  showAds: true,
  tokensUrl: 'https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json',
  tickerUrl: 'https://api.coinmarketcap.com/v2/ticker/1765/',
  token: 'EOS'
};
