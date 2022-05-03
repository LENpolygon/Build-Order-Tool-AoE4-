module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/editor.html',
        permanent: true,
      },
    ]
  },


}