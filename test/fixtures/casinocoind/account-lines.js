'use strict';
const _ = require('lodash');
const BASE_LEDGER_INDEX = 8819951;

function getMarkerAndLinesFromRequest(request) {
  const itemCount = 401; // Items on the ledger
  const perRequestLimit = 400;
  const pageCount = Math.ceil(itemCount / perRequestLimit);

  // marker is the index of the next item to return
  const startIndex = request.marker ? Number(request.marker) : 0;

  // No minimum: there are only a certain number of results on the ledger.
  // Maximum: the lowest of (perRequestLimit, itemCount - startIndex, request.limit).
  const lineCount = Math.min(perRequestLimit, itemCount - startIndex, request.limit);

  const trustline = {
    account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
    balance: '0.3488146605801446',
    currency: 'CHF',
    limit: '0',
    limit_peer: '0',
    quality_in: 0,
    quality_out: 0
  };

  return {
    marker: itemCount - lineCount > 0 ? startIndex + lineCount : undefined,
    lines: new Array(lineCount).fill(trustline)
  };
}

module.exports.normal = function(request, options = {}) {
  _.defaults(options, {
    ledger: BASE_LEDGER_INDEX
  });

  return JSON.stringify({
    id: request.id,
    status: 'success',
    type: 'response',
    result: {
      account: request.account,
      marker: options.marker,
      limit: request.limit,
      ledger_index: options.ledger,
      lines: _.filter([{
        account: 'c9EpBpA2DpxK7ik2QZMXCnSmTEWPBhBB7n',
        balance: '0',
        currency: 'ASP',
        limit: '0',
        limit_peer: '10',
        quality_in: 1000000000,
        quality_out: 0
      },
      {
        account: 'c9EpBpA2DpxK7ik2QZMXCnSmTEWPBhBB7n',
        balance: '0',
        currency: 'XAU',
        limit: '0',
        limit_peer: '0',
        no_ripple: true,
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0,
        freeze: true
      },
      {
        account: 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
        balance: '2.497605752725159',
        currency: 'USD',
        limit: '5',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0,
        freeze: true
      },
      {
        account: 'cGQjiWgoNq9AKtADHYPrthFnaAGT8mkr8p',
        balance: '481.992867407479',
        currency: 'MXN',
        limit: '1000',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'c5bvVgDDE8uG4yiotzqPdDaUCHSNMQxTy',
        balance: '0.793598266778297',
        currency: 'EUR',
        limit: '1',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cGt4mcHK7VCyEELkJDJUDuz4qaw4n41wur',
        balance: '0',
        currency: 'CNY',
        limit: '3',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cnknXuFpi8ZUAVr5z5WDTpos2J9WPdH456',
        balance: '1.294889190631542',
        currency: 'DYM',
        limit: '3',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '0.3488146605801446',
        currency: 'CHF',
        limit: '0',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '2.114103174931847',
        currency: 'BTC',
        limit: '3',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '0',
        currency: 'USD',
        limit: '5000',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'c4U5pRntJ1EKbNntjDkK6GLPmP8jUKEEBY',
        balance: '-0.00111',
        currency: 'BTC',
        limit: '0',
        limit_peer: '10',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'caKvaQQRwHmG4tobxjuWWyLLUcTuhhvYXL',
        balance: '-0.1010780000080207',
        currency: 'BTC',
        limit: '0',
        limit_peer: '10',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'c5bvVgDDE8uG4yiotzqPdDaUCHSNMQxTy',
        balance: '1',
        currency: 'USD',
        limit: '1',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'csNdreBaviA4oetFcJaLd7sqaXXSq6b346',
        balance: '8.07619790068559',
        currency: 'CNY',
        limit: '100',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '7.292695098901099',
        currency: 'JPY',
        limit: '0',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'c9EpBpA2DpxK7ik2QZMXCnSmTEWPBhBB7n',
        balance: '0',
        currency: 'AUX',
        limit: '0',
        limit_peer: '0',
        no_ripple: true,
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cN9vMjt3WUSqFp3DSvHugSivyG3WQk1XnP',
        balance: '0',
        currency: 'USD',
        limit: '1',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '12.41688780720394',
        currency: 'EUR',
        limit: '100',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cLgUQNXJREwKGKy5k4umSdHqv3xEb8RPre',
        balance: '35',
        currency: 'USD',
        limit: '500',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cP21f2sRDBN68d1gi6XKGRr98R7HEFyWqW',
        balance: '-5',
        currency: 'JOE',
        limit: '0',
        limit_peer: '50',
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cD8tB8pVG6vx3hhJ2YQqpqMA1gWETYxgij',
        balance: '0',
        currency: 'USD',
        limit: '0',
        limit_peer: '100',
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cD8tB8pVG6vx3hhJ2YQqpqMA1gWETYxgij',
        balance: '0',
        currency: 'JOE',
        limit: '0',
        limit_peer: '100',
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cU2iMovvf9mHJCPeC3i8btC4x2YpGE6gUY',
        balance: '0',
        currency: '015841551A748AD2C1F76FF6ECB0CCCD00000000',
        limit: '10.01037626125837',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'css6ZY7UxR3VR62mVCPmsDwYw4RkmV3ZYj',
        balance: '0',
        currency: 'USD',
        limit: '0',
        limit_peer: '1',
        quality_in: 0,
        quality_out: 0,
        freeze: true
      }
      ], item => !request.peer || item.account === request.peer)
    }
  });
};

module.exports.counterparty = function(request, options = {}) {
  _.defaults(options, {
    ledger: BASE_LEDGER_INDEX
  });

  return JSON.stringify({
    id: request.id,
    status: 'success',
    type: 'response',
    result: {
      account: request.account,
      marker: options.marker,
      limit: request.limit,
      ledger_index: options.ledger,
      lines: [{
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '0.3488146605801446',
        currency: 'CHF',
        limit: '0',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '2.114103174931847',
        currency: 'BTC',
        limit: '3',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '0',
        currency: 'USD',
        limit: '5000',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '7.292695098901099',
        currency: 'JPY',
        limit: '0',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
        balance: '12.41688780720394',
        currency: 'EUR',
        limit: '100',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      }
      ]
    }
  });
};

module.exports.manyItems = function(request, options = {}) {
  _.defaults(options, {
    ledger: BASE_LEDGER_INDEX
  });

  const {marker, lines} = getMarkerAndLinesFromRequest(request);

  return JSON.stringify({
    id: request.id,
    status: 'success',
    type: 'response',
    result: {
      account: request.account,
      marker,
      limit: request.limit,
      ledger_index: options.ledger,
      lines
    }
  });
};
