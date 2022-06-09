import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1654753676979_5515',
    egg: {
      port: 7007,
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
