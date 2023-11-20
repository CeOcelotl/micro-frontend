const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mmf', //該名稱用於 remote 的名字

  exposes: {//指定要暴露的module，其他的container能夠遠程載入
    //定義良好的 remote 的粗粒度(組件)，並暴露
    './AppComponent': './src/app/app.component.ts',
  },

  shared: {//指定要共享的依賴，不管是作為remote或是host
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
