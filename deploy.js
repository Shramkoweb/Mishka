var ghpages = require('gh-pages'),
       path = require('path');

gulp.task('deploy', function(cb) {
  ghpages.publish(path.join(process.cwd(), 'dist'), cb);
});
