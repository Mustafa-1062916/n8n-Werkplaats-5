import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class NasaPics implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Exchange API',
        name: 'Exchange API',
        icon: 'file:Exchangeapi.png',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Get data from Exchange API',
        defaults: {
            name: 'NASA Pics',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'NasaPicsApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://api.freecurrencyapi.com/v1/latest',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['CurrencyTransfer'],
                    },
                },
                options: [
					{
						name: 'Euro To Dollar',
						value: 'Euro To Dollar',
						action: 'Euro To Dollar Currency',
						description: 'Euro To Dollar Currency',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=USD&base_currency=EUR`,
							},
						},
					},
					{
						name: 'Dollar To Euro',
						value: 'Dollar To Euro',
						action: 'Dollar To Euro Currency',
						description: 'Dollar To Euro Currency',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR&base_currency=USD`,
							},
						},
					},
					{
						name: 'Euro To Other Currencies',
						value: 'Euro To Other Currencies',
						action: 'Euro To Other Currencies',
						description: 'Convert Euro to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=EUR`,
							},
						},
					},	
					{
						name: 'Dollar To Other Currencies',
						value: 'Dollar To Other Currencies',
						action: 'Dollar To Other Currencies',
						description: 'Convert Dollar to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=USD`,
							},
						},
					},	
					{
						name: 'Convert JPY to Other Currencies',
						value: 'Convert JPY to Other Currencies',
						action: 'Convert JPY to Other Currencies',
						description: 'Convert Japanese Yen (JPY) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=JPY`,
							},
						},
					},	
					{
						name: 'Convert BGN to Other Currencies',
						value: 'Convert BGN to Other Currencies',
						action: 'Convert BGN to Other Currencies',
						description: 'Convert Bulgarian Lev (BGN) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=BGN`,
							},
						},
					},
					{
						name: 'Convert CZK to Other Currencies',
						value: 'Convert CZK to Other Currencies',
						action: 'Convert CZK to Other Currencies',
						description: 'Convert Czech Republic Koruna (CZK) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,DKK,GBP,HUF,PLN,RON,SEK,CHF&base_currency=CZK`,
							},
						},
					},
					{
						name: 'Convert DKK to Other Currencies',
						value: 'Convert DKK to Other Currencies',
						action: 'Convert DKK to Other Currencies',
						description: 'Convert Danish Krone (DKK) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,GBP,HUF,PLN,RON,SEK,CHF&base_currency=DKK`,
							},
						},
					},
					{
						name: 'Convert GBP to Other Currencies',
						value: 'Convert GBP to Other Currencies',
						action: 'Convert GBP to Other Currencies',
						description: 'Convert British Pound Sterling (GBP) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,HUF,PLN,RON,SEK,CHF&base_currency=GBP`,
							},
						},
					},
					{
						name: 'Convert HUF to Other Currencies',
						value: 'Convert HUF to Other Currencies',
						action: 'Convert HUF to Other Currencies',
						description: 'Convert Hungarian Forint (HUF) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,PLN,RON,SEK,CHF&base_currency=HUF`,
							},
						},
					},
					{
						name: 'Convert PLN to Other Currencies',
						value: 'Convert PLN to Other Currencies',
						action: 'Convert PLN to Other Currencies',
						description: 'Convert Polish Zloty (PLN) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,RON,SEK,CHF&base_currency=PLN`,
							},
						},
					},
					{
						name: 'Convert RON to Other Currencies',
						value: 'Convert RON to Other Currencies',
						action: 'Convert RON to Other Currencies',
						description: 'Convert Romanian Leu (RON) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,SEK,CHF&base_currency=RON`,
							},
						},
					},
					{
						name: 'Convert SEK to Other Currencies',
						value: 'Convert SEK to Other Currencies',
						action: 'Convert SEK to Other Currencies',
						description: 'Convert Swedish Krona (SEK) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,CHF&base_currency=SEK`,
							},
						},
					},
					{
						name: 'Convert CHF to Other Currencies',
						value: 'Convert CHF to Other Currencies',
						action: 'Convert CHF to Other Currencies',
						description: 'Convert Swiss Franc (CHF) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK&base_currency=CHF`,
							},
						},
					},
					{
						name: 'Convert ISK to Other Currencies',
						value: 'Convert ISK to Other Currencies',
						action: 'Convert ISK to Other Currencies',
						description: 'Convert Icelandic Króna (ISK) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=ISK`,
							},
						},
					},
					{
						name: 'Convert NOK to Other Currencies',
						value: 'Convert NOK to Other Currencies',
						action: 'Convert NOK to Other Currencies',
						description: 'Convert Norwegian Krone (NOK) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=NOK`,
							},
						},
					},
					{
						name: 'Convert HRK to Other Currencies',
						value: 'Convert HRK to Other Currencies',
						action: 'Convert HRK to Other Currencies',
						description: 'Convert Croatian Kuna (HRK) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=HRK`,
							},
						},
					},
					{
						name: 'Convert RUB to Other Currencies',
						value: 'Convert RUB to Other Currencies',
						action: 'Convert RUB to Other Currencies',
						description: 'Convert Russian Ruble (RUB) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=RUB`,
							},
						},
					},
					{
						name: 'Convert TRY to Other Currencies',
						value: 'Convert TRY to Other Currencies',
						action: 'Convert TRY to Other Currencies',
						description: 'Convert Turkish Lira (TRY) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=TRY`,
							},
						},
					},
					{
						name: 'Convert AUD to Other Currencies',
						value: 'Convert AUD to Other Currencies',
						action: 'Convert AUD to Other Currencies',
						description: 'Convert Australian Dollar (AUD) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=AUD`,
							},
						},
					},
					{
						name: 'Convert BRL to Other Currencies',
						value: 'Convert BRL to Other Currencies',
						action: 'Convert BRL to Other Currencies',
						description: 'Convert Brazilian Real (BRL) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,CAD,CNY,HKD, IDR, ILS, INR, KRW, MXN, MYR, NZD, PHP, SGD, THB, ZAR&base_currency=BRL`,
							},
						},
					},
					{
						name: 'Convert CAD to Other Currencies',
						value: 'Convert CAD to Other Currencies',
						action: 'Convert CAD to Other Currencies',
						description: 'Convert Canadian Dollar (CAD) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CNY,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=CAD`,
							},
						},
					},
					{
						name: 'Convert CNY to Other Currencies',
						value: 'Convert CNY to Other Currencies',
						action: 'Convert CNY to Other Currencies',
						description: 'Convert Chinese Yuan (CNY) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,HKD,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=CNY`,
							},
						},
					},
					{
						name: 'Convert HKD to Other Currencies',
						value: 'Convert HKD to Other Currencies',
						action: 'Convert HKD to Other Currencies',
						description: 'Convert Hong Kong Dollar (HKD) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,IDR,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=HKD`,
							},
						},
					},
					{
						name: 'Convert IDR to Other Currencies',
						value: 'Convert IDR to Other Currencies',
						action: 'Convert IDR to Other Currencies',
						description: 'Convert Indonesian Rupiah (IDR) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=IDR`,
							},
						},
					},
					{
						name: 'Convert ILS to Other Currencies',
						value: 'Convert ILS to Other Currencies',
						action: 'Convert ILS to Other Currencies',
						description: 'Convert Israeli New Sheqel (ILS) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=ILS`,
							},
						},
					},
					{
						name: 'Convert INR to Other Currencies',
						value: 'Convert INR to Other Currencies',
						action: 'Convert INR to Other Currencies',
						description: 'Convert Indian Rupee (INR) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,KRW,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=INR`,
							},
						},
					},
					{
						name: 'Convert KRW to Other Currencies',
						value: 'Convert KRW to Other Currencies',
						action: 'Convert KRW to Other Currencies',
						description: 'Convert South Korean Won (KRW) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,MXN,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=KRW`,
							},
						},
					},
					{
						name: 'Convert MXN to Other Currencies',
						value: 'Convert MXN to Other Currencies',
						action: 'Convert MXN to Other Currencies',
						description: 'Convert Mexican Peso (MXN) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MYR,NZD,PHP,SGD,THB,ZAR&base_currency=MXN`,
							},
						},
					},
					{
						name: 'Convert MYR to Other Currencies',
						value: 'Convert MYR to Other Currencies',
						action: 'Convert MYR to Other Currencies',
						description: 'Convert Malaysian Ringgit (MYR) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,IDR,ILS,INR,KRW,MXN,NZD,PHP,SGD,THB,ZAR&base_currency=MYR`,
							},
						},
					},
					{
						name: 'Convert NZD to Other Currencies',
						value: 'Convert NZD to Other Currencies',
						action: 'Convert NZD to Other Currencies',
						description: 'Convert New Zealand Dollar (NZD) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,ILS,INR,KRW,MXN,MYR,PHP,SGD,THB,ZAR&base_currency=NZD`,
							},
						},
					},
					{
						name: 'Convert PHP to Other Currencies',
						value: 'Convert PHP to Other Currencies',
						action: 'Convert PHP to Other Currencies',
						description: 'Convert Philippine Peso (PHP) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,ILS,INR,KRW,MXN,MYR,NZD,SGD,THB,ZAR&base_currency=PHP`,
							},
						},
					},
					{
						name: 'Convert SGD to Other Currencies',
						value: 'Convert SGD to Other Currencies',
						action: 'Convert SGD to Other Currencies',
						description: 'Convert Singapore Dollar (SGD) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,ILS,INR,KRW,MXN,MYR,NZD,PHP,THB,ZAR&base_currency=SGD`,
							},
						},
					},
					{
						name: 'Convert THB to Other Currencies',
						value: 'Convert THB to Other Currencies',
						action: 'Convert THB to Other Currencies',
						description: 'Convert Thai Baht (THB) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,ZAR&base_currency=THB`,
							},
						},
					},
					{
						name: 'Convert ZAR to Other Currencies',
						value: 'Convert ZAR to Other Currencies',
						action: 'Convert ZAR to Other Currencies',
						description: 'Convert South African Rand (ZAR) to other currencies',
						routing: {
							request: {
								method: 'GET',
								url: `?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=EUR,USD,JPY,BGN,CZK,DKK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,BRL,CAD,CNY,HKD,ILS,INR,KRW,MXN,MYR,NZD,PHP,SGD,THB&base_currency=ZAR`,
							},
						},
					}							
				],				
                default: 'euro',
            },
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Currency Transfer',
                        value: 'CurrencyTransfer',
                    }
                ],
                default: 'CurrencyTransfer',
            },
        ],
    };
}