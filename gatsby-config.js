module.exports = {
  siteMetadata: {
	title: 'Design+Code 3',
	description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
	keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '7b4vblpbk8lj',
        accessToken: 'b7248228f46d551d533195ec914b0c5bf9e95a40f7678bff4bd701f8519e1ecd'
      }
    }
  ],
}