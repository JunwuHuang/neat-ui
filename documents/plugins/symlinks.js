const symlinks = () => ({
  name: 'symlinks-docusaurus-plugin',
  configureWebpack: () => ({
    resolve: {
      symlinks: false
    }
  })
})

module.exports = symlinks
