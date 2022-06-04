module.exports = ({env}) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env('CZ5B6LHV7QFCZ7M4BHK2'),
        secret: env('30hzo190JqH+QTZfau4A3S+NipOtUPoTxMr6JdXC0c8'),
        endpoint: env('DO_SPACE_ENDPOINT'),
        space: env('DO_SPACE_BUCKET'),
        directory: env('DO_SPACE_DIRECTORY'),
        cdn: env('DO_SPACE_CDN'),
      }
    },
  },
  // ...
})
