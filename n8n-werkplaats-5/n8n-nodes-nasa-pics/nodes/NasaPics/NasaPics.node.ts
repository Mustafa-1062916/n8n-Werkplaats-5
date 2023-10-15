import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class NasaPics implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Exchange API',
        name: 'Exchange API',
        icon: 'file:Exchangeapi.png',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Get data from NASAs API',
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
            baseURL: 'https://api.freecurrencyapi.com/v1/latest', // https://api.nasa.gov | https://api.freecurrencyapi.com/v1/latest
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
						resource: [
							'CurrencyTransfer',
						],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get the currency',
						description: 'Get the currency',
						routing: {
							request: {
								method: 'GET',
								url: '?apikey=fca_live_wMvdpym3koDpsQjUvNTF6cZhz8qNCdSUOvnpd1EF&currencies=USD&base_currency=EUR',
							},
						},
					},
				],
				default: 'get',
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
					},
				],
				default: 'CurrencyTransfer',
			},
		]
	};
}