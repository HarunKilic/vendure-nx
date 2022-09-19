import { PluginCommonModule, VendurePlugin } from '@vendure/core';

@VendurePlugin({
  imports: [PluginCommonModule],
  configuration: (config) => {
    config.customFields.Product.push({
      type: 'string',
      name: 'catImageUrl',
    });

    return config;
  },
})
export class RandomCatPlugin {}
