namespace :spec do
  desc "Run jasmine specs"
  task jasmine: :environment do
    system('gulp test')
  end
end
