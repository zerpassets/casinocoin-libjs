'use strict'; // eslint-disable-line strict
const _ = require('lodash');
const addresses = require('../addresses');

module.exports = function(request, options = {}) {
  _.defaults(options, {
    account: addresses.ACCOUNT,
    validated: true
  });

  return JSON.stringify({
    'id': request.id,
    'result': {
      'account': options.account,
      'marker': options.marker,
      'limit': options.limit,
      'ledger_index': options.ledger,
      'offers': [
        {
          'flags': 131072,
          'seq': 719930,
          'taker_gets': {
            'currency': 'EUR',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '17.70155237781915'
          },
          'quality': '63.44025128030504',
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '1122.990930900328'
          }
        },
        {
          'flags': 0,
          'seq': 757002,
          'taker_gets': {
            'currency': 'USD',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '18.46856867857617'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cHLCLkBJyuZBuHeRfTy6Byn2SbHx1S1udj',
            'value': '19.50899530491766'
          }
        },
        {
          'flags': 0,
          'seq': 756999,
          'taker_gets': {
            'currency': 'USD',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '19.11697137482289'
          },
          'taker_pays': {
            'currency': 'EUR',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '750'
          }
        },
        {
          'flags': 0,
          'seq': 757003,
          'taker_gets': {
            'currency': 'USD',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '14.40727807030772'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cHLCLkBJyuZBuHeRfTy6Byn2SbHx1S1udj',
            'value': '1445.796633544794'
          }
        },
        {
          'flags': 0,
          'seq': 782148,
          'taker_gets': {
            'currency': 'NZD',
            'issuer': 'cgR4iCd1mm7drar6Ue3ay5BJQojBEcagG',
            'value': '9.178557969538755'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '750'
          }
        },
        {
          'flags': 0,
          'seq': 787368,
          'taker_gets': {
            'currency': 'USD',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '9.94768291869523'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
            'value': '500'
          }
        },
        {
          'flags': 0,
          'seq': 787408,
          'taker_gets': {
            'currency': 'USD',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '9.994805759894176'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
            'value': '10000'
          }
        },
        {
          'flags': 0,
          'seq': 803438,
          'taker_gets': {
            'currency': 'USD',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '11.67691646304319'
          },
          'taker_pays': {
            'currency': 'MXN',
            'issuer': 'c4g1fP1pqmVsoSi7X7MMA9xhQUXxuSazvm',
            'value': '15834.53653918684'
          }
        },
        {
          'flags': 0,
          'seq': 807858,
          'taker_gets': {
            'currency': 'XAU',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '0.03206299605333101'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '3968.240250979598'
          }
        },
        {
          'flags': 0,
          'seq': 807896,
          'taker_gets': {
            'currency': 'XAU',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '0.03347459066593226'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
            'value': '4139.022125516302'
          }
        },
        {
          'flags': 0,
          'seq': 814018,
          'quality': '16922629533.64839',
          'taker_gets': {
            'currency': 'NZD',
            'issuer': 'cgR4iCd1mm7drar6Ue3ay5BJQojBEcagG',
            'value': '6.840555705'
          },
          'taker_pays': '115760190000'
        },
        {
          'flags': 0,
          'seq': 827522,
          'taker_gets': {
            'currency': 'EUR',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '14.40843766044656'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
            'value': '902.4050961259154'
          }
        },
        {
          'flags': 0,
          'seq': 833592,
          'taker_gets': {
            'currency': 'XAG',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '1.128432823485991'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '1814.887131319799'
          }
        },
        {
          'flags': 0,
          'seq': 833591,
          'taker_gets': {
            'currency': 'XAG',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '1.128432823485989'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '181.4887131319798'
          }
        },
        {
          'flags': 0,
          'seq': 838954,
          'taker_gets': {
            'currency': 'XAG',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '0.7283371225235964'
          },
          'taker_pays': {
            'currency': 'USD',
            'issuer': 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
            'value': '118.6872603846736'
          }
        },
        {
          'flags': 0,
          'seq': 843730,
          'taker_gets': '2229229447',
          'taker_pays': {
            'currency': 'XAU',
            'issuer': 'cKQfTmebA8EWmEWFvntykZfHB2gdQ245rZ',
            'value': '1'
          }
        },
        {
          'flags': 0,
          'seq': 844068,
          'taker_gets': {
            'currency': 'USD',
            'issuer': 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
            'value': '17.77537376072202'
          },
          'taker_pays': {
            'currency': 'EUR',
            'issuer': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
            'value': '750'
          }
        }
      ],
      'validated': options.validated
    },
    'status': 'success',
    'type': 'response'
  });
};
