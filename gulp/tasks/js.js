import webpack from 'webpack-stream'
import { webpackConfig } from '../../webpack.config.js'

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })

    .pipe(webpack({ config: webpackConfig(app.isDev) }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}
