abort('Please run this using `bundle exec rake`') unless ENV["BUNDLE_BIN_PATH"]
require 'html-proofer'

desc "Public"
task :prod_test do
  options = {
    :disable_external => true,
    :check_html => true,
    :check_img_http => true,
    :check_opengraph => true,
    :enforce_https => true,
  }
  begin
    HTMLProofer.check_directory("./public", options).run
  rescue => msg
    puts "#{msg}"
  end
end

desc "Beta"
task :dev_test do
  options = {
    :disable_external => true,
    :check_html => true,
    :check_img_http => true,
    :check_opengraph => true,
    :enforce_https => true,
  }
  begin
    HTMLProofer.check_directory("./public_beta", options).run
  rescue => msg
    puts "#{msg}"
  end
end

task :default => [:prod_test]