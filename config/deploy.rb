require "bundler/capistrano"

set :default_environment, {
  'PATH' => "$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH"
}

server "198.211.97.198", :web, :app, :db, primary: true

set :application, "social-reviewing"
set :user, "root"
set :deploy_to, "/var/www/#{application}"
set :deploy_via, :remote_cache
set :use_sudo, false
set :rails_env, "production"
set :bundle_cmd, "bundle --without development test asset"

set :scm, :none
set :repository, "."
set :deploy_via, :copy

default_run_options[:pty] = true
ssh_options[:forward_agent] = true

after "deploy", "deploy:cleanup" # keep only the last 5 releases

namespace :deploy do
  %w[start stop restart].each do |command|
    desc "#{command} unicorn server"
    task command, roles: :app, except: {no_release: true} do
      run "#{release_path}/config/unicorn_init.sh #{command}"
    end
  end

  task :update_code, roles: :app do
    run "if [ -d #{current_path} ]; then cp -r #{current_path} #{release_path}; fi"
    puts `rsync -avz -e ssh "./" "#{user}@198.211.97.198:#{release_path}" --exclude ".git" --exclude "log" --exclude "docs" --exclude "tags" --exclude "tmp" --delete-after -F --group=root --owner=root   --chmod=a+rwx,g+rwx,o+r`

    run <<-CMD
      rm -rf #{release_path}/log &&
      ln -nfs #{shared_path}/log #{release_path}/log
    CMD
  end

   namespace :assets do
     task :precompile, roles: :web, except: { no_release: true } do
       logger.info "Skipping asset pre-compilation"
     end
   end
end

