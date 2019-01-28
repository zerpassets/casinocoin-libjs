'use strict';

module.exports.generateIOUPaymentPaths =
function(request_id, sendingAccount, destinationAccount, destinationAmount) {
  return JSON.stringify({
    'id': request_id,
    'status': 'success',
    'type': 'response',
    'result': {
      'full_reply': true,
      'source_account': sendingAccount,
      'destination_amount': destinationAmount,
      'alternatives': [
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'account': 'cHtfMUQbfbThu26c3kppTTAgVFj9fgicWD',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'cHtfMUQbfbThu26c3kppTTAgVFj9fgicWD',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'cHtfMUQbfbThu26c3kppTTAgVFj9fgicWD',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': 'cnqge9be8LoWCC7vm5SFZCJKcWBRSUdi1F',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'cnqge9be8LoWCC7vm5SFZCJKcWBRSUdi1F',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'cHtfMUQbfbThu26c3kppTTAgVFj9fgicWD',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': 'cUtRir8za9SmW7aHAXt4VmvVrH2sr4J6mr',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'cUtRir8za9SmW7aHAXt4VmvVrH2sr4J6mr',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ]
          ],
          'source_amount': {
            'currency': 'JPY',
            'issuer': sendingAccount,
            'value': '0.1117218827811721'
          }
        },
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': 'cnqge9be8LoWCC7vm5SFZCJKcWBRSUdi1F',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'cnqge9be8LoWCC7vm5SFZCJKcWBRSUdi1F',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ]
          ],
          'source_amount': {
            'currency': 'USD',
            'issuer': sendingAccount,
            'value': '0.001002'
          }
        },
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'currency': destinationAmount.currency,
                'issuer': 'cgR4iCd1mm7drar6Ue3ay5BJQojBEcagG',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'cgR4iCd1mm7drar6Ue3ay5BJQojBEcagG',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': 'cDpMiqENzuEBx3MhxHn2sVemTCKg6QMRgc',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'currency': destinationAmount.currency,
                'issuer': 'cNb6keCEeQkuZFWBcHqqtvijpSpGSKCn1v',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'cNb6keCEeQkuZFWBcHqqtvijpSpGSKCn1v',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': 'cQDnRfCiy4c8ACpKLmooUqpTANddcHBwYL',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'currency': destinationAmount.currency,
                'issuer': 'cnqge9be8LoWCC7vm5SFZCJKcWBRSUdi1F',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'cnqge9be8LoWCC7vm5SFZCJKcWBRSUdi1F',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ]
          ],
          'source_amount': '207669'
        }
      ],
      'destination_account': destinationAccount,
      'destination_currencies': [
        'USD',
        'JOE',
        'BTC',
        'DYM',
        'CNY',
        'EUR',
        '015841551A748AD2C1F76FF6ECB0CCCD00000000',
        'MXN',
        'CSC'
      ]
    }
  });
};

module.exports.generateCSCPaymentPaths =
function(request_id, sendingAccount, destinationAccount) {
  return JSON.stringify({
    'id': request_id,
    'status': 'success',
    'type': 'response',
    'result': {
      'full_reply': true,
      'alternatives': [
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'account': 'cHtfMUQbfbThu26c3kppTTAgVFj9fgicWD',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ]
          ],
          'source_amount': {
            'currency': 'JPY',
            'issuer': sendingAccount,
            'value': '0.00005460001'
          }
        },
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'account': 'cpa54XMDD4U9SNpx3xDQqDecUX9r6wcbKd',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ],
            [
              {
                'account': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ],
            [
              {
                'account': destinationAccount,
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ],
            [
              {
                'account': 'chvDYvKFV7iNXezNLTrMfM5Dre1Hu4vpZQ',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': 'c9bpKuRTe9yGyHu3Geteud8N7DFY3dKxA5',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ]
          ],
          'source_amount': {
            'currency': 'USD',
            'issuer': sendingAccount,
            'value': '0.0000005158508428100899'
          }
        }
      ],
      'destination_account': destinationAccount,
      'destination_currencies': [
        'USD',
        'CSC'
      ]
    }
  });
};
