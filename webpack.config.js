const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  entry: './src/app/js/elbento.js',
  output: {
    filename: 'js/elbento.bundle.js',
    path: path.resolve(__dirname, 'src/app')
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
            	'outputPath': 'images/',
            	'useRelativePath': true,
            	publicPath: '/apps/elbento/images/'
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
            	'outputPath': 'fonts/',
            	'useRelativePath': true,
				publicPath: '/apps/elbento/fonts/'
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
    new ExtractTextPlugin("css/elbento.bundle.css"),
    new GoogleFontsPlugin({
		fonts: [
			{ family: "Roboto" }
		],
		path: 'fonts/',
		filename: 'css/fonts.css'
	})
  ]
};
