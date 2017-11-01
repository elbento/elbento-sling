const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  entry: './src/main/resources/SLING-INF/content/js/elbentocom.js',
  output: {
    filename: 'resources/main/SLING-INF/content/js/elbentocom.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
	  {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'resources/main/SLING-INF/content/images/',
            	'useRelativePath': true,
            	publicPath: '/apps/elbentocom/images/'
			}
          }
	  	]
      },
	  {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'resources/main/SLING-INF/content/fonts/',
            	'useRelativePath': true,
				publicPath: '/apps/elbentocom/fonts/'
			}
          }
        ]
      },
	  {
        test: require.resolve('jquery'),
        use: [
        	{
			  loader: 'expose-loader',
			  options: 'jQuery'
		    },
		    {
				loader: 'expose-loader',
				options: '$'
			}
		]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("resources/main/SLING-INF/content/css/elbentocom.bundle.css"),
    new GoogleFontsPlugin({
		fonts: [
			{ family: "Roboto" }
		],
		path: 'resources/main/SLING-INF/content/fonts/',
		filename: 'resources/main/SLING-INF/content/css/fonts.css'
	})
  ]
};
