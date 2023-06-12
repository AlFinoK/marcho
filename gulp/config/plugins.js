import replace from 'gulp-replace'
import notify from 'gulp-notify'
import browsersync from 'browser-sync'
import newer from 'gulp-newer'
import ifPlugin from 'gulp-if'

const concatPathAndFileName = (path, files) =>
  files.map((file) => `${path}/${file}`)

export const plugins = {
  replace: replace,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
  concat: concatPathAndFileName,
}
